import { useContext } from 'react'
import { CanchaContext } from '../context/CanchaContext'
import { toast } from 'sonner'
import { UserContext } from '../context'
import { useNavigate } from 'react-router-dom'

export const useCancha = () => {
  const navigate = useNavigate()
    const { handleDate, listaCanchas, handleConsulta, horarios, handleTime, reservation, setReservation, addReservation, crearCancha, eliminarCancha, setListaCanchas, getCanchas } = useContext(CanchaContext)
    const {getUserData} = useContext(UserContext)

    const cancelReservation = () => {
      setReservation({
        ...reservation,
        reservation_time:''
      })
    }
    const sendReservation = async (data) => {
      toast.promise(addReservation(data),{
        loading: 'Reservando...',
        success: async (data) => {
          toast.success(data.message)
          await getUserData(reservation.user_id)
          setReservation({
            ...reservation,
            reservation_time:'',
            reservation_time_id:'',
            reservation_field_id:'',
            reservation_field_name:'',
          })
        },
        error: 'Ocurrió un error'
      })
    }
    const handleSubmit = async (e, token) => {
      e.preventDefault()
      const formData = new FormData(e.target)
  
      const nuevaCancha = {
        cancha_nombre: formData.get('cancha_nombre'),
        cancha_detalle: formData.get('cancha_detalle'),
      }
      
      toast.promise(crearCancha(nuevaCancha, token),{
        loading: 'Agregando cancha',
                success: async ()=>{
                  await getCanchas()
                  'Cancha agregada'
                  navigate(0)
                },
                error: 'Ocurrió un error'
              })
    }

    const handleDelete = async(id,user) => {
      const { isAdmin } = user
      toast.promise(eliminarCancha(id, isAdmin),{
        loading: 'Eliminando cancha',
        success: () => {
          const newListaCanchas = listaCanchas.filter(cancha => cancha.cancha_id != id)
          setListaCanchas(newListaCanchas)
        }
      })
    }

  return {
    handleDate,
    listaCanchas,
    handleConsulta,
    horarios,
    handleTime,
    reservation,
    eliminarCancha,
    cancelReservation,
    handleDelete,
    handleSubmit,
    sendReservation
  }
}
