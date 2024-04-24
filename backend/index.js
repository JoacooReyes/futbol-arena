import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import router from './src/router/router.js'
import connectDB from './src/controllers/dbController.js';
//Consantes
const PORT = process.env.PORT ? process.env.PORT : 3001

const app = express()
//Middlewares
const allowedOrigins = ["http://localhost:5174","http://localhost:5173","https://futbol-arena.netlify.app"];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
  },
  methods: 'GET,POST,PUT,DELETE,HEAD,PATCH',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
  
}));
app.use(express.urlencoded({extended: true, limit:'50mb'}))
app.use(express.json())
// app.use((req, res, next) => {
//     res.setHeader(
//       "Access-Control-Allow-Origin",
//       "*"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
//     );
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader("Access-Control-Allow-Private-Network", true);
//     //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
//     res.setHeader("Access-Control-Max-Age", 7200);
  
//     next();
//   });
// app.use((_req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Credentials', true)
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept',
//     )
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
//     next()
// })
app.use('/api', router);

const initApp = () => {
    try{
        connectDB()
        app.listen(PORT, ()=> {
            console.log(`Server listening on http://localhost:${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

initApp()