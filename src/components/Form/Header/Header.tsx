const Header = ({ title, description }: { title: string; description: string }) => (
  <div>
    <h3 className='text-base font-semibold leading-6 text-gray-900'>{title}</h3>
    <p className='mt-1 text-sm text-gray-500'>{description}</p>
  </div>
)

export default Header
