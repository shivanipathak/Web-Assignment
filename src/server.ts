import express from 'express'
import path from 'path'
import router from './routes/api'
const app = express();
app.use('/',express.static(path.join(__dirname,'myapp')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api',router)
app.listen(3090, function () {
    console.log("Server started on http://localhost:3090");
});
