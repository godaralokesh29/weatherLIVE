let city=document.getElementById("city")
let temp=document.getElementById("temp")
let img=document.getElementById("img")
let type=document.getElementById("type")
let input=document.getElementById("inp")
let API_KEY="07dc36bae54ed972e007695670b9f6f2"


let data =async function(search){
    
    let getdata=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
    console.log(getdata)
    
    let jsondata= await getdata.json()
    console.log(jsondata)

    if(jsondata.cod==400){
        alert("enter a valid place")
        image.src="error.png"
    }

    city.innerHTML=jsondata.name;
    temp.innerHTML=Math.floor(jsondata.main.temp)+"deg"   //check these thing from inspect 
    type.innerHTML=jsondata.weather[0].main

    if(type.innerHTML == "Clouds"){
        image.src="images/Clouds.png"
    }else if(type.innerHTML == "Clear"){
        image.src="images/clears.png"
    }else if(type.innerHTML == "Rain"){
        image.src="images/rain.png"
    }else if(type.innerHTML == "Snow"){
        image.src="rain.png"
    }else if(type.innerHTML == "Haze"){
        image.src="images/haze.png"
    }else if(type.innerHTML == "Strom"){
        image.src="images/strom.png"
    }
    input.value=""
}

function myfun() {
    search=input.value
    data(search);
}
