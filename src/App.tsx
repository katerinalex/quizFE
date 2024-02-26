import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Quiz1 } from './components/Quiz1/index.tsx';
import { Quiz2 } from './components/Quiz2/index.tsx';
import { Quiz3 } from './components/Quiz3/index.tsx';
import { Quiz4 } from './components/Quiz4/index.tsx';
import { Quiz5 } from './components/Quiz5/index.tsx';
import { QuizLoading } from './components/QuizLoading/index.tsx';
import { QuizEmail } from './components/QuizEmail/index.tsx';
import { QuizResult } from './components/QuizResult/index.tsx';
import { useLocalDataStorage, useLocalLangStorage } from './useLocalStorage.ts'

import './App.scss';
import { DataContext } from './DataContext.tsx';
import { LangContext } from './LangContext.tsx';

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
