import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  let listOfRestaurants = [
    {
      info: {
        id: "38634",
        name: "Third Wave Coffee",
        cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹400 for two",
        cuisines: ["Beverages", "Bakery", "Continental"],
        avgRating: 3.6,
        parentId: "274773",
        deliveryTime: 29,
      },
    },
    {
      info: {
        id: "38635",
        name: "KFC",
        cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹400 for two",
        cuisines: ["Beverages", "Bakery", "Continental"],
        avgRating: 4.6,
        parentId: "274773",
        deliveryTime: 29,
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
