import type { Option, QuestionType } from '../../types';

interface QuizQuestion {
  type: QuestionType;
  id: number;
  index: number;
  question: string;
  options?: Option[];
}

export default function QuizQuestion({ type, index, options, question }: QuizQuestion) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-4">
        <span
          className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
            type === 'boolean'
              ? 'text-indigo-600 bg-indigo-50'
              : type === 'input'
                ? 'text-emerald-600 bg-emerald-50'
                : 'text-amber-600 bg-amber-50'
          }`}
        >
          Question {index + 1} •{' '}
          {type === 'boolean' ? 'Boolean' : type === 'input' ? 'Short Text' : 'Multiple Choice'}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Question Text
          </span>
          <p className="text-base font-medium text-slate-900">{question}</p>
        </div>

        {type === 'boolean' && (
          <div>
            <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Options
            </span>
            <div className="flex gap-4">
              <label className="inline-flex items-center gap-2 text-sm text-slate-500 cursor-not-allowed">
                <input
                  type="radio"
                  disabled
                  className="w-4 h-4 text-slate-400 border-slate-300 focus:ring-0"
                />
                <span>True</span>
              </label>
              <label className="inline-flex items-center gap-2 text-sm text-slate-500 cursor-not-allowed">
                <input
                  type="radio"
                  disabled
                  className="w-4 h-4 text-slate-400 border-slate-300 focus:ring-0"
                />
                <span>False</span>
              </label>
            </div>
          </div>
        )}

        {type === 'input' && (
          <div>
            <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Input Field
            </span>
            <div className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-400 cursor-not-allowed select-none">
              Short text answer input
            </div>
          </div>
        )}

        {type === 'checkbox' && (
          <div>
            <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Options
            </span>
            <div className="space-y-2">
              {options?.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50/50 text-sm text-slate-700"
                >
                  <input
                    type="checkbox"
                    disabled
                    className="w-4 h-4 text-slate-400 rounded border-slate-300 focus:ring-0"
                  />
                  <span>{option.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
