import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/index.tsx';

export const Quiz3:React.FC = () => {
  return (
    <div className="page">
      <Header index={3} isPrevButton={true} />
      <h1 className="page__title">What is your age?</h1>

      <div className="page__options">
        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
        >
          18-29 years
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
        >
          30-39 years
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
        >
          40-49 years
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
        >
          50+
        </Link>
      </div>
    </div>
  );
}
