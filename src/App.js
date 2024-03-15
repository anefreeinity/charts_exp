import { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import LineChartComponent from "./recharts/LineChartComponent";
import PieChartComponent from "./recharts/PieChartComponent";
import BarChartComponent from "./recharts/BarChartComponent";
import GPieChartComponent from "./googlechart/GPieChartComponent";
import GBarChartComponent from "./googlechart/GBarChartComponent";
import GLineChartComponent from "./googlechart/GLineChartComponent";
import NotFound from "./NotFound";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth * 0.8);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight * 0.8);
  const dialog = useRef();

  function openModel() {
    dialog.current.open();
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth * 0.8);
      setWindowHeight(window.innerHeight * 0.8);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NavBar />}>
                <Route
                  index
                  element={
                    <LineChartComponent
                      width={windowWidth}
                      height={windowHeight}
                      dialog={dialog}
                    />
                  }
                />
                <Route
                  path="rechart/line"
                  element={
                    <LineChartComponent
                      width={windowWidth}
                      height={windowHeight}
                      dialog={dialog}
                    />
                  }
                />
                <Route
                  path="rechart/pie"
                  element={
                    <PieChartComponent
                      width={windowWidth}
                      height={windowHeight}
                      dialog={dialog}
                    />
                  }
                />

                <Route
                  path="rechart/bar"
                  element={
                    <BarChartComponent
                      width={windowWidth}
                      height={windowHeight}
                      dialog={dialog}
                    />
                  }
                />

                <Route
                  path="googlechart/line"
                  element={
                    <GLineChartComponent
                      width={windowWidth}
                      height={windowHeight}
                      dialog={dialog}
                    />
                  }
                />

                <Route
                  path="googlechart/bar"
                  element={
                    <GBarChartComponent
                      width={windowWidth}
                      height={windowHeight}
                      dialog={dialog}
                    />
                  }
                />

                <Route
                  path="googlechart/pie"
                  element={
                    <GPieChartComponent
                      width={windowWidth}
                      height={windowHeight}
                      dialog={dialog}
                    />
                  }
                />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
        <button
          className="absolute bottom-12 right-16 float-right bg-sky-600 text-white p-1 rounded px-2"
          onClick={openModel}
        >
          Save Image
        </button>
      </div>
    </>
  );
}

export default App;
