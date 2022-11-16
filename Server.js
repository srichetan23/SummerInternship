const exp=require("express")
const app=exp()
const mClient=require("mongodb").MongoClient;

require("dotenv").config()

const dburl=process.env.DATABASE_CONNECTURL

const path=require("path");

//handling with page refreshing
app.use(exp.static(path.join(__dirname,'./build')));

mClient.connect(dburl)
.then((client)=>{
    let dbObj=client.db("vnr2023")

    //import collections
    let userCollectionObject=dbObj.collection("userCollection");
    let productCollectionObject=dbObj.collection("productcollection");

    //sharing collections
    app.set("userCollection",userCollectionObject);
    app.set("productcollection",productCollectionObject);

    console.log("Db connection is succesfull");
})
.catch(err=>console.log("error in connection",err))

//import userApp
const userApp=require('./APIs/Userapi');

app.use('/user-api',userApp);

//handling with page refresh
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
  })

//handling invalid paths
app.use((request,response,next)=>{
    response.send({message:`path ${request.url} is invalid`})
})

//error handling
app.use((error,request,response,next)=>{
    response.send({message:`${error.message}`})
})

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server listening on ${port}`)
})