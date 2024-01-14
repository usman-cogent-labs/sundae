import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOptions from './ScoopOptions';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : null;

  const optionItems = items?.map((item) => (
    <ItemComponent
      key={item?.name}
      name={item?.name}
      imagePath={item?.imagPath}
    />
  ));

  useEffect(() => {
    if (optionType)
      axios
        .get(`http://localhost:3030/${optionType}`)
        .then((res) => setItems(res?.data))
        .catch((err) => console.log(err));
  }, [optionType]);

  return <div>{optionItems}</div>;
}
