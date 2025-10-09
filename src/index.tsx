import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import CarouselView from './routes/CarouselView';
import GalleryView from './components/GalleryView';
import SearchInput from './components/SearchInput';


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
      { path: '/', element: <SearchInput /> }, // no default component, handled in App via TabSection
      { path: 'gallery', element: <GalleryView/> }, 
      { path: 'carousel/:id', element: <CarouselView /> }
    ]
  }
], {basename: "/MP2"}
);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
