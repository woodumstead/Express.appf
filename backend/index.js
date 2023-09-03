const express = require('express'); //uses express package
const app = express();//creates express app
app.use(express.json());
const port = 3001;//defines a local port for app


const fruits = [
    {
        id: 1,
        name: "banana"
    },
    {
        id: 2,
        name: "mango"
    }
]


//Route for GET ------
app.get("/", (req, res) => {
    res.send('hello world!');
});

// GET all fruits
app.get("/fruits", (req, res)=> {
    res.status(200).json(fruits);
});

// ---- GET by  ' : ' id/param \\ "get all pets" \\ -----
app.get("/fruits/:id", (req, res) => {
    for (let fruit of fruits) {
        if(fruit.id == req.params.id) {
            res.status(200).send(fruit);
        }
        

    }
    res.status(404).send("fruit not foun");
}); 

// Post Route to add new fruits -----
app.post("/fruits", (req, res) => {
    let index = fruits[fruits.length -1].id + 1;
    const newFruit = {
        id: index,
        type: req.body.type
    }

    fruits.push(newFruit);
    res.json(newFruit);
});

// PUT Route ------
//app.put("/cart", (req, res) => {
//    res.send("PUT request at /cart");
//});

// DELETE Route ----
app.delete("/fruits/:id", (req, res) => {
    res.send("this item has been deleted");
});
// -=-=-=-=-=-=- PORT LISTEN -=-=-=-=-=-
app.listen(port, () => {
    console.log(`app listing on port ${port}`);
});