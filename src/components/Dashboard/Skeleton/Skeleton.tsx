import Panel from '../Panel'

const Skeleton = (props) => {
  return (
    <Panel className={'animate-pulse ' + props?.className}>
      <div role='status' className='max-w-sm animate-pulse'>
        <div className='h-2.5 bg-gray-200 rounded-full w-48 mb-4'></div>
        <div className='h-2 bg-gray-200 rounded-full max-w-4/5 mb-2.5'></div>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
        <div className='h-2 bg-gray-200 rounded-full max-w-2/8 mb-2.5'></div>
        <div className='h-2 bg-gray-200 rounded-full max-w-3/4 mb-2.5'></div>
        <div className='h-2 bg-gray-200 rounded-full max-w-3/5'></div>
        <span className='sr-only'>Loading...</span>
      </div>
    </Panel>
  )
}

export default Skeleton
