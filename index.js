const express = require('express');
const exphbs = require('express-handlebars')
const mongoose = require('mongoose');
const chalk = require('chalk')
const todoRoutes = require('./routes/todos')
const PORT = process.env.PORT || 3000;

const app = express();
hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(todoRoutes)

async function start() {
	try {
	
        await mongoose.connect('mongodb+srv://vinos:1004797537@cluster0-rhtfp.mongodb.net/todos', {
			useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true 
        });
        
        
        app.listen(PORT, () => {
			console.log(chalk.yellow(`Server starting on http://localhost:${PORT}`))
		});
	} catch (e) {
		console.log(e);
	}
}
start()


