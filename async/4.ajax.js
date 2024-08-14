const xhr = new XMLHttpRequest () //ini ajax

xhr.open ("GET", "https://api.npoint.io/9a2f5cb05b4807023ce7", true)

xhr.onerror = () => {
    console.log ("Network error!")
}

xhr.onload = () => {
    console.log (xhr.responseText)
}

xhr.send()