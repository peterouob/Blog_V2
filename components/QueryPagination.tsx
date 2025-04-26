"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
} from "./ui/pagination";

interface QueryPaginationProps {
    totalPages: number;
    className?: string;
}

export function QueryPagination({ totalPages, className }: QueryPaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || 1;
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 5);

    if (endPage - startPage < 5) {
        startPage = Math.max(1, endPage - 5);
    }

    return (
        <Pagination className={className}>
            <PaginationContent>
                {prevPage >= 1 && (
                    <PaginationItem>
                        <PaginationPrevious href={createPageURL(prevPage)} />
                    </PaginationItem>
                )}


                {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            href={createPageURL(page)}
                            isActive={currentPage === page}
                            className="lg:text-lg md:text-lg text-sm"
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <PaginationItem>...</PaginationItem>}
                        <PaginationItem>
                            <PaginationLink href={createPageURL(totalPages)}>{totalPages}</PaginationLink>
                        </PaginationItem>
                    </>
                )}

                {nextPage <= totalPages && (
                    <PaginationItem>
                        <PaginationNext href={createPageURL(nextPage)} />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
}
