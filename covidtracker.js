let totalcase = document.querySelector(".totalcase")
let newcase = document.querySelector(".newcase")
let newdeath = document.querySelector(".newdeath")
let totaldeath = document.querySelector(".totaldeath")
let newrecovered = document.querySelector(".newrecovered")
let totalrecovered = document.querySelector(".totalrecovered")
let country = document.querySelector(".countrynam")
let submit = document.querySelector("button")
let inputBox = document.querySelector("input")
let countryName = ""

let gltotalcase = document.querySelector(".gtotalcase")
let glnewcase = document.querySelector(".gnewcase")
let glnewdeath = document.querySelector(".gnewdeaths")
let gltotaldeath = document.querySelector(".gdeaths")
let glnewrecovered = document.querySelector(".gnewrecovered")
let gltotalrecovered = document.querySelector(".gtotalrecovered")



    fetch("https://api.covid19api.com/summary")
    .then( d => d.json())
    .then(d => {
    console.log(d)

        gltotalcase.innerText = d.Global.TotalConfirmed
        glnewcase.innerText = d.Global.NewConfirmed
        glnewdeath.innerText = d.Global.NewDeaths
        gltotaldeath.innerText = d.Global.TotalDeaths
        glnewrecovered.innerText = d.Global.NewRecovered
        gltotalrecovered.innerText = d.Global.TotalRecovered
        
})



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