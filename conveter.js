const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Convert text to uppercase
app.post('/convert/uppercase', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "No text provided" });
  res.json({ convertedText: text.toUpperCase() });
});

// Convert text to lowercase
app.post('/convert/lowercase', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "No text provided" });
  res.json({ convertedText: text.toLowerCase() });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});