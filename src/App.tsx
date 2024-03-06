// app.tsx

import { Hello } from './components/Hello.tsx';

function App() {

  return (
    <div className=" bg-gray-200 max-w-screen-xl p-3 mx-auto rounded-xl">

      <div className="flex flex-col gap-5">


        USE YOUR COMPONENTS HERE...

        <Hello />

      </div>
    </div>
  )
}

export default App
