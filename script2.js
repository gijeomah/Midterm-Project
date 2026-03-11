//Define bttns first
let kilbtn = document.getElementById('kill');
let detbtn = document.getElementById('detect');
//defining text
let para = document.getElementById('main_intro');
let caption = document.getElementById('story1');
let image = document.getElementById("image");
let draimg = document.createElement('img');
//defining body 
let body = document.body;
//reassign bttn name 
//check if user clicks killer or detective (putplace holder)
kilbtn.addEventListener('click', function(){
    para.textContent = "You killed char 1 hide the body or weapon?";
    caption.textContent = "You are now in the classroom";
    image.src="Class.jpg";
    kilbtn.textContent = "Hide the murder Weapon";
    detbtn.textContent = "Hide the body";
    kilbtn.addEventListener('click',function(){
        kilbtn.textContent = "Hide in the backyard";
        detbtn.textContent = "Hide in the classroom";
        kilbtn.addEventListener('click',fight);
        detbtn.addEventListener('click',winscrn);
    });

});
function fight(){
    console.log("idk");
    let timer = 25;
    let id = 0;
    para.textContent="You are now in the Backyard, find clues to perfectly place the body";
    caption.textContent="Lets Fight You have"+timer;
    image.src="backyard.jpeg";
    draimg.src="knife.png";
    draimg.draggable=true;
    //body.append('draimg');
    body.append(draimg);

    //clear bttns(create new ones) + add music + timer 
    kilbtn.remove;
    detbtn.remove;
    id = setInterval(function(){
        timer = timer - 1;
        caption.textContent= timer; 
        if(timer == 0){
          clearInterval(id);
          caption.textContent="You ran out of time!";}
      },1000);
    image.ondrop = dropHandler;
    image.ondragover = dragoverHandler;
    draimg.ondragstart = dragstartHandler;
    


    
};

function winscrn(){
    console.log("idk")
};

function dragstartHandler(ev) {
    console.log("dragstart");
}

function dragoverHandler(ev) {
    ev.preventDefault();
    console.log("drag over");
}

function dropHandler(ev) {
    ev.preventDefault();
    console.log("drop");
}
    