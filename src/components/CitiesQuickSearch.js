import React from "react";
import Button from "./Button";

function CitiesQuickSearch({ setQuery }) {
  return (
    <div className="">
      <div className="flex justify-between">
        <Button text="London" setQuery={setQuery} updateQueryTo={"london"} />
        <Button text="Paris" setQuery={setQuery} updateQueryTo={"paris"} />
        <Button text="Tokio" setQuery={setQuery} updateQueryTo={"tokio"} />
        <Button
          text="São Paulo"
          setQuery={setQuery}
          updateQueryTo={"sao paulo"}
        />
        <Button text="Sydney" setQuery={setQuery} updateQueryTo={"sydney"} />
      </div>
    </div>
  );
}

export default CitiesQuickSearch;
