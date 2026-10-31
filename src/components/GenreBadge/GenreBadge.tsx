interface IProps {
    name: string;
}

export default function GenreBadge({ name }: IProps){
    return <span className="genre-badge">{name}</span>;
}