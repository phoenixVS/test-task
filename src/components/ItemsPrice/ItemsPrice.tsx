"use client";
import React, { useMemo, useState } from 'react';

import task from './item-price.json'
import { CurrencySelect } from './CurrencySelect';
import { useCallback } from 'react';

export type Currency = 'USDT' | 'BTC' | 'ETH';

export const ItemsPrice:React.FC = () => {
  const data = useMemo(() => task.data, []);
  const ratesDictionary: any  = useMemo(() => task['currencies-pairs'], []);
  const [currency, setCurrency] = useState('USDT');

  const convertPrice = useCallback((sourceCurrency: string, sourcePrice: number) => {
    if (sourceCurrency === currency) {
      return sourcePrice;
    }
    return ratesDictionary[`${sourceCurrency}-${currency}`] * sourcePrice
  }, [currency, ratesDictionary])

  const onCurrencyChange = (activeCurrency: Currency) => {
    setCurrency(activeCurrency)
  }

  return(
      <div>
        Select currency: <CurrencySelect onCurrencyChange={onCurrencyChange}/>
        {data.map(item => (
          <div key={item.id}>
            {item.id} = {convertPrice(item.currency, item.price)}
          </div>
        ))}
      </div>
  );
}