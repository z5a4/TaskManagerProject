const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/db');
const registrationRoutes = require('./routes/registrationRoutes');
const loginRoutes=require('./routes/apiRoutes');
const taskRoutes=require('./routes/taskRoutes');
//const transporterRoutes=require('./routes/transporterRoutes');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(session({
  secret: 'mongodbtaskmanager',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.json());
connectDB();

app.use('/', registrationRoutes);
app.use('/',loginRoutes);
app.use('/', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
