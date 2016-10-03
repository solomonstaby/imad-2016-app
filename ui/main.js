console.log('Loaded!');
//submit name
var nameInput =document.getElementById('name');
var name = varInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    //make a request to the server and send the name
    
    //capture a liust of names and render it as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0,i<names.length;i++){
        list += '<li>' + names[i] + '<li>';
    }
    var ul =document.getElementById('namelist');
    ul.innerHTML = list;
    
};