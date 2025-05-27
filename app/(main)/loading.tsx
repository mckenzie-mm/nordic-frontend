"use client";

import CardSkeleton from "../ui/card-skeleton";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Skeleton() {
  return (
    <>
        <section className="section">
            <div className="grid-products">
            {arr.map((index) => <CardSkeleton key={index} />)}
            </div>
        </section>
    </>
  );
}

  