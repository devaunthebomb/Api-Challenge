const express = require("express");
const fetch = require("node-fetch");
const app = express();

const port = 9000 ;

app.get('/activity', async function(request, response){
    const api_url = "http://www.boredapi.com/api/activity/";
    const fetch_response = await fetch(api_url);
    const jsonObj = await fetch_response.json();
    response.json(jsonObj);
})

app.get('/param/:activity', async function(request,response){
    const activity = request.params.activity;
    const api_url = `http://www.boredapi.com/api/activity?type=${activity}`;
    const fetch_response = await fetch(api_url);
    const jsonObj = await fetch_response.json();
    response.json(jsonObj);
})

app.get('/oneActivity', async function(request,response){
    const api_url = "http://www.boredapi.com/api/activity/";
    const fetch_response = await fetch(api_url);
    const jsonObj = await fetch_response.json();
    const oneComponent = Object.entries(jsonObj);
    let counter = 0; 
    response.send(oneComponent[counter]);
})

app.listen(port, function(){
    //Backticks are necesarry
    console.log(`App listening on http://localhost:${port}`);
});


