// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import History from './pages/History/History'
// import Home from './pages/Home/Home';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "/history",
//         element: <History />
//       },
//       {
//         path: "/",
//         element: <Home />
//       }
//     ]
//   }
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import History from './pages/History/History';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // shorthand for path: '', means this will be rendered at '/'
        element: <Home />
      },
      {
        path: 'history',
        element: <History />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
