import Image from "next/image";
import Link from "next/link";
import type { IMovieDetails } from "@/types/movie.types";
import GenreBadge from "@/components/GenreBadge/GenreBadge";

interface IProps {
    movie: IMovieDetails;
}

export default function MovieInfo({ movie }: IProps) {
    return (
        <article className="movie-details">
            <Link href="/movies" className="movie-details__back">
                ← Back to movies
            </Link>

            <div className="movie-details__content">
                <div className="movie-details__poster">
                    {movie.poster_path ? (
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            width={500}
                            height={750}
                            priority
                        />
                    ) : (
                        <div className="movie-details__no-poster">
                            No poster available
                        </div>
                    )}
                </div>

                <div className="movie-details__info">
                    <h1>{movie.title}</h1>{movie.tagline && (
                        <h2 className="movie-details__tagline">
                            {movie.tagline}
                        </h2>
                    )}

                    <div className="movie-details__rating">
                        ⭐ {movie.vote_average.toFixed(1)} / 10
                        <span>({movie.vote_count} votes)</span>
                    </div>

                    <p className="movie-details__overview">
                        {movie.overview || "No description available."}
                    </p>

                    <div className="movie-details__genres">
                        {movie.genres.map((genre) => (
                            <GenreBadge key={genre.id} name={genre.name}/>
                        ))}
                    </div>

                    <div className="movie-details__facts">
                        <p>
                            <strong>Original title:</strong>
                            <span>{movie.original_title}</span>
                        </p>
                        <p>
                            <strong>Release date:</strong>
                            <span>{movie.release_date || "Unknown"}</span>
                        </p>
                        <p>
                            <strong>Runtime:</strong>
                            <span>{movie.runtime ? `${movie.runtime} min` : "Unknown"}</span>
                        </p>
                        <p>
                            <strong>Status:</strong>
                            <span>{movie.status || "Unknown"}</span>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}
