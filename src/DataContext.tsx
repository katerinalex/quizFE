import { Dispatch, SetStateAction, createContext } from 'react';
import { Data } from './types/Data';

export type DataContextType = {
  data: Data[];
  setData: Dispatch<SetStateAction<Data[]>>,
};

export const DataContext = createContext<DataContextType>({
  data: [],
  setData: () => {},
});
