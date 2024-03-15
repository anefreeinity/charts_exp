import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const TABS_DATA = [
  {
    first_address: "rechart",
    last_address: "/pie",
    name: "Pie Chart",
    className: "py-1 px-4 bg-sky-800 rounded",
    isActive: false,
  },
  {
    first_address: "rechart",
    last_address: "/bar",
    name: "Bar Chart",
    className: "py-1 px-4 bg-sky-800 rounded",
    isActive: false,
  },
  {
    first_address: "rechart",
    last_address: "/line",
    name: "Line Chart",
    className: "py-1 px-4 bg-sky-600 rounded",
    isActive: true,
  },
];

export default function NavBar() {
  const [tabs, setTabs] = useState(TABS_DATA);
  const navigate = useNavigate();

  function handelTabChange(selectedTab) {
    let newTabs = [...tabs];

    newTabs.forEach((tab) => {
      if (tab.name === selectedTab.name) {
        tab.className = "py-1 px-4 bg-sky-600 rounded";
        tab.isActive = true;
      } else {
        tab.className = "py-1 px-4 bg-sky-800 rounded";
        tab.isActive = false;
      }
    });
    setTabs(newTabs);
  }

  function handelLibraryChange(event) {
    let selectedLibrary = document.getElementById("chartlibraries").value;

    let newTabs = [...tabs];
    let currentActiveLastAddress = "/line";
    newTabs.forEach((tab) => {
      tab.first_address = selectedLibrary;
      if (tab.isActive) {
        currentActiveLastAddress = tab.last_address;
      }
    });

    setTabs(newTabs);
    setTimeout(() => {
      navigate(selectedLibrary + currentActiveLastAddress);
    }, 200);
  }

  return (
    <>
      <nav className="absolute inset-x-0 top-0 w-screen h-16 bg-slate-700 text-white">
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <div className="flex flex-row-reverse gap-4 pe-4">
            {tabs.map((tab) => {
              return (
                <div key={tab.name} className={tab.className}>
                  <Link
                    onClick={() => {
                      handelTabChange(tab);
                    }}
                    to={tab.first_address + tab.last_address}
                  >
                    {tab.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 py-2 px-2">
          <select
            onChange={handelLibraryChange}
            className="ms-2 rounded py-2 px-4 bg-sky-600"
            name="chartlibraries"
            id="chartlibraries"
          >
            <option value="rechart">ReChart</option>
            <option value="googlechart">GoogleChart</option>
          </select>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
