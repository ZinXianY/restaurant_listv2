//載入工具
const express = require('express')
const app = express()
const mongoose = require('mongoose')

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

//設定首頁路由
app.get('/', (req, res) => {
  res.send('this is')
})


//設定監聽器
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})