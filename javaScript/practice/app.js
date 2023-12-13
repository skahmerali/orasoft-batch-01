// function cal (e){
//     console.log(e);
// }
// cal("hello world")

var ahmer = document.getElementById("name"); 
var arr = ["ahmer", "ali", 56, 87, 100, false]

function practice (){
    console.log(ahmer); 
    console.log(ahmer.value.length);
    for(var i = 0 ; i < ahmer.value.length ; i++){
        console.log("hello world");
        if(ahmer.value === arr[i]){
            console.log("successfully login");
        }
    }

}
