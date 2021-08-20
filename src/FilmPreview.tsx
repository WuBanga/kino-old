import { Link } from 'react-router-dom';

export interface FilmPreviewProps {
  id: number;
  title: string;
  description: string;
  posterLink: string | null;
}

const base_url = 'https://image.tmdb.org/t/p/';
const file_size = 'w500';
const file_path = '/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg';

('https://image.tmdb.org/t/p/w500/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg');

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
