import { DetailRoom } from '../DetailRoom';
import { Form } from '../Form';
import './style.css';

export const Reservation = () => {
  return (
    <section className="light">
      <div className="container">
        <h2>Heading</h2>
        <div className="columns-2">
          <DetailRoom />
          <Form />
        </div>
      </div>
    </section>
  );
};
