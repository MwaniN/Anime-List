import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './App.js'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);