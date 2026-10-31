"use client";

import { useRouter } from "next/navigation";

interface IProps {
    selectedSort?: string;
}

export default function MovieSort({ selectedSort = "popularity.desc" }: IProps) {
    const router = useRouter();

    function handleChange(sort: string) {
        const params = new URLSearchParams(window.location.search);

        params.set("sort", sort);
        params.delete("page");

        const queryString = params.toString();
        router.push(`/movies?${queryString}`);
    }

    return (
        <select
            value={selectedSort}
            onChange={(event) => handleChange(event.target.value)}>
            <option value="popularity.desc">Popularity</option>
            <option value="vote_average.desc">Rating</option>
            <option value="primary_release_date.desc">Release date</option>
        </select>
    );
}
