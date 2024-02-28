//  main.ts
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import DemoButton from './pages/DemoButton.tsx';
import DemoCard from './pages/DemoCard.tsx';
import DemoMisc from './pages/DemoMisc.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/demo-buttons', element: <DemoButton /> },
      { path: '/demo-card', element: <DemoCard /> },
      { path: '/demo-misc', element: <DemoMisc /> },
      { path: '/', element: <Navigate to="/demo-button" />}
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
