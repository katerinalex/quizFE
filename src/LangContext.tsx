import { Dispatch, SetStateAction, createContext } from 'react';
import { Lang } from './types/Lang';

export type LangContextType = {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>,
};

export const LangContext = createContext<LangContextType>({
  lang: 'English',
  setLang: () => {},
});
