import { Link, useParams } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import type { GetQuizResponseDTO } from '../../types';
import QuizQuestion from './QuizQuestion';

export default function QuizDetails() {
  const { id } = useParams();

  const { data, loading } = useFetch<GetQuizResponseDTO>(
    `http://localhost:3000/api/quizzes/${Number(id)}`,
  );

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
        <div className="mb-6">
          <Link
            to="/quizzes"
            className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-4"
          >
            ← Back to Quizzes
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">{data!.title}</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500 bg-slate-200/70 px-3 py-1.5 rounded-lg">
                Read-only
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {data!.questions.map((q, index) => (
            <QuizQuestion
              id={q.id}
              index={index}
              options={q.options}
              question={q.question}
              type={q.type}
              key={q.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
