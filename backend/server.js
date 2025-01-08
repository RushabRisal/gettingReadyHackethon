const express=require("express")
const cors=require("cors")
const app= express()
const corsOption={             //this means the server will listen request coming from localhost:5173 or from specific port
    origin:["http://localhost:5173"]
}
app.use(cors(corsOption))
app.get('/api',(req,res)=>{
    res.json({"users":["user_1","user_2","user_3"]})
})
app.get('/api/name',(req,res)=>{
    res.json({"name":['rushab','rishav','prawin','aashish']})
})
app.listen(5000,()=>{
    console.log("server is running at 5000 ")
})