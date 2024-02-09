import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./LandingPage";


const router = createBrowserRouter([
  {
      path: "/",
      element: <LandingPage />,
  }
]);

function App(){
  return(
      <div>
      <RouterProvider router={router} />
      </div>
  );
}

export default App; 

// function App() {
//   return (
//     <div>
//       <h1 className="text-6xl text-red-500">Hello, Tailwind CSS in React</h1>
//     </div>
//   );
// }

// export default App;
