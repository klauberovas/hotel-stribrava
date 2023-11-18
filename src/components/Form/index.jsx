import './style.css';

export const Form = () => {
  return (
    <form>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Datum:
        </label>
        <input id="field1" className="field-input" type="date" />

        <label htmlFor="field2" className="field-label">
          Počet osob:
        </label>
        <input id="field2" className="field-input" type="text" />

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
      </div>
      <button className="wide">Submit</button>
    </form>
  );
};
