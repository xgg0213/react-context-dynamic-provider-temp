import { createContext, useState } from 'react';
import horoscopes from '../data/horoscopes';

export const HoroscopeContext = createContext();

export const HoroscopeProvider = props => {
    const [currentSign, setCurrentSign] = useState('Leo');
    const horoscopeObj = horoscopes;
    const sign = horoscopeObj[currentSign];

    return (
      <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
        {props.children}
      </HoroscopeContext.Provider>
    );
};
