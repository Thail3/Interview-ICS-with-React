import React, { useState, useContext, useEffect } from "react";
import data from "../example_data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize] = useState(20);

  console.log("restaurant context", restaurant);

  // const getItemList = (data, pageNumber, pageSize) => {
  //   const firstIndex = (pageNumber - 1) * pageSize;
  //   const lastIndex = pageNumber * pageSize - 1;
  //   return data.filter((_, index) => {
  //     return index >= firstIndex && index <= lastIndex;
  //   });
  // };

  const totalPosts = restaurant.length; //? 40

  const indexOfLastPost = pageNumber + 1 * pageSize;
  const indexOfFirstPost = indexOfLastPost - pageSize;
  const currentPage = restaurant.slice(indexOfFirstPost, indexOfLastPost);
  console.log("currentPage context", currentPage);

  const nextPage = () => {
    setPageNumber((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage >= totalPosts) return nextPage;
    });
  };

  const prevPage = () => {
    setPageNumber((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = 1;
      }
      return prevPage;
    });
  };

  const handlePage = (numberOfPage) => {
    setPageNumber(numberOfPage);
  };

  useEffect(() => {
    setRestaurant([...data]);
  }, [pageNumber]);

  return (
    <AppContext.Provider
      value={{
        restaurant,
        pageNumber,
        pageSize,
        totalPosts,
        currentPage,
        nextPage,
        prevPage,
        handlePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
