/* Global Variables */
//API credentials

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '';

const async = require('async');

const newCode = document.getElementById('zip').value;
const feelings = document.getElementById('feelings').value;

function performAction(e) {
    document.getElementById('generate').addEventListener('click', performAction);
    // const newCode = document.getElementById('zip').value;
    // const feelings = document.getElementById('feelings').value;
    const data = getCode(baseURL, newCode, apiKey)
    if (newCode == "") {
        alert("ZIP Code must be filled in")
        return false
    } else {
    postData(baseURL, newCode, apiKey, data)
    getCode(baseURL, newCode, apiKey).then( (data) => postData("/add", feelings, data))
    }
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

const postData = async (URL, feelings, data => {
    const newData = {
        temp: data.main.temp,
        date: newDate,
        content: feelings,
    }
})

const settings = async (URL='',  data={}) => {
    
    const res = await fetch(URL, {
        method: 'POST' ,
        credetials: 'same orgin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        
    })
    
    try {
        settings(URL, postData)
        // const fetchResponse = await fetch(baseURL + code + key + settings)
        const newData = await res.json();
        // postData('/add', data)
        // const data = await fetchResponse.json();
        // console.log(newData);
        return newData
        
    } catch (error) {
        console.log("error", error);
    }
    return updateUI()
}

/* Update UI*/
const updateUI = async () => {
    const req = await fetch('/all')
    try{
        const allData = await req.json()
        console.log(allData);
        // document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        // document.getElementById('temp').innerHTML = `Temperature: ${allData.temp}`;
        // document.getElementById('content').innerHTML = `I feel: ${allData.content}`;
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.content;
    
    }catch(error){
        console.log("error", error)
    }
}