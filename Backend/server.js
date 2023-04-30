// Express JS Setup
const express = require('express')
const app = express()
const { errorHandler } = require('./middleware/errorMiddleware')
const path = require('path')

// Okay this is needed lmao
// This needs to be fixed
/*const cors = require("cors");
const whitelist = ["http://localhost:5173", "http://localhost:5000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))
*/



// dotenv are environment variables
const dotenv = require('dotenv').config()
const port = process.env.PORT // || 5000

// Database
const connectDB = require('./config/db')
connectDB()

// Create - post
// Read - get
// Update - patch
// Delete - delete

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// Routes
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serve frontend
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../frontend/dist')))
  app.get('*', (req, res)=>res.sendFile(path.resolve(__dirname, '../', 'frontend','dist', 'index.html')))
}else{
  app.get('/', (req, res) => res.send('Please set to production'))
}

// Error Handling
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started on port: ${port}`))