import { connectDatabase, insertDocument } from '../../helpers/db-utils';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    console.log(req.body);
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid inputs' });
      return;
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'error connecting to database' });
      return;
    }

    try {
      await insertDocument(client, 'messages', {
        email,
        name,
        message,
      });
      res.status(201).json({ message: 'message recieved' });
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed' });
    }
    client.close();
  }
}

export default handler;
