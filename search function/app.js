var array = ['nikhil','nishant','jatin','jindal','arpit','aman'];

var string = 'abc@gmail.com,efg@yahoo.com,pqr@gmail.com';




function search(){


var a = document.getElementById('sinput');
//console.log(a.value);
for(var i=0;i<array.length;i++){

    if(a.value !=""){
    if( array[i].startsWith(a.value))
        console.log(array[i])
    }
}
 
}


function breakstring(){

console.log(string.split(','));
}