import { Room } from '../Room';
export const Rooms = () => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý</p>
        <div className="cards-row">
          <Room />
        </div>
      </div>
    </section>
  );
};
