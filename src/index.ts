import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema });

const port = Number(process.env.API_PORT) || 4000;

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(port, () => {
  console.info(`🚀 Server is running on http://localhost:${port}/graphql`);
});
