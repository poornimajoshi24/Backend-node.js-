const mongoose=require("mongoose")
function connectTODb(){
    mongoose.connect("mongodb+srv://joshipoornima969_db_user:Poornima123@cluster0.rhw72pt.mongodb.net/")
}
module.exports=connectTODb;