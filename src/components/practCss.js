console.log('hello');

const accDetails = {
    id: 1,
    name: 'himanshu',
}

const promise = new Promise(function(resolve, reject){
    
    console.log(accDetails);
    
    if(createAccount(accDetails)){
        resolve('added to list');
    }
    else{
        console.log('inside reject');
        reject('addition failed');
    }
        
    
    
});

promise.then(()=>{

    console.log('promise success');


}).catch(()=>{
    const err = new Error('id not found');
    console.log(err);
});

 function createAccount(obj){

    console.log('inside createAccount');
    if(obj.id != null){
        return true;
    }
    else{
        console.log('false');
        return false;
    }
    
}

// 1. these functions shld be there
// 2. what we do once our promise gets resolved
