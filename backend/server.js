import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}))
// API Endpoints
app.get("/", (req, res) => {
    res.send("API is working fine");
  });
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)


console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS);
console.log("SMTP_PASS:", process.env.SENDER_EMAIL);


app.listen(port, ()=>console.log(`Server started on PORT: ${port}`));