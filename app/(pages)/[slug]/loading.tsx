"use client";

import CardSkeleton from "../../ui/card-skeleton";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Skeleton() {
  return (
    <>
      <div className="category-header">
          <section className="section">
              <h1 className="category-name">{"Bracelets"}</h1>
          </section>
      </div>
        <section className="section">
            <div className="grid-products">
            {arr.map((index) => <CardSkeleton key={index} />)}
            </div>
        </section>
    </>
  );
}

  