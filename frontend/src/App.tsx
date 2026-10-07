import { createBrowserRouter, RouterProvider } from 'react-router';
import Create from './pages/Create/Create';
import Quizzes from './pages/Quizzes/Quizzes';

const router = createBrowserRouter([
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
    element: <h1>Quiz</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
