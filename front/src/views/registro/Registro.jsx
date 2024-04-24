import {useRegisterForm} from '../../hooks';
import registroImg from "../../assets/registro.png";

export const Registro = () => {
  
  const { inputs, handleInputChange, handleSubmit, resetForm } = useRegisterForm();
  
  return (
    <div className="w-full mx-auto h-[100dvh] max-w-6xl bg-arena-green-50 rounded-xl overflow-hidden">
    <div className="flex justify-center items-center w-full h-full">
        {/* Columna del Formulario */}
        <div className="flex flex-col w-full md:w-1/2 bg-gray-100 rounded-md p-5 h-full justify-center space-y-10 items-center">
            <h3 className="text-xl font-semibold text-black">Únete a la Comunidad Futbolera de</h3>
            <h1 className='font-bold text-black'>El Complejo</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center w-[80%] ">
                {/* Inputs del formulario*/}
                <input
                    type="text"
                    name="fullName"
                    onChange={handleInputChange}
                    value={inputs.fullName}
                    placeholder="Nombre Completo"
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={inputs.email}
                    placeholder="Email"
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                <input
                    type="tel"
                    name="phone"
                    onChange={handleInputChange}
                    value={inputs.phone}
                    placeholder="Telefono"
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    value={inputs.password}
                    placeholder="Contraseña"
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleInputChange}
                    value={inputs.confirmPassword}
                    placeholder="Confirmar Contraseña"
                    className="p-3 focus:outline-arena-green-400 outline-none text-gray-700 rounded-md"
                />
                {/* Botones */}
                <div className="flex gap-4 mt-5">
                    <button type="submit" className="bg-arena-green-300 hover:bg-arena-green-500 text-white p-3 flex-1">
                        Registrarse
                    </button>
                    <button type="button" onClick={resetForm} className="bg-black hover:bg-white hover:text-black text-white p-3 flex-1">
                        Borrar Formulario
                    </button>
                </div>
            </form>
        </div>
        {/* Columna del Banner */}
        <div className="hidden md:flex w-1/2 rounded-xl overflow-hidden bg-arena-green-50 h-full">
            <img 
              src={registroImg} 
              alt="banner futbol"
              className="w-full h-full object-contain" 
            />
        </div>
    </div>
</div>
  );
};

export default Registro;