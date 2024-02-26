import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/index.tsx';
import { DataContextType, DataContext } from '../../DataContext.tsx';
import classNames from 'classnames';

export const Quiz4:React.FC = () => {
  const [hates, setHates] = useState<string[]>([]);
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
      title: 'What do you hate the most in a book?',
      type: 'multiple-select',
      answer: hates.join(', '),
    }]);
  };

  return (
    <div className="page">
      <Header index={4} isPrevButton={true} />
      <h1 className="page__title">What do you <span className="page__title--strong">hate</span> the most in a book?</h1>

      <div className="page__options">
        <Link
          className={classNames(
            'page__options__item',
            'page__options__item--multiple-select',
            {'page__options__item--choosen': hates.includes('Lack of logic')}
          )}
          to={`../${5}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('Lack of logic')
          }}
        >
          <span>Lack of logic</span>
          <div 
            className={classNames(
              'checkbox',
              {'checkbox--choosen': hates.includes('Lack of logic')}
            )}
          >
          </div>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'page__options__item--multiple-select',
            {'page__options__item--choosen': hates.includes('Lack of logic')}
          )}
          to={`../${5}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('A slow speed')
          }}
        >
          <span>A slow speed</span>
          <div 
            className={classNames(
              'checkbox',
              {'checkbox--choosen': hates.includes('A slow speed')}
            )}
          >
          </div>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'page__options__item--multiple-select',
            {'page__options__item--choosen': hates.includes('Lack of logic')}
          )}
          to={`../${5}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('Lack of humor')
          }}
        >
          <span>Lack of humor</span>
          <div 
            className={classNames(
              'checkbox',
              {'checkbox--choosen': hates.includes('Lack of humor')}
            )}
          >
          </div>
        </Link>

        <Link
          className={classNames(
            'page__options__item',
            'page__options__item--multiple-select',
            {'page__options__item--choosen': hates.includes('Lack of logic')}
          )}
          to={`../${5}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick('Way too generic ending')
          }}
        >
          <span>Way too generic ending</span>
          <div 
            className={classNames(
              'checkbox',
              {'checkbox--choosen': hates.includes('Way too generic ending')}
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
        Next
      </Link>
    </div>
  );
}
