const express=require('express');

 const connectdb=require("./config/db.js");

 const userController=require("./controllers/users.controller")
 const studentController=require("./controllers/student.controller")
 const submissionController=require("./controllers/submission.controller")
 const batchController=require("./controllers/batch.controller")
 const evaluationController=require("./controllers/evaluation.controller")


 const app=express();
 app.use(express.json());
 
 app.use("/user",userController);
 app.use("/batch",batchController);
 app.use("/student",studentController);
 app.use("/evaluation", evaluationController);
 app.use("/submission",submissionController);


 app.listen(3000,async()=>{
    try {
      await connectdb();
       console.log("listening port 5000")
    } catch (error) {
        console.log(error)
    }
    
})










 