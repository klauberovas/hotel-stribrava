import { useState } from 'react';
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
        <label htmlFor="date1" className="field-label">
          Od:
        </label>
        <input
          onChange={handleChange}
          id="date1"
          className="field-input"
          type="date"
        />
        <label htmlFor="date2" className="field-label">
          Do:
        </label>
        <input
          onChange={handleChange}
          id="date2"
          className="field-input"
          type="date"
        />

        <label htmlFor="person" className="field-label">
          Počet osob:
        </label>
        <input
          onChange={handleChange}
          id="person"
          className="field-input"
          type="text"
        />

        <label htmlFor="select" className="field-label">
          Stravování
        </label>
        <select onChange={handleChange} id="food" className="field-input">
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="pet" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          onChange={handleChange}
          id="pet"
          className="field-input"
          type="checkbox"
        />
        <label htmlFor="children" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          onChange={handleChange}
          id="children"
          className="field-input"
          type="checkbox"
        />
        <label htmlFor="barier-free" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          onChange={handleChange}
          id="barier-free"
          className="field-input"
          type="checkbox"
        />

        <label htmlFor="email" className="field-label">
          E-mail:
        </label>
        <input
          onChange={handleChange}
          id="email"
          className="field-input"
          type="email"
        />

        <label htmlFor="mobil" className="field-label">
          Mobil:
        </label>
        <input
          onChange={handleChange}
          id="mobil"
          className="field-input"
          type="text"
        />
      </div>
      <h3>Celková cena za pobyt: {price} kč</h3>
      <button className="wide">Odeslat poptávku</button>
    </form>
  );
};
