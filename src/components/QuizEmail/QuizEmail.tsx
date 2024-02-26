import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QuizLoading} from '../QuizLoading/index.tsx'
import { DataContextType, DataContext } from '../../DataContext.tsx';
import classNames from 'classnames';


export const QuizEmail:React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState<string>('');

  const { data, setData } = useContext<DataContextType>(DataContext);
  const handleNextClick = () => {
    setData([...data, {
      order: 5,
      title: 'Email',
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
        <div className="page">
          <h1 className="page__title">Email</h1>
          <h2 className="page__sub-title">Enter your email to get full access</h2>
          <input 
            className="page__email" 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="warning">Invalid email</p>
          <p className="agreement">
            By continuing I agree with <span className="page__title--strong">Privacy policy</span> and <span className="page__title--strong">Terms of use</span>.
          </p>
          <Link
            className={classNames(
              'page__button',
              {'page__button--disabled': email.length === 0}
            )}
            to={`../../result`}
            onClick={handleNextClick}
          >
            Next
          </Link>
        </div>
      )}

      {isLoading && <QuizLoading />}
    </>
  );
}
