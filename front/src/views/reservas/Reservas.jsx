import {DatePicker, FieldComps, ReservationResume, TurnSelector} from '../../components/'
import { useCancha } from '../../hooks'

export const Reservas = () => {

  const {handleDate, handleConsulta, handleTime, reservation} = useCancha()
  
  return (
    <section className='flex flex-col items-center justify-center h-full max-w-6xl mx-auto'>
      <article className="w-full mx-auto h-full bg-bg-100 rounded-xl p-5 flex flex-wrap gap-5 lg:p-10 lg:grid lg:grid-cols-3 lg:place-content-center justify-center items-stretch">
          <DatePicker handleDate={handleDate}/>
          <FieldComps handleConsulta={handleConsulta}/>
          <TurnSelector handleTime={handleTime}/>
      </article>
      {
        reservation.reservation_time != '' &&
        <ReservationResume reservation={reservation}/>
      }
    </section>
  )
}
