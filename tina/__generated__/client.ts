import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: 'D:/Miguel/PelotonB/peloton-b-website/tina/__generated__/.cache/1788629106192', url: 'http://localhost:4001/graphql', token: 'undefined', queries,  });
export default client;
  