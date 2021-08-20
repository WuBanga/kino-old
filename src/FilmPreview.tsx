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
      <div className="group relative">
        {posterLink === null ? (
          <div className="bg-gray-200 w-full">Kᴉno</div>
        ) : (
          <img
            className="filter group-hover:brightness-30"
            src={posterLink}
            alt={`Poster of ${title} film`}
            crossOrigin="anonymous"
          />
        )}
        <p className="text-white text-xl absolute left-2 right-2 bottom-2 hidden group-hover:block">
          {description}
        </p>
      </div>
      <figcaption className="text-2xl font-bold center">{title}</figcaption>
    </figure>
  );
};
