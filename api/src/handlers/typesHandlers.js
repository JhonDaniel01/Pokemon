const {findAllTypes}=require('../controllers/typesControlers')
const getTypesHandler=async(req,res)=>{
    try {
        const types=await findAllTypes();
        res.status(200).json(types);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={getTypesHandler}