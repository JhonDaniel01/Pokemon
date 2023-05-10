const {Type}=require("../db")

const findAllTypes=async()=>{
    const types=await Type.findAll();
    return types;
}

module.exports={findAllTypes}