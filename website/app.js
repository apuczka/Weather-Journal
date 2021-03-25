/* Global Variables */
//API credentials


let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=74630a06589374cbf88419b9a6e12b2f';
// const fetch = require('node-fetch');

const newCode = document.getElementById('zip').value;
document.getElementById('generate').addEventListener('click', performAction);

function performAction() {
    
    console.log(baseURL + newCode + apiKey)
    getCode(baseURL, newCode, apiKey)
}

const getCode = async (baseURL, code, key)=> {
    const res = await fetch(baseURL + code + key)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

// // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const postData = async (baseURL, code, key) => {
    
    const settings = {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data),
    };
    try {
        const fetchResponse = await fetch(baseURL + code + key, settings)
        const data = await fetchResponse.json();
        console.log(data);
        return data
    } catch (error) {
        console.log("error", error);
    }
}

/* Update UI*/
const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json()
        console.log(allData);
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temp}`;
        document.getElementById('content').innerHTML = `I feel: ${allData.content}`;
    }catch(error){
        console.log("error", error)
    }
}