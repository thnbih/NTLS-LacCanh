import React from "react";

function Cell({
  id,
  cellFindingHandler,
  pathDef,
  pathClassName,
  textTransform,
  textContent,
}) {
  return (
    <>
      <path
        id={id}
        onClick={cellFindingHandler}
        className={`hover-bg-gray ${pathClassName}`}
        fill="#E0E0E0"
        stroke="#000000"
        strokeWidth="2"
        d={pathDef}
      />
      <text
        fontFamily="'MyriadPro-Semibold'"
        fontSize="700px"
        transform={`${textTransform} scale(1,-1)`}
        id={id}
        className="hover-bg-gray"
        onClick={cellFindingHandler}
      >
        {textContent}
      </text>
    </>
  );
}

export default Cell;
