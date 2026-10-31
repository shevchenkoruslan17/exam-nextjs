import Link from "next/link";
import { IMovie, IGenre } from "@/types/movie.types";
import PosterPreview from "@/components/PosterPreview/PosterPreview";
import StarsRating from "@/components/StarsRating/StarsRating";
import GenreBadge from "@/components/GenreBadge/GenreBadge";

interface IProps {
    movie: IMovie;
    genres: IGenre[];
}

export default function MoviesListCard({ movie, genres }: IProps) {
    const movieGenres = genres.filter((genre) => movie.genre_ids.includes(genre.id))

    return (
        <article className="movie-card">
            <Link href={`/movies/${movie.id}`} className="movie-card__link">
                <div className="movie-card__poster">
                    <PosterPreview posterPath={movie.poster_path} title={movie.title}/>
                </div>
                <h2 className="movie-card__title">{movie.title}</h2>
            </Link>

            <div className="movie-card__rating">
                <StarsRating rating={movie.vote_average}/>
            </div>
            <p className="movie-card__date">{movie.release_date || "Release date unknown"}</p>
            <div className="movie-card__genres">{movieGenres.map((genre) => (
                    <GenreBadge key={genre.id} name={genre.name}/>
                ))}
            </div>
        </article>
    );
}
