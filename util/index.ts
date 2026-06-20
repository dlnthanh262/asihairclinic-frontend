export const formatShortMoney =(input:any,fixed=2)=>{
    let result = "";
    if(typeof input ==="number"){
        if(input>=1000000000){
            const da:number = (input/1000000000);
            let dau = da+"";
            if(input%1000000000>0){
                dau = da.toFixed(fixed);
                if(dau[dau.length-1]==="0"){
                    dau= dau.substring(0,dau.length-1);
                }
            }
            result= dau   +" Tỷ";
        }else  if(input>=1000000){
            const da:number  = (input/1000000);
            let dau = da+"";
            if(input%1000000>0){
                dau = da.toFixed(fixed);
                if(dau[dau.length-1]==="0"){
                    dau= dau.substring(0,dau.length-1);
                }

            }
            result= dau+" Triệu";
        }else   if(input>=1000){
            const da:number = (input/1000);
            let dau = da+"";
            if(input%1000>0){
                dau =  da.toFixed(fixed);
                if(dau[dau.length-1]==="0"){
                    dau= dau.substring(0,dau.length-1);
                }
            }
            result= dau+" Nghìn";
        }else
        {
            result=(input)+" vnd";
        }
    }

    return result;
};
export const formatShortMoney2 =(input:any,fixed=2)=>{
    let result = "";
    if(typeof input ==="number"){
        if(input>=1000000000){
            const da:number = (input/1000000000);
            let dau = da+"";
            if(input%1000000000>0){
                dau = da.toFixed(fixed);
                if(dau[dau.length-1]==="0"){
                    dau= dau.substring(0,dau.length-1);
                }
            }
            result= dau   +"";
        }else  if(input>=1000000){
            const da:number  = (input/100000000);
            let dau = da+"";
            if(input%100000000>0){
                dau = da.toFixed(fixed);
                if(dau[dau.length-1]==="0"){
                    dau= dau.substring(0,dau.length-1);
                }

            }
            result='0.'+ dau+"";
        }else   if(input>=1000){
            const da:number = (input/1000);
            let dau = da+"";
            if(input%1000>0){
                dau =  da.toFixed(fixed);
                if(dau[dau.length-1]==="0"){
                    dau= dau.substring(0,dau.length-1);
                }
            }
            result= dau+"";
        }else
        {
            result=(input)+"";
        }
    }

    return result;
};
export const formatMoney =(input:any)=>{
    let result = "";
    if(typeof input ==="number"){
        if(input>1000000000){
            let dau:any = (input/1000000000);
            if(input%1000000000>0){
                dau = dau.toFixed(2);
                if(dau[dau.length-1]==="0"){
                    dau= dau.substring(0,dau.length-1);
                }
            }
            result= dau   +" Tỷ";
        }else  if(input>1000000){
            let dau:any = (input/1000000);
            if(input%1000000>0){
                dau = dau.toFixed(2);
                if(dau[dau.length-1]==="0"){
                    dau= dau.substring(0,dau.length-1);
                }
            }
            result= dau+" Triệu";
        }else   if(input>1000){
            let dau:any = (input/1000);
            if(input%1000>0){
                dau = dau.toFixed(2);
                if(dau[dau.length-1]==="0"){
                    dau= dau.substring(0,dau.length-1);
                }
            }
            result= dau+" Nghìn";
        }else
        {
            result=(input)+" vnd";
        }
    }

    return result;
};
export const formatNumberMoney =(amount:any, decimalCount = 0, decimal = ".", thousands = ".",currency='vnđ')=> {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        // @ts-ignore
        return (negativeSign +
            (j ? i.substr(0, j) + thousands : '') +
            i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
            (decimalCount ? decimal + Math.abs(amount - parseInt(i)).toFixed(decimalCount).slice(2) : ""))+''+currency;
    } catch (e) {
        console.log(e)
    }
};
export const toUpperCase =(stri:string)=> {
    try {
        stri.toUpperCase()
    } catch (e) {
        console.log(e)
    }
};
export default {formatShortMoney,formatNumberMoney,formatMoney};
