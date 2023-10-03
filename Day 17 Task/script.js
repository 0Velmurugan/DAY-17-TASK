document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.row');

    const countriesData = [
        {
            name: 'India',
            url: 'https://thumbs.dreamstime.com/b/india-paper-flag-patriotic-background-national-138241478.jpg?w=768',
            capital: 'New Delhi',
            region: 'South Asia',
            codes: '+91',
        },
        {
            name: 'France',
            url: 'https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg',
            capital: 'Paris',
            region: 'Europe',
            codes: '+33',
        },
        {
            name: 'Italy',
            url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png',
            capital: 'Rome',
            region: 'North East',
            codes: '+39',
        },
    ];

    // Function to create a Bootstrap card for each country
    function createCountryCard(country) {
        const card = document.createElement('div');
        card.classList.add('col-lg-4', 'col-md-8','col-sm-15', 'mb-4',);

        card.innerHTML = `
            <div class="card">
             <h4 class="card-header">${country.name}</h4>
                <div class="card-body;">
                    <img src=${country.url} height="140px" width="230px"/>
                    <p class="card-text">Capital: ${country.capital}</p>
                    <p class="card-text">Region: ${country.region}</p>
                    <p class="card-text">Country Codes: ${country.codes}</p>
                    <button class="btn btn-primary"> Click for Weather </button>
                </div>
            </div>
        `;

        container.appendChild(card);
    }

    // Loop through the sample data and create cards
    countriesData.forEach(createCountryCard);
});