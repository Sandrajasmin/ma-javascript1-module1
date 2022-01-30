
//Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

cat.complain();

//Question 2:

const heading = document.querySelector("h3");
heading.innerText = "Updated heading";

//Question 3:

heading.style.fontSize = "2em";

//Question 4:

heading.classList.add("subheading");
console.dir(heading);

//Question 5:

const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].style.color = "red")
}

//Question 6:

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";

//Question 7:

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];



function printName(list) {
    for (let i = 0; i < cats.length; i++) {
        console.log(cats[i].name);
    }
    console.log(list);
}

printName(cats);

//Question 8:

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
    let html = "";
    for (let i = 0; i < cats.length; i++) {
        let theCatsAge = "";
        if (cats[i].age) {
            theCatsAge = cats[i].age;
        } else {
            theCatsAge = " Unknown";
        }
        html += `
        <div>
        <h5>Name: ${cats[i].name}</h5>
        <p>Age: ${theCatsAge}</p>
        </div>
        `;
    }
    return html;
}

catContainer.innerHTML = createCats(cats);
