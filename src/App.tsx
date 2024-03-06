// app.tsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-gray-200 max-w-screen-xl p-3 mx-auto rounded-xl">

      <div className="flex flex-col gap-5">
        <h1 className="text-3xl ">UIKIT</h1>

        <div
          className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
              acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#"
             className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more

            {/*NEW: fixed by https://transform.tools/html-to-jsx*/}

            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>

          </a>
        </div>


        <button
          className="bg-sky-400 px-3 py-1 rounded-xl hover:bg-sky-700 hover:text-white transition disabled:opacity-35 disabled:pointer-events-none"
          onClick={() => setCount(s => s + 1)}>CLICK ME {count}</button>

      </div>
    </div>
  )
}

export default App
