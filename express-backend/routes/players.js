const express=require('express')
const router =express.Router();
let players =require ('../dummyDatabase')

router.get('/list',async(req,res)=>{
    try {
        res.status(200).json({
            data:players
        })
    } catch (error) {
        res.status(400).json({
            error:"some error occured",
            error
        })
    }
})
router.get('/list/:id',async(req,res)=>{
    let {id}=req.params;
    id=Number(id);
    try {
        let player=players.find(player=>player._id===id);
        res.status(200).json({
            data:player
        });
    } catch (error) {
        message:"Some Error occured",
        error
    }
})
module.exports=router