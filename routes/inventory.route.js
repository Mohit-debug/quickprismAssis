const express = require("express");

const{
    createInventory,
    allInventoryList,
    inventoryDelete
} = require("../controllers/inventory.controller")

const router = express.Router();

router.post("/add",createInventory)
router.get("/get",allInventoryList)
router.delete("/delete/:requestId",inventoryDelete)


module.exports = router;