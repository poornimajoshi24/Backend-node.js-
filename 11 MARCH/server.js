// server  ko start aur database se connect karta hai
const app = require("./src/app");
const connectTODb=require("./src/config/database");
const mongoose = require("mongoose");
function connectTODb() {
  mongoose
    .connect(
      "mongodb+srv://joshipoornima969_db_user:Poornima123@cluster0.rhw72pt.mongodb.net/abc",
    )
    .then(() => {
      console.log("connected to database");
    });
}
connectTODb();
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
