//引用 Express及 Express路由器
const express = require('express')
const router = express.Router()

//引入 home 模組程式碼
const home = require('./modules/home')

//將網址符合 / 字串的request 導向 home 模組
router.use('/', home)

//引入 restaurants 模組程式碼
const restaurants = require('./modules/restaurants')

//將網址符合 /restaurants 字串的request 導向 restaurants 模組
router.use('/restaurants', restaurants)

//匯出路由器
module.exports = router