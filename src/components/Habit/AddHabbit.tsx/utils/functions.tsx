export const setInputNumericValue = (value:string, setState:React.Dispatch<React.SetStateAction<number>>, percentage?:boolean) => {
    if(value.length === 0){
        setState(0);
    }else{
      
        
        let isNum = /^\d+(\.\d*)?$|^\.\d+$/.test(value);
        console.log(isNum,value)
        if(isNum){
            // let numValue = parseFloat(value);
            if(percentage){
             
            }else{
                setState(parseFloat(value));
            }
        }
    }
}
