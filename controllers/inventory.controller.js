const Item = require("../modals/Inventory");


module.exports.createInventory = async(req,res,next)=>{
    try{
        const{
            item,
            price_per_item,
            quantity
        } = req.body
 
        const itemName = await Item.create({
            item,
            price_per_item,
            quantity
        });
        await itemName.save();
        res.status(200).json({
            itemName,
            message:"Item added"
        })
    }catch (err){
        next(err)
    }
}

module.exports.allInventoryList = async(req,res,next)=>{
    try{ 
        const item = await Item.find({});
     
        res.status(200).json({
            item,
            message:"Item List"
        })
    }catch (err){
        next(err)
    }
}

module.exports.inventoryDelete = async(req,res,next)=>{
    try{ 
        const requestId = req.params.requestId
        console.log({requestId});
        
        await Item.findByIdAndDelete(requestId);
     
        res.status(200).json({
           
            message:"Item delete"
        })
    }catch (err){
        next(err)
    }
}
