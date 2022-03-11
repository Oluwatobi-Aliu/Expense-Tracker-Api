const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');


// Local modules
const config = require('./config')
const dbConnect = require('./database')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const expenseRoute = require('./routes/expense')
// App Setup
const app = express()
app.set('port', config.port)
// Database Setup
dbConnect()
// App middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
// App Routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/expense', expenseRoute)


// Catch unauthorised errors
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }else if (err) {
      res.status(400).json({"error" : err.name + ": " + err.message})
      console.log(err)
    }
  })
  


// Server app server
app.listen(app.get('port'), () => {
    console.log('Backend Server running')
})