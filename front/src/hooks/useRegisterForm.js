import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const useRegisterForm = () => {
  const navigate = useNavigate()
  const initialState = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
  const {registrarUsuario} = useContext(UserContext)

  const [inputs, setInputs] = useState(initialState);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const { fullName, email, phone, password, confirmPassword } = inputs;

    if (!fullName || !email || !password || !confirmPassword ||!phone) {
      toast.error('Por favor, complete todos los campos');
      return;
    }
    if (inputs.fullName.length < 4) {
      toast.error('El nombre completo debe tener al menos 5 caracteres.');
      return;
    }
    if (inputs.password.length < 8) {
      toast.error('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
    if (inputs.password !== inputs.confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    const newUser = {
      nombre: fullName,
      email: email,
      password: password,
      telefono: phone
    }
    toast.promise(registrarUsuario(newUser),{
      loading: 'Registrando usuario...',
      success: ({usuario}) => {
        toast.success(`Bienvenido a la comunidad de El Complejo! ${usuario.nombre}`)
        setTimeout(()=>navigate('/'),1000)
      },
      error: 'Ocurrió un error'
    })
    
  };

  const handleInputChange = (event) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setInputs(initialState);
  };

  return { handleSubmit, handleInputChange, resetForm, inputs };
};
