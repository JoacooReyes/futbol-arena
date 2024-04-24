import { useRef, useState } from "react";
import { data } from "../../../public/bannerPictures/data.js";
import { Carousel } from "flowbite-react";

export const Banner = () => {
    // const listRef = useRef();
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const scrollToImage = (direction, event) => {
    //     event.preventDefault();
    //     const newIndex = direction === 'prev' ? (currentIndex === 0 ? data.length - 1 : currentIndex - 1) : (currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    //     setCurrentIndex(newIndex);
    //     event.currentTarget.blur();
    // };

    // const goToSlide = (slideIndex) => {
    //     setCurrentIndex(slideIndex);
    // };

    return (
        <>
            <section className="overflow-hidden rounded-md relative h-56 sm:h-64 lg:h-96 2xl:h-[400px]">
                <Carousel slideInterval={3000} indicators={false}>
                    {
                        data.map((item, idx) => (
                            <img key={idx} className="w-full aspect-video h-full" src={item.imgUrl} alt={`banner-${item.id}`} />
                        ))
                    }
                </Carousel>
                {/* <article className="absolute top-[40%] lg:top-[50%] z-30 left-10 text-4xl text-white cursor-pointer" onClick={(event) => scrollToImage('prev', event)}>&#8249;</article>

                <article className="absolute top-[40%] right-10 lg:top-[50%] z-30 text-4xl text-white cursor-pointer" onClick={(event) => scrollToImage('next', event)} >&#8250;</article>

                <article className="w-full h-full md:max-h-80 overflow-hidden rounded-md" ref={listRef}>
                    {
                        data.map((item, idx) => (
                            <figure key={item.id} className={`${idx === currentIndex ? 'block' : 'hidden'} h-fit w-full rounded-md overflow-hidden aspect-video`}>
                                <img className="w-full object-cover aspect-video rounded-md lg:-translate-y-36" src={item.imgUrl} alt={`banner-${item.id}`} />
                            </figure>
                        ))
                    }
                </article>
                <article className="flex justify-center items-center absolute bottom-5 left-0 right-0 mx-auto">
                    {
                        data.map((_, idx) => (
                            <p key={idx} className={`${idx === currentIndex ? 'bg-accent-100' : 'bg-text-200'} my-2 mx-1 cursor-pointer text-center w-4 h-4 rounded-full`} onClick={() => goToSlide(idx)}></p>
                        ))
                    }
                </article> */}
            </section>
        </>
    );
}