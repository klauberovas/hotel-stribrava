import { useEffect, useState } from 'react';
import './style.css';
import dayjs from 'dayjs';

export const Form = ({ price }) => {
  const now = dayjs().format('YYYY-MM-DD');

  const [resultPrice, setResultPrice] = useState(price);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { id, type, value, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((predata) => ({
      ...predata,
      [id]: newValue,
    }));
    console.log(formData);
  };
  console.log(formData);
  // useEffect(() => {
  //   const diffrent = dayjs(toDate).diff((fromDate), 'day');
  //   console.log('rozdíl dní', diffrent);
  // }, [fromDate, toDate]);

  return (
    <form onSubmit={() => alert('Děkujeme za odeslání formuláře.')}>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Od:
        </label>
        <input
          onChange={handleChange}
          id="field1"
          className="field-input"
          type="date"
        />
        <label htmlFor="field2" className="field-label">
          Do:
        </label>
        <input
          onChange={handleChange}
          id="field2"
          className="field-input"
          type="date"
        />

        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input
          onChange={handleChange}
          id="field3"
          className="field-input"
          type="text"
        />

        <label htmlFor="select" className="field-label">
          Stravování
        </label>
        <select onChange={handleChange} id="select" className="field-input">
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          onChange={handleChange}
          id="check1"
          className="field-input"
          type="checkbox"
        />
        <label htmlFor="check2" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          onChange={handleChange}
          id="check2"
          className="field-input"
          type="checkbox"
        />
        <label htmlFor="check3" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          onChange={handleChange}
          id="check3"
          className="field-input"
          type="checkbox"
        />

        <label htmlFor="field4" className="field-label">
          E-mail:
        </label>
        <input
          onChange={handleChange}
          id="field4"
          className="field-input"
          type="email"
        />

        <label htmlFor="field5" className="field-label">
          Mobil:
        </label>
        <input
          onChange={handleChange}
          id="field5"
          className="field-input"
          type="text"
        />
      </div>
      <h3>Celková cena za pobyt: {price} kč</h3>
      <button className="wide">Odeslat poptávku</button>
    </form>
  );
};
