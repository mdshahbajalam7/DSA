// console.log("Shahbaj Alam");
let n = "Shahbajalam"

function dublictaeItem(str){
    let obj = {}
    for(let a=0;a<str.length;a++){
        if(obj[str[a]]===undefined){
            obj[str[a]]=1
        }
        else{
            obj[str[a]]+=1
        }
    }
    for(keys in obj){
        if(obj[keys]==1){
            console.log(keys+":"+obj[keys])
        }
    }
    // console.log(obj)
}
dublictaeItem(n)