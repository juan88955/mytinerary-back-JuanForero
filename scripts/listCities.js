import "dotenv/config.js";
import "../config/database.js";
import City from "../models/City.js";

async function listCities() {
    try {
        // Obtener ciudades únicas por nombre
        const cities = await City.aggregate([
            {
                $group: {
                    _id: "$name",
                    uniqueDoc: { $first: "$$ROOT" }
                }
            },
            {
                $replaceRoot: { newRoot: "$uniqueDoc" }
            },
            {
                $sort: { name: 1 }  // Ordenar alfabéticamente por nombre
            }
        ]);

        console.log("\nListado de ciudades únicas en la base de datos:");
        console.log("=====================================\n");
        
        cities.forEach(city => {
            console.log(`Ciudad: ${city.name}`);
            console.log(`ID: ${city._id}`);
            console.log("-------------------------------------");
        });
        
        console.log(`\nTotal de ciudades únicas: ${cities.length}`);
    } catch (error) {
        console.error("Error al listar las ciudades:", error);
    } finally {
        process.exit();
    }
}

listCities();