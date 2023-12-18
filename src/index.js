// write your code here
fetch("http://localhost:3000/ramens")
.then(res => res.json())
.then(data => {
    console.log(data);
    for (let ramen of data) {
        renderRamen(ramen)
    };
})

const renderRamen = (ramenObject) => {
    let ramenMenu = document.querySelector("#ramen-menu");

    let ramenImg = document.createElement("img");
    ramenImg.src = ramenObject.image

    ramenMenu.append(ramenImg)

    ramenImg.addEventListener("click", () => ramenDetails(ramenObject))
}

const ramenDetails = (ramenObject) => {
    
    let ramenPic = document.querySelector(".detail-image");
    ramenPic.src = ramenObject.image

    let ramenName = document.querySelector(".name");
    ramenName.textContent = ramenObject.name

    let ramenRestaurant = document.querySelector(".restaurant");
    ramenRestaurant.textContent = ramenObject.restaurant

    
}

let form = document.getElementById("new-ramen");

form.addEventListener("submit", (e) => {

    e.preventDefault()

    let newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
    }

    renderRamen(newRamen);

    fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: {
            "content-type": "Application/json",
        },
        body: JSON.stringify(newRamen),
    });

});