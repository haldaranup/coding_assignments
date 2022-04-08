async function getData(url){
    let res = await fetch(url)
    let data1 = await res.json()
    let data = data1.categories
    return data
}

function appendData(data, parent){
    data.forEach((p)=>{
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = p.strCategoryThumb
        let title = document.createElement("p")
        title.innerHTML = p.strCategory
        div.append(title, image)
        parent.append(div)
    })
}

export {getData, appendData}