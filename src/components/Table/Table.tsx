// Server Components
import { Columns, Head } from './Table.server'

const data = [
  {
    label: 'Name / Address',
    field: '110 Fake Street',
  },
  {
    label: 'Postcode',
    field: 'AB1 2CD',
  },
  {
    label: 'Status',
    field: 'setup',
  },
  {
    label: 'Tenant',
    field: 'John Smith',
  },
]

const Table = () => {
  return (
    <table className='w-full'>
      <Head labels={data?.map(({ label }) => label)} />
      <Columns fields={data?.map(({ field }) => field)} />
    </table>
  )
}

export default Table
