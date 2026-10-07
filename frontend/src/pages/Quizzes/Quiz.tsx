interface QuizProps {
  id: number;
  title: string;
  questionsAmount: number;
  onDelete: () => void;
}

export default function Quiz({ id, questionsAmount, title, onDelete }: QuizProps) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex items-center justify-between p-5">
      <a href={`/quizzes/${id}`} className="flex-1 min-w-0 pr-4">
        <h2 className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
          {title}
        </h2>
        <div className="flex items-center gap-2 mt-1">
          <span className="inline-flex items-center text-xs font-medium text-slate-500">
            <svg
              className="w-4 h-4 mr-1 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {questionsAmount} {questionsAmount === 1 ? 'question' : 'questions'}
          </span>
        </div>
      </a>

      <div className="flex items-center gap-2 shrink-0">
        <a
          href={`/quizzes/${id}`}
          className="hidden sm:inline-flex items-center text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors mr-2"
        >
          View Details →
        </a>
        <button
          type="button"
          className="text-slate-400 hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50 transition-colors"
          title="Delete quiz"
          onClick={onDelete}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
