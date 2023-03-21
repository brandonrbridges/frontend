import TenantCard from '../TenantCard'

export default function TenantGrid({ tenants }) {
  return (
    <ul role='list' className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {tenants.map((user) => (
        <TenantCard key={user._id} user={user} />
      ))}
    </ul>
  )
}
