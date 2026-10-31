import Link from "next/link";
import UserInfo from "@/components/UserInfo/UserInfo";

export default function Header() {
    return (
        <header>
            <Link href="/movies">
                <h1>MovieDB</h1>
            </Link>
            <nav>
                <Link href="/movies">Movies</Link>
            </nav>
            <UserInfo name="User" />
        </header>
    );
}
