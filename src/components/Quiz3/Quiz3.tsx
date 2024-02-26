 import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/index.tsx';
import { DataContextType, DataContext } from '../../DataContext.tsx';
import { LangContext, LangContextType } from '../../LangContext.tsx';
import { configuration } from '../../configuration.tsx';

export const Quiz3:React.FC = () => {
  const { data, setData } = useContext<DataContextType>(DataContext);
  const { lang } = useContext<LangContextType>(LangContext);
  const langData = configuration[lang];
  const quiz3 = langData.quiz3;
  const { title, options } = quiz3;
  const handleClick = (age: string) => {
    setData([...data, {
      order: 3,
      title,
      type: 'single-select',
      answer: age,
    }]);
  };
  return (
    <div className="page">
      <Header index={3} isPrevButton={true} />
      <h1 className="page__title">{title}</h1>

      <div className="page__options">
        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
          onClick={() => handleClick(options[0])}
        >
          {options[0]}
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
          onClick={() => handleClick(options[1])}
        >
          {options[1]}
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
          onClick={() => handleClick(options[2])}
        >
          {options[2]}
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${4}`}
          onClick={() => handleClick(options[3])}
        >
          {options[3]}
        </Link>
      </div>
    </div>
  );
}
