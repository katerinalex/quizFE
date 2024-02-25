 import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/index.tsx';
import { DataContextType, DataContext } from '../../DataContext.tsx';

export const Quiz3:React.FC = () => {
  const { data, setData } = useContext<DataContextType>(DataContext);
  const handleClick = (age: string) => {
    setData([...data, {
      order: 3,
      title: 'What is your age?',
      type: 'single-select',
      answer: age,
    }]);
  };
  return (
    <div className="page">
      <Header index={3} isPrevButton={true} />
      <h1 className="page__title">What is your age?</h1>

      <div className="page__options">
        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
          onClick={() => handleClick('18-29 years')}
        >
          18-29 years
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
          onClick={() => handleClick('30-39 years')}
        >
          30-39 years
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
          onClick={() => handleClick('40-49 years')}
        >
          40-49 years
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
          onClick={() => handleClick('50+')}
        >
          50+
        </Link>
      </div>
    </div>
  );
}
