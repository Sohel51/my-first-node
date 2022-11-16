const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT ||  5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Oh yeah i can code now in Node. R you serious.! R you happy now pock you bby.')
});

// Creating arry of object
const users =[
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888'},
    {id: 2, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '01788888888'},
    {id: 3, name: 'Pontu', email: 'pontu@gmail.com', phone: '01788888888'},
    {id: 4, name: 'Suchurita', email: 'suchurita@gmail.com', phone: '01788888888'},
    {id: 5, name: 'Vontu', email: 'vontu@gmail.com', phone: '01788888888'},
    {id: 6, name: 'Sraboni', email: 'sraboni@gmail.com', phone: '01788888888'},
    {id: 7, name: 'Megh', email: 'megh@gmail.com', phone: '01788888888'},
]

// this is call API
app.get('/users', (req, res) => {
    //Filter by query parameter
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }else{
        res.send(users);
    }
    res.send(users);
})

// creating another API
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('four four fazle favour');
});

app.listen(port, () => {
    console.log(`Example app listening on port`, port)
})