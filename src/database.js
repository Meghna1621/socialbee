const mongoose=require("mongoose");

const DB=`mongodb+srv://meghna:meghna2002@cluster0.j8gazf9.mongodb.net/socialbee`;
mongoose.set('strictQuery', true)
mongoose.connect(DB,{
    useNewUrlParser: true,

}).then(()=>{
    console.log("connection successfull");
}).catch(()=>{
    console.log("error no connection")
});
