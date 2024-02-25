import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import './Header.scss'

type Props = {
  index: number,
  isPrevButton: boolean,
};

export const Header:React.FC<Props> = ({index = 1, isPrevButton}) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink
          to={`/quiz/${index - 1}`}
          className={classnames(
            'header__nav__prev',
            {'header__nav__prev--display': isPrevButton},
          )}
        >
        </NavLink>
        <div className="header__nav__menu"></div>
      </nav>
      <p className="header__progress-num">{`${index} /5`}</p>
      <div 
        className={classnames(
          'header__progress-bar',
        )}
      >
        <div 
          className={classnames(
            'header__progress-bar__res',
            {[`header__progress-bar__res--filled-by-${index}`]: true},
          )}
        >
        </div>
      </div>
    </header>
  );
}
