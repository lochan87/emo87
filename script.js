function load() {
    window.location.href = "index.html";
}

fetch('/logo',{method:"GET"}).then((response) => {
    response.json().then((data) => {
        var img = document.getElementById('logo');
        img.src = "data:image/png;base64," + data.logo.toString("base64");
    })
})

function postusn(){ //To post USN
    fetch('/usn',
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            parcel:document.getElementById('usn').value
        })
    })
}