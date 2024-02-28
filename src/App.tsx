// app.tsx
import * as React from 'react';
// NEW
import * as FB from './components';

function App() {

  function doSomething(e: React.MouseEvent) {
    console.log(' do something ', e)
  }
  return (
    <div className=" bg-gray-200 max-w-screen-xl p-3 mx-auto rounded-xl">

      <div className="flex flex-col gap-5">

        <FB.Weather city="Milano "/>

        <FB.Heading />
        <FB.Heading size={2}/>
        <FB.Heading size={3}/>

        <FB.Card
          title="My Awesome Card #1"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam commodi consequuntur deserunt dolore dolores doloribus ea eius eos inventore ipsa magni mollitia nam praesentium quidem similique, tenetur vel voluptatum.
        </FB.Card>


        <FB.Card
          title="My Awesome Card #1"
        >
          <div className="flex gap-3">
            <FB.Card title="left">...left...</FB.Card>
            <FB.Card title="right">...right...</FB.Card>
          </div>
        </FB.Card>


        <FB.Card
          title="My Awesome Card #2"
          buttonLabel="Visit site"
          buttonUrl="http://www.google.com"
        >
          <form>
            <input type="text" className="border-2"/>
            <input type="text" className="border-2"/>
          </form>
        </FB.Card>

        <FB.Button disabled>One</FB.Button>
        <FB.Button onMouseOver={doSomething} variant="success">Two</FB.Button>
        <FB.Button onClick={doSomething} variant="danger">Three</FB.Button>

      </div>
    </div>
  )
}

export default App
