import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/create',
    element: <h1>Create</h1>,
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
