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
router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});
/*router.get('/', (req,res) => {
    console.log(users);

    res.send(users);
});*/

router.post('/',(req, res) => {
    const user = req.body;

    const userId = uuidv4();

    res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router; 