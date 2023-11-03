import { builder } from "../builder";
import { prisma } from "../db";

builder.queryField("comments", (t) =>
  t.prismaField({
    type: ["Comment"],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.comment.findMany({ ...query });
    },
  })
);
