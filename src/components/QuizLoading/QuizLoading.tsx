import React, { useContext, useEffect, useState } from 'react';

import './QuizLoading.scss'
import { LangContext, LangContextType } from '../../LangContext.tsx';
import { configuration } from '../../configuration.tsx';

export const QuizLoading:React.FC = () => {
  const [persent, setPersent] = useState(0);
  const { lang } = useContext<LangContextType>(LangContext);
  const langData = configuration[lang];
  const quizLoading = langData.quizLoading;
  const { title } = quizLoading;
  useEffect(() => {
    setTimeout(() => {
      setPersent(prev => prev + 5)
    }, 250)
  });
  return (
    <div className="page">
        <div id="container">
          <div id="circle-loader-wrap">
            <div className="left-wrap">
              <div className="loader"></div>	
            </div>
            <div className="right-wrap">
              <div className="loader"></div>
            </div>
          </div>
          <div className="percents" id="percents">{`${persent}%`}</div>
        </div>
        <p className="text">{title}</p>
    </div>
  );
}
