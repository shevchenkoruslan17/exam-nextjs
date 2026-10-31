import { IMovie, IGenre } from "@/types/movie.types";
import MoviesListCard from "@/components/MoviesListCard/MovieListCard";

interface IProps {
    movies: IMovie[];
    genres: IGenre[];
}

export default function MoviesList({ movies, genres }: IProps){
    if (!movies.length) {
        return <p>Movies not found</p>;
    }

    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie} genres={genres}/>
            ))}
        </div>
    );
}