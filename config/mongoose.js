const mongoose = require('mongoose')

//設定連線到mongodb
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

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

module.exports = db