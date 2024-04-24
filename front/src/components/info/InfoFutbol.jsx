import React from "react";
import {Map} from "../";
import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg"
import wp from '../../assets/wp.svg'
import email from '../../assets/email.svg'
import location from '../../assets/location.svg'

export const InfoFutbol = () => {
  return (
    <section className="w-full mx-auto h-full rounded-xl p-5 flex flex-wrap gap-5 lg:p-10 place-content-center bg-accent-100">
      <article className="lg:grid lg:grid-cols-3 lg:place-content-center justify-center space-y-10 lg:space-y-0 items-stretch gap-5">
        <Map />
        <div className="flex flex-col items-center justify-around space-y-5 p-5 bg-white border border-gray-200 rounded-lg shadow h-80 md:h-96">
          <div className="flex justify-center">
            <h3 className="text-accent-200 font-semibold text-center text-xl">
              {" "}
              Cuando abrimos?
            </h3>
          </div>
          <div className="flex justify-center flex-col place-items-center space-y-2">
            <img src={calendar} alt="" className="w-10 h-10" />
            <h4 className="text-black font-semibold text-md">
              {" "}
              Todos los dias
            </h4>
          </div>
          <div className="flex justify-center flex-col place-items-center space-y-2">
            <img src={clock} alt="" className="w-10 h-10" />
            <h4 className="text-arena-green-700 font-bold text-center text-md">
              {" "}
            </h4>
            <h5 className="text-black font-semibold text-center"> 10:00 - 23:00  </h5>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-4 p-5 place-content-start-start bg-white border border-gray-200 rounded-lg shadow h-80 md:h-96">
                <div className="flex justify-start items-center gap-5">
                    <img src={wp} alt="wsp logo" className="w-10 h-10"/>
                    <h4 className="text-black font-semibold text-start"><span className='font-bold'>Nuestro whatsapp:</span> 381-4628299</h4>
                </div>
                <div className="flex justify-start items-center gap-5">
                    <img src={email} alt="email logo" className="w-10 h-10"/>
                    <h4 className="text-black font-semibold text-start"><span className='font-bold'>Nuestro email:</span> futbol_arena@gmail.com</h4>
                </div>
                <div className="flex justify-start items-center gap-5">
                    <img src={location} alt="direccion logo" className="w-10 h-10"/>
                    <h4 className="text-black font-semibold text-start"><span className='font-bold'>Nuestra dirección:</span> Av. Libertador 1000</h4>
                </div>
        </div>
      </article>
    </section>
  );
};

