import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { App } from './App';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
