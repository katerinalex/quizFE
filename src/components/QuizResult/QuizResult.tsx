import React from 'react';
import checkmark from '../../images/checkmark.png'
import { Link } from 'react-router-dom';

export const QuizResult:React.FC = () => {
  return (
    <div className="page">
      <h1 className="page__title page__title--res">Thank you</h1>
      <h2 className="page__sub-title page__sub-title--res">for supporting us and passing quiz</h2>
      <img src={checkmark} alt="checkmark" />
      <p className="download">Download my answers</p>

      <Link
        className='page__button page__button--disabled'
        to={`../1`}
      >
        Retake quiz
      </Link>
    </div>
  );
}
