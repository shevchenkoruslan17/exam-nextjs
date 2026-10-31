"use client";

import { useRouter } from "next/navigation";
import { IGenre } from "@/types/movie.types";

interface IProps {
    genres: IGenre[];
    selectedGenre?: string;
}

export default function GenreFilter({ genres, selectedGenre = "" }: IProps){
    const router = useRouter();

    function handleChange(genreId: string) {
        const params = new URLSearchParams(window.location.search);

        if (genreId) {
            params.set("genre", genreId);
        } else {
            params.delete("genre");
        }
        params.delete("page");

        const queryString = params.toString();
        router.push(queryString ? `/movies?${queryString}` : "/movies");
    }

    return (
        <select
            value={selectedGenre}
            onChange={(event) => handleChange(event.target.value)}>
            <option value="">All genres</option>

            {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                    {genre.name}
                </option>
            ))}
        </select>
    );
}
