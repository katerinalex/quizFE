import { Dispatch, SetStateAction, createContext } from 'react';
import { Lang } from './types/Lang';

export type LangContextType = {
  data: Lang[];
  setData: Dispatch<SetStateAction<Lang []>>,
};

export const LangContext = createContext<LangContextType>({
  data: [],
  setData: () => {},
});
