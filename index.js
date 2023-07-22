//receivesAFunction

function receivesAFunction(callback){
    return callback();
    
}

// returnsANamedFunction

function returnsANamedFunction(){
    function name(){
        console.log('This is a named function');
    }
   return name();
     
}

// returnsAnAnonymousFunction

function returnsAnAnonymousFunction(){

return ()=>'This is an Anonymous function returned';
}

//calling the functions

receivesAFunction(function callback(){
    console.log('This is a call back function');
});

returnsANamedFunction();

console.log(returnsAnAnonymousFunction());