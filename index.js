const express = require('express');
const axios = require('axios');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('combined'));
app.use(express.json());

app.all('*', async (req, res) => {
  try {
    const { method, url, body } = req;
    
    console.log({
        method,
        url: url.replace('/', ''),
        data: body,
      })
    const response = await axios({
      method,
      url: url.replace('/', ''),
      data: Object.keys(body).length ? body : undefined,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error?.response?.status || 500).json(error?.response?.data || {});
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
