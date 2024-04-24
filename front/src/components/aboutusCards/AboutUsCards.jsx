import gitlogo from "../../assets/github.svg";
import linlogo from "../../assets/linkedin.svg";
import { Link } from "react-router-dom";


export const AboutUsCards = ({nombre, texto, github, linkedin, imagen}) => {
  return (
      <article className="flex flex-col bg-primary-100 p-4 rounded-lg h-[330px] md:h-96 w-full justify-start cursor-default">
        <figure className="flex justify-center justify-items-center max-h-44 h-44">
          <img
            src={imagen}
            alt=""
            className="rounded-lg mb-3 object-fill md:object-cover"
          />
        </figure>
        <div>
          <h3 className="text-text-100 font-bold text-center text-xl mb-4"> {nombre}
          </h3>
          <p className="text-text-200 italic text-center text-sm">
            {texto}
          </p>
        </div>
        <div className="flex flex-row gap-3 mt-auto justify-evenly">
          <Link to={github}>
            <img src={gitlogo} alt="" className="w-8 h-8 hover:scale-[1.5]" />
          </Link>
          <Link to={linkedin}>
            <img src={linlogo} alt="" className="w-8 h-8 hover:scale-[1.5]" />
          </Link>
        </div>
      </article>
  );
};

