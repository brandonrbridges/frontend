// React
import { Suspense } from 'react'

// Helpers
import { getData } from './PropertiesTable.helpers'

// Client Components
import { AddPropertyButton } from './PropertiesTable.client'

// Server Components
import { AddButton, Table, TableDescription } from './PropertiesTable.server'

const PropertiesTable = async () => {
  const { properties } = await getData()

  return (
    <div className=''>
      <div className='sm:flex sm:items-center'>
        <TableDescription />
        <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
          <AddButton />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='mt-8 flow-root'>
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              <Table properties={properties} />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default PropertiesTable
