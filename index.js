const express = require('express')
const app = express()
const port = 8888

app.set('view engine', 'ejs')
//app.set('views', './views')
app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
	res.render('pages/index', {
		test: 'Example code of Node.js'
	})
})

app.get('/about-us', (req, res) => {
	res.render('pages/about')
})

app.get('/contact', (req, res) => {
	res.render('pages/contact')
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})