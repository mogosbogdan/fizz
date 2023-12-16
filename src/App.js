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

  const columns = [];
  const itemsPerColumn = 50;

  for (let i = 0; i < numbers.length; i += itemsPerColumn) {
    const columnItems = numbers.slice(i, i + itemsPerColumn);
    columns.push(columnItems);
  }

  return (
    <div style={{ display: 'flex' }}>
      {columns.map((column, columnIndex) => (
        <ul key={columnIndex} style={{ listStyle: 'none', margin: '20px' }}>
          {column.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      ))}
    </div>
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
