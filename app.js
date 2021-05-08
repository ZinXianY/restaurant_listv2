//載入工具
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()

//引用路由器
const routes = require('./routes')

//設定連線到mongodb
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

//取得資料庫連線狀態
const db = mongoose.connection

//連線異常
db.on('err', () => {
  console.log('mongodb error!')
})

//連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

//套入樣板引擎
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//設定靜態檔案
app.use(express.static('public'))

//設定 body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//設定 method-override
app.use(methodOverride('_method'))

//將 request 導入路由器
app.use(routes)

//設定監聽器
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})