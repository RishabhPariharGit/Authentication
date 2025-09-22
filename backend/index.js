const express = require('express')
const connect = require("./DB/Connection")
const UserRoutes = require("./Routes/AllRoutes")
const cors = require("cors");

const app = express()
const port = 4000


app.use(express.json());
app.use(cors());
connect();

app.use("/api/users", UserRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

