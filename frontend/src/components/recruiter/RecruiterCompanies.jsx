import React from 'react'
import NavbarRecruiter from '../shared/NavbarRecruiter'
import CompaniesTable from './CompaniesTable'
import { Button } from '../ui/button'

function RecruiterCompanies() {
  return (
    <div>
      <NavbarRecruiter />
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex item-center justify-between '>
          <input
            className='w-fit'
            placeholder='filter by name'>
          </input>
        </div>
        <CompaniesTable/>
      </div>
    </div>
  )
}

export default RecruiterCompanies