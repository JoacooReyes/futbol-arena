import { useCancha } from "../../hooks";

export const TurnSelector = ({handleTime}) => {

  const {horarios, reservation} = useCancha()

  return (
    <section className="w-full max-w-sm p-4 bg-bg-300 rounded-lg shadow sm:p-6">
      <h2 className="text-text-100 font-bold mb-4">Horarios Disponibles</h2>
      <article className="flex md:flex-wrap items-center justify-start md:justify-center w-full gap-1 overflow-auto">
        {
          reservation?.reservation_field_id != '' && horarios.length > 0
          ?
            horarios.map(horario => (
              <div 
                key={horario.turnoId}
                id={horario.turnoId}
                onClick={() => handleTime(horario)}
                className={`bg-primary-100 min-w-32 md:min-w-20 md:w-20 h-20 flex items-center justify-center rounded-xl shadow cursor-pointer relative overflow-hidden hover:bg-accent-100 ${!horario.disponible && 'cursor-not-allowed'}`}>
                <p className="mb-1 font-semibold text-gray-700">
                  {horario.hora}
                </p>
                {
                  !horario.disponible &&
                <div className="absolute -rotate-[30deg] bg-text-200/80 text-white backdrop-blur-sm p-2 bottom-5 w-40 md:w-28 flex justify-center items-center">Reservado</div>
                }
              </div>
          ))
          : <p className="font-bold text-text-200">Debe seleccionar una cancha para ver la lista de turnos</p>
        }
      </article>
    </section>
  );
};
