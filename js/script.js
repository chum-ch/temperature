function globleWeather(res){
    if(search.value === ""){
        h3.textContent = "";
        h1.textContent = "Not found!";
        h1.style.fontSize = "20px";
    }
    else if(parseInt(res.cod) === 404){
        h3.textContent = search.value;
        h1.textContent = "Not found!";
        h1.style.fontSize = "20px";
    }
    else{
        h3.textContent = search.value;
        h1.textContent = parseInt(res.main.temp - 273) +"°C";
        h1.style.fontSize = "60px";
    }
}
function getWeater(res){
        h1.textContent = parseInt(res.main.temp - 273) +"°C";
}
const myKey = "4e93a2805cf35f87b28a2f25453631d0";
let search = document.querySelector("#search");
let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let h1 = document.querySelector("h1");
if(search.value === ""){
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+h3.textContent+"&appid="+myKey;
    fetch(url)
    .then(res =>res.json())
    .then(data=> getWeater(data))
}

btn.addEventListener("click",()=>{
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+search.value+"&appid="+myKey;
    fetch(url)
    .then(res =>res.json())
    .then(data=> globleWeather(data))
});
search.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+search.value+"&appid="+myKey;
        fetch(url)
        .then(res =>res.json())
        .then(data=> globleWeather(data))
    }
})