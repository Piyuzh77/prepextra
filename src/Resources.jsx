import React, { useState } from "react";
import Card from "./Cards";
import data from "/resourcesData.json";

const Resources = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full px-4">
      <div className="w-full max-w-[750px] max-h-[750px] grid grid-cols-1 sm:grid-cols-2 sm:max-w-[1100px] lg:grid-cols-3 gap-4 ">
        {currentCards.map((d, idx) => (
          <div key={idx}>
            <Card val={d} />
          </div>
        ))}
      </div>

      <div className="flex justify-center  items-center mt-44 sm:mt-4 space-x-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentPage === 1
              ? "bg-darkBlue text-siteLavender opacity-50 cursor-not-allowed"
              : "bg-siteLavender text-darkBlue hover:bg-darkBlue hover:text-siteLavender"
          }`}
        >
          Previous
        </button>
        <span className="mx-2 text-siteYellow font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentPage === totalPages
              ? "bg-darkBlue text-siteLavender opacity-50 cursor-not-allowed"
              : "bg-siteLavender text-darkBlue hover:bg-darkBlue hover:text-siteLavender"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Resources;
