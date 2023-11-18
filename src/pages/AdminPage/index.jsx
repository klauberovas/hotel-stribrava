import './style.css';
import { useEffect, useState } from 'react';

export const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'http://localhost:4000/api/poptavky?filter=phase:eq:new',
    );
    const data = await response.json();
    setOrders(data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async (state, id) => {
    await fetch(`http://localhost:4000/api/poptavky/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/phase',
          value: state,
        },
      ]),
    });
    fetchData();
  };

  return (
    <div className="container">
      <h1>Admin: Andulka</h1>
      <div className="list">
        {orders.map((item) => (
          <ul key={item.id} className="list-item">
            <h3>Poptávka č.{item.id}</h3>
            <li>Počet nocí:{item.nights}</li>
            <li>Počet osob: {item.persons}</li>
            <li>Domácí mazlíček: {item.pets}</li>
            <li>Děti: {item.children}</li>
            <li>Bezbariérový přístup: {item.barier}</li>
            <li>E-mail: {item.email}</li>
            <li>Telefon: {item.phone}</li>
            <button
              onClick={() => handleClick('rejected', item.id)}
              className="button--confirm"
            >
              ❌
            </button>
            <button
              onClick={() => handleClick('confirmed', item.id)}
              className="button--confirm"
            >
              ✅
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
};
