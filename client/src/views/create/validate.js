export const validate=(form)=>{
    const error={}
     if (!form.name)  error.name="Name requerida";
     else if (form.name.length<5)error.name="Invalid Name";
     else if (!form.image) error.image="Imagen requerida";
     else if (!/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(form.image)){
         error.image="Invalid image"}
     else if (!form.live) error.live="live requerida";
     else if (!/^[0-9]$|^[1-9][0-9]$|^(100)$/.test(form.live))
         error.live="Invalid live"
     else if (!form.attack) error.attack="attack requerida";
     else if (!/^[0-9]$|^[1-9][0-9]$|^(150)$/.test(form.attack))
         error.attack="Invalid attack"
     else if (!form.defense) error.defense="defense requerida";
     else if (!/^[0-9]$|^[1-9][0-9]$|^(100)$/.test(form.defense))
         error.defense="Invalid defense"
     else if (!form.type1 || !form.type2) error.type1="Select 2 types"
     else if (form.speed)
         if(!/^[0-9]$|^[1-9][0-9]$|^(100)$/.test(form.speed))
             error.speed="Invalid speed"
     else if (form.height)
         if (!/^[0-9]$|^[1-9][0-9]$|^(100)$/.test(form.height))
             error.height="Invalid speed"
     else if (form.weight)
         if (!/^[0-9]$|^[1-9][0-9]$|^(100)$/.test(form.weight))
             error.weight="Invalid weight"
     
     return error
 }