export interface IGenre {
    id: number;
    name: string;
}
export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genre_ids: number[];
}
export interface IMoviesResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}
export interface IGenresResponse {
    genres: IGenre[];
}
export interface IMovieDetails {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genres: IGenre[];
    runtime: number | null;
    status: string;
    tagline: string;
}