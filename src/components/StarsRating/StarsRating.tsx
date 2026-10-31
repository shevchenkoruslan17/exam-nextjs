interface IProps {
    rating: number;
}

export default function StarsRating({ rating }: IProps){
    return (
        <p className="rating">
            ⭐ {rating.toFixed(1)} / 10
        </p>
    );
}