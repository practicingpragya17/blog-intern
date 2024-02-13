const express = require('express')
const articleRouter = require("./routes/articles")
const mongoose = require('mongoose')
const Article = require('./models/article')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/Database')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.get('/',(req, res) => {
    const articles =[{
        title: 'Test Article 1',
        createdAt:new Date(),
        description:'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt:new Date(),
        description:'Test description'
    }]
    res.render('articles/index',{articles:articles})
})

app.use('/articles', articleRouter)

app.listen(3000)