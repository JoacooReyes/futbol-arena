import { useCancha } from "../../hooks";

export const ReservationResume = ({reservation}) => {
  const {sendReservation, cancelReservation, listaCanchas} = useCancha()
  
  const cancha = listaCanchas.find(cancha => cancha.cancha_id === reservation.reservation_field_id) 
  
  return (
    <section className='bg-black w-screen min-h-screen h-[1800px] absolute flex justify-center items-center bg-opacity-35 z-50 overflow-hidden backdrop-blur-sm'>
      <article className="bg-bg-100 rounded-md shadow-md flex flex-col items-start justify-center text-arena-green-900 overflow-hidden absolute p-5 cursor-default backdrop-blur-sm">
        <h3 className="font-bold text-arena-green-950 mx-auto text-center ">
          Tu reserva
        </h3>
        <p>
          Fecha:{" "}
          <span className="font-semibold">{reservation.reservation_date}</span>
        </p>
        <p>
          Hora:{" "}
          <span className="font-semibold">
            {reservation.reservation_time?.hora}
          </span>
        </p>
        <p>
          Cancha:{" "}
          <span className="font-semibold">
            {cancha.cancha_nombre}
          </span>
        </p>
        <div className="w-full h-full mt-5 flex gap-1 items-center">
          <button className="rounded-md w-1/2 px-5 py-3 inline-flex items-center justify-center font-semibold  bg-primary-100 hover:bg-accent-100 text-text-200" onClick={()=>sendReservation(reservation)}>
            Confirmar
          </button>
          <button
            className="rounded-md w-1/2 px-5 py-3 inline-flex items-center justify-center font-semibold text-white bg-black hover:bg-slate-800"
            onClick={cancelReservation}
          >
            Cancelar
          </button>
        </div>
      </article>
    </section>
  );
};
