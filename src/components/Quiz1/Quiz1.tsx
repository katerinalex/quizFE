import React, { useContext } from 'react';
import { Header } from '../Header/index.tsx';
import { Link } from 'react-router-dom';
import { DataContextType, DataContext } from '../../DataContext.tsx';

export const Quiz1:React.FC = () => {
  const { data, setData } = useContext<DataContextType>(DataContext);
  const handleClick = (lang: string) => {
    setData([...data, {
      order: 1,
      title: 'What is your preferred language?',
      type: 'single-select',
      answer: lang,
    }]);
  };
  return (
    <div className="page">
      <Header index={1} isPrevButton={false} />
      <h1 className="page__title">What is your preferred language?</h1>
      <h2 className="page__sub-title">Choose language</h2>

      <div className="page__options">
        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
          onClick={() => handleClick('English')}
        >
          English
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
          onClick={() => handleClick('French')}
        >
          French
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
          onClick={() => handleClick('German')}
        >
          German
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
          onClick={() => handleClick('Spanishh')}
        >
          Spanish
        </Link>
      </div>
    </div>
  );
}
