import React from "react";
import Button from "./Button";

function SearchBarAndQueryUpdate({ search, setSearch, setQuery, setUnits }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ q: search });
  };


  return (
    <div className="flex justify-between mt-4">
      <div className="flex  items-center  w-full justify-evenly mr-2 ">
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            value={search}
            placeholder="Search City"
            className="w-full p-1 rounded-sm border"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <Button
          icon="BsSearch"
          setQuery={setQuery}
          updateQueryTo={"search"}
          search={search}
        />
        <Button icon="FiMapPin" setQuery={setQuery} updateQueryTo={"current"} />
      </div>
      <div className="flex text-white items-center">
        <Button text="ºC" setUnits={setUnits} updateQueryTo={"metric"} />|
        <Button text="ºF" setUnits={setUnits} updateQueryTo={"imperial"} />
      </div>
    </div>
  );
}

export default SearchBarAndQueryUpdate;
