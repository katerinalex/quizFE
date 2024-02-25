import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/index.tsx';
import { DataContextType, DataContext } from '../../DataContext.tsx';
import classNames from 'classnames';

export const Quiz5:React.FC = () => {
  const [topics, setTopics] = useState<string[]>([]);
  const handleClick = (topic: string) => {
    if (topics.includes(topic)) {
      setTopics(prev => prev.filter(el => el.localeCompare(topic) === 0));
    } else if (topics.length > 3) {
      setTopics(prev => {
        const arr = [...prev];
        arr.shift();

        return [...arr, topic]
      });
    } else {
      setTopics(prev => [...prev, topic]);
    }
  };

  const { data, setData } = useContext<DataContextType>(DataContext);
  const handleNextClick = () => {
    setData([...data, {
      order: 5,
      title: 'What are your favorite topics?',
      type: 'bubble',
      answer: topics.join(', '),
    }]);
  };
  return (
    <div className="page">
      <Header index={5} isPrevButton={true} />
      <h1 className="page__title">What are your favorite topics?</h1>
      <h2 className="page__sub-title">Choose up to 3 topics you like</h2>

      <div className="page__options grid">
        <Link
          className='page__options__item grid__row--1-3 grid__column--1-3 page__options__item--bubble page__options__item--choosen'
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('1')
          }}
        >
          1
        </Link>
  
        <Link
          className='page__options__item grid__row--4-6 grid__column--1-3 page__options__item--bubble'
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('2')
          }}
        >
          2
        </Link>

        <Link
          className='page__options__item grid__row--2-4 grid__column--4-6 page__options__item--bubble'
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('3')
          }}
        >
          3
        </Link>

        <Link
          className='page__options__item grid__row--5-7 grid__column--4-6 page__options__item--bubble'
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('4')
          }}
        >
          4
        </Link>

        <Link
          className='page__options__item grid__row--1-3 grid__column--7-9 page__options__item--bubble'
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('5')
          }}
        >
          5
        </Link>

        <Link
          className='page__options__item grid__row--4-6 grid__column--7-9 page__options__item--bubble'
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('6')
          }}
        >
          6
        </Link>

        <Link
          className='page__options__item grid__row--2-4 grid__column--10-12 page__options__item--bubble'
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('7')
          }}
        >
          7
        </Link>
      </div>

      <Link
        className={classNames(
          'page__button',
          {'page__button--disabled': topics.length === 0}
        )}
        to={`../email`}
        onClick={handleNextClick}
      >
        Next
      </Link>
    </div>
  );
};
