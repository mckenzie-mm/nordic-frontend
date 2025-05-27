"use client";

import CardSkeletonArray from "@/app/ui/card-skeleton-array";

export default function Skeleton() {
  return (
    <>
      <div className="category-header">
          <section className="section">
            <h1 className="category-name">{"Bracelets"}</h1>
          </section>
      </div>
      <CardSkeletonArray />
    </>
  );
}

  