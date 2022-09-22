let totalcase = document.querySelector(".totalcase")
let newcase = document.querySelector(".newcase")
let newdeath = document.querySelector(".newdeath")
let totaldeath = document.querySelector(".totaldeath")
let newrecovered = document.querySelector(".newrecovered")
let totalrecovered = document.querySelector(".totalrecovered")
let country = document.querySelector(".countrynam")
let submit = document.querySelector("button")
let inputBox = document.querySelector("input")

let gtotalcase = document.querySelector(".gtotalcase")
let gnewcase = document.querySelector(".g-newcase")
let gnewdeath = document.querySelector(".g-newdeaths")
let gtotaldeath = document.querySelector(".g-totaldeath")
let gnewrecovered = document.querySelector(".g-newrecovered")
let gtotalrecovered = document.querySelector(".g-totalrecovered")
let countryName = ""

    window.onload = function(){
        fetch("https://api.covid19api.com/summary")
        .then( d => d.json())
        .then(d => {
        console.log(d)
        let v = Global.TotalDeaths;
        gtotalcase.innerText = v
})}


//}
// submit.onclick = function(){
//     countryName  = inputBox.value
//     country.innerText = countryName
// }
window.onload = function(){
    
    submit.onclick = function(){
        countryName = inputBox.value
        country.innerText = countryName
    
    fetch("https://api.covid19api.com/summary")
    .then(d => d.json())
    .then(d => {
        // console.log(d)
        //  let v = Global.TotalDeaths;
        //  gtotalcase.innerText = v
   
       
        let {Countries} = d
      
        const [countryname] = Countries.filter(c => c.Country == countryName)

        totalcase.innerText = countryname.TotalConfirmed
        newcase.innerText = countryname.NewConfirmed
        newdeath.innerText = countryname.NewDeaths
        totaldeath.innerText = countryname.TotalDeaths
        newrecovered.innerText = countryname.NewRecovered
        totalrecovered.innerText = countryname.TotalRecovered
        
    })
    
}}