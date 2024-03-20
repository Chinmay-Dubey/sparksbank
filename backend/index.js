var Express = require('express');
var Mongoclient = require('mongodb').MongoClient;
var cors=require('cors');
const multer=require('multer');

var app=Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://dubeychinmay1509:NewPasswordTurd1234@cluster0.gdbqpbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATABASENAME="sparksbankDB";
var database;

app.listen(5038, ()=>{
  Mongoclient.connect(CONNECTION_STRING, (error,client)=>{
    if(error) {
      console.error("Error connectiong mongoDB", error);
    } else {
      database=client.db(DATABASENAME);
      console.log("Mongo DB Connection Successful");
    }
  })
})

app.get("/api/sparksbank/GetCustomers", (request, response)=>{
  database.collection("sparksbankcollection").find({}).toArray((error,result)=>{
    response.send(result);
  })
})

app.post("/api/sparksbank/AddCustomer",multer().none,(request, response)=>{
  database.collection("sparksbankcollection").count({}, function(error,numOfDocs){
    database.collection("sparksbankcollection").insertOne({
      id:(numOfDocs+1).toString(),
      name:request.body.newName,
      identificationNumber:request.body.newIdentificationNumber,
      identificationType:request.body.newIdentificationType,
      curBalance: 0.0
    });
    response.json("added successfully")
  })
})

app.delete("api/sparksbank/DeleteCustomer"), (request, response) => {
  database.collection("sparksbankcollection").deleteOne({
    id:request.query.id
  })
  response.json("deleted successfully")
}
