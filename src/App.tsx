import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Quiz1 } from './components/Quiz1';
import { Quiz2 } from './components/Quiz2';
import { Quiz3 } from './components/Quiz3';
import { Quiz4 } from './components/Quiz4';
import { Quiz5 } from './components/Quiz5';
import { QuizLoading } from './components/QuizLoading';
import { QuizEmail } from './components/QuizEmail';
import { QuizResult } from './components/QuizResult';
import { useLocalDataStorage, useLocalLangStorage } from './useLocalStorage'
import { DataContext } from './DataContext';
import { LangContext } from './LangContext';

import './App.scss';

export const App = () => {
  const [data, setData] = useLocalDataStorage('data', []);
  const [lang, setLang] = useLocalLangStorage('lang', 'English');
  return (
    <div className="App">
      <LangContext.Provider value={{ lang, setLang }}>
        <DataContext.Provider value={{ data, setData }}>
          <Routes>
            <Route path="quiz">
              <Route index element={<Navigate to="quiz/1" replace />} />
              <Route path="1" element={<Quiz1 />} />
              <Route path="2" element={<Quiz2 />} />
              <Route path="3" element={<Quiz3 />} />
              <Route path="4" element={<Quiz4 />} />
              <Route path="5" element={<Quiz5 />} />
              <Route path="loading" element={<QuizLoading />} />
            </Route>
            <Route path="email" element={<QuizEmail />} />
            <Route path="result" element={<QuizResult />} />
            <Route
              path="/"
              element={<Navigate to="quiz/1" replace />}
            />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<h1 className="title">Page not found</h1>} />
          </Routes>
        </DataContext.Provider>
      </LangContext.Provider>
    </div>
  );
}
