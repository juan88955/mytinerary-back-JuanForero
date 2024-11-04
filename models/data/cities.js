import "dotenv/config.js";
import "../../config/database.js";
import City from "../City.js";

let cities = [
    {
        name: "Tokyo",
        image: "https://tsmnoticias.com/wp-content/uploads/2016/12/Tokio-es-el-destino-asiatico-mas-solicitado-por-los-colombianos-1.jpg",
        country: "Japan",
        continent: "Asia",
        description: "Capital of Japan, blend of ultramodern and traditional",
        currency: "Japanese Yen (JPY)",
        languages: "Japanese",
        population: 37400000,
        capital: "Tokyo"
    },
    {
        name: "Dubai",
        image: "https://www.cloud-europamundo.com/img/carousel/hd/Dubai_20221104170129.jpg",
        country: "United Arab Emirates",
        continent: "Asia",
        description: "Known for luxury shopping, ultramodern architecture and lively nightlife",
        currency: "United Arab Emirates Dirham (AED)",
        languages: "Arabic, English",
        population: 3331000,
        capital: "Abu Dhabi"
    },
    {
        name: "Rome",
        image: "https://static.toiimg.com/photo/53891769.cms",
        country: "Italy",
        continent: "Europe",
        description: "Italy's capital, famous for history, art and cuisine",
        currency: "Euro (EUR)",
        languages: "Italian",
        population: 4342212,
        capital: "Rome"
    },
    {
        name: "Cape Town",
        image: "https://www.south-african-hotels.com/media/OneandOnlyHotel.jpg",
        country: "South Africa",
        continent: "Africa",
        description: "Legislative capital of South Africa, known for its harbour and natural setting",
        currency: "South African Rand (ZAR)",
        languages: "Afrikaans, English, Xhosa",
        population: 4618000,
        capital: "Pretoria (administrative), Cape Town (legislative), Bloemfontein (judicial)"
    },
    {
        name: "New York",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Long_Island_City_New_York_May_2015_panorama_3.jpg/1000px-Long_Island_City_New_York_May_2015_panorama_3.jpg",
        country: "United States",
        continent: "North America",
        description: "Most populous city in the US, global hub for finance and culture",
        currency: "United States Dollar (USD)",
        languages: "English",
        population: 8804190,
        capital: "Washington, D.C."
    },
    {
        name: "Bangkok",
        image: "https://viajes.nationalgeographic.com.es/medio/2023/06/28/gran-palacio-real_491caafe_1385269772_230628145613_1280x854.jpg",
        country: "Thailand",
        continent: "Asia",
        description: "Capital of Thailand, known for ornate shrines and vibrant street life",
        currency: "Thai Baht (THB)",
        languages: "Thai",
        population: 10539000,
        capital: "Bangkok"
    },
    {
        name: "Sydney",
        image: "https://cdn.britannica.com/86/156586-050-EFB37140/Harbour-Bridge-Sydney.jpg",
        country: "Australia",
        continent: "Oceania",
        description: "Largest city in Australia, famous for its harbour and opera house",
        currency: "Australian Dollar (AUD)",
        languages: "English",
        population: 5312000,
        capital: "Canberra"
    },
    {
        name: "Moscow",
        image: "https://www.after-russia.org/content/explained_regional-disparities-in-russia_moscow.jpg",
        country: "Russia",
        continent: "Europe",
        description: "Capital of Russia, known for its historic architecture and museums",
        currency: "Russian Ruble (RUB)",
        languages: "Russian",
        population: 12506468,
        capital: "Moscow"
    },
    {
        name: "London",
        image: "https://i.pinimg.com/736x/6d/6a/88/6d6a8802a2267e47840be77a470a0dc4.jpg",
        country: "United Kingdom",
        continent: "Europe",
        description: "Capital of England and the UK, a global city with history dating back to Roman times",
        currency: "Pound Sterling (GBP)",
        languages: "English",
        population: 8982000,
        capital: "London"
    },
    {
        name: "Rio de Janeiro",
        image: "https://www.revistadeck.com/wp-content/uploads/Cristo-Redentor.-Icono-de-Rio-de-Janeiro-y-del-mundo-Portada.jpg",
        country: "Brazil",
        continent: "South America",
        description: "Famous for its Copacabana beach, Christ the Redeemer statue and Carnival",
        currency: "Brazilian Real (BRL)",
        languages: "Portuguese",
        population: 6320000,
        capital: "Brasília"
    },
    {
        name: "Cairo",
        image: "https://www.panavision-tours.com/viajes/el-cairo-turismo/el-cairo.jpg",
        country: "Egypt",
        continent: "Africa",
        description: "Capital of Egypt, known for its ancient pyramids and rich history",
        currency: "Egyptian Pound (EGP)",
        languages: "Arabic",
        population: 20439541,
        capital: "Cairo"
    },
    {
        name: "Oporto",
        image: "https://i0.wp.com/www.telocuentoviajando.com/wp-content/uploads/2022/03/IMG_9480-scaled.jpg?fit=2560%2C1707&ssl=1",
        country: "Portugal",
        continent: "Europe",
        description: "Coastal city in northwest Portugal, known for its port wine production",
        currency: "Euro (EUR)",
        languages: "Portuguese",
        population: 237591,
        capital: "Lisbon"
    },
    {
        name: "Kyoto",
        image: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg",
        country: "Japan",
        continent: "Asia",
        description: "Former imperial capital of Japan, known for its classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses",
        currency: "Japanese Yen (JPY)",
        languages: "Japanese",
        population: 1464000,
        capital: "Tokyo"
    },
    {
        name: "Marrakech",
        image: "https://i.pinimg.com/736x/f9/7f/2b/f97f2ba0ff69111a4750c17e627f9be5.jpg",
        country: "Morocco",
        continent: "Africa",
        description: "A major city in Morocco, known for its vibrant markets, gardens, palaces, and mosques",
        currency: "Moroccan Dirham (MAD)",
        languages: "Arabic, Berber",
        population: 928850,
        capital: "Rabat"
    },
    {
        name: "Vancouver",
        image: "https://e0.pxfuel.com/wallpapers/495/187/desktop-wallpaper-vancouver-vancouver-bc.jpg",
        country: "Canada",
        continent: "North America",
        description: "Coastal seaport city in western Canada, known for its stunning natural beauty, diverse culture, and high quality of life",
        currency: "Canadian Dollar (CAD)",
        languages: "English, French",
        population: 2632000,
        capital: "Ottawa"
    }
];


City.insertMany(cities)
    .then(() => {
        console.log('Datos de cities insertados correctamente');
        process.exit(0);
    })
    .catch(error => {
        console.error('Error al insertar datos de cities:', error);
        process.exit(1);
    });