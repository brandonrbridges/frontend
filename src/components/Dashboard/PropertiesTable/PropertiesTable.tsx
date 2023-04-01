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
      <TableDescription
        title='Properties'
        description='Easily manage all of your properties.'
        actions={
          <>
            <AddButton />
          </>
        }
      />
      <Suspense fallback={<div>Loading...</div>}>
        <div className='mt-8 flow-root'>
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='min-w-full py-2 inline-block align-middle sm:px-6 lg:px-8'>
              <Table properties={properties} />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default PropertiesTable
