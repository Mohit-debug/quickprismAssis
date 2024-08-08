const Bill = require("../modals/Bill");
const Item = require("../modals/Inventory");

    module.exports.createBill = async(req,res,next)=>{
        const { items } = req.body;
        console.log({items});
        
        let totalAmount = 0;

        try {
        const billItems = await Promise.all(items.map(async ({ itemId, quantity }) => {
            console.log({itemId});
            
            const item = await Item.findById(itemId);
            if (!item) throw new Error(`Item with id ${itemId} not found`);
    
            if (item.quantity < quantity) throw new Error(`Not enough quantity for item ${item.name}`);
    
            item.quantity -= quantity;
            await item.save();
    
            const itemTotal = item.price_per_item * quantity;
            totalAmount += itemTotal;
    
            return {
            itemId: item._id,
            name: item.name,
            quantity,
            price_per_item: item.price_per_item,
            };
        }));
    
        const newBill = new Bill({ totalAmount, items: billItems });
        await newBill.save();
    
        res.status(200).json(newBill);
        } catch (err) {
        res.status(500).json({ error: err.message });
        }
    };

    module.exports.allBillList = async(req,res,next)=>{
        try{
            const bill = await Bill.find({});
         
            res.status(200).json({
                bill,
                message:"Bill List"
            })
        }catch (err){
            next(err)
        }
    }

    module.exports.specificBill = async(req,res,next)=>{
        const requestId=req.params.requestId
        try{
            const bill = await Bill.findById(requestId);
         
            res.status(200).json({
                bill,
                message:"Bill List"
            })
        }catch (err){
            next(err)
        }
    }