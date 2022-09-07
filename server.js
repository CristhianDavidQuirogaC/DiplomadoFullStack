const app = require('./app');
const port = process.env.PORT; // vino de app.js
app.listen(port, ()=>{
    console.log(`App running on port ${port}`); //Todo el app.listen vino de app.js
  });

  