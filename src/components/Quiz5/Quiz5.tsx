import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/index.tsx';
import { DataContextType, DataContext } from '../../DataContext.tsx';
import classNames from 'classnames';

import wolf from '../../images/wolf.png';
import love from '../../images/love.png';
import dance from '../../images/dance.png';
import women from '../../images/women.png';
import crown from '../../images/crown.png';
import hat from '../../images/hat.png';
import money from '../../images/money.png';

export const Quiz5:React.FC = () => {
  const [topics, setTopics] = useState<string[]>([]);
  const handleClick = (topic: string) => {
    if (topics.includes(topic)) {
      setTopics(prev => prev.filter(el => el.localeCompare(topic) !== 0));
    } else if (topics.length >= 3) {
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

  useEffect(() => {}, []);
  return (
    <div className="page">
      <Header index={5} isPrevButton={true} />
      <h1 className="page__title">What are your favorite topics?</h1>
      <h2 className="page__sub-title">Choose up to 3 topics you like</h2>

      <div className="page__options grid">
        <Link
          className={classNames(
            'page__options__item',
            'grid__row--1-3',
            'grid__column--1-3',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes('1')}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('1')
          }}
        >
          <img src={wolf} alt="wolf" />
          <span>1</span>
        </Link>
  
        <Link
          className={classNames(
            'page__options__item',
            'grid__row--4-6',
            'grid__column--1-3',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes('2')}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('2')
          }}
        >
          <img src={love} alt="love" />
          <span>2</span>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'grid__row--2-4',
            'grid__column--4-6',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes('3')}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('3')
          }}
        >
          <img src={dance} alt="dance" />
          <span>3</span>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'grid__row--5-7',
            'grid__column--4-6',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes('4')}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('4')
          }}
        >
          <img src={women} alt="women" />
          <span>4</span>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'grid__row--1-3',
            'grid__column--7-9',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes('5')}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('5')
          }}
        >
          <img src={crown} alt="crown" />
          <span>5</span>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'grid__row--4-6',
            'grid__column--7-9',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes('6')}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('6')
          }}
        >
          <img src={hat} alt="hat" />
          <span>6</span>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'grid__row--2-4',
            'grid__column--10-12',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes('7')}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('7')
          }}
        >
          <img src={money} alt="wolf" />
          <span>7</span>
        </Link>
      </div>

      <Link
        className={classNames(
          'page__button',
          {'page__button--disabled': topics.length === 0}
        )}
        to={`../../email`}
        onClick={handleNextClick}
      >
        Next
      </Link>
    </div>
  );
};
