import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from "../Itinerary.js";
import { ObjectId } from "mongodb";

let itinerary = [
    // TOKYO
    {
        cityId: new ObjectId("67294834fd88b70279be57f4"),
        title: "Traditional Tokyo Cultural Tour",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
        author: {
            name: "Emma Wilson",
            photo: "https://randomuser.me/api/portraits/women/12.jpg"
        },
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["#Culture", "#History", "#Architecture"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57f4"),
        title: "Anime & Tech Tokyo Adventure",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
        author: {
            name: "Lucas Martinez",
            photo: "https://randomuser.me/api/portraits/men/23.jpg"
        },
        price: 5,
        duration: 4,
        likes: 0,
        hashtags: ["#Anime", "#Technology", "#Nightlife"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57f4"),
        title: "Tokyo Gardens & Shopping Experience",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
        author: {
            name: "Sarah Anderson",
            photo: "https://randomuser.me/api/portraits/women/31.jpg"
        },
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#Gardens", "#Shopping", "#Traditional"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57f4"),
        title: "Tokyo Food & Temple Tour",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
        author: {
            name: "Oliver Davis",
            photo: "https://randomuser.me/api/portraits/men/15.jpg"
        },
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["#Food", "#Temple", "#Modern"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57f4"),
        title: "Artistic Tokyo Photography Tour",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        author: {
            name: "Sophie Grant",
            photo: "https://randomuser.me/api/portraits/women/22.jpg"
        },
        price: 5,
        duration: 4,
        likes: 0,
        hashtags: ["#Art", "#LocalLife", "#Photography"]
    },

    // ROME
    {
        cityId: new ObjectId("67294834fd88b70279be57f6"),
        title: "Ancient Rome Historical Tour",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
        author: {
            name: "Alexander Brown",
            photo: "https://randomuser.me/api/portraits/men/28.jpg"
        },
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#History", "#Art", "#Ancient"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57f6"),
        title: "Vatican & Italian Cuisine Experience",
        image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140",
        author: {
            name: "Sofia Garcia",
            photo: "https://randomuser.me/api/portraits/women/17.jpg"
        },
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#Food", "#Vatican", "#Culture"]
    },

    // NEW YORK
    {
        cityId: new ObjectId("67294834fd88b70279be57f8"),
        title: "Urban New York Food Tour",
        image: "https://images.unsplash.com/photo-1522083165195-3424ed129620",
        author: {
            name: "Ethan Cooper",
            photo: "https://randomuser.me/api/portraits/men/7.jpg"
        },
        price: 5,
        duration: 4,
        likes: 0,
        hashtags: ["#Urban", "#Culture", "#Food"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57f8"),
        title: "NYC Art & Shopping Experience",
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",
        author: {
            name: "Ava White",
            photo: "https://randomuser.me/api/portraits/women/8.jpg"
        },
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["#Art", "#Shopping", "#Nightlife"]
    },

    // BANGKOK
    {
        cityId: new ObjectId("67294834fd88b70279be57f9"),
        title: "Bangkok Temple & Food Tour",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed",
        author: {
            name: "Benjamin Scott",
            photo: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#Food", "#Temple", "#Culture"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57f9"),
        title: "Bangkok Markets & River Adventure",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
        author: {
            name: "Victoria Adams",
            photo: "https://randomuser.me/api/portraits/women/25.jpg"
        },
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#Markets", "#River", "#Nightlife"]
    },

    // MOSCOW
    {
        cityId: new ObjectId("67294834fd88b70279be57fb"),
        title: "Historical Moscow Architecture Tour",
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d",
        author: {
            name: "Sebastian Hughes",
            photo: "https://randomuser.me/api/portraits/men/29.jpg"
        },
        price: 4,
        duration: 4,
        likes: 0,
        hashtags: ["#History", "#Architecture", "#Culture"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57fb"),
        title: "Moscow Arts & Theater Experience",
        image: "https://images.unsplash.com/photo-1520106212299-d99c443e4568",
        author: {
            name: "Luna Rodriguez",
            photo: "https://randomuser.me/api/portraits/women/30.jpg"
        },
        price: 5,
        duration: 3,
        likes: 0,
        hashtags: ["#Art", "#Theater", "#Food"]
    },

    // LONDON
    {
        cityId: new ObjectId("67294834fd88b70279be57fc"),
        title: "Royal London Heritage Tour",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
        author: {
            name: "Max Reynolds",
            photo: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        price: 5,
        duration: 4,
        likes: 0,
        hashtags: ["#History", "#Culture", "#Royal"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57fc"),
        title: "London Theater & Shopping Experience",
        image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd",
        author: {
            name: "Alice Cooper",
            photo: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["#Shopping", "#Theater", "#Food"]
    },

    // CAIRO
    {
        cityId: new ObjectId("67294834fd88b70279be57fe"),
        title: "Ancient Pyramids & History Tour",
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368",
        author: {
            name: "Jack Harrison",
            photo: "https://randomuser.me/api/portraits/men/35.jpg"
        },
        price: 4,
        duration: 4,
        likes: 0,
        hashtags: ["#History", "#Pyramids", "#Culture"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57fe"),
        title: "Cairo Markets & Nile Experience",
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee",
        author: {
            name: "Stella Morgan",
            photo: "https://randomuser.me/api/portraits/women/35.jpg"
        },
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#Markets", "#Food", "#River"]
    },

    // PORTO
    {
        cityId: new ObjectId("67294834fd88b70279be57ff"),
        title: "Porto Wine & River Tour",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
        author: {
            name: "Isaac Turner",
            photo: "https://randomuser.me/api/portraits/men/36.jpg"
        },
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["#Wine", "#River", "#History"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be57ff"),
        title: "Porto Food & Architecture Experience",
        image: "https://images.unsplash.com/photo-1501560379-05951a742668",
        author: {
            name: "Lily Cooper",
            photo: "https://randomuser.me/api/portraits/women/36.jpg"
        },
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#Food", "#Culture", "#Architecture"]
    },

    // MARRAKECH
    {
        cityId: new ObjectId("67294834fd88b70279be5801"),
        title: "Historical Medina Tour",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        author: {
            name: "Marcus Ellis",
            photo: "https://randomuser.me/api/portraits/men/39.jpg"
        },
        price: 4,
        duration: 4,
        likes: 0,
        hashtags: ["#Medina", "#Culture", "#History"]
    },
    {
        cityId: new ObjectId("67294834fd88b70279be5801"),
        title: "Marrakech Markets & Food Tour",
        image: "https://images.unsplash.com/photo-1557700836-25f2464e845d",
        author: {
            name: "Sophie Grant",
            photo: "https://randomuser.me/api/portraits/women/38.jpg"
        },
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#Markets", "#Food", "#Traditional"]
    }
];


async function createItineraries() {
    try {
        await Itinerary.insertMany(itinerary);
        console.log("Itinerarios creados exitosamente");
    } catch (error) {
        console.error("Error al crear los itinerarios:", error);
    } finally {
        process.exit();
    }
}

createItineraries();
