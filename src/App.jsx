import { Canvas } from "@react-three/fiber";
import "./App.css";
import Table from "./Components/Model/Table";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [colorTable, setColorTable] = useState("#fff");
  const [colorChair, setColorChair] = useState("#fff");
  const [colorPlate, setColorPlate] = useState("#fff");

  const [data] = useState({
    title: {
      t1: "Change Table Color : ",
      t2: "Change Chair Color : ",
      t3: "Change Plate Color : ",
    },
  });

  const showAlert = () => {
    Swal.fire({
      title: "Your custom dining added to your cart",
      icon: "success",
      draggable: false,
    });
  };

  return (
    <div id="App">
      <div className="grid grid-cols-12 h-[100vh]">
        <Canvas dpr={[1, 2]} className="col-span-9 xl:col-span-10">
          <Table
            colorTable={colorTable}
            colorChair={colorChair}
            colorPlate={colorPlate}
          />
        </Canvas>
        <div className="col-span-3 gap-5 py-8 xl:col-span-2" id="controller">
          <div className="w-full">
            <h5 className="text-[11px] xl:text-[16px] text-white ps-2">
              {data.title.t1}{" "}
            </h5>
            <div className="flex flex-wrap justify-center w-full mt-6 gap-y-5 gap-x-3">
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#8B5A2B] cursor-pointer "
                onClick={() => setColorTable("#8B5A2B")}
              ></button>
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#F5F5F5] cursor-pointer "
                onClick={() => setColorTable("#F5F5F5")}
              ></button>
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#1A1A1A] cursor-pointer "
                onClick={() => setColorTable("#1A1A1A")}
              ></button>
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#556B2F] cursor-pointer"
                onClick={() => setColorTable("#556B2F")}
              ></button>
            </div>
          </div>

          <div className="w-full mt-[2rem] xl:mt-[5rem]">
            <h5 className="text-[11px] xl:text-[16px] text-white ps-2">
              {data.title.t2}
            </h5>
            <div className="flex flex-wrap justify-center w-full mt-6 gap-y-5 gap-x-3">
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#8B5A2B] cursor-pointer"
                onClick={() => setColorChair("#8B5A2B")}
              ></button>
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#F5F5F5] cursor-pointer"
                onClick={() => setColorChair("#F5F5F5")}
              ></button>
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#1A1A1A] cursor-pointer"
                onClick={() => setColorChair("#1A1A1A")}
              ></button>
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#556B2F] cursor-pointer"
                onClick={() => setColorChair("#556B2F")}
              ></button>
            </div>
          </div>

          <div className="w-full mt-[2rem] xl:mt-[5rem] ">
            <h5 className="text-[11px] xl:text-[16px] text-white ps-2">
              {data.title.t3}
            </h5>
            <div className="flex flex-wrap justify-center w-full mt-6 gap-y-5 gap-x-3">
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#8B5A2B] cursor-pointer"
                onClick={() => setColorPlate("#8B5A2B")}
              ></button>
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#F5F5F5] cursor-pointer"
                onClick={() => setColorPlate("#F5F5F5")}
              ></button>
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#1A1A1A] cursor-pointer"
                onClick={() => setColorPlate("#1A1A1A")}
              ></button>
              <button
                className="w-[35px] h-[35px] xl:w-[40px] xl:h-[40px] rounded-[50%] bg-[#556B2F] cursor-pointer"
                onClick={() => setColorPlate("#556B2F")}
              ></button>
            </div>
          </div>

          <div className="w-full mt-[2rem] xl:mt-[5rem] px-2 justify-center flex">
            <button
              className="py-3 px-2 xl:py-3 xl:px-7 rounded-2xl text-white bg-green-700 text-[12px] xl:text-[16px]"
              onClick={showAlert}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
