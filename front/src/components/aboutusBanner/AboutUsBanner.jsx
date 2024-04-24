import complejo from "../../assets/complejo.jpg";
import complejo2 from "../../assets/complejo2.jpg";

export const AboutUsBanner = () => {
  return (
    <section>
      <article className="grid lg:grid-cols-2 content-center items-center place-content-center mb-5 bg-bg-200 p-1 sm:p-5 rounded-md shadow-md">
        <div>
          <img src={complejo} alt="" className="rounded-lg" />
        </div>
        <div className="container p-7">
          <h2 className="text-text-200 font-bold text-end text-3xl mb-4">
            {" "}
            NUESTA HISTORIA
          </h2>
          <p className="text-black font-semibold text-start text-base leading-7">
            En un pequeño pueblo, un pequeño grupo de entusiastas creó un
            complejo deportivo llamado Futbol Arena para fomentar la actividad
            física y el espíritu deportivo. Construyeron un espacio único como
            punto de encuentro para competir, compartir momentos y forjar
            amistades. Cada ladrillo representaba un paso hacia su visión, con
            instalaciones de primer nivel, tanto en lo deportivo como en lo
            recreativo. En la inauguración, la emoción llenaba el aire, niños
            corrían, jóvenes practicaban deportes y adultos revivían pasiones en
            las mesas del bar. El complejo se convirtió en el corazón de la
            comunidad y del futbol, donde los sueños se hacen realidad y reina
            el espíritu deportivo.
          </p>
        </div>
      </article>
      <article className="grid lg:grid-cols-2 content-center items-center place-content-center p-1 sm:p-5 bg-bg-300 rounded-md shadow-md">
        <div className="container p-7">
          <h2 className="text-text-200 font-bold text-end text-3xl mb-4">
            {" "}
            NUESTRO COMPLEJO
          </h2>
          <p className="text-black font-semibold text-start text-base leading-7">
            Sumérgete en nuestra tienda exclusiva donde encontrarás los últimos
            productos relacionados con el fútbol, desde camisetas de tus equipos
            favoritos hasta accesorios de entrenamiento de alta calidad.
            ¿Quieres jugar un partido con tus amigos? ¡Reserva una de nuestras
            canchas de fútbol de última generación! Disfruta de partidos
            emocionantes mientras compartes momentos inolvidables en un ambiente
            deportivo y amigable. Después del juego, relájate en nuestro bar
            temático donde podrás disfrutar de bebidas refrescantes, snacks
            deliciosos y compartir anécdotas futbolísticas con otros
            aficionados. ¡Ven y vive la pasión por el fútbol en nuestro completo
            complejo! ¡Te esperamos para que disfrutes de momentos inolvidables
            con tus amigos y familiares!
          </p>
        </div>
        <div>
          <img src={complejo2} alt="" className="rounded-lg" />
        </div>
      </article>
    </section>
  );
};
