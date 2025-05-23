const router = require("express").Router();
const Categories = require("../models/Category");
const Category = require("../models/Category");

//category post
router.post("/", async (req, res)=>{
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err)
    }
});

//category get
router.get("/", async (req, res)=>{
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router