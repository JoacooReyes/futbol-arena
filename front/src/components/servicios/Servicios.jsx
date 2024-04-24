import { ServiciosCards } from "../";
import fotoPelota from "../../assets/fotoPelota.png";
import fotoTienda from "../../assets/fotoTienda.png";
import fotoReserva from "../../assets/fotoReserva.png";
import fotoBar from "../../assets/fotoBar.png";

export const Servicios = () => {
  return (
    <section className="space-y-10 p-5 sm:p-10 bg-bg-200 rounded-md">
      <h2 className="text-3xl font-semibold text-text-100">Servicios</h2>
      <article className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-sm place-items-center mx-auto">
        <ServiciosCards
          title="LA TIENDA"
          description="Encontra lo que estas buscando!"
          image={fotoReserva}
        />
        <ServiciosCards
          title="TORNEOS Y COMPETENCIAS"
          description="Participa en emocionantes torneos y competencias en nuestras canchas de fútbol. Demostra tu talento y competi por grandes premios. ¡No te lo pierdas!"
          image={fotoPelota}
        />
        <ServiciosCards
          title="RESERVA AHORA!"
          description="Ingresa el tipo de cancha, la fecha, la hora y descubri todas las opciones que tenemos para vos."
          image={fotoTienda}
        />
        <ServiciosCards
          title="BAR"
          description="Visita nuestro bar y disfruta de nuestras ofertas gastronomicas. ¡El lugar perfecto para compartir momentos inolvidables con amigos!"
          image={fotoBar}
        />
        </article>
    </section>
  );
};
