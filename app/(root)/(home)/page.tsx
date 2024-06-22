import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-4 max-sm:flex-col-reverse">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
