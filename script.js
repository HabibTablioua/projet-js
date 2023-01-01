

var content2 = document.querySelector('.content2');
var listCat = document.getElementById("listC");
let d = document.getElementById("test");

function creationCours(image, titre, prix) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img');
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content2.append(div)
}


courses.forEach((el) => {
    creationCours(el.image, el.title, el.price);
})
//--------------------------------
var value1 = document.getElementById("range").value;
document.getElementById("value").innerHTML=value1+" $";

document.getElementById("range").addEventListener('input',function(){

    var value4 = document.getElementById("range").value; 
    document.getElementById("value").innerHTML=value4+" $";
    let res = false ; 
    d.innerHTML="";
   courses.forEach((e)=>{
    if(e.price<value4){
        creationCours(e.image, e.title, e.price);
        res=true;
    }
   });
   if(c==false){
    d.innerHTML="<h3><b><u><i>Donner un autre nombre</i></u></b></h3>";
   }
   

  


});

//--------------------------------------

function creationCategories(cat){
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(cat));
    li.setAttribute('class', 'list-group-item');
    listCat.append(li);
}

var categories = ['all', ...new Set(courses.map((v)=> v.category.toLowerCase()))];
console.log(categories);

categories.forEach((v) => {
    creationCategories(v);
});

let s = document.getElementById("search");

console.log(d);
s.addEventListener("keyup",function(e){
    const res = e.target.value;
    const filtercourses = courses.filter((course) => {
        return course.title.includes(res);
    });
    if(filtercourses.length > 0){
        d.innerHTML="";
         courses.forEach((filtercourses) => {
            if(filtercourses.title.includes(res)){
                creationCours(filtercourses.image, filtercourses.title, filtercourses.price);
        
            }
        }) 
    }
    else{
        if(filtercourses.length == 0){
            d.style.display="none";
            d.innerHTML="<h1>L'element chercher n'existe pas </h1>";
        }
    }
});


let cat = document.querySelectorAll(".list-group-item");
cat[0].addEventListener('click',function(){
    d.innerHTML="";
         courses.forEach((filtercourses) => {
            
            creationCours(filtercourses.image, filtercourses.title, filtercourses.price);
            
        }) 
});
cat[1].addEventListener('click',function(){
    d.innerHTML="";
         courses.forEach((filtercourses) => {
            if(filtercourses.category==cat[1].innerHTML.toUpperCase()){
                creationCours(filtercourses.image, filtercourses.title, filtercourses.price);
            } 
        }) 
});
cat[2].addEventListener('click',function(){
    d.innerHTML="";
         courses.forEach((filtercourses) => {
            if(filtercourses.category==cat[2].innerHTML.toUpperCase()){
                creationCours(filtercourses.image, filtercourses.title, filtercourses.price);
            } 
        }) 
});
cat[3].addEventListener('click',function(){
    d.innerHTML="";
         courses.forEach((filtercourses) => {
            if(filtercourses.category==cat[3].innerHTML.toUpperCase()){
                creationCours(filtercourses.image, filtercourses.title, filtercourses.price);
            } 
        }) 
});
cat[4].addEventListener('click',function(){
    d.innerHTML="";
         courses.forEach((filtercourses) => {
            if(filtercourses.category==cat[4].innerHTML.toUpperCase()){
                creationCours(filtercourses.image, filtercourses.title, filtercourses.price);
            } 
        }) 
});






