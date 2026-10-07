import type { UseFormRegister } from 'react-hook-form';
import type { CreateQuiz } from './create.schemas';
import type { QuestionType } from './types';

interface QuestionItemProps {
  onDelete: () => void;
  index: number;
  register: UseFormRegister<CreateQuiz>;
  type?: QuestionType;
}

export default function QuestionItem({ index, onDelete, register, type }: QuestionItemProps) {
  switch (type) {
    case 'boolean':
      return <Boolean index={index} onDelete={onDelete} register={register} />;

    case 'checkbox':
      return <Checkbox index={index} onDelete={onDelete} register={register} />;

    case 'input':
      return <Text index={index} onDelete={onDelete} register={register} />;
  }
}

function Checkbox({ onDelete, index, register }: QuestionItemProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
          Question 3 • Multiple Choice (Checkboxes)
        </span>
        <button
          type="button"
          className="text-slate-400 hover:text-rose-600 transition-colors p-1"
          title="Delete question"
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

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Question Text</label>
          <input
            {...register(`questions.${index}.question`)}
            type="text"
            placeholder="e.g., Which of the following are compiled languages?"
            className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="space-y-2.5">
          <span className="block text-xs font-semibold text-slate-600">
            Options (select all that apply):
          </span>

          {[
            { text: 'Option A', isChecked: true },
            { text: 'Option B', isChecked: false },
            { text: 'Option C', isChecked: true },
          ].map((option, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked={option.isChecked}
                className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
              />
              <input
                type="text"
                defaultValue={option.text}
                className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="button"
                className="text-slate-300 hover:text-rose-500 transition-colors text-xs"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type="button"
            className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors pt-1"
          >
            + Add Option
          </button>
        </div>
      </div>
    </div>
  );
}

function Text({ onDelete, index, register }: QuestionItemProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
          Question 2 • Short Text Answer
        </span>
        <button
          type="button"
          className="text-slate-400 hover:text-rose-600 transition-colors p-1"
          title="Delete question"
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

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Question Text</label>
          <input
            type="text"
            {...register(`questions.${index}.question`)}
            placeholder="e.g., What is the capital of Ukraine?"
            className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}

function Boolean({ onDelete, register, index }: QuestionItemProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
          Question 1 • Boolean
        </span>
        <button
          type="button"
          className="text-slate-400 hover:text-rose-600 transition-colors p-1"
          title="Delete question"
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

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Question Text</label>
          <input
            type="text"
            {...register(`questions.${index}.question`)}
            placeholder="e.g., The Earth revolves around the Sun."
            className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <span className="block text-xs font-semibold text-slate-600 mb-2">Correct Answer</span>
          <div className="flex gap-4">
            <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700">
              <input
                type="radio"
                name="q1_answer"
                value="true"
                defaultChecked
                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>True</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-700">
              <input
                type="radio"
                name="q1_answer"
                value="false"
                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>False</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
