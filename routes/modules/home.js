//引用 Express及 Express路由器
const express = require('express')
const router = express.Router()

//引用 Restaurant model
const Restaurant = require('../../models/restaurant')

//設定首頁路由
router.get('/', (req, res) => {
  Restaurant.find() //取出 restaurant model 中的所有資料
    .lean() //把 Mongoose 的 model物件轉換成乾淨的 Javascript 資料陣列
    .then(restaurants => res.render('index', { restaurants })) //把資料傳送給index
    .catch(error => console.log(error))
})

//設定 new 頁面路由
router.get('/new', (req, res) => {
  return res.render('new')
})

//設定 Create 路由
router.post('/', (req, res) => {
  const newRestaurant = req.body
  return Restaurant.create(newRestaurant)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//設定搜尋路由
router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const newRegExp = RegExp(keyword, 'i')
  return Restaurant.find({
    $or: [{ name: newRegExp }, { category: newRegExp }]
  })
    .lean()
    .then(restaurants => res.render('index', { restaurants, keyword }))
    .catch(error => console.log(error))
})

//設定sort路由
router.get('/sort', (req, res) => {
  const sort = req.query.sort
  return Restaurant.find()
    .lean()
    .sort(sort)
    .then(restaurants => res.render('index', { restaurants, sort }))
    .catch(error => console.log(error))
})

//匯出路由器
module.exports = router