import React from 'react';
import { Link } from 'react-router-dom';

import { getImagePath } from '../helpers/getImagePath';
import type { MovieData } from '../types/movieTypes';
import { formatSmartDate } from '../helpers/formatDate';
import { truncateText } from '../helpers/truncateText';

const MovieItem: React.FC<MovieData> = ({
  id,
  release_date,
  title,
  poster_path,
}) => {
  return (
    <article className="relative basis-[200px] shrink-0 gap-[1px] flex flex-col  ">
      <Link className="overflow-hidden rounded-[10px]" to="">
        <img
          className="block h-[250px] duration-300 hover:scale-[1.1] object-cover "
          src={getImagePath(poster_path)}
        />
      </Link>
      <h3 className="text-[18px] font-medium grow">
        {truncateText(title + id, 40)}
      </h3>
      <p className="text-[16px]">{formatSmartDate(release_date)}</p>
    </article>
  );
};

export default MovieItem;
