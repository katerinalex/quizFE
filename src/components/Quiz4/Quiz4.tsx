import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header';
import { DataContextType, DataContext } from '../../DataContext';
import classNames from 'classnames';
import { LangContext, LangContextType } from '../../LangContext';
import { configuration } from '../../configuration';

export const Quiz4:React.FC = () => {
  const [hates, setHates] = useState<string[]>([]);

  const { lang } = useContext<LangContextType>(LangContext);
  const langData = configuration[lang];
  const quiz4 = langData.quiz4;
  const { title, options, button } = quiz4;
  
  const handleClick = (hate: string) => {
    if (hates.includes(hate)) {
      setHates(prev => prev.filter(el => el.localeCompare(hate) !== 0));
    } else {
      setHates(prev => [...prev, hate]);
    }
  };

  const { data, setData } = useContext<DataContextType>(DataContext);
  const handleNextClick = () => {
    setData([...data, {
      order: 4,
      title: title.join(),
      type: 'multiple-select',
      answer: hates.join(', '),
    }]);
  };

  return (
    <div className="page">
      <Header index={4} isPrevButton={true} />
      <h1 className="page__title">{title[0]}<span className="page__title--strong">{title[1]}</span>{title[2]}</h1>

      <div className="page__options">
        <Link
          className={classNames(
            'page__options__item',
            'page__options__item--multiple-select',
            {'page__options__item--choosen': hates.includes(options[0])}
          )}
          to={`../${5}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(options[0])
          }}
        >
          <span>{options[0]}</span>
          <div 
            className={classNames(
              'checkbox',
              {'checkbox--choosen': hates.includes(options[0])}
            )}
          >
          </div>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'page__options__item--multiple-select',
            {'page__options__item--choosen': hates.includes(options[1])}
          )}
          to={`../${5}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(options[1])
          }}
        >
          <span>{options[1]}</span>
          <div 
            className={classNames(
              'checkbox',
              {'checkbox--choosen': hates.includes(options[1])}
            )}
          >
          </div>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'page__options__item--multiple-select',
            {'page__options__item--choosen': hates.includes(options[2])}
          )}
          to={`../${5}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(options[2])
          }}
        >
          <span>{options[2]}</span>
          <div 
            className={classNames(
              'checkbox',
              {'checkbox--choosen': hates.includes(options[2])}
            )}
          >
          </div>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'page__options__item--multiple-select',
            {'page__options__item--choosen': hates.includes(options[3])}
          )}
          to={`../${5}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(options[3])
          }}
        >
          <span>{options[3]}</span>
          <div 
            className={classNames(
              'checkbox',
              {'checkbox--choosen': hates.includes(options[3])}
            )}
          >
          </div>
        </Link>
      </div>

      <Link
        className={classNames(
          'page__button',
          {'page__button--disabled': hates.length === 0}
        )}
        to={`../${5}`}
        onClick={handleNextClick}
      >
        {button}
      </Link>
    </div>
  );
}
