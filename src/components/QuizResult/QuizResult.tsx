import React, { useContext } from 'react';
import { DataContextType, DataContext } from '../../DataContext.tsx';
import checkmark from '../../images/checkmark.png'
import { Link } from 'react-router-dom';
import { CSVLink } from "react-csv";
import download from '../../images/download.svg'

export const QuizResult:React.FC = () => {
  const { data, setData  } = useContext<DataContextType>(DataContext);

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
      <h1 className="page__title page__title--res">Thank you</h1>
      <h2 className="page__sub-title page__sub-title--res">for supporting us and passing quiz</h2>
      <img src={checkmark} alt="checkmark" />
      <CSVLink className="download downloadbtn" filename="my-file.csv" data={csvData}>
        <img className="download__img" src={download} alt="download" />
        <span className="download__text" >Download my answers</span>
      </CSVLink>

      <Link
        className='page__button'
        to={`../1`}
        onClick={handleNextClick}
      >
        Retake quiz
      </Link>
    </div>
  );
}
