
const $apiBtn = document.querySelector(".apiForm")
const body = document.getElementsByTagName("body")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd43d7646fbmsh00468af93a0f4d7p1850cdjsn0c3753287b78',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};



const cargarApi = ()=>{

}

$apiBtn.addEventListener("submit",(e)=>{
    e.preventDefault()
    const cardName = document.querySelector(".search")
    const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName.value}`;
    fetch(url, options)
    .then(response=>{
        console.log(response)
        return response.json()
    })
    .then(result=>{
        console.log(result)
        result.forEach(e => {
            console.log("*******")
            console.log(e)
            const div = document.createElement("div");
            div.innerHTML= `${e}`
            
        });
    })

})
