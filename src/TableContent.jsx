import React, { useState } from "react";

const TableContent = ({ data, difficulty, setDifficulty, company, setCompany}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; 
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
    // sorting based on the problem numbers
  const currentData = data
    .sort((a, b) => a.problemNumber - b.problemNumber)
    // adding it to the page
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    
 const handleClickDiff=()=>{
    setDifficulty("");
 }
 const handleClickComp=()=>{
    setCompany("");
 }

  return (
    <div className="flex flex-col justify-start items-center bg-darkBlue">
      <div className="p-4 m-auto w-[80%]">
        <div className="overflow-x-auto text-siteLavender">
        <button className="text-darkBlue bg-siteYellow rounded-xl m-2 px-3" onClick={handleClickDiff}>
            {difficulty!=""? difficulty + " Questions" :null}  
        </button>
        <button className="text-darkBlue bg-siteYellow rounded-xl m-2 px-3" onClick={handleClickComp}>
            {company!=""? company + "'s Questions" :null}  
        </button>
          <table className="table-auto border-siteYellow w-full">
            <thead className="bg-siteYellow">
              <tr>
                <th className="border-siteYellow px-4 py-2 text-left text-sm text-darkBlue">Prob#</th>
                <th className="border-siteYellow px-4 py-2 text-left text-sm text-darkBlue w-[40%]">Question</th>
                <th className="border-siteYellow px-4 py-2 text-left text-sm text-darkBlue">Difficulty</th>
                <th className="border-siteYellow px-4 py-2 text-left text-sm w-[20%] text-darkBlue">Companies</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, k) => (
                <tr key={k} className="hover:bg-[#112] hover:text-siteYellow border-b-2">
                  <td className="px-4 py-2">{row.problemNumber}</td>
                  <td className="px-4 py-2">
                    <a href={row.url} className="text-siteLavender hover:underline">
                      {row.name}
                    </a>
                  </td>
                  <td className="px-4 py-2">{row.difficulty}</td>
                  <td className="px-4 py-2">
                    <ul className="flex justify-start items-center gap-2 text-sm overflow-hidden">
                      {row.companies.slice(0, 5).map((comp, index) => (
                        <li key={index} className="bg-siteYellow text-xs px-2 py-1 rounded text-darkBlue">
                          {comp}
                        </li>
                      ))}
                      {row.companies.length > 5 && (
                        <li className="text-siteLavender text-xs">+{row.companies.length - 5}</li>
                      )}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-siteYellow rounded text-darkBlue ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-siteLavender"
          }`}
        >
          Previous
        </button>
        <span className="text-siteLavender">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-siteYellow rounded text-darkBlue ${
            currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-siteLavender"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableContent;
