import React, { Suspense } from "react";
import SearchFood from "../components/SearchFood";

// option-1:
const FoodPromise = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
  );
  const data = await res.json();
  const foods = data.data;
  return foods;
};
const foodPromise2 = fetch(
  "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
).then((res) => res.json());
const FoodPage = () => {
  return (
    <div>
      <Suspense fallback={<div> Loading</div>}>
        {/* <h2>hello nextjs</h2> */}
        <SearchFood foodPromise={foodPromise2}></SearchFood>
      </Suspense>
    </div>
  );
};

export default FoodPage;
