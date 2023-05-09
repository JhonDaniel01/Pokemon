const getTypesHandler=(req,res)=>{
    res.status(200).json({types:"Trae todos los tipos de pokemon"})
}
module.exports={getTypesHandler}