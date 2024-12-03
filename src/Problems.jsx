import React, { useState, useEffect, useRef } from "react";
import TableContent from "./TableContent";
import data from "/output.json";
import emoji from "./assets/Emojicon.png"

export const Problems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 768); // Initial check for screen size
  const dropdownRef = useRef(null);

  const filteredData = data.filter((row) => {
    const matchesDifficulty = difficulty
      ? row.difficulty.toLowerCase() === difficulty.toLowerCase()
      : true;
    const matchesSearch =
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.companies.some((company) =>
        company.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesDifficulty && matchesSearch;
  });

  const clearFilters = () => {
    setDifficulty("");
    setSearchQuery("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 768); // Update screen size check
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Render small screen warning
  if (isScreenSmall) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-darkBlue text-siteLavender px-4 text-center">
        <img src={emoji} className="w-[130px] h-[130px] "/>
        <p className="text-lg mb-4">
          You're not supposed to think about grind when you're on your phone.
        </p>
        <p className="text-lg">
          Either work or enjoy. See you in front of a wider screen!
        </p>
      </div>
    );
  }

  
  return (
    <>
      <div className="flex justify-start items-center bg-darkBlue">
        <div className="m-auto mt-3 p-4 relative w-[500px] flex justify-center items-center">
          <div className="relative">
            <button
              className="bg-darkBlue text-siteLavender border border-siteYellow w-[100px] h-[35px] min-w-[80px] rounded-lg mr-2 active:shadow-sm hover:drop"
              onClick={() => setIsOpen(!isOpen)}
            >
              Difficulty<span> </span>
            </button>
            <div
              ref={dropdownRef}
              className={`absolute left-0 w-[100px] bg-siteLavender shadow-lg rounded-xl border border-siteYellow 
                ${isOpen ? "opacity-100 translate-y-0 z-1 pointer-events-auto" : "opacity-0 translate-y-2 z-50 pointer-events-none"} 
                transition-all duration-300 ease-out z-10`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <ul className="py-2">
                <li
                  className="px-4 py-1 hover:shadow-lg text-darkBlue hover:translate-x-2 hover:-translate-y-1 transition-all cursor-pointer rounded-xl w-fit"
                  onClick={() => {
                    setDifficulty("Easy");
                    setIsOpen(false);
                  }}
                >
                  Easy
                </li>
                <li
                  className="px-4 py-1 hover:shadow-lg text-darkBlue hover:translate-x-2 hover:-translate-y-1 transition-all cursor-pointer rounded-xl w-fit"
                  onClick={() => {
                    setDifficulty("Medium");
                    setIsOpen(false);
                  }}
                >
                  Medium
                </li>
                <li
                  className="px-4 py-1 hover:shadow-lg text-darkBlue hover:translate-x-2 hover:-translate-y-1 transition-all cursor-pointer rounded-xl w-fit"
                  onClick={() => {
                    setDifficulty("Hard");
                    setIsOpen(false);
                  }}
                >
                  Hard
                </li>
              </ul>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search Problems or Companies"
            className="w-[500px] h-[40px] min-w-[450px] rounded-3xl px-4 border border-siteYellow bg-darkBlue focus:shadow-lg transition-all outline-none text-siteLavender"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="text-center ml-2 min-w-fit flex justify-center items-center">
            <button
              onClick={clearFilters}
              className="bg-darkBlue text-siteLavender py-2 px-4 rounded-lg border border-siteYellow hover:bg-siteYellow transition-all"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
      <TableContent
        data={filteredData}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        company={searchQuery}
        setCompany={setSearchQuery}
      />
    </>
  );
};

export default Problems;
