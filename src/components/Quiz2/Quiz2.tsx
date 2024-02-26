import React, { useContext } from 'react';
import { Header } from '../Header/index.tsx';
import { Link } from 'react-router-dom';
import { DataContextType, DataContext } from '../../DataContext.tsx';

import female from '../../images/female.png';
import male from '../../images/male.png';
import other from '../../images/other.png';

export const Quiz2:React.FC = () => {
  const { data, setData } = useContext<DataContextType>(DataContext);
  const handleClick = (sex: string) => {
    setData([...data, {
      order: 2,
      title: 'What gender do you identify with?',
      type: 'single-select-image',
      answer: sex,
    }]);
  };
  return (
    <div className="page">
      <Header index={2} isPrevButton={false} />
      <h1 className="page__title">What gender do you identify with?</h1>
      <h2 className="page__sub-title">Please share how do you identify yourself</h2>

      <div className="page__options page__options--single-select-image">
        <Link
          className='page__options__item page__options__item--single-select-image'
          to={`../${3}`}
          onClick={() => handleClick('Female')}
        >
          <img src={female} alt="female" />
          <div className="">Female</div>
        </Link>

        <Link
          className='page__options__item page__options__item--single-select-image'
          to={`../${3}`}
          onClick={() => handleClick('Male')}
        >
          <img src={male} alt="male" />
          <div className="">Male</div>
        </Link>

        <Link
          className='page__options__item page__options__item--single-select-image'
          to={`../${3}`}
          onClick={() => handleClick('Other')}
        >
          <img src={other} alt="other" />
          <div className="">Other</div>
        </Link>
      </div>
    </div>
  );
}