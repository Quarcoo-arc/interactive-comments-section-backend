import { builder } from "../builder";

builder.prismaObject("Comment", {
  fields: (t) => ({
    id: t.exposeID("id"),
    message: t.exposeString("message"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    replyTo: t.relation("replyTo", { nullable: true }),
    replies: t.relation("replies"),
    replyToId: t.exposeInt("replyToId", { nullable: true }),
  }),
});
