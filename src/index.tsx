import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import CarouselView from './routes/CarouselView';
import TabSection from './components/TabSection';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//const router = createBrowserRouter([
//  { path: '/', element: <App /> },
 // { path: '/carousel/:id', element: <CarouselView /> }
//]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: null }, // no default component, handled in App via TabSection
      { path: 'carousel/:id', element: <CarouselView /> }
    ]
  }
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
