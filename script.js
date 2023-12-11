/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

//outputa skämtet i id #joke

//gör en funktion av fetchet
const getJoke = () => {
fetch("https://api.chucknorris.io/jokes/random")
    .then(response => {
        if (!response.ok) {
            throw new Error("Aint no joke 4 U");
        }
        return response.json();
    })
    .then(joke =>{
        document.querySelector("#joke").innerText = `"${joke.value}"`;
    })
}
getJoke();
    // Skapa en knapp
const myButton = document.createElement("button");

// Ange knappens text
myButton.innerText = "Nytt skämt, per favor";

// Lägg till knappen i body-elementet (ändra detta beroende på var du vill lägga till knappen)
document.body.appendChild(myButton);
myButton.classList.add("btn", "btn-success", );

myButton.addEventListener("click", () =>{
getJoke();
});

//async och await

// const getJoke = async () => {
// 	const response = await fetch("https://api.chucknorris.io/jokes/random");
// 	if (!response.ok) {
// 		throw new Error("Chuck Norris is unavailable to take you call right now");
// 	}

// 	const joke = await response.json();
// 	document.querySelector("#joke").innerText = joke.value;
// }

// // Listen for when Chuck Norris is summoned
// document.querySelector("#getJokeBtn").addEventListener("click", () => {
// 	// ?!
// 	getJoke();
// });

// // Start of with a joke
// getJoke();
