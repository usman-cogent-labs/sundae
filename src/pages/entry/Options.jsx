import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';
import AlertBanner from '../common/AlertBanner';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOptions;

  const optionItems = items?.map((item) => (
    <ItemComponent
      key={item?.name}
      name={item?.name}
      imagePath={item?.imagePath}
    />
  ));

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res?.data))
      .catch((err) => setError(true));
  }, [optionType]);

  if (error) return <AlertBanner />;

  return <div>{optionItems}</div>;
}
