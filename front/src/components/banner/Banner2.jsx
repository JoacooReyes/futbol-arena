import brush from '../../../public/img/marcoBrush.svg'
import marcoCelu from '../../../public/img/marcoCelular.svg'
import futbol1 from '../../../public/img/futbol1.png'
export const Banner2 = () => {
  return (
    <section className='h-full p-5 w-full flex items-center justify-center flex-col md:flex-row bg-primary-200 rounded-md'>
        <article className='md:w-2/3 flex flex-wrap items-center justify-center gap-2'>
            <figure className='w-80 md:max-w-sm relative'>
                <img src={brush} alt="brush" className='-rotate-12' />
                <figcaption className='absolute font-semibold text-gray-100 top-[22%] text-start left-5 right-0 mx-auto h-full w-9/12 text-sm'>No más cruces de reservas, con nuestra app seleccionaras la cancha y horas disponibles, no volverá a ocurrir 2 reservas a la misma hora.</figcaption>
            </figure>
            <figure className='max-w-[220px] relative'>
                <img src={brush} alt="brush" className='rotate-12' />
                <figcaption className='absolute font-bold text-gray-100 top-[26%] sm:top-[25%] left-0 right-0 mx-auto h-full w-7/12 text-xs sm:text-sm'>Podrás elegir en la cancha que deseas jugar, la hora y fecha.</figcaption>
            </figure>
            <figure className='max-w-xs relative'>
                <img src={brush} alt="brush" className='-rotate-6' />
                <figcaption className='absolute font-bold text-gray-100 top-[19%] sm:top-[22%] left-0 right-0 mx-auto h-full w-9/12 text-sm'>Una plataforma 24/7 para que reserves cuando lo necesites, que no te contestan tus SMS o tus llamadas, es cosa del pasado, llegó FUTBOLARENA para reservar de forma fácil y segura..</figcaption>
            </figure>
        </article>
        <article className='relative '>
            <figure className=''>
                <img src={marcoCelu} alt="marco celu" width={200} height={100} />
            </figure>
            <figure className='absolute top-16'>
                <img src={futbol1} alt="marco celu" height={300} className='h-80' />
            </figure>
        </article>
    </section>
  )
}
