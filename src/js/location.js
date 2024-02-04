const from = document.getElementById("from");
const fromList = document.getElementById("from-list");
const to = document.getElementById("to");
const toList = document.getElementById("to-list");

const fromItem = document.getElementById("item-from");
const toItem = document.getElementById("item-to");

const locationsFrom = document.querySelectorAll(".locations-from li");
const locationsTo = document.querySelectorAll(".locations-to li");

const locationChange = document.getElementById("location-change")


// from codes..
from.addEventListener("keyup", () => {
    if(from.value.trim().length >= 3){
        fromList.classList.add("active");
        fromItem.classList.add("active");
    } else {
        fromList.classList.remove("active");
        fromItem.classList.remove("active");
    }
})

locationsFrom.forEach((item) => {
    item.addEventListener("click", () => {
        let childElement = item.querySelector("span");
        from.value = childElement.textContent.trim();
        fromList.classList.remove("active");
        fromItem.classList.remove("active");
    })
})

const fromClear = () => {
   from.addEventListener("click", () => {
     from.value = "";
     toList.classList.remove("active");
     toItem.classList.remove("active");
   })
}


// to codes..
to.addEventListener("keyup", () => {
    if(to.value.trim().length >= 3){
        toList.classList.add("active");
        toItem.classList.add("active");
    } else {
        toList.classList.remove("active");
        toItem.classList.remove("active");
    }
})

locationsTo.forEach((item) => {
    item.addEventListener("click", () => {
        let childElement = item.querySelector("span");
        to.value = childElement.textContent.trim();
        toList.classList.remove("active");
        toItem.classList.remove("active");
    })
})

const toClear = () => {
   to.addEventListener("click", () => {
     to.value = "";
     fromList.classList.remove("active");
     fromItem.classList.remove("active");
   })
}

// change location
const changeLocations = () => {
    locationChange.addEventListener("click", () => {
        if(from.value === "" || to.value === "") {
            alert("Konumları Seçiniz..");
        }
        else {
            const lastValue = from.value;
            from.value = to.value;
            to.value = lastValue;
        }
    })
}


fromClear();
toClear();
changeLocations();