import { useState, useEffect } from 'react';
import './style.css';
import dayjs from 'dayjs';

export const Form = ({ price }) => {
  const now = dayjs().format('YYYY-MM-DD');

  const [resultPrice, setResultPrice] = useState(price);
  const [fromDate, setFromDate] = useState(now);
  const [toDate, setToDate] = useState(now);

  return (
    <form>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Od:
        </label>
        <input
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          id="field1"
          className="field-input"
          type="date"
        />
        <label htmlFor="field2" className="field-label">
          Do:
        </label>
        <input
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          id="field2"
          className="field-input"
          type="date"
        />

        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input id="field3" className="field-input" type="text" />

        <label htmlFor="select" className="field-label">
          Stravování
        </label>
        <select id="select" className="field-input">
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input id="check1" className="field-input" type="checkbox" />
        <label htmlFor="check2" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input id="check2" className="field-input" type="checkbox" />
        <label htmlFor="check3" className="field-label">
          Bezbariérový přístup:
        </label>
        <input id="check3" className="field-input" type="checkbox" />

        <label htmlFor="field4" className="field-label">
          E-mail:
        </label>
        <input id="field4" className="field-input" type="email" />

        <label htmlFor="field5" className="field-label">
          Mobil:
        </label>
        <input id="field5" className="field-input" type="number" />
      </div>
      <h3>Celková cena za pobyt: {price} kč</h3>
      <button className="wide">Odeslat poptávku</button>
    </form>
  );
};
