import marcoVerde from '../../../public/img/marcoVerde.svg'
import marcoCelu from '../../../public/img/marcoCelular.svg'
import futbol2 from '../../../public/img/futbol2.png'
export const Banner3 = () => {
  return (
    <section className='h-full p-10 w-full flex items-center justify-center flex-col md:flex-row-reverse bg-accent-100 rounded-md'>
        <article className='md:w-2/3 flex flex-wrap items-center justify-center md:gap-10'>
            <figure className='w-full md:max-w-sm relative'>
                <img src={marcoVerde} alt="marcoVerde" className='min-h-36' />
                <figcaption className='absolute font-semibold text-gray-100 top-[30%] text-start left-5 right-0 mx-auto h-full w-11/12 text-sm'>Reservá tu cancha desde cualquier lugar, plataforma 100% segura, olvídate de llamadas y mensajes de texto.</figcaption>
            </figure>
            <figure className='max-w-[220px] relative'>
                <img src={marcoVerde} alt="marcoVerde" className='rotate-6 h-32' />
                <figcaption className='absolute font-bold text-gray-100 top-[30%] sm:top-[25%] left-0 right-0 mx-auto h-full w-10/12 text-xs sm:text-sm'>Te dió sed luego del partido? Venite al bar.</figcaption>
            </figure>
            <figure className='max-w-xs relative'>
                <img src={marcoVerde} alt="marcoVerde" className='h-36' />
                <figcaption className='absolute font-bold text-gray-100 top-[25%] sm:top-[22%] left-0 right-0 mx-auto h-full w-9/12 text-sm'>Pasate por nuestra tienda y pedí que te acerquemos tus compras a la cancha donde estas!</figcaption>
            </figure>
        </article>
        <article className='relative '>
            <figure className=''>
                <img src={marcoCelu} alt="marco celu" width={200} height={100} />
            </figure>
            <figure className='absolute top-16'>
                <img src={futbol2} alt="marco celu" height={300} className='h-80' />
            </figure>
        </article>
    </section>
  )
}
