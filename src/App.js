import React from 'react';

const NumberList = () => {
  const numbers = [];

  for (let i = 1; i <= 200; i++) {
    // Check if the number is a multiple of 7 or ends with 7
    if (i % 7 === 0 || i.toString().endsWith('7')) {
      numbers.push('boltz');
    } else {
      numbers.push(i);
    }
  }

  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <h1>Number List</h1>
      <NumberList />
    </div>
  );
};

export default App;
