const express = require('express')
const app = express()
const port = 3000

app.set ('view engine', 'hbs')
app.set ('views', 'assets/views')


app.get('/', (req, res) => {
  res.render("server", {
    data : "hello gais ini data dari server"
  });
})

app.get('/blog', (req, res) => {
    res.render("blog")
});

app.get('/contact', (req, res) => {
    res.render("contact")
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})