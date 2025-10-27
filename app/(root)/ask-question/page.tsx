import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

const AskAQuestion = () => {
  return (
    <>
      <h1>Ask a question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </>
  );
};

export default AskAQuestion;
