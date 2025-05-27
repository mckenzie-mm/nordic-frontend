"use client";

import CardSkeleton from "./card-skeleton";

export default function CardSkeletonArray() {
  return (
      <section className="section">
        <div className="grid-products">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => <CardSkeleton key={index} />)}
        </div>
      </section>
  );
}

  