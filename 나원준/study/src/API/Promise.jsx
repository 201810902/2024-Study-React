function increase(number){
    const promise = new Promise((resolve, resject) =>{

        setTimeout(()=>{
            const result = number+10;
            if(result>50){//50보다 높으면 에러 발생시키기
                const e = new Error('NumberToobig');
                return resject(e);
            }
            resolve(result);
        }, 1000);
    });
    return promise;
}

async function runTasks(){
    try{
        let result = await increase(0);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
    }
    catch(e){
        console.log(e);
    }
}
//위의 코드와 동일
// increase(0)
//     .then(number=>{
//         console.log(number);
//         return increase(number);
//     })
//     .then(number=>{
//         console.log(number);
//         return increase(number);
//     })
//     .then(number=>{
//         console.log(number);
//         return increase(number);
//     })
//     .then(number=>{
//         console.log(number);
//         return increase(number);
//     })
//     .then(number=>{
//         console.log(number);
//         return increase(number);
//     })
//     .catch(e=>{
//         console.log(e);
//     });
