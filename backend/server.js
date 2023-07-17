const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/suggestion', async (req, res) => {
  try {
    const TextSearch = req.query.textSearch;
    console.log(TextSearch);
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${TextSearch}`
    );
    console.log(response);
    const d = await response.json();
    console.log(d[1]);
    return res.status(200).json({
      data: {...d[1]},
      
      success: true,
      message: 'Successfully got lists',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get a city',
      err: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);

  // console.log(process.env);
});
