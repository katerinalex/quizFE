import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QuizLoading} from '../QuizLoading/index.tsx'
import { DataContextType, DataContext } from '../../DataContext.tsx';
import classNames from 'classnames';
import { LangContext, LangContextType } from '../../LangContext.tsx';
import { configuration } from '../../configuration.tsx';


export const QuizEmail:React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState<string>('');

  const { lang } = useContext<LangContextType>(LangContext);
  const langData = configuration[lang];
  const quizEmail = langData.quizEmail;
  const { title, subTitle, placeholder, warning, agreement, button } = quizEmail;

  const { data, setData } = useContext<DataContextType>(DataContext);
  const handleNextClick = () => {
    setData([...data, {
      order: 5,
      title,
      type: 'email',
      answer: email,
    }]);
  };
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);
  return (
    <>
      {!isLoading && (
        <div className="page page--email">
          <h1 className="page__title">{title}</h1>
          <h2 className="page__sub-title">{subTitle}</h2>
          <input 
            className="page__email" 
            type="email" 
            name="email" 
            id="email" 
            placeholder={placeholder}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="warning">{warning}</p>
          <p className="agreement">
            {agreement[0]}<span className="page__title--strong">{agreement[1]}</span>{agreement[2]}<span className="page__title--strong">{agreement[3]}</span>{agreement[4]}
          </p>
          <Link
            className={classNames(
              'page__button page__button--email',
              {'page__button--disabled': email.length === 0}
            )}
            to={`../../result`}
            onClick={handleNextClick}
          >
            {button}
          </Link>
        </div>
      )}

      {isLoading && <QuizLoading />}
    </>
  );
}
