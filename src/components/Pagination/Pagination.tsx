"use client";

import { useRouter } from "next/navigation";

interface IProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: IProps) {
    const router = useRouter();

    function changePage(page: number) {
        const params = new URLSearchParams(window.location.search);

        params.set("page", String(page));
        router.push(`/movies?${params.toString()}`);
    }

    return (
        <div>
            <button
                disabled={currentPage <= 1}
                onClick={() => changePage(currentPage - 1)}>Previous
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button
                disabled={currentPage >= totalPages}
                onClick={() => changePage(currentPage + 1)}>Next
            </button>
        </div>
    );
}
