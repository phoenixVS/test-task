import React, { useMemo } from 'react';
import Select from 'react-select'
import { Currency } from './ItemsPrice';


interface CurrencySelectProps {
  onCurrencyChange: (activeCurrency: Currency) => void
}

export const CurrencySelect:React.FC<CurrencySelectProps> = ({ onCurrencyChange }) => {
  const options: Array<{value: Currency, label: Currency}> = [
    { value: 'BTC', label: 'BTC' },
    { value: 'ETH', label: 'ETH' },
    { value: 'USDT', label: 'USDT' }
  ]
  return(
    <Select options={options} defaultValue={options[2]} onChange={(item: any) => item && onCurrencyChange(item.value)} />
  );
}