import { getMovieById } from "@/services/movie.service";
import MovieInfo from "@/components/MovieInfo/MovieInfo";
import { notFound } from "next/navigation";

interface IProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function MovieDetailsPage({params,}: IProps){
    const { id } = await params;

    try {
        const movie = await getMovieById(id);

        return (
            <main>
                <MovieInfo movie={movie}/>
            </main>
        );
    } catch {
        notFound();
    }
}