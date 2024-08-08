const express = require("express");

const{
    createBill,
    allBillList,
    specificBill
   
} = require("../controllers/bill.contoller")

const router = express.Router();

router.post("/add",createBill)
router.get("/get",allBillList)
router.get("/get/:requestId",specificBill)

module.exports = router;
