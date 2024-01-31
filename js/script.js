const grigliaElement = document.querySelector("#griglia")

for (let i = 1; i <= 100; i++) {
    const newElement = document.createElement("div");
    newElement.className = "square";
    newElement.innerHTML = i;
    newElement.style.border = "1px solid black"
    newElement.style.height = "100px"
    newElement.style.width = "100px"
    newElement.style.fontSize = "20px"
    newElement.style.backgroundColor = "#1389b2"

    if (i % 3 == 0) {
        newElement.innerHTML = "Fizz"
        newElement.style.backgroundColor = "#0cd6a1"
    } else if (i % 5 == 0) {
        newElement.innerHTML = "Buzz"
        newElement.style.backgroundColor = "#ffd166"
    }

    if ((i % 3 == 0) && (i % 5 == 0)) {
        newElement.innerHTML = "FizzBuzz"
        newElement.style.backgroundColor = "#f0466f"
    }

    grigliaElement.append(newElement)
}