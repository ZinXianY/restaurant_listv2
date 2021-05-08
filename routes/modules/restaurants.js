//引用 Express及 Express路由器
const express = require('express')
const router = express.Router()

//引用 Restaurant model
const Restaurant = require('../../models/restaurant')

//設定 show 頁面路由
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

//設定 edit 頁面路由
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

//設定 edit 餐廳資料
router.put('/:id', (req, res) => {
  const id = req.params.id
  const editRestaurant = req.body
  return Restaurant.findByIdAndUpdate(id, editRestaurant)
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

//設定 delete路由
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//匯出路由器
module.exports = router