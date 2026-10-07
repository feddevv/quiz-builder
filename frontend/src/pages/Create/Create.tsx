import { createQuizSchema, type CreateQuiz } from './create.schemas';
import Text from './Text';
import Checkbox from './Checkbox';
import Boolean from './Boolean';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type QuestionType = 'boolean' | 'input' | 'checkbox';

export default function CreateQuizPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateQuiz>({
    resolver: zodResolver(createQuizSchema),
    defaultValues: {
      title: '',
      questions: [{ question: '', type: 'input' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const handleAddQuestion = (type: QuestionType) => {
    switch (type) {
      case 'boolean':
        append({ type: 'boolean', question: '' });
        break;

      case 'checkbox':
        append({ type: 'checkbox', question: '', options: [] });
        break;

      case 'input':
        append({ type: 'input', question: '' });
        break;
    }
  };

  const handleDeleteQuestion = (id: number) => {
    remove(id);
  };

  console.log(errors);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create Quiz</h1>
          <p className="mt-1 text-sm text-slate-500">
            Enter a title and add questions of different types.
          </p>
        </div>

        <form onSubmit={handleSubmit((data) => console.log(data))} className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <label htmlFor="quiz-title" className="block text-sm font-semibold text-slate-700 mb-2">
              Quiz Title <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="quiz-title"
              {...register('title')}
              placeholder="e.g., Web Development Fundamentals"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-400 text-sm"
              defaultValue=""
            />
          </div>

          <div className="space-y-4">
            {fields.map((field, index) => {
              if (field.type === 'input')
                return <Text onDelete={() => handleDeleteQuestion(index)} key={field.id} />;
              else if (field.type === 'boolean')
                return <Boolean onDelete={() => handleDeleteQuestion(index)} key={field.id} />;
              else return <Checkbox onDelete={() => handleDeleteQuestion(index)} key={field.id} />;
            })}
          </div>

          <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-white/60 flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="text-xs text-slate-500 font-medium sm:mr-2">Add new question:</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all"
                onClick={() => handleAddQuestion('boolean')}
              >
                + Boolean
              </button>
              <button
                type="button"
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all"
                onClick={() => handleAddQuestion('input')}
              >
                + Text Input
              </button>
              <button
                type="button"
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all"
                onClick={() => handleAddQuestion('checkbox')}
              >
                + Checkbox
              </button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
