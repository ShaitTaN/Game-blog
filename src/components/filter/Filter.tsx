import React, { FC, useState } from "react";
import "./filter.scss";

const Filter: FC = () => {
  const [dateSort, setDateSort] = useState("asc");
  const [nameSort, setNameSort] = useState("asc");
  const [activeSort, setActiveSort] = useState("date");

  const updateDateSort = () => {
    dateSort === "asc" ? setDateSort("desc") : setDateSort("asc");
  };
  const updateNameSort = () => {
    nameSort === "asc" ? setNameSort("desc") : setNameSort("asc");
  };

  const changeSort = (sort: string) => {
    if (sort === "date") {
      setActiveSort(sort);
      updateDateSort();
      return;
    }
    setActiveSort(sort);
    updateNameSort();
  };

  return (
    <div className="filter">
      <div
        className={
          activeSort === "date" ? "filter__sort active" : "filter__sort"
        }
        onClick={() => changeSort("date")}
      >
        Sort by date
        <svg
          className={
            dateSort === "asc"
              ? "filter__sort-arrow"
              : "filter__sort-arrow active"
          }
          width="24"
          height="24"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
        </svg>
      </div>
      <div
        className={
          activeSort === "name" ? "filter__sort active" : "filter__sort"
        }
        onClick={() => changeSort("name")}
      >
        Sort by name
        <svg
          className={
            nameSort === "asc"
              ? "filter__sort-arrow"
              : "filter__sort-arrow active"
          }
          width="24"
          height="24"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
        </svg>
      </div>
    </div>
  );
};

export default Filter;
