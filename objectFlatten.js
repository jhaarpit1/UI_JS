let student={
    name : 'Arpit',
    address : {
        personal:{
            city:'Jabalpur',
            pincode:482002
        },
        offices:{
            city:'Mohali',
            pincode:12345
        }
    }
}

let outputObj={}
let recursive = (obj,name) =>{
    for(let key in obj){
        if(typeof obj[key]=='object'){
            recursive(obj [key], name+"_"+key)
        }
        else{
            outputObj[name+"_"+key] = obj[key]
        }
    }
}
recursive(student,'student')
console.log(outputObj)

