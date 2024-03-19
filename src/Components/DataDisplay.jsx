import React from 'react'

const DataDisplay = ({data}) => {
  return (
    <div className="data-display">
    {data.length > 0 ? (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No data to display</p>
    )}
  </div>
);
}

export default DataDisplay