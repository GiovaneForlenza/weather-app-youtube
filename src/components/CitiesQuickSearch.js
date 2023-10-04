import React from "react";
import Button from "./Button";

function CitiesQuickSearch() {
  return (
    <div className="">
      <div className="flex justify-between">
        <Button text="London" />
        <Button text="Paris" />
        <Button text="Tokio" />
        <Button text="São Paulo" />
        <Button text="Sydney" />
      </div>
    </div>
  );
}

export default CitiesQuickSearch;
