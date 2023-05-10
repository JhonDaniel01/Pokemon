const axios=require('axios')
const {Type}=require('../db')
const loadTypes= async()=>{
    try {
        const types=(await axios.get('https://pokeapi.co/api/v2/type')).data.results
        types.map(async(type)=>{
            const name =  await type.name;
            await Type.create({name})
            //console.log(name);
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={loadTypes};