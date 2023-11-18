import { useState, useEffect } from 'react';
import './style.css';
import dayjs from 'dayjs';

export const Form = ({ price }) => {
  const now = dayjs().format('YYYY-MM-DD');
  console.log(now);
  let totalPrice = 0;

  const [fromDate, setFromDate] = useState(now);
  const [toDate, setToDate] = useState(now);
  const [person, setNights] = useState(0);
  const [menu, setMenu] = useState('');
  const [pet, setPet] = useState(false);
  const [children, setChildren] = useState(false);
  const [barier, setBarier] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const nights = dayjs(toDate).diff(dayjs(fromDate), 'day');

  if (fromDate !== toDate) {
    totalPrice += price * nights;

    if (person !== 0) {
      totalPrice = totalPrice * person;
    }
    if (menu === 'breakfast') {
      totalPrice += person * nights * 150;
    }
    if (menu === 'half') {
      totalPrice += person * nights * 300;
    }
    if (menu === 'full') {
      totalPrice += person * nights * 500;
    }
    if (pet) {
      totalPrice += nights * 100;
    }
    if (children) {
      totalPrice += nights * 150;
    }
  }

  const sendData = async () => {
    fetch('http://localhost:4000/api/poptavky', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nights: nights,
        persons: person,
        menu: menu,
        pets: pet ? 'ano' : 'ne',
        children: children ? 'ano' : 'ne',
        barier: barier ? 'ano' : 'ne',
        email: email,
        phone: phone,
        phase: 'new',
      }),
    });
    alert('Děkujeme za odeslání formuláře.');
  };

  return (
    <form onSubmit={() => sendData()}>
      <div className="form-fields">
        <label htmlFor="date1" className="field-label">
          Od:
        </label>
        <input
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          id="date1"
          className="field-input"
          type="date"
        />
        <label htmlFor="date2" className="field-label">
          Do:
        </label>
        <input
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          id="date2"
          className="field-input"
          type="date"
        />

        <label htmlFor="person" className="field-label">
          Počet osob:
        </label>
        <input
          value={person}
          onChange={(e) => setNights(e.target.value)}
          id="person"
          className="field-input"
          type="number"
        />

        <label htmlFor="select" className="field-label">
          Stravování
        </label>
        <select
          value={menu}
          onChange={(e) => setMenu(e.target.value)}
          id="food"
          className="field-input"
        >
          <option value="">Žádné</option>
          <option value="breakfast">Snídaně</option>
          <option value="half">Polopenze</option>
          <option value="full">Plná penze</option>
        </select>

        <label htmlFor="pet" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          checked={pet}
          onChange={() => setPet(!pet)}
          id="pet"
          className="field-input"
          type="checkbox"
        />
        <label htmlFor="children" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          checked={children}
          onChange={() => setChildren(!children)}
          id="children"
          className="field-input"
          type="checkbox"
        />
        <label htmlFor="barier-free" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          checked={barier}
          onChange={() => setBarier(!barier)}
          id="barier-free"
          className="field-input"
          type="checkbox"
        />

        <label htmlFor="email" className="field-label">
          E-mail:
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="field-input"
          type="email"
        />

        <label htmlFor="mobil" className="field-label">
          Mobil:
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="mobil"
          className="field-input"
          type="text"
        />
      </div>
      <h3>Celková cena za pobyt: {totalPrice} kč</h3>
      <button className="wide">Odeslat poptávku</button>
    </form>
  );
};
