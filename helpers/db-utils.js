import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://Pad6y:Frankie1987@nextcluster0.csqtk91.mongodb.net/NextProject?retryWrites=true&w=majority'
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  return result;
}
