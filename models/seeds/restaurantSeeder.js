const Restaurant = require('../restaurant') //載入restaurant model
const restaurantList = require('./restaurant.json') //載入json檔案為種子資料
const db = require('../../config/mongoose')

//連線成功
db.once('open', () => {
  //新增餐廳資料
  for (let i = 0; i < restaurantList.results.length; i++) {
    Restaurant.create(restaurantList.results[i])
  }
  console.log('done')
})