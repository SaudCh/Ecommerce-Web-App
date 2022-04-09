const cartSchema = require("../models/cartSchema")

const addItem = async (req, res) => {
    const { name, price, id, img } = req.body;
    const newItem = new cartSchema({
        name: name,
        quantity: 1,
        price: price,
        user: id,
        img: img
    });

    try {
        await newItem.save();
    } catch (err) {
        res.status(400).json({ error: "Signup Failed", errorDetail: err });
        return
    }

    res.status(201).json({ message: "Added to Cart" });
};

const getCartByID = async (req, res) => {
    const id = req.params.id;


    let items
    try {
        items = await cartSchema.find({ user: id })
    } catch (err) {
        res.status(400).json({ error: "Signup Failed", errorDetail: err });
    }

    res.status(201).json({ cart: items });
};

const deleteItem = async (req, res) => {
    const id = req.params.id
    try {
        await cartSchema.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
    }
    res.json({ message: "Item deleted" })
}

const decQuant = async (req, res) => {
    const id = req.params.id
    const { quantity } = req.body
    try {
        await cartSchema.findByIdAndUpdate(id, {
            quantity: quantity - 1
        })
    } catch (error) {
        console.log(error)
    }
    res.json({ message: "Updated" })
}

const incQuant = async (req, res) => {
    const id = req.params.id
    const { quantity } = req.body
    try {
        await cartSchema.findByIdAndUpdate(id, {
            quantity: quantity + 1
        })
    } catch (error) {
        console.log(error)
    }
    res.json({ message: "Updated" })
}

exports.addItem = addItem
exports.getCartByID = getCartByID
exports.deleteItem = deleteItem
exports.decQuant = decQuant
exports.incQuant = incQuant