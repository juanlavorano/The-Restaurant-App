const router = require('express').Router()
const Item = require('../models/Item')

router.post('/create', (req, res) => {

    // CREATE NEW USER
    const item = new Item({
        item: req.body.item,
        price: req.body.price
    })
    item.save(error => {
        if (error) {
            res.send(500).json('Error')
        } else {
            res.json('Saved successfully')
        }
    })
})

router.delete('/', (req, res) => {

    //DELETE ITEM
    Item.findOneAndDelete({ item: req.body.item }, function (err) {
        if (err) {
            console.log(err)
        }
        else {
            res.send("Item deleted");
        }
    });
})
module.exports = router
