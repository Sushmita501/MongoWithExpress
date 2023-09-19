const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
   console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};


let allChats = [
   {
   from: "neha",
   to : "priya",
   msg : "send me your exam sheets",
   create_at : new Date()
   },
   {
      from: "mohan",
      to: "sohan",
      msg: "teach me js callback",
      create_at: new Date()
   },
   {
      from: "murari",
      to: "kishor",
      msg: "what are your plan for this year",
      create_at: new Date(),
   },
   {
      from: "tony",
      to: "peter",
      msg: "send me the job portal link",
      create_at: new Date()
   }

];

Chat.insertMany(allChats);

