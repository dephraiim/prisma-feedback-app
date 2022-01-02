import React from "react";
import Link from "next/link";
import { prisma } from "lib/prisma";

const SingleFeedback = ({ feedbackItem }) => {
  return (
    <div className="prose prose-blue text-white mx-auto h-screen">
      <Link href="/feedback">
        <a>Go back</a>
      </Link>
      <p>{feedbackItem.message}</p>
      <p>
        {feedbackItem.name} - {feedbackItem.email}
      </p>
    </div>
  );
};

export default SingleFeedback;

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  const feedbackItem = await prisma.feedback.findUnique({
    where: {
      id,
    },
  });

  return {
    props: {
      feedbackItem: JSON.parse(JSON.stringify(feedbackItem)),
    },
  };
};
