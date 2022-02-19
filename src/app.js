const express = require('express')
const path=require('path')
const hbs = require('hbs')
const data = require('./utils/fake_data.js')


console.log(__dirname)
console.log(__filename)

//console.log(data.userdata())

// Setting up the config path for Express
const public_path=path.join(__dirname,'../public')
const viewspath=path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname,'../templates/partials')


const app = express();

// Configure Handlebars and views engine
app.set('view engine' , 'hbs')
app.set('views',viewspath)
hbs.registerPartials(partialsPath)

//Setting up path for static content to render
app.use(express.static(public_path))

// app.get('',(req,res)=>{
//     res.send('<h1>Hello Express</h1>')
// })

app.get('/help',(req,res)=>{
    res.render('help', {
        title : 'Help',
        message : 'This is a sample help meesage',
        name : 'Siddhartha Panda'
    })
})

app.get('/about', (req , res) => {
    res.render('about' , {
        title:'About',
        name : 'Siddhartha Panda'
    })
})


app.get('',(req,res)=>{
    res.render('index' , {
        title : 'Weather',
        name : 'Siddhartha Panda'
    })
})

app.get('/weather' , (req,res) =>{
    const query= req.query;
    if(query.search==null||query.search==undefined||query.search===''){
        res.send({
            error:'You Must Provide Some Search'
        })
    }
    else{
    const userdata_temp=data.userdata();
    res.send(
            {
            Creator_name: 'Sid Weather Website',
            search:req.query.search,
            user_name : userdata_temp.name,
            user_address:userdata_temp.address
            }
            )
        }
})

app.get('/help/*' , (req,res) =>{
    res.render('page_not_found', {
        title : 'Help Article not found',
        name :'Siddhartha Panda'
    })
})



app.get('*', (req, res) => {

    res.render('page_not_found' , {
        title : 'Page not found',
        name :'Siddhartha Panda'
    })
})

app.listen(3000,()=>{
    console.log('Sever is UP on port 3000')
})

