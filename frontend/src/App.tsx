import { createBrowserRouter, RouterProvider } from 'react-router';
import Create from './pages/Create/Create';
import Quizzes from './pages/Quizzes/Quizzes';
import QuizDetails from './pages/QuizDetails/QuizDetails';
import ErrorPage from './pages/Error/Error';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/quizzes',
        element: <Quizzes />,
      },
      {
        path: '/quizzes/:id',
        element: <QuizDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
