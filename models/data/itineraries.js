import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from "../Itinerary.js";
import { ObjectId } from "mongodb";

let itinerary = [
    // TOKYO - 5 itinerarios
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c1"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c1"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c1"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c1"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c1"),
        author: {
            name: "Sophie Grant",
            photo: "https://randomuser.me/api/portraits/women/22.jpg"
        },
        price: 5,
        duration: 4,
        likes: 0,
        hashtags: ["#Art", "#LocalLife", "#Photography"]
    },

    // ROME - 4 itinerarios
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c3"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c3"),
        author: {
            name: "Sofia Garcia",
            photo: "https://randomuser.me/api/portraits/women/17.jpg"
        },
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#Food", "#Vatican", "#Culture"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c3"),
        author: {
            name: "Nathan Reed",
            photo: "https://randomuser.me/api/portraits/men/33.jpg"
        },
        price: 5,
        duration: 3,
        likes: 0,
        hashtags: ["#Architecture", "#Museums", "#LocalLife"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c3"),
        author: {
            name: "Charlotte Lee",
            photo: "https://randomuser.me/api/portraits/women/24.jpg"
        },
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#Shopping", "#Nightlife", "#Modern"]
    },

    // NEW YORK - 2 itinerarios
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c5"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c5"),
        author: {
            name: "Ava White",
            photo: "https://randomuser.me/api/portraits/women/8.jpg"
        },
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["#Art", "#Shopping", "#Nightlife"]
    },

    // BANGKOK - 5 itinerarios
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c6"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c6"),
        author: {
            name: "Victoria Adams",
            photo: "https://randomuser.me/api/portraits/women/25.jpg"
        },
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#Markets", "#River", "#Nightlife"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c6"),
        author: {
            name: "Lucas Bennett",
            photo: "https://randomuser.me/api/portraits/men/26.jpg"
        },
        price: 5,
        duration: 3,
        likes: 0,
        hashtags: ["#Shopping", "#Modern", "#Street"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c6"),
        author: {
            name: "Maya Watson",
            photo: "https://randomuser.me/api/portraits/women/27.jpg"
        },
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#Local", "#Buddhism", "#Architecture"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c6"),
        author: {
            name: "Owen Fletcher",
            photo: "https://randomuser.me/api/portraits/men/28.jpg"
        },
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#History", "#Art", "#Photography"]
    },
    // MOSCOW - 3 itinerarios
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c8"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c8"),
        author: {
            name: "Luna Rodriguez",
            photo: "https://randomuser.me/api/portraits/women/30.jpg"
        },
        price: 5,
        duration: 3,
        likes: 0,
        hashtags: ["#Art", "#Theater", "#Food"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c8"),
        author: {
            name: "Adrian Foster",
            photo: "https://randomuser.me/api/portraits/men/31.jpg"
        },
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#Winter", "#Museums", "#Nightlife"]
    },

    // LONDON - 4 itinerarios
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c9"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c9"),
        author: {
            name: "Alice Cooper",
            photo: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["#Shopping", "#Theater", "#Food"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c9"),
        author: {
            name: "Felix Mitchell",
            photo: "https://randomuser.me/api/portraits/men/34.jpg"
        },
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#Museums", "#Parks", "#Architecture"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2c9"),
        author: {
            name: "Ruby Thompson",
            photo: "https://randomuser.me/api/portraits/women/34.jpg"
        },
        price: 5,
        duration: 4,
        likes: 0,
        hashtags: ["#Modern", "#River", "#LocalLife"]
    },

    // CAIRO - 2 itinerarios
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2cb"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2cb"),
        author: {
            name: "Stella Morgan",
            photo: "https://randomuser.me/api/portraits/women/35.jpg"
        },
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#Markets", "#Food", "#River"]
    },

    // OPORTO - 5 itinerarios
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2cc"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2cc"),
        author: {
            name: "Lily Cooper",
            photo: "https://randomuser.me/api/portraits/women/36.jpg"
        },
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#Food", "#Culture", "#Architecture"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2cc"),
        author: {
            name: "Noah Baker",
            photo: "https://randomuser.me/api/portraits/men/37.jpg"
        },
        price: 5,
        duration: 5,
        likes: 0,
        hashtags: ["#PortWine", "#Ocean", "#LocalLife"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2cc"),
        author: {
            name: "Grace Kennedy",
            photo: "https://randomuser.me/api/portraits/women/37.jpg"
        },
        price: 4,
        duration: 3,
        likes: 0,
        hashtags: ["#Nightlife", "#Modern", "#Shopping"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2cc"),
        author: {
            name: "Thomas Gray",
            photo: "https://randomuser.me/api/portraits/men/38.jpg"
        },
        price: 3,
        duration: 4,
        likes: 0,
        hashtags: ["#Art", "#Photography", "#Traditional"]
    },

    // MARRAKECH - 3 itinerarios
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2ce"),
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
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2ce"),
        author: {
            name: "Sophie Grant",
            photo: "https://randomuser.me/api/portraits/women/38.jpg"
        },
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#Markets", "#Food", "#Traditional"]
    },
    {
        cityId: new ObjectId("6716c9b78a7e45ec6f43e2ce"),
        author: {
            name: "Dylan Marshall",
            photo: "https://randomuser.me/api/portraits/men/40.jpg"
        },
        price: 5,
        duration: 3,
        likes: 0,
        hashtags: ["#Desert", "#Adventure", "#Photography"]
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
