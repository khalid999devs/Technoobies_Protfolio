import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from './Pages/Home.jsx';

import Projects from './Pages/Projects.jsx';
import Project from './Pages/Project.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Projects />,
        path: 'projects',
      },
      {
        element: <Project />,
        path: 'projects/:projectId',
      },
      {
        element: <Contact />,
        path: 'contact',
      },
      {
        element: <About />,
        path: 'about',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
