export const ServiciosCards = ({ title, description, image }) => {
  return (
      <article
        className="h-[350px] w-full overflow-hidden rounded-lg shadow-lg bg-arena-green-100"
      >
        <figure className="w-full h-full relative rounded-md overflow-hidden">
          <img
            src={image}
            alt="foto"
            className="object-cover w-full h-full"
          />
          <article className="absolute text-center h-full w-full bg-black/50 flex flex-col justify-center items-center z-10 hover:backdrop-blur top-0 cursor-default text-white rounded-lg">
            <h5 className="text-2xl font-bold tracking-tight">
              {title}
            </h5>
            <p className="font-semibold p-5 text-start">
              {description}
            </p>
          </article>
        </figure>
      </article>
    );
};
