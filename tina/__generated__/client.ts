import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '947fc8ebe5959616b5165fc7121e411c95fdc221', queries,  });
export default client;
  