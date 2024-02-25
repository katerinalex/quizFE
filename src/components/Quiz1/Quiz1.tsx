import React from 'react';
import { Header } from '../Header/index.tsx';
import { Link } from 'react-router-dom';

export const Quiz1:React.FC = () => {
  return (
    <div className="page">
      <Header index={1} isPrevButton={false} />
      <h1 className="page__title">What is your preferred language?</h1>
      <h2 className="page__sub-title">Choose language</h2>

      <div className="page__options">
        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
        >
          English
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
        >
          French
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
        >
          German
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
        >
          Spanish
        </Link>
      </div>
    </div>
  );
}
