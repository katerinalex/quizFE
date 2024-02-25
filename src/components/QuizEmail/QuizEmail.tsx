import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QuizLoading} from '../QuizLoading/index.tsx'


export const QuizEmail:React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);
  return (
    <>
      {!isLoading && (
        <div className="page">
          <h1 className="page__title">Email</h1>
          <h2 className="page__sub-title">Enter your email to get full access</h2>
          <input type="email" name="email" id="email" />
          <p className="warning">Invalid email</p>
          <p className="agreement">By continuing I agree with Privacy policy and Terms of use.</p>
          <Link
            className='page__button page__button--disabled'
            to={`../result`}
          >
            Next
          </Link>
        </div>
      )}

      {isLoading && <QuizLoading />}
    </>
  );
}