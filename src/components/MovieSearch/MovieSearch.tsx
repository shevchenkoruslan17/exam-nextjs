"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface IProps {
    initialQuery?: string;
}

export default function MovieSearch({ initialQuery = "" }: IProps){
    const [query, setQuery] = useState(initialQuery);
    const router = useRouter();

    function handleSearch() {
        const params = new URLSearchParams(window.location.search);

        params.delete("genre");
        params.delete("sort");
        params.delete("page");

        if (query.trim()) { params.set("query", query.trim());
        } else {
            params.delete("query");
        }
        const queryString = params.toString();

        router.push(queryString ? `/movies?${queryString}` : "/movies");
    }
    return (
        <div>
            <form onSubmit={(event) => {event.preventDefault();handleSearch()}}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}/>
                <button type="submit">Search
                </button>
            </form>
        </div>
    );
}
