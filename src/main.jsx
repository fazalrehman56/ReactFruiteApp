
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddItems from './additems';
import Items from './components/Items';
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // Layout component
    children: [
      {
        path:"additems",
        element: <AddItems />
      },
      {
        path: "items",
        element: <Items />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
