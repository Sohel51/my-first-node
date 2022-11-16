/** 
 * -----------------------
 * Basic Server Setup
 * -----------------------
 * 1. create a folder (manually or mkdirect)
 * 2. open command line to that folder
 * 3. npm init -y
 * 4. npm install express
 * 5. create index.js file
 * 
 * ------------------
 * For Express/node server
 * ------------------
 * 1. require express
 * 2. create app variable
 * 3. declare port
 * 4. set app.get('/)
 * 5. listen to port
 * 6. node index.js
 *example- 
const express = require('express');
const app = express();
const port = process.env.PORT ||  5000;

app.get('/', (req, res) => {
    res.send('Oh yeah i can code now in Node.')
});

app.listen(port, () => {
    console.log(`Example app listening on port`, port)
})
 * 7. check your browser for that port

 *--------------------
 *For Auto Restart & Update the Changes
 *---------------------
 *8. Installing npm install -g nodemon
 *9. Add start and start-dev on package.json file under script file
    "start": "node index.js",
    "start-dev": "nodemon index.js",
 * For auto restart in cmd prompt use (nodemon index.js)
 * Now create personal data or receive data from outside project create API for create object data.
 * 
 * -------------
 * Create React with node & get
 * -------------
 * 10. Create new react project
 * 11. Export this server data to React Project study that instruction- (http://expressjs.com/en/resources/middleware/cors.html)
 *      a.Install npm install cors
 *      b.Again run that project
 *      c.Import cors [const cors = require('cors')]
 *      d.Use app.use(cors())
 * 12. Use server data link to React project fetch.
 * 
 * Creating Form in react -- Form data send to BackEnd -- Created Post Method -- Receive tha Data in Post Method -- 
 * 
 * ----------------
 * post
 * ----------------
 * 
 * 
 * 
 * 
 * ---------------
 * Push Server Site Data to Github
 * ---------------
 * 1. git init
 * 2. create .gitignore file
 * 3. type node_modules & save
 * 4. git add .
 * 5. git commit -m "name"
 * 6. git branch -M main
 * 7. git remote add origin https://github.com/Sohel51/my-first-node.git
 * 8. git push -u origin main
 * 
 * 
 * 
 */