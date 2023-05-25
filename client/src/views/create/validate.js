export const validate=(form)=>{
    const error={}
     if (!form.name)  error.name="Name required";
     else if (form.name.length<4)error.name="Invalid Name";
     else if (!form.image) error.image="Image required";
     else if (!/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(form.image)){
         error.image="Invalid image"}
     else if (!form.live) error.live="live required";
     else if (!/^([1-9]|[1-9][0-9]|100)$/.test(form.live))
         error.live="Invalid live"
     else if (!form.attack) error.attack="attack required";
     else if (!/^([1-9]|[1-9][0-9]|100)$/.test(form.attack))
         error.attack="Invalid attack"
     else if (!form.defense) error.defense="defense required";
     else if (!/^([1-9]|[1-9][0-9]|100)$/.test(form.defense))
     error.defense="Invalid defense"
     else if (!form.type1 || !form.type2) error.type1="Select 2 types"
         else if (form.speed)
         if(!/^([1-9]|[1-9][0-9]|100)$/.test(form.speed))
         error.speed="Invalid speed"
         else if (form.height)
         if (!/^([1-9]|[1-9][0-9]{1,2}|[12][0-9]{3}|3000)$/.test(form.height))
         error.height="Invalid height"
         else if (form.weight)
         if (!/^([1-9]|[1-9][0-9]{1,2}|[12][0-9]{3}|3000)$/.test(form.weight))
         error.weight="Invalid weight"
         
     return error
 }