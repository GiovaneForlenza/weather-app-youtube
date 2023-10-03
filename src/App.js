import Button from "./components/Button";

import { BsSearch } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

export default function App() {
  return (
    <main className="border-2 h-screen flex items-center justify-center">
      <div className="w-[500px] bg-gradient-to-b from-sky-500 to-indigo-500 h-[600px] py-5">
        <div className=" h-full mx-20">
          <div className="flex justify-between">
            <Button text="London" />
            <Button text="Paris" />
            <Button text="Tokio" />
            <Button text="São Paulo" />
            <Button text="Sydney" />
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <input type="text" name="" id="" placeholder="Search City" />
              <div className="">
                <BsSearch />
              </div>
              <div className="">
                <FiMapPin />
              </div>
            </div>
            <div className="flex">
              <Button text="ºC" /> |
              <Button text="ºF" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
