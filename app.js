let Obj = function(){}

Obj.prototype.SomarDez = function(arg1_){
    //pego o ultimo argumento recebido, que no caso é a função
    var callback_ = arguments[arguments.length - 1];
    //se callback_ for uma função, salva ela em callback. Se não for uma função, salva null em callback
    callback = (typeof(callback_) == 'function' ? callback_ : null); 
    //se o arg1_ for um number, salva em arg1. Se não for um number salva null em arg1
    var arg1 = typeof arg1_ === 'number' ? arg1_ : null; 
    
    //se arg1 for nulo
    if(!arg1){ 
        //retorna a função callback com um erro, informando que arg1 não é um number.
        return callback(new Error('Primeiro argumento nullo ou não é um número'));
    }

    //se tudo está ok faz o cálculo, e retorna a função com a soma
    process.nextTick(function(){
        var soma = arg1 + 10;
        return callback(null, soma);
    });
}

var teste = new Obj();
teste.SomarDez(15, function(err, result){
    if(err){
        console.log('erro: ' + err);
    }else{
        console.log('resultado: ' + result);
    }
});