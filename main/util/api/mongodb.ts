import { MongoClient, ServerApiVersion } from "mongodb";

// Read the MongoDB URI from environment variables
let uri = process.env.MONGO_URI;

if (!uri) {
  uri = "mongodb+srv://nickkane999:HCoIWW0AXKsb3vg3@cluster0.fjl9t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Default user who can read any DB, but not write to any DB
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default client;
