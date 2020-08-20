const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');

const categories = {
    dogs: 
    {
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs')
    },
    cats: 
    {
        button: document.getElementById('cats-link'),
        content: document.getElementById('cats')
    },
    mices:
    {
        button: document.getElementById('mices-link'),
        content: document.getElementById('mices')
    },
}

let dogList = [
    {
        name: "chihuahua",
        region: "mexico",
        description: "perrito ruidoso"
    },
    {
        name: "beagle",
        region: "inglaterra",
        description: "perrito con pelo corto"
    },
    {
        name: "pastor aleman",
        region: "alemania",
        description: "perrito que es pastor"
    },
    {
        name: "huskey",
        region: "siberia",
        description: "perrito que parece lobo"
    }
];


let catList = [
    {
        name: "Gato montés",
        region: "Africa",
        description: "gatito camuflado"
    },
    {
        name: "Gato del bosque de Noruega",
        region: "noruega",
        description: "gatito peludo que vive en el bosque"
    },
    {
        name: "esfinge",
        region: "Canada",
        description: "gatito sin pelo que yo pensaba que era egipcio, pero no"
    },
    {
        name: "Van turco",
        region: "Turquia",
        description: "gatito peludo de turquia"
    },

    {
        name: "Maine coon",
        region: "Estados Unidos",
        description: "Gatito grande y peludo"
    }
];

let micesList = [
    {
        name: "rata",
        region: "todos lados",
        description: "rata que vaga por la basura"
    },
    {
        name: "raton",
        region: "todos lados",
        description: "una rata pero más chica"
    },
    {
        name: "rata que se comio el michi",
        region: "panza del michi",
        description: "se la comio el michi"
    }
];



categories.dogs.button.onclick = ()=> {
    if(categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML = '';
        return;
    }
    dogList.forEach(dog =>{
        categories.dogs.content.innerHTML += `<li>
            <span>${dog.name}</span>
            <div>region: ${dog.region}</div>
            <div>description: ${dog.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}

categories.cats.button.onclick = ()=> {
    if(categories.cats.content.innerHTML){
        categories.cats.content.innerHTML = '';
        return;
    }
    catList.forEach(cat =>{
        categories.cats.content.innerHTML += `<li>
            <span>${cat.name}</span>
            <div>region: ${cat.region}</div>
            <div>description: ${cat.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}

categories.mices.button.onclick = ()=> {
    if(categories.mices.content.innerHTML){
        categories.mices.content.innerHTML = '';
        return;
    }
    micesList.forEach(mice =>{
        categories.mices.content.innerHTML += `<li>
            <span>${mice.name}</span>
            <div>region: ${mice.region}</div>
            <div>description: ${mice.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}
