import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
require('dotenv').config();

const stringEndPoint = process.env.MongoUri

const client = new MongoClient(stringEndPoint, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function database(req, res, next) {
  await client.connect();
  req.dbClient = client;
  req.db = client.db('Calendar');
  return next();
}
const middleware = nextConnect();
middleware.use(database);
export default middleware;