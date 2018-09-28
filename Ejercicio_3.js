var tipoDato=(array)=>{
    let contBoolean=0;
    let contNumber=0;
    let contString=0;
    
    for ( let i of array){
        if (typeof(i)=== typeof(2)){
            contNumber++;            
        } else if(typeof(i)===typeof("string")){
            contString++;
        } else if(typeof(i)===typeof(true)){
            contBoolean++;
        }
        console.log(typeof(i))       
    }
    console.log("Cantidades encontradas")
    console.log("Booleanos:"+contBoolean)
    console.log("Numeros:"+contNumber)
    console.log("Strings:"+contString)
}