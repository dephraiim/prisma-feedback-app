import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, message, email, feedbackType } = req.body;

  try {
    await prisma.feedback.create({
      data: {
        name,
        email,
        message,
        feedbackType,
      },
    });

    res.status(200).json({ message: "Submitted Succesfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
}
