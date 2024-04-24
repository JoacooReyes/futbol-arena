import { Card } from "flowbite-react";
import { useReservas } from "../../hooks";

export const MisReservas = () => {

  const {reservasUser, handleDelete} = useReservas()
  

  return (
    <section className="px-4 mt-4 rounded-lg bg-bg-300 p-5">
      <article className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {
          reservasUser.length > 0 
           ? reservasUser?.map((reserva) => (
          <Card
            key={reserva.reservation_id}
            className="w-full text-start"
          >
            <h5 className="text-base text-black"> Cancha: 
              <span className="ms-2 font-bold text-gray-900">{reserva.reservation_field_name}</span>
            </h5>
            <p className="font-normal text-gray-700">
              Fecha: <span className="ms-2 font-bold text-gray-900">{reserva.reservation_date}</span>
            </p>
            <p className="font-normal text-gray-700">
              Horario: <span className="ms-2 font-bold text-gray-900">{reserva.reservation_time}</span>
            </p>
            <button className="w-[150px] sm:max-w-xs bg-bg-300 font-bold mx-auto active:bg-accent-100" onClick={()=>{handleDelete(reserva.reservation_id)}}>Cancelar</button>
          </Card>
        ))
          : <div className="text-center mt-4 w-full">
                <p className="text-gray-700 font-semibold text-cemter">Aún no tienes reservas realizadas.</p>
              </div>
        }
      </article>
    </section>
  );
};
