import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/index.tsx';

export const Quiz5:React.FC = () => {
  const handleClick = (e: React. MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };
  return (
    <div className="page">
      <Header index={5} isPrevButton={true} />
      <h1 className="page__title">What are your favorite topics?</h1>

      <div className="page__options grid">
        <Link
          className='page__options__item grid__row--1-3 grid__column--1-3 page__options__item--bubble page__options__item--choosen'
          to={`../loading`}
          onClick={handleClick}
        >
          1
        </Link>
  
        <Link
          className='page__options__item grid__row--4-6 grid__column--1-3 page__options__item--bubble'
          to={`../loading`}
          onClick={handleClick}
        >
          2
        </Link>

        <Link
          className='page__options__item grid__row--2-4 grid__column--4-6 page__options__item--bubble'
          to={`../loading`}
          onClick={handleClick}
        >
          3
        </Link>

        <Link
          className='page__options__item grid__row--5-7 grid__column--4-6 page__options__item--bubble'
          to={`../loading`}
          onClick={handleClick}
        >
          4
        </Link>

        <Link
          className='page__options__item grid__row--1-3 grid__column--7-9 page__options__item--bubble'
          to={`../loading`}
          onClick={handleClick}
        >
          5
        </Link>

        <Link
          className='page__options__item grid__row--4-6 grid__column--7-9 page__options__item--bubble'
          to={`../loading`}
          onClick={handleClick}
        >
          6
        </Link>

        <Link
          className='page__options__item grid__row--2-4 grid__column--10-12 page__options__item--bubble'
          to={`../loading`}
          onClick={handleClick}
        >
          7
        </Link>
      </div>

      <Link
        className='page__button page__button--disabled'
        to={`../email`}
      >
        Next
      </Link>
    </div>
  );
};
