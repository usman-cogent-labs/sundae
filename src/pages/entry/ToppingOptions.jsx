import { useState } from 'react';

export default function ToppingOptions({ name, imagePath }) {
  return (
    <div>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030${imagePath}`}
        alt={`${name} topping`}
      />
    </div>
  );
}
