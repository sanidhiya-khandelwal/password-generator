
import './App.css'

function App() {



  return (
    <div className='w-full h-screen bg-black pt-10'>
      <div className='w-2/4 bg-slate-700 m-auto rounded-md p-4'>
        <div className='p-2 flex gap-2'>
          <input
            className='w-11/12 rounded-md p-1'
            type="text"
            placeholder='Password'
          />
          <button
            className='w-auto rounded-md p-1 bg-blue-600 text-white'>
            Copy
          </button>
        </div>
        <div className='flex gap-4 text-white p-2'>
          <div className='flex align-middle gap-2'>
            <input
              type="range"
              className='cursor-pointer'
            />
            <label>length 8</label>
          </div>
          <div className='flex align-middle gap-2'>
            <input
              type="checkbox"
              className='cursor-pointer'
            />
            <label>Characters</label>
          </div>
          <div className='flex align-middle gap-2'>
            <input
              type="checkbox"
              className='cursor-pointer'
            />
            <label>Numbers</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
