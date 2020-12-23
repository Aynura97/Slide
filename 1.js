let images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
];

let imgcount = images.length;
let img = 0;

onload = function(){
    Show();
    Time();
    
}

function Show(){
    let sld = document.getElementsByClassName("slider")[0];
    sld.style.backgroundImage = `url('img/${images[img]}')`;

}

function Next(){
    img = img < imgcount-1 ? img+1 : 0;
    Show();
} 
function Prev(){
    img = img > 1 ? img-1 : imgcount-1;
    Show();
}
function Time(){
    if(onclick = Next()){
        setInterval(Next, 5000);
    }
    else {
        setInterval(Next, 2500);
    }
    Show();
}