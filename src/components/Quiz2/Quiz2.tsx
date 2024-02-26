import React, { useContext } from 'react';
import { Header } from '../Header/index.tsx';
import { Link } from 'react-router-dom';
import { DataContextType, DataContext } from '../../DataContext.tsx';

import female from '../../images/female.png';
import male from '../../images/male.png';
import other from '../../images/other.png';
import { LangContext, LangContextType } from '../../LangContext.tsx';
import { configuration } from '../../configuration.tsx';

export const Quiz2:React.FC = () => {
  const { data, setData } = useContext<DataContextType>(DataContext);
  const { lang } = useContext<LangContextType>(LangContext);
  const langData = configuration[lang];
  const quiz2 = langData.quiz2;
  const { title, subTitle, options } = quiz2;

  const handleClick = (sex: string) => {
    setData([...data, {
      order: 2,
      title,
      type: 'single-select-image',
      answer: sex,
    }]);
  };

  return (
    <div className="page">
      <Header index={2} isPrevButton={false} />
      <h1 className="page__title">{title}</h1>
      <h2 className="page__sub-title">{subTitle}</h2>

      <div className="page__options page__options--single-select-image">
        <Link
          className='page__options__item page__options__item--single-select-image'
          to={`../${3}`}
          onClick={() => handleClick(options[0])}
        >
          <img src={female} alt="female" />
          <div className="">{options[0]}</div>
        </Link>

        <Link
          className='page__options__item page__options__item--single-select-image'
          to={`../${3}`}
          onClick={() => handleClick(options[1])}
        >
          <img src={male} alt="male" />
          <div className="">{options[1]}</div>
        </Link>

        <Link
          className='page__options__item page__options__item--single-select-image'
          to={`../${3}`}
          onClick={() => handleClick(options[2])}
        >
          <img src={other} alt="other" />
          <div className="">{options[2]}</div>
        </Link>
      </div>
    </div>
  );
}
