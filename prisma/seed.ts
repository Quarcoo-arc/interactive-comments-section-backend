import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Delete all comments from prisma
  await prisma.comment.deleteMany({});
  // Delete all users from prisma
  await prisma.user.deleteMany({});
  // Delete all users from firebase

  // Create dummy user in firebase

  // Create dummy user and comment in prisma
}

main().then(() => console.log("Data seeded..."));
