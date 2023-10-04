import React from "react";
import Button from "./Button";

function SearchBarAndQueryUpdate() {
  return (
    // TODO(Gionave): Implement the search bar and the button clicks to make it work
    <div className="flex justify-between mt-4">
      <div className="flex  items-center  w-full justify-evenly mr-2 ">
        <input
          type="text"
          placeholder="Search City"
          className="w-full p-1 rounded-sm border"
        />
        <Button icon="BsSearch" />
        <Button icon="FiMapPin" />
      </div>
      <div className="flex text-white items-center">
        <Button text="ºC" />|
        <Button text="ºF" />
      </div>
    </div>
  );
}

export default SearchBarAndQueryUpdate;
