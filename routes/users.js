import express from 'express';

const router = express.Router();

const users = [
    {
        firstname: "john",
        lastname : "Doe",
        age: 25
    },
    {
        firstName: "jane",
        lastName: 'Doe',
        age: 24
    }
]

router.get('/', (req,res) => {
    console.log(users);

    res.send(users);
});

router.post('/',(req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router; 