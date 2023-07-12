const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: 'No URLs provided' });
  }

  const urlArray = Array.isArray(urls) ? urls : [urls];
  const numberPromises = urlArray.map(async (url) => {
    try {
      const response = await axios.get(url);
      return response.data.numbers;
    } catch (error) {
      console.error(`Error retrieving numbers from ${url}:`, error);
      return null;
    }
  });

  try {
    const numberResults = await Promise.all(numberPromises);
    const validNumbers = numberResults.filter((numbers) => numbers !== null);

    res.json({ numbers: validNumbers.flat() });
  } catch (error) {
    console.error('Error retrieving numbers:', error);
    res.status(500).json({ error: 'Failed to retrieve numbers' });
  }
});

app.listen(port, () => {
  console.log(`number-management-service is running on port ${port}`);
});