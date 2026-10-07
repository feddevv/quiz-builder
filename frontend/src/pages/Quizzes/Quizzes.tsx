import { Link } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import Quiz from './Quiz';
import type { GetQuizzesResponseDTO } from '../../types';

export default function Quizzes() {
  const { data, loading, setData } = useFetch<GetQuizzesResponseDTO[]>(
    'http://localhost:3000/api/quizzes',
  );

  const handleDeleteQuiz = async (id: number) => {
    const res = await fetch(`http://localhost:3000/api/quizzes/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error('Unable to delete');

    setData((prev) => prev?.filter((el) => el.id !== id) ?? null);
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Quizzes</h1>
            <p className="mt-1 text-sm text-slate-500">
              Browse, manage, or take available quizzes.
            </p>
          </div>
          <Link
            to="/create"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            + Create New Quiz
          </Link>
        </div>

        <div className="space-y-3">
          {data &&
            data.map((q) => (
              <Quiz
                id={q.id}
                questionsAmount={q.questionsAmount}
                title={q.title}
                key={q.id}
                onDelete={() => handleDeleteQuiz(q.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
