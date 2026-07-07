function processData(input) {
    let result = ''  
    for(let inp of input){
        if(!result.includes(inp)) result += inp
    }
    console.log(result)
} 
processData('programming')