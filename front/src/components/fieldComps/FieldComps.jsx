import {useContext} from 'react'
import { CanchaContext } from "../../context";
import { useCancha } from "../../hooks/useCancha";
import { toast } from 'sonner';

export const FieldComps = ({handleConsulta}) => {

  const {listaCanchas, reservation} = useCancha()
  const {consultaApi} = useContext(CanchaContext)

  const handleClick = async (ev) => {
    await handleConsulta(ev)
    await consultaApi()
  }

  return (
      <section className="w-full max-w-sm p-4 bg-bg-300 rounded-lg shadow sm:p-6">
        <h2 className="mb-3 text-base font-bold text-text-200">
          Selecciona tu cancha
        </h2>
            {
              reservation?.reservation_date != ''
              ?
                <ul className="my-4 space-y-3">
                  {
                    listaCanchas.length > 0 &&
                    listaCanchas?.map(cancha => (
                    <li className="flex items-center p-3 text-base font-bold rounded-lg bg-primary-100 text-text-100 hover:bg-accent-100 active:bg-arena-green-100 group hover:shadow cursor-pointer"
                      key={cancha.cancha_id}
                      id={cancha.cancha_id}
                      onClick={(ev)=>handleClick(ev)}>
                      {cancha.cancha_nombre}
                    </li>

                    ))
                  }
                </ul>
              : <p className="font-bold text-text-200">Debe seleccionar una fecha</p>
            }
      </section>
  );
};
