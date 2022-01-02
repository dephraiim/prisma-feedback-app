import { PrismaClient } from "@prisma/client";
import { feedback } from "../data/feedback";

const prisma = new PrismaClient();

async function main() {
  feedback.forEach(async (f) => {
    await prisma.feedback.create({
      data: {
        name: f.name,
        email: f.email,
        message: f.message,
      },
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
