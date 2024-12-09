import express from 'express';
import cors from 'cors';
import { sendEmail } from './emailService.js';
import { validateContactForm } from './validation.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log('req.body', req.body);
    // Validate form data
    const validationError = validateContactForm({ name, email, message });
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    console.log('here 1');
    // Send email
    await sendEmail({ name, email, message });

    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
