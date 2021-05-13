let heading = document.querySelector('h1');

const fetchCities = async () => {
    const response = await fetch('config.json');
    const data = await response.json();
    return data;
}

const setCity = async () => {
    const cities = await fetchCities();
    let prevIndex = 0;
    setInterval(() => {
        let index = getRandomInt(cities.length);
        if (index === prevIndex) {
            if (prevIndex + 1 >= cities.length) {
                index = 0;
            } else {
                index += 1;
            }
        }
        const { city, imgId, height, fontSize} = cities[index];
        console.info(city, imgId, fontSize);
        heading.textContent = city;
        heading.style.backgroundImage = `url(img/${imgId})`;
        heading.style.backgroundPosition = `50% ${height}%`;
        heading.style.fontSize = fontSize
        prevIndex = index;
    }, 3000);

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

setCity();