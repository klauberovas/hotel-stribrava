import mapa from './img/mapa.png';

export const Footer = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Kontakt</h2>
          <p>
            Hotel Stříbrava
            <br />
            Ke Kamenné lávce 12
            <br />
            317 24 Libnice nad Stříbravou
          </p>
          <p>
            <a href="recepce@hotelstribrava">recepce@hotelstribrava</a>
          </p>
        </div>
        <img src={mapa} />
      </div>
    </section>
  );
};
