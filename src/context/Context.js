import React, { useState, useContext, useEffect } from "react";
import data from "../example_data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(13);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  console.log("restaurant context", restaurant);
  console.log("searchInput context", searchInput);

  // const getItemList = (data, pageNumber, pageSize) => {
  //   const firstIndex = (pageNumber - 1) * pageSize;
  //   const lastIndex = pageNumber * pageSize - 1;
  //   return data.filter((_, index) => {
  //     return index >= firstIndex && index <= lastIndex;
  //   });
  // };

  const totalPosts = restaurant.length; //? 40

  const indexOfLastPost = pageNumber * pageSize;
  const indexOfFirstPost = indexOfLastPost - pageSize;
  const currentPage = restaurant.slice(indexOfFirstPost, indexOfLastPost);
  console.log("currentPage context", currentPage);

  const nextPage = () => {
    setPageNumber((oldPage) => {
      let nextPage = oldPage + 1;
      let maxPage = Math.ceil(totalPosts / pageSize);

      if (nextPage > maxPage) {
        nextPage = maxPage;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPageNumber((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage <= 0) {
        prevPage = 1;
      }
      return prevPage;
    });
  };

  const handlePage = (numberOfPage) => {
    setPageNumber(numberOfPage);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = restaurant.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(restaurant);
    }
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
        searchInput,
        filteredResults,
        searchItems,
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
