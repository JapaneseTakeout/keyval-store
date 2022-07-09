const app = require("./app");

const port = process.env.PORT || 3000; // added const

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
