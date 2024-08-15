const express = require('express')
const app = express()
const port = 3000

app.set ('view engine', 'hbs')
app.set ('views', 'assets/views')


app.use("/assets", express.static ("assets"));

app.get('/blog', renderBlog)
app.get('/contact', renderContact)
app.get('/index', renderIndex)
app.get('/testimonial', renderTestimonial)

function renderTestimonial(req,res) {
  res.render('testimonial')
}

function renderIndex(req, res) {
res.render('index')
}

function renderContact(req, res) {
  res.render('contact')
}

function renderBlog(req, res) {
  res.render('blog')
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})