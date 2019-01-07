const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema
let ObjectId = Schema.Types.ObjectId    //声明Object类型
//创建我们的用户Schema
const articleSchema = new Schema({
    Id:ObjectId,
    articleName:{unique:true,type:String},
    content:String,
    createAt:{type:Date,default:Date.now()},
    lastEditAt:{type:Date,default:Date.now()}
})
//发布模型
mongoose.model('Article',articleSchema)