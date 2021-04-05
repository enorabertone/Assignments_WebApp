const apiKey = "602e894f2af4b25fb89da282ba5a5a16";
const baseQuery = "https://api.themoviedb.org/3/";
const tabMovies = [];
//movie_information(400);
add_movie_info(25);
add_person_info(4);
//add_movie_info(515);
addElement();

function clearElementId(nameId){
    document.getElementById(nameId).innerHTML = "";
}


function addElement(){
    var b = document.body;
    var p = document.createElement("p");
    //p.innerHTML = "lalalal";
    //p.innerHTML = true.toString();
    var e = true;
    //p.innerHTML = true;
    p.innerHTML = boolActorDirector(791373, "Ben Affleck");
    b.appendChild(p);
}



async function boolActorDirector(movieId, namePerson){
    let query = baseQuery + "movie/"+ movieId + "/credits?api_key=" + apiKey;
    var namePerson = namePerson.toLowerCase();
    var result = false;
    try{
        let response = await fetch(query);
        let people = await response.json();
        
        for (var i = 0; i < people.cast.length; i++){
            if (JSON.stringify(people.cast[i].name).replace(/\"/g,"").toLowerCase() == namePerson){
                result = true;
            }
        }

        
        for (var j = 0; j < people.crew.length; j++){
            if (JSON.stringify(people.crew[i].name).replace(/\"/g,"").toLowerCase() == namePerson){
                result = true;
            }
        }
        

        return result ;
        
    }catch{
        var error = document.createElement("p");
        error.innerHTML = "There is an error"
        b.appendChild(error)
    }
    
    
}

async function add_movie_info(movieId){
    var b = document.body;
    let query = baseQuery + "movie/"+ movieId + "?api_key=" + apiKey;
    var d = document.createElement("div");
    d.setAttribute("id", "movieNb"+String(tabMovies.length));

    var title = document.createElement("p");
    title.innerHTML = "Title: ";
    var image = document.createElement("img");
    var releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release date: ";

    try{
        let response = await fetch(query);
        let movie = await response.json();

        title.innerHTML += JSON.stringify(movie.title);
        image.src = "http://image.tmdb.org/t/p/w185" + JSON.stringify(movie.poster_path).replace(/\"/g, "");
        releaseDate.innerHTML += JSON.stringify(movie.release_date);

        d.appendChild(title);
        d.appendChild(releaseDate);
        d.appendChild(image);

        b.appendChild(d);

        tabMovies.push(JSON.stringify(movie.id))
        
    }catch{
        clearElementId("movieNb" +  string(len(tabMovies)));
        var error = document.createElement("p");
        error.innerHTML = "There is an error"
        b.appendChild(error)
    }
}

async function add_form_movie(){
    var b = document.body;
    var form = document.createElement("form");

    var inputText = document.createElement("input");
    inputText.setAttribute("id") = "form" + String(tabMovies.length);
    var inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type") = "submit";
    inputSubmit.setAttribute("value") = "Send";
    var label = document.createElement("label");
    label.setAttribute("for", inputText);
    label.innerHTML = "Give the director or one of the actor of the movie: ";

    form.appendChild(label);
    form.appendChild(inputText);
    form.appendChild(inputSubmit);

    b.appendChild(form);
    
}

async function add_person_info(actorId){
    var b = document.body;
    let query = baseQuery +"person/"+ actorId + "?api_key=" + apiKey;
    var d = document.createElement("div");
    d.setAttribute("id", "personNb"+String(tabMovies.length));

    var name = document.createElement("p");
    name.innerHTML = "Name: ";
    var photo = document.createElement("img");

    try{
        let response = await fetch(query);
        let person = await response.json();

        name.innerHTML += JSON.stringify(person.name);
        photo.src = "http://image.tmdb.org/t/p/w185" + JSON.stringify(person.profile_path).replace(/\"/g, "");
  
        d.appendChild(name);
        d.appendChild(photo);

        b.appendChild(d);
        
    }catch{
        var error = document.createElement("p");
        error.innerHTML = "There is an error"
        b.appendChild(error)
    }
}

function main(){
    add_movie_info(527774);
    add_form_movie();
    
}

async function movie_information(movieId){
    let query = baseQuery + movieId + "?api_key=" + apiKey;
    var d = document.getElementById("movieInfo");

    var title = document.createElement("p");
    title.innerHTML = "Title: ";
    var image = document.createElement("img");
    var releaseDate = document.createElement("p");
    releaseDate.innerHTML = "Release date: ";

    try{
        let response = await fetch(query);
        let movie = await response.json();

        title.innerHTML += JSON.stringify(movie.title);
        image.src = "http://image.tmdb.org/t/p/w185" + JSON.stringify(movie.poster_path).replace(/\"/g, "");
        releaseDate.innerHTML += JSON.stringify(movie.release_date);

        p.appendChild(title);
        p.appendChild(releaseDate);
        p.appendChild(image);
        
    }catch{
        clearElementId("movieInfo");
        var p = document.getElementById("errorMessage");
        error = document.createElement("p");
        error.innerHTML = "There is an error"
        p.appendChild(error)
    }
}

function main(){
    movie_information(5);
    var p = document.getElementById("movieInfo");
    var form = document.createElement("div");

}

function test(){
    let b = document.body;
    let newDiv = document.createElement("div");
    let form = document.createElement("form");
    form.name = "formPerson";
    form.method

}


