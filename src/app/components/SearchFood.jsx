import React, { use } from "react";

const SearchFood = ({ foodPromise }) => {
  // const [foods,setFoods] = useState ([]);
  // const res =await fetch('');
  // const data = await res.json();
  // const foods = data.dta;

  const foods = use(foodPromise).data;
  console.log(foods);
  // useEffect(() => {
  // fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods').then(res => res.json() )
  // .then(data => setFoods(data.data) )
  // } ,[searchText])
  return (
    <div>
      <h2>Top Foods:{foods.length}</h2>
      {/* {foods.length} */}
    </div>
  );
};

export default SearchFood;
