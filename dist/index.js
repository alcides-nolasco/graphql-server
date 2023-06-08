import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { getPool } from "./services/Connections.js";
import { serviciosResolver } from "./resolvers/ServicesResolver.js";
async function startServer() {
    const typeDefs = await loadSchemaSync("src/schema.graphql", { loaders: [new GraphQLFileLoader()] });
    const server = new ApolloServer({
        typeDefs,
        resolvers: [serviciosResolver],
        includeStacktraceInErrorResponses: true,
    });
    const { url } = await startStandaloneServer(server, {
        context: async ({ req, res }) => {
            const pool = await getPool();
            if (req) {
                return { connection: pool };
            }
        },
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}
startServer();
