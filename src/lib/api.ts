const BASE_URL = "https://api.themoviedb.org/3";

type FetchOptions = {cache?: RequestCache;next?:{
        revalidate?: number;
        tags?: string[];
    };
};

export async function tmdbFetch<T>(endpoint: string,options:FetchOptions = {}): Promise<T> {
    const token = process.env.TMDB_ACCESS_TOKEN;

    if (!token) {throw new Error("TMDB_ACCESS_TOKEN is not defined")}

    const response = await fetch(`${BASE_URL}${endpoint}`,{...options,
        headers: {Authorization: `Bearer ${token}`,Accept: "application/json"}
    });

    if (!response.ok) {throw new Error(`TMDB API error: ${response.status}`)}
    return response.json();
}