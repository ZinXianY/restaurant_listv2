# 我的餐廳清單
使用Express結合MongoDB 打造出來的一個簡單餐廳搜尋網站。

![image](/public/restaurant-listv3.PNG)

## 產品功能
* 使用者可以瀏覽餐廳的照片、店名、餐廳類別及評價。
* 使用者可以點選餐廳以查看詳細資料，詳細資料內容含: 類別、地址、電話及介紹。
* 使用者可以透過餐廳名稱蒐尋自己所喜愛的餐廳。
* 進入詳細資料頁面時可以點選左上角'我的餐廳清單'或式點選'返回' 回到首頁。
* 使用者可以新增自己喜愛的餐廳資訊。
* 使用者可以修改餐廳內的資訊並存檔。
* 使用者可以將不喜愛的餐廳移除掉。
* 使用者可以選擇餐廳排序的方式。

## 環境建置
* Node.js: v10.15.0
* Express: ^4.17.1
* Express-handlebars: ^5.3.0
* body-parser: ^1.19.0
* method-override: ^3.0.0
* mongoDB: v4.2.13
* mongoose: ^5.12.7

## 專案安裝
1. 下載專案
```
git clone https://github.com/ZinXianY/restaurant_listv2.git
```

2. 切換存放此專案的資料夾
```
cd restaurant_listv2
```

3. 安裝npm套件
```
npm install
```

4. 新增種子資料
```
npm run seed
```

5. 啟動伺服器執行檔案
```
npm run dev
```

6. 出現以下字樣表式啟動成功!
```
APP is running on http://localhost:3000
```