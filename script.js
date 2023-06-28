document.querySelector('#searchButton').addEventListener('click', function (){
    const departureCity = document.querySelector("#departure").value;
    const arrivalCity = document.querySelector("#arrival").value;

    fetch(`http://localhost:3000/trips/${departureCity}/${arrivalCity}`)
    .then(response => response.json())
    .then (data => {
        for (let i=0; i<data.allTripsFounded.length; i++){

            let departure = data.allTripsFounded[i].departure;
            let arrival = data.allTripsFounded[i].arrival;
            let departureHour = data.allTripsFounded[i].date;
            let price = data.allTripsFounded[i].price;
            let addedTrip = 
            `
            <div class="tripCard">
                    <div id="containerCities">
                        <div id="departureSearched">${departure}</div>
                        <p>></p>
                        <div id="arrivalSearched">${arrival}</div>
                    </div>
                    <div id="departureHour">${departureHour}</div>
                    <div id="tripPrice">${price}€</div>
                    <button id="addToCart">Book</button>
                </div>
            `

            document.querySelector('#tripResult').innerHTML += addedTrip
        }
        
        document.querySelector('#addToCart').addEventListener('click',
            function addMessage () {
                document.querySelector('.cart').innerHTML += addedTrip
            }
        )

    })
    // INSERER UNE FONCTION POUR SUPPRIMER LES RESULTATS POUR LES PROCHAINES RECHERCHES
    })

