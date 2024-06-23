import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Redux Toolkit Not Updating State as Expected",
    tags: [
      { _id: "1", name: "reactjs" },
      { _id: "2", name: "redux" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    upvotes: 154876,
    views: 76,
    answers: [{}, {}, {}, {}, {}], // Random objects as placeholders for answers
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "Async/Await Function Not Handling Errors Properly",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "css" },
    ],
    author: {
      _id: "2",
      name: "Jane Doe",
      picture: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    upvotes: 10,
    views: 22,
    answers: [{}, {}, {}], // Random objects as placeholders for answers
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full justify-between gap-4 max-sm:flex-col-reverse sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex flex-row justify-between gap-5 max-sm:flex-col sm:items-center md:flex-col">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170-px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There is no question to show"
            description="Be the first to break the silence! 🚀 Ask a question and kickstart the discussion. Our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
