import { classNames } from '@/helpers'

export const ListItemDetails = ({ item }) => {
  return (
    <>
      <span className='truncate'>{item.name}</span>
      {item.count ? (
        <span
          className={classNames(
            item.href === '#' ? 'bg-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200',
            'ml-auto inline-block rounded-full py-0.5 px-3 text-xs'
          )}
        >
          {item.count}
        </span>
      ) : null}
    </>
  )
}
