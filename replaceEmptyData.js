function replaceEmptyData(data){
    if(data instanceof Array){
        return data.map((obj)=>{
            for(let key in obj  ){
                if (obj[key]==='') {obj[key]='-'} 
            }
            return obj
        })
    }
}
