/* Global Variables */
//API credentials



let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=74630a06589374cbf88419b9a6e12b2f';
// const fetch = require('node-fetch');

// const newCode = document.getElementById('zip').value;
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const newCode = document.getElementById('zip').value;
    const data = getCode(baseURL, newCode, apiKey)
    postData(baseURL, newCode, apiKey, data)
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

const postData = async (URL, {main, data, content}) => {
    const postData = {
        temp: temp,
        date: date,
        content: content,
    }
   
}
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
        // const fetchResponse = await fetch(baseURL + code + key + settings)
        const newData = await res.json();
        // postData('/add', data)
        // const data = await fetchResponse.json();
        // console.log(newData);
        return newData
        
    } catch (error) {
        console.log("error", error);
    }
    updateUI()
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
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].content;
    
    }catch(error){
        console.log("error", error)
    }
}