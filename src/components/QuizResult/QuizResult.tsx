import React, { useContext } from 'react';
import { DataContextType, DataContext } from '../../DataContext';
import checkmark from '../../images/checkmark.png'
import { Link } from 'react-router-dom';
import { CSVLink } from "react-csv";
import download from '../../images/download.svg'
import { LangContext, LangContextType } from '../../LangContext';
import { configuration } from '../../configuration';

export const QuizResult:React.FC = () => {
  const { data, setData  } = useContext<DataContextType>(DataContext);

  const { lang } = useContext<LangContextType>(LangContext);
  const langData = configuration[lang];
  const quizResult = langData.quizResult;
  const { title: resTitle, subTitle, text, button } = quizResult;

  const handleNextClick = () => {
    setData([]);
  };

  const csvData = [
    ["order", "title", "type", "answer"],
    ...data.map(({ order, title, type, answer }) => [
      order,
      title,
      type,
      answer,
    ])
  ];
  return (
    <div className="page page--res">
      <h1 className="page__title page__title--res">{resTitle}</h1>
      <h2 className="page__sub-title page__sub-title--res">{subTitle}</h2>
      <img src={checkmark} alt="checkmark" />
      <CSVLink className="download downloadbtn" filename="my-file.csv" data={csvData}>
        <img className="download__img" src={download} alt="download" />
        <span className="download__text">{text}</span>
      </CSVLink>

      <Link
        className='page__button'
        to={`../quiz/1`}
        onClick={handleNextClick}
      >
        {button}
      </Link>
    </div>
  );
}
