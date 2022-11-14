const express = require('express')
const path = require('path')
const US = [
	{name:"孙悟空",
	age:550,
	gender:"男",
	address:"花果山"
},
{name:"猪八戒",
	age:850,
	gender:"男",
	address:"高老庄"
},
{name:"沙和尚",
	age:950,
	gender:"男",
	address:"流沙河"
},
]
const app = express()
app.set("view engine","ejs")
app.use(express.static(path.resolve(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
 app.get('/hello',(req,res)=>{
	res.send('hello')
}) 
app.post('/hello',(req,res)=>{
	res.send('helo')

})
app.get("/stud",(req,res)=>{
	res.render("stud",{US:US})
})
app.use((req,res)=>{
	res.status(404)
	res.send('<h1>404</h1>')
})



app.listen(3000,()=>{
	console.log('服务器已经启动');
})
