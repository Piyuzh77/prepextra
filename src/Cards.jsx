import React from "react";

const Cards = ({ val }) => {
  return (
    <div className="bg-siteYellow p-3 m-2 rounded-lg transition duration-200 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[4px_4px_0px_0px_#D9DBF1] active:translate-x-0 active:translate-y-0 active:!shadow-none dark:hover:shadow-[4px_4px_0px_0px_#b9f6d2] ">
    <a href={val.url} className="w-[300px] h-[250px] flex flex-col justify-center items-center">
      <h1 className="text-lg  font-bold m-auto text-darkBlue hover:underline p-4">
      
        <a href={val.url} target="_blank" rel="noopener noreferrer">
          {val.name}
        </a>
      </h1>
      <p className="text-sm m-auto text-darkBlue mt-3">
        Languages: {val.language.join(", ")}
      </p>
      <h2 className="text-md font-medium m-3 text-darkBlue">
        {val.technology}
      </h2>
    </a>
    </div>
  );
};

export default Cards;
