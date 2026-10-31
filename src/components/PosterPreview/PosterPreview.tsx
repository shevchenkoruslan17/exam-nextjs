import Image from "next/image";

interface IProps {
    posterPath: string | null;
    title: string;
}

export default function PosterPreview({posterPath, title,}:IProps){
    if (!posterPath) {
        return <div>No poster available</div>;
    }

    return (
        <Image
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={title}
            width={200}
            height={300}
        />
    );
}