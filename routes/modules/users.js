//引用 Express及 Express路由器
const express = require('express')
const router = express.Router()

//引用 User model
const User = require('../../models/user')

//設定登入路由
router.get('/login', (req, res) => {
  res.render('login')
})

//設定註冊路由
router.get('/register', (req, res) => {
  res.render('register')
})

//設定註冊功能
router.post('/register', (req, res) => {
  const { name, email, password, confrimPassword } = req.body
  //檢查是否註冊過
  User.findOne({ email }).then(user => {
    //如註冊過退回原本畫面
    if (user) {
      console.log('User already exists.')
      res.render('register', {
        name,
        email,
        password,
        confrimPassword
      })
    } else {
      //沒註冊寫入資料庫
      return User.create({
        name,
        email,
        password
      })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    }
  })
})

//匯出路由
module.exports = router