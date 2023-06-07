
fetch("https://restcountries.com/v3.1/all")
   .then((response) => response.json())
   .then((json) => {
    renderRestaurantCard(json);
   })
  .catch((error) => console.log(error));










function renderRestaurantCard(data = []) {
    const cardsArray = [];
    const restaurantsListingContainer = document.getElementById(
      "country-card"
    );
    if (data.length > 0) {
      data.forEach((_d) => {
        const cardNode = document.createElement("div");
        cardNode.setAttribute(
          "class",
          "col-xl-4 col-lg-4 col-md-2 col-sm-12 col-xs-12"
        );
        cardNode.innerHTML = `
        <div class="container">
        
             <section class="container-fluid restaurants-section py-3">
                <div class="section-container"> 
                  
                     <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col"> 
                        <div class="card">
                        <div class="country-name">
                            <p class="fs-3">${_d.name.common}</p>
                        </div>
                        <img src="${_d.flags.png}" 
                        height="230px"
                        
                        style="border-radius: 10px; padding: 10px; object-fit: cover;"
                        class="card-img-top" alt="${_d.name.common}">
                        <div class="card-body">
                            
                          <p>Capital : ${_d.capital}</p>
                          <p>Region : ${_d.region}</p>
                          <p>Country code : ${_d.fifa}</p>
                          <button class="btn btn-primary" id="butt" type="submit">Click for Weather</button>
                          
                        </div>
                        </div>
                        </div>
                        
                        </div> 
                
                  
                </div>
            </section>
    </div>
        `
    cardsArray.push(cardNode);
});
restaurantsListingContainer.append(...cardsArray);
}
}



























