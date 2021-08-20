import { Link } from 'react-router-dom';

export interface FilmPreviewProps {
  id: number;
  title: string;
  description: string;
  posterLink: string | null;
}

export const FilmPreview = ({
  title,
  description,
  posterLink,
}: FilmPreviewProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {posterLink === null ? (
        <img alt="nothing" />
      ) : (
        <img
          src={`http://image.tmdb.org/t/p/w500${posterLink}`}
          alt={`${title}`}
          crossOrigin="anonymous"
        />
      )}
      <div className="text-lg font-bold">{title}</div>
    </div>
  );
};
