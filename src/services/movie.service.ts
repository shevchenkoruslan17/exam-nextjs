import { tmdbFetch } from "@/lib/api";
import type {IMovieDetails, IMoviesResponse, IGenresResponse} from "@/types/movie.types";

export async function getMovies(page = 1) {
    return tmdbFetch<IMoviesResponse>(`/discover/movie?page=${page}`,
        { cache: "no-store" }
    );
}

export async function getGenres() {
    const data = await tmdbFetch<IGenresResponse>("/genre/movie/list", {next:{ revalidate: 86400 }});
    return data.genres;
}

export async function getMovieById(id: string) {
    return tmdbFetch<IMovieDetails>(`/movie/${id}`, { cache: "no-store" });
}

export async function searchMovies(query: string, page = 1) {
    return tmdbFetch<IMoviesResponse>(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`,
        { cache: "no-store" }
    );
}

export async function getMoviesByFilters(page = 1,genre?: string,sort = "popularity.desc") {
    const params = new URLSearchParams();

    params.set("page", String(page));
    params.set("sort_by", sort);
    if (genre) {
        params.set("with_genres", genre);
    }
    return tmdbFetch<IMoviesResponse>(`/discover/movie?${params.toString()}`,{cache: "no-store" });
}
