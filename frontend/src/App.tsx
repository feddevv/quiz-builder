import { createBrowserRouter, RouterProvider } from 'react-router';
import Create from './pages/Create/Create';

const router = createBrowserRouter([
  {
    path: '/create',
    element: <Create />,
  },
  {
    path: '/quizzes',
    element: <h1>Quizzes</h1>,
  },
  {
    path: '/quizzes/:id',
    element: <h1>Quiz</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
