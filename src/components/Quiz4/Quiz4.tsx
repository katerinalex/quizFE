import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/index.tsx';

export const Quiz4:React.FC = () => {
  const handleClick = (e: React. MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <div className="page">
      <Header index={4} isPrevButton={true} />
      <h1 className="page__title">What do you <span className="page__title--strong">hate</span> the most in a book?</h1>

      <div className="page__options">
        <Link
          className='page__options__item page__options__item--multiple-select page__options__item--choosen'
          to={`../${5}`}
          onClick={handleClick}
        >
          <span>Lack of logic</span>
          <div className="checkbox checkbox--choosen"></div>
        </Link>

        <Link
          className='page__options__item page__options__item--multiple-select'
          to={`../${5}`}
          onClick={handleClick}
        >
          <span>A slow speed</span>
          <div className="checkbox"></div>
        </Link>

        <Link
          className='page__options__item page__options__item--multiple-select'
          to={`../${5}`}
          onClick={handleClick}
        >
          <span>Lack of humor</span>
          <div className="checkbox"></div>
        </Link>

        <Link
          className='page__options__item page__options__item--multiple-select'
          to={`../${5}`}
          onClick={handleClick}
        >
          <span>Way too generic ending</span>
          <div className="checkbox"></div>
        </Link>
      </div>

      <Link
        className='page__button page__button--disabled'
        to={`../${5}`}
      >
        Next
      </Link>
    </div>
  );
}
