import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header';
import { DataContextType, DataContext } from '../../DataContext';
import classNames from 'classnames';

import wolf from '../../images/wolf.png';
import love from '../../images/love.png';
import dance from '../../images/dance.png';
import women from '../../images/women.png';
import crown from '../../images/crown.png';
import hat from '../../images/hat.png';
import money from '../../images/money.png';
import { LangContext, LangContextType } from '../../LangContext';
import { configuration } from '../../configuration';

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
 
  const { lang } = useContext<LangContextType>(LangContext);
  const langData = configuration[lang];
  const quiz5 = langData.quiz5;
  const { title, subTitle, options, button } = quiz5;
  let bubbleOptions = ['', '', '', ''];

  const ageData = data.find(el => el.order === 3);

  switch (ageData?.answer) {
    case '18-29 years':
      bubbleOptions = options.y_18_29;
      break;
    
    case '30-39 years':
      bubbleOptions = options.y_30_39;
      break;

    case '40-49 years':
      bubbleOptions = options.y_40_49;
      break;
  
    default:
      bubbleOptions = options.y_50;
      break;
  } 

  const handleNextClick = () => {
    setData([...data, {
      order: 5,
      title,
      type: 'bubble',
      answer: topics.join(', '),
    }]);
  };

  useEffect(() => {}, []);
  return (
    <div className="page">
      <Header index={5} isPrevButton={true} />
      <h1 className="page__title">{title}</h1>
      <h2 className="page__sub-title">{subTitle}</h2>

      <div className="page__options grid">
        <Link
          className={classNames(
            'page__options__item',
            'grid__row--1-3',
            'grid__column--1-3',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes(bubbleOptions[0])}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(bubbleOptions[0])
          }}
        >
          <img src={wolf} alt="wolf" />
          <span>{bubbleOptions[0]}</span>
        </Link>
  
        <Link
          className={classNames(
            'page__options__item',
            'grid__row--4-6',
            'grid__column--1-3',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes(bubbleOptions[1])}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(bubbleOptions[1])
          }}
        >
          <img src={love} alt="love" />
          <span>{bubbleOptions[1]}</span>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'grid__row--2-4',
            'grid__column--4-6',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes(bubbleOptions[2])}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(bubbleOptions[2])
          }}
        >
          <img src={dance} alt="dance" />
          <span>{bubbleOptions[2]}</span>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'grid__row--5-7',
            'grid__column--4-6',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes(bubbleOptions[3])}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(bubbleOptions[3])
          }}
        >
          <img src={women} alt="women" />
          <span>{bubbleOptions[3]}</span>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'grid__row--1-3',
            'grid__column--7-9',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes(bubbleOptions[4])}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(bubbleOptions[4])
          }}
        >
          <img src={crown} alt="crown" />
          <span>{bubbleOptions[4]}</span>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'grid__row--4-6',
            'grid__column--7-9',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes(bubbleOptions[5])}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(bubbleOptions[5])
          }}
        >
          <img src={hat} alt="hat" />
          <span>{bubbleOptions[5]}</span>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'grid__row--2-4',
            'grid__column--10-12',
            'page__options__item--bubble',
            {'page__options__item--choosen': topics.includes(bubbleOptions[6])}
          )}
          to={`../loading`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(bubbleOptions[6])
          }}
        >
          <img src={money} alt="money" />
          <span>{bubbleOptions[6]}</span>
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
        {button}
      </Link>
    </div>
  );
};
