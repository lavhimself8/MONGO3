const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}
// only for sample data put in database

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date("2024-08-10T10:30:00"),
  },
  {
    from: "rahul",
    to: "arjun",
    msg: "Let's meet at 5 PM",
    created_at: new Date("2024-08-11T14:15:00"),
  },
  {
    from: "megha",
    to: "reena",
    msg: "Can you share the project files?",
    created_at: new Date("2024-08-12T09:00:00"),
  },
  {
    from: "sachin",
    to: "vijay",
    msg: "Good luck for your exams!",
    created_at: new Date("2024-08-12T12:45:00"),
  },
  {
    from: "pallavi",
    to: "karan",
    msg: "Happy Birthday!",
    created_at: new Date("2024-08-12T18:00:00"),
  },
];

Chat.insertMany(allChats);
