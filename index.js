const Koa = require('koa')
const app = new Koa()
const {connect,initSchemas} = require('./database/init.js')
const mongoose = require('mongoose')
app.use(async(ctx)=>{
    ctx.body = '<h1>hello Koa2</h1>'
})
;(async () =>{
  await connect()
  initSchemas()
  const Article = mongoose.model('Article')
  let oneArticle= new Article({articleName:'test',content:'测试'})
  oneArticle.save().then(()=>{
      console.log('插入成功')
  })
})()
app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})