const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.all('*', async (req, res) => {
  try {
    const { method, url, body } = req;
    
    const response = await axios({
      method,
      url: url.replace('/', ''),
      data: body,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error)
    res.status(error.response.status).json(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
