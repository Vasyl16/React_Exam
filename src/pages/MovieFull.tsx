import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { useGetMovieFull } from '../api/query/useGetMovieFull';
import { getImagePath } from '../helpers/getImagePath';

export const MovieFull: React.FC = () => {
  const { id = '' } = useParams();

  const navigate = useNavigate();

  if (!id) {
    navigate(ROUTES.HOME);
  }

  const { data: movieData, isLoading, error } = useGetMovieFull(id);

  console.log(movieData);

  if (isLoading) {
    return (
      <div>
        <svg className="h-[30px] w-[30px] object-cover m-[40px_auto_0] spin-endless stroke-main-text duration-500 ">
          <use href="/icons/sprite.svg#loader-icon"></use>
        </svg>
      </div>
    );
  }

  if (error || !movieData) {
    return (
      <div className="flex flex-col items-center mt-[40px]  gap-[30px] ">
        <h4 className="text-[30px]">Movie Not Found</h4>

        <div className="flex gap-[20px] items-center ">
          <p className="text-[20px] ">Please go back</p>

          <button
            onClick={() => navigate(ROUTES.HOME)}
            className="text-white cursor-pointer hover:opacity-50 duration-300 text-[20px] font-semibold bg-main-button-bg py-[6px] px-[10px] rounded-[7px]"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="py-[30px] my-[20px] ">
      <div className="container">
        <h1 className="text-[30px] text-center">{movieData.title} </h1>

        <div className="flex gap-[20px] mt-[30px] max-h-[700px] justify-center">
          <img
            className="w-[40%] object-cover rounded-[20px] "
            src={getImagePath(movieData.poster_path)}
          />
          <div className="flex flex-col gap-[30px]  ">
            <ul className="flex flex-col gap-[20px] ">
              <li className="flex items-end  gap-[8px] ">
                <span className="text-[18px] ">Rating:</span>

                <div className="mb-[2px]">
                  <StarRatings
                    rating={movieData.vote_average}
                    starRatedColor="#fbbf24"
                    numberOfStars={10}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />
                </div>
              </li>

              <li className="flex items-end text-[18px]  gap-[8px] ">
                Vote Count: {movieData.vote_count}
              </li>

              <li className="text-[18px] flex gap-[15px] items-center ">
                Genres:
                <ul className="flex gap-[10px]">
                  {movieData.genres.map((genre) => (
                    <li
                      className="text-white font-semibold bg-main-button-bg py-[6px] px-[10px] rounded-[7px]"
                      key={genre.id}
                    >
                      {genre.name}{' '}
                    </li>
                  ))}
                </ul>
              </li>

              <li className="text-[18px] flex gap-[15px] items-center">
                Product country:{' '}
                <ul className="flex gap-[10px]">
                  {movieData.production_countries.map((country, i) => (
                    <li key={i}>
                      {country.name}
                      {i + 1 !== movieData.production_countries.length &&
                        ','}{' '}
                    </li>
                  ))}
                </ul>{' '}
              </li>

              <li className="text-[18px] flex gap-[15px] items-start">
                <span className="shrink-0"> Product companies:</span>
                <ul className="flex flex-wrap gap-[10px]">
                  {movieData.production_companies.map((company, i) => (
                    <li
                      className="flex gap-[10px] items-center "
                      key={company.id}
                    >
                      <span>{company.name}</span>{' '}
                      <img
                        className="w-[20px] h-[20px] object-fill"
                        src={getImagePath(company.logo_path)}
                      />{' '}
                      <span>{company.origin_country}</span>
                      {i + 1 !== movieData.production_companies.length &&
                        ','}{' '}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="text-[18px] flex gap-[15px] items-start">
                {movieData.overview}
              </li>
            </ul>

            <Link
              to={ROUTES.HOME}
              className="text-white  cursor-pointer self-start hover:opacity-50 duration-300 text-[20px] font-semibold bg-main-button-bg py-[6px] px-[10px] rounded-[7px]"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
