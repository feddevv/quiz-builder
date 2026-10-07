import 'dotenv/config';
import { prisma } from '../src/db/prisma';

async function main() {
  console.log('Seeding database with sample quizzes...');

  const quiz1 = await prisma.quiz.create({
    data: {
      title: 'Web Development Fundamentals',
      questions: {
        create: [
          {
            question: 'JavaScript is a statically typed language by default.',
            type: 'boolean',
          },
          {
            question: 'What HTML tag is used to link an external JavaScript file?',
            type: 'input',
          },
          {
            question: 'Which of the following are valid CSS display properties?',
            type: 'checkbox',
            options: {
              create: [
                { title: 'flex' },
                { title: 'grid' },
                { title: 'block' },
                { title: 'float-box' },
              ],
            },
          },
        ],
      },
    },
  });

  const quiz2 = await prisma.quiz.create({
    data: {
      title: 'General Science & Technology',
      questions: {
        create: [
          {
            question: 'The CPU is often referred to as the brain of the computer.',
            type: 'boolean',
          },
          {
            question: 'Which protocol is used to securely transfer web pages over the internet?',
            type: 'input',
          },
          {
            question: 'Which of the following are open-source relational databases?',
            type: 'checkbox',
            options: {
              create: [
                { title: 'PostgreSQL' },
                { title: 'MySQL' },
                { title: 'Oracle DB' },
                { title: 'SQLite' },
              ],
            },
          },
        ],
      },
    },
  });

  console.log(`Successfully created sample quizzes:`);
  console.log(`- Quiz #${quiz1.id}: ${quiz1.title}`);
  console.log(`- Quiz #${quiz2.id}: ${quiz2.title}`);

  process.exit(0);
}

main().catch((e) => {
  console.error('Error seeding database:', e);
  process.exit(1);
});
