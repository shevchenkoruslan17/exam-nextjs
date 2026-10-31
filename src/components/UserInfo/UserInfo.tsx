interface IProps {
    name: string;
}

export default function UserInfo({ name }:IProps){
    return (
        <div>
            <span
                style={{
                    display: "inline-flex",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#777",
                    color: "white",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                {name.charAt(0).toUpperCase()}
            </span>
            <span>{name}</span>
        </div>
    );
}
