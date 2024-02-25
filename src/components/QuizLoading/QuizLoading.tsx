import React, { useEffect, useState } from 'react';

import './QuizLoading.scss'

export const QuizLoading:React.FC = () => {
  const [persent, setPersent] = useState(0);
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
        <p className="text">Finding collections for you...</p>
    </div>
  );
}
