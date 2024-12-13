import React from 'react'

interface TableProbs{
  headData:string[]; 
  bodyData:{[key:string]:any}[];
}
const Tables: React.FC<TableProbs> = ({headData,bodyData}) => {
  return (
    <div className='overflow-x-auto rounded-2xl'>
      <table className="table-auto border-collapse border w-full text-sm text-left">
        <thead className="bg-[#23326d] text-center  ">
          <tr className='h-[72px]'>
            {headData.map((header, index) => (
              <th
                key={index}
                className="border-none px-4 py-2 text-[#fff] text-lg font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-[#dde7ff] '>
          {bodyData.map((row,rowIndex)=>(
            <tr key={rowIndex} className='border border-x-0 border-[#919bb1]  h-14 text-center '>
            {headData.map((header,colIndex)=>(
              <td key={colIndex} className='text-lg font-medium'>
                {row[header] || 'n/a' } 
            </td>
            ))}
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tables
