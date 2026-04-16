```javascript
let currentCountry = "us";

function setCountry(code){
currentCountry = code;
loadNews("general");
}

function goHome(){
loadNews("general");
}

window.onload = function(){
loadNews("general");
}

async function loadNews(category){

const url = `https://newsapi.org/v2/top-headlines?country=${currentCountry}&category=${category}&apiKey=345025c789514ff4a1c139120e3725f1`;

const res = await fetch(url);
const data = await res.json();

let output="";

data.articles.forEach(article => {

output+=`
<div class="newsCard" onclick="window.open('${article.url}')">

<h2>${article.title}</h2>

<p>${article.description || ""}</p>

<p class="source">Source: ${article.source.name}</p>

</div>
`;

});

document.getElementById("news").innerHTML = output;

}
```
