import { RadioGroupItem } from '../ui/radio-group'
import { RadioGroup } from '../ui/radio-group'
import React from 'react'

const filterData = [
  {
    filterType: "Location",
    array: ['Delhi NCR', 'Pune', 'Mumbai', 'Bangalore', 'Hyderabad']
  },
  {
    filterType: "Industry",
    array: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer']
  },
  {
    filterType: "Salary",
    array: ['0-40k', '42-1lakh', '1lakh-5lakh']
  },
]
function FilterCard() {
  return (
    <div>
      <h1 className='font-bold text-lg '>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
          filterData.map((data, index) => (
            <div className='w-full rounded-mg bg-white'>
              <h1 className='font-bold text-lg '>
                {data.filterType}
              </h1>
              {
                data.array.map((data,index)=>{
                  return(
                          <div className='flex item-center space-x-2 my-2'>
                            <RadioGroupItem value={data}/>
                            <label>{data}</label>
                          </div>
                        )
              })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard