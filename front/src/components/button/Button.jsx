export const Button = ({type, mode, text}) => {


  return (
    <button type={type} className={`hover:text-black ${mode.toLowerCase() == 'accent' ? 'bg-accent-100 hover:bg-accent-200 hover:text-white' : 'bg-bg-300'} text-white font-bold p-3 flex-1`}>
        {text}
    </button>
  )
}
