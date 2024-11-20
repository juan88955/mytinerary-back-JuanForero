import "dotenv/config.js"
import '../../config/database.js'
import bcryptjs from 'bcryptjs'
import User from '../User.js'

let users = [
    {
        name: "Juan Carlos",
        lastname: "Rodriguez",
        email: "carlos.rodriguez@example.com",
        password: "password123",
        country: "Colombia",
        photo: "https://example.com/photo45.jpg",
        online: true,
        role: 1,
    },
];


users = users.map(user => ({
    ...user,
    password: bcryptjs.hashSync(user.password, 10)
}))

User.insertMany(users)
    .then(() => console.log("Users inserted successfully"))
    .catch((error) => console.error("Error inserting users:", error))
