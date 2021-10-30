//引用 Express及 Express路由器
const express = require('express')
const router = express.Router()

//引用 Restaurant model
const Restaurant = require('../../models/restaurant')

//設定首頁路由
router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

//設定 new 頁面路由
router.get('/new', (req, res) => {
  return res.render('new')
})

//設定 Create 路由
router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//設定搜尋路由
router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const userId = req.user._id
  const newRegExp = RegExp(keyword, 'i')
  return Restaurant.find({
    $or: [{ name: newRegExp }, { category: newRegExp }], userId
  })
    .lean()
    .then(restaurants => res.render('index', { restaurants, keyword }))
    .catch(error => console.log(error))
})

//設定sort路由
router.get('/sort', (req, res) => {
  const userId = req.user._id
  const sort = req.query.sort
  return Restaurant.find({ userId })
    .lean()
    .sort(sort)
    .then(restaurants => res.render('index', { restaurants, sort }))
    .catch(error => console.log(error))
})

//匯出路由器
module.exports = router