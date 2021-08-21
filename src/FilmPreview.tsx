import { Link } from 'react-router-dom';

export interface FilmPreviewProps {
  id: number;
  title: string;
  description: string;
  posterLink: string | null;
}

export const FilmPreview = ({
  id,
  title,
  description,
  posterLink,
}: FilmPreviewProps) => {
  return (
    <figure className="flex flex-col items-center gap-1">
      <div className="group relative overflow-hidden">
        {posterLink === null ? (
          <div className="bg-gray-200 w-full">Kᴉno</div>
        ) : (
          <img
            className="filter group-hover:brightness-30"
            src={posterLink}
            alt={`Poster of ${title} film`}
            crossOrigin="anonymous"
            loading="lazy"
            width="500"
            height="750"
          />
        )}
        <p className="text-white text-xl absolute left-2 right-2 bottom-2 text-justify transform transition-all translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
          {description}
        </p>
      </div>

      <figcaption className="text-2xl font-bold center">
        <Link to={`/movie/${id}`}>
          <a>{title}</a>
        </Link>
      </figcaption>
    </figure>
  );
};
