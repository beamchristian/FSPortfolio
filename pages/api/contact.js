function handler() {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      resizeBy.status(422).json({ message: 'Invalid input' });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    resizeBy
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}

export default handler;
