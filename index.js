const key = `eUNIeYjfzmvFKUJ8nymjE8nWnZQmTrljGtjHrbMN`;
let data;
async function fetchData() {
    let resp = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
    data = resp.json().then(info => {
        getImage(info);
    }).catch(error => {
        let caption = document.getElementById("caption");
        caption.innerText = error.message;
    });
    
}

function getImage(data) {
    const {title, hdurl, url, explanation} = data;
    
    let imgTitle = document.getElementById("title");
    imgTitle.innerText = title;

    let img = document.getElementById("image");
    img.setAttribute("src",hdurl);

    let caption = document.getElementById("caption");
    caption.innerText = explanation;
}

fetchData();