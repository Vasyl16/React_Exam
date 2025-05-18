import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ContentLoader from 'react-content-loader';

import 'swiper/swiper-bundle.css';
import { useGetNewestMovies } from '../api/query/useGetNewestMovies';
import type { NewestMovieData } from '../types/movieTypes';
import { getImagePath } from '../helpers/getImagePath';
import { truncateText } from '../helpers/truncateText';

export const Hero: React.FC = () => {
  const { data, isLoading } = useGetNewestMovies();

  if (isLoading) {
    return (
      <section className="w-full h-[calc(100svh-90px)]">
        <ContentLoader
          speed={2}
          width="100%"
          height="100%"
          backgroundColor="#cacaca"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" width="100%" height="100%" />
        </ContentLoader>
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="w-full h-[calc(100svh-90px)] flex items-center justify-center bg-gray-200">
        <p className="text-gray-600 text-xl">No movies found.</p>
      </section>
    );
  }

  return (
    <section className="w-full h-[calc(100svh-90px)]">
      <Swiper
        modules={[Autoplay]}
        className="w-full h-full"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <HeroItem {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

function HeroItem({ id, title, overview, poster_path }: NewestMovieData) {
  return (
    <div className="relative h-full after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-2] after:bg-black after:opacity-35">
      <div className="container  h-full ">
        <div className="w-full h-full flex flex-col items-start justify-center gap-[20px] max-w-[clamp(500px,50%,50%)]">
          <h2 className="text-white font-bold text-[40px]">{title}</h2>

          <p className="text-white text-[18px]">
            {truncateText(overview, 200)}
          </p>

          <button className="uppercase font-bold text-[18px] min-w-[150px] hover:opacity-[0.8] cursor-pointer duration-500 hover:duration-500   text-main-button bg-main-button-bg py-[8px] px-[13px] text-white rounded-[10px] ">
            open {id}
          </button>
        </div>

        <img
          src={getImagePath(poster_path)}
          className="inset-0 w-full h-full z-[-3]  object-cover absolute"
        />
      </div>
    </div>
  );
}
