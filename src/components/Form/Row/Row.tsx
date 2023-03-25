const Row = ({ label, input }: { label: React.ReactNode; input: React.ReactNode }) => (
  <div className='space-y-6 sm:space-y-5'>
    <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
      {label}
      <div className='mt-2 sm:col-span-2 sm:mt-0'>
        <div className='flex max-w-lg'>{input}</div>
      </div>
    </div>
  </div>
)

export default Row
