import "dotenv/config.js"
import '../../config/database.js'
import bcryptjs from 'bcryptjs'
import User from '../User.js'

let users = [
    {
        name: "Juan Carlos",
        lastname: "Forero",
        email: "carlos.forero@example.com",
        password: "Password123",
        country: "Colombia",
        photo: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uYSUyMHZpYWplcmF8ZW58MHx8MHx8fDA%3D",
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
