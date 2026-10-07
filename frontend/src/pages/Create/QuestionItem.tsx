import {
  useFieldArray,
  type Control,
  type FieldErrors,
  type UseFormRegister,
} from 'react-hook-form';
import type { CreateQuiz } from './create.schemas';
import type { QuestionType } from './types';

interface QuestionItemProps {
  onDelete: () => void;
  index: number;
  register: UseFormRegister<CreateQuiz>;
  errors: FieldErrors<CreateQuiz>;
  control?: Control<CreateQuiz>;
  type?: QuestionType;
}

export default function QuestionItem({
  index,
  onDelete,
  register,
  type,
  control,
  errors,
}: QuestionItemProps) {
  switch (type) {
    case 'boolean':
      return <Boolean errors={errors} index={index} onDelete={onDelete} register={register} />;

    case 'checkbox':
      return (
        <Checkbox
          errors={errors}
          control={control}
          index={index}
          onDelete={onDelete}
          register={register}
        />
      );

    case 'input':
      return <Text errors={errors} index={index} onDelete={onDelete} register={register} />;
  }
}

function Checkbox({ onDelete, index, register, control, errors }: QuestionItemProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${index}.options` as 'questions.0.options',
  });

  const questionErrors = errors.questions?.[index];
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
          Question {index + 1} • Multiple Choice (Checkboxes)
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
            placeholder="e.g., Which technologies do you use?"
            className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {questionErrors?.question?.message && (
            <p className="mt-1 text-xs text-rose-500">{questionErrors.question.message}</p>
          )}
        </div>

        <div className="space-y-2.5">
          <span className="block text-xs font-semibold text-slate-600">Options:</span>

          {fields.map((field, optIdx) => (
            <div key={field.id} className="flex items-center gap-3">
              <div className="w-4 h-4 rounded border border-slate-300 bg-slate-50 shrink-0" />

              <input
                type="text"
                {...register(`questions.${index}.options.${optIdx}.title`)}
                placeholder={`Option ${optIdx + 1}`}
                className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />

              {fields.length > 2 && (
                <button
                  type="button"
                  onClick={() => remove(optIdx)}
                  className="text-slate-300 hover:text-rose-500 transition-colors text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ title: '' })}
            className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors pt-1"
          >
            + Add Option
          </button>
        </div>
      </div>
    </div>
  );
}

function Text({ onDelete, index, register, errors }: QuestionItemProps) {
  const questionErrors = errors.questions?.[index];

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

          {questionErrors?.question?.message && (
            <p className="mt-1 text-xs text-rose-500">{questionErrors.question.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Boolean({ onDelete, register, index, errors }: QuestionItemProps) {
  const questionErrors = errors.questions?.[index];
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

          {questionErrors?.question?.message && (
            <p className="mt-1 text-xs text-rose-500">{questionErrors.question.message}</p>
          )}
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
