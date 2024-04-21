import { useState } from "react"

const AccordianItem = ({title,body, isPageOpen, setIsPageOpen}) => {
  return(
    <div className="border border-black">
      <div
       className="font-bold p-2 bg-slate-200 flex justify-between" 
        onClick={() => {
        setIsPageOpen(!isPageOpen)
      }}
        >
        <span>{title}</span>
        <span>⬇️</span>
      </div>
      {isPageOpen && <div className="p-2">{body}</div>}
    </div>
  )
}

export default AccordianItem