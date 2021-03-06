//載入工具
const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const flash = require('connect-flash')

//設定 env 環境變數
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//引用路由器
const routes = require('./routes')

//引用config/mongoose
require('./config/mongoose')

//引用config/passport
const usePassport = require('./config/passport')

const app = express()
const PORT = process.env.PORT

//套入樣板引擎
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//設定 express-session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

//設定靜態檔案
app.use(express.static('public'))

//設定 body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//設定 method-override
app.use(methodOverride('_method'))

//呼叫 passport函式傳入 app
usePassport(app)

//設定 connect-flash
app.use(flash())

//設定兩個本地變數
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg') //設定 success_msg訊息
  res.locals.warning_msg = req.flash('warning_msg') //設定 warning_msg訊息
  next()
})

//將 request 導入路由器
app.use(routes)

//設定監聽器
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})