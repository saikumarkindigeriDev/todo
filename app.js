const express=require("express") 
const mysql=require("mysql") 
const cors=require("cors") 


const app=express() 

app.use(cors()); 
app.use(express.json())

const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'todosdb'
})



app.post("/addtodo",(req,res)=>{
  const sql="INSERT INTO todolist(`task`) Values(?) "; 
  const values=[
    req.body.task,
  ]
  db.query(sql,[values],(err,data)=>{
    if (err) return res.json(err); 
    console.log("added")
    
    return res.json(data); 

  });
    

}) 


app.get("/",(req,res)=>{
  res.send("Listening")
})



app.delete('/api/deleteTodo/:id', (req, res) => {
  const todoId = req.params.id;

  
  const sql = 'DELETE FROM todolist WHERE id = ?';

  db.query(sql, [todoId], (err, result) => {
    if (err) return res.json(err);
     
 
      
    return res.json(data);
    
  });
});





app.listen(8001,()=>{
  console.log("Server started")
})