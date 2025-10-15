import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I am new to React and want to learn it.",
    tags: [
      { _id: "1", name: "react" },
      { _id: "2", name: "javascript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upVotes: 10,
    downVotes: 2,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "Best practices for TypeScript in Next.js?",
    description:
      "What are some recommended patterns for using TypeScript with Next.js projects?",
    tags: [
      { _id: "3", name: "typescript" },
      { _id: "4", name: "nextjs" },
    ],
    author: { _id: "2", name: "Jane Smith" },
    upVotes: 15,
    downVotes: 1,
    answers: 3,
    views: 80,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "How to manage state in large React apps?",
    description:
      "Should I use Redux, Context API, or something else for state management in big projects?",
    tags: [
      { _id: "1", name: "react" },
      { _id: "5", name: "redux" },
      { _id: "6", name: "state-management" },
    ],
    author: { _id: "3", name: "Alex Lee" },
    upVotes: 8,
    downVotes: 0,
    answers: 4,
    views: 120,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = query
    ? questions.filter((question) =>
        question.title.toLowerCase().includes((query as string).toLowerCase())
      )
    : questions;

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search question..."
          otherClasses="flex-1"
        />
      </section>
      {/* Home Filer */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
