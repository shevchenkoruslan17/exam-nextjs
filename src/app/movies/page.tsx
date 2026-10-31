import {getMovies, getGenres, searchMovies, getMoviesByFilters} from "@/services/movie.service";
import MoviesList from "@/components/MoviesList/MovieList";
import MovieSearch from "@/components/MovieSearch/MovieSearch";
import GenreFilter from "@/components/GenreFilter/GenreFilter";
import MovieSort from "@/components/MovieSort/MovieSort";
import Pagination from "@/components/Pagination/Pagination";

interface IProps {
    searchParams: Promise<{
        query?: string;
        genre?: string;
        sort?: string;
        page?: string;
    }>;
}

export default async function MoviesPage({ searchParams }: IProps) {
    const { query, genre, sort, page } = await searchParams;
    const currentPage = Number(page) || 1;

    const [moviesData, genres] = await Promise.all([query ? searchMovies(query, currentPage): getMoviesByFilters(
                currentPage,
                genre,
                sort || "popularity.desc"),
        getGenres(),
    ]);

    return (
        <main>
            <h1>Popular Movies</h1>
            <MovieSearch initialQuery={query} />
            <GenreFilter genres={genres} selectedGenre={genre} />
            <MovieSort selectedSort={sort} />
            <MoviesList movies={moviesData.results} genres={genres}/>
            <Pagination currentPage={moviesData.page} totalPages={moviesData.total_pages}/>
        </main>
    );
}
