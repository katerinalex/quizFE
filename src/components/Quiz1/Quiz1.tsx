import React, { useContext } from 'react';
import { Header } from '../Header';
import { Link } from 'react-router-dom';
import { DataContextType, DataContext } from '../../DataContext';
import { LangContext, LangContextType } from '../../LangContext';
import { Lang } from '../../types/Lang';
import { configuration } from '../../configuration';

export const Quiz1:React.FC = () => {
  const { data, setData } = useContext<DataContextType>(DataContext);
  const { lang, setLang } = useContext<LangContextType>(LangContext);
  const langData = configuration[lang];
  const quiz1 = langData.quiz1;
  const { title, subTitle, options } = quiz1;

  const handleClick = (language: Lang) => {
    if (language.localeCompare(lang) !== 0) {
      setLang(language);
    }
    setData([...data, {
      order: 1,
      title,
      type: 'single-select',
      answer: language,
    }]);
  };

  return (
    <div className="page">
      <Header index={1} isPrevButton={false} />
      <h1 className="page__title">{title}</h1>
      <h2 className="page__sub-title">{subTitle}</h2>

      <div className="page__options">
        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
          onClick={() => handleClick(options[0])}
        >
          {options[0]}
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
          onClick={() => handleClick(options[1])}
        >
          {options[1]}
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
          onClick={() => handleClick(options[2])}
        >
          {options[2]}
        </Link>

        <Link
          className='page__options__item page__options__item--single-select'
          to={`../${2}`}
          onClick={() => handleClick(options[3])}
        >
          {options[3]}
        </Link>
      </div>
    </div>
  );
}
