export default function PostSpinner() {
  return (
    <div className='flex items-center justify-center space-x-1 my-2'>
      <div className='w-1 h-1 rounded-full animate-pulse bg-zinc-400'></div>
      <div className='w-1 h-1 rounded-full animate-pulse bg-zinc-400'></div>
      <div className='w-1 h-1 rounded-full animate-pulse bg-zinc-400'></div>
    </div>
  )
}
