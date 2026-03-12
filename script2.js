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
	detbtn.addEventListener('click',function(){
        kilbtn.textContent="Talk to detcetive";
        detbtn.textContent="Fight the Detective";
        kilbtn.addEventListener('click',talk);
    });
	

});
function talk(){
    console.log("talk");
    para.textContent="You decided to talk to the detetive huh?";
    caption.textContent="Discover how to woo them over";
    

}
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
    kilbtn.remove();
    detbtn.remove();
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
//function deadbody(){
	//console.log("placeholder");
//}




function winscrn(){
    console.log("win");
	//image.src="win.jpeg";
	para.textContent="You Win!"
};
function loscrn(){
	console.log("lose");
	//image.src="lose.jpeg";
	para.textContent="You Lose!";
}

function dragstartHandler(ev) {
    console.log("dragstart");
}

function dragoverHandler(ev) {
    ev.preventDefault();
    console.log("drag over");
    caption.textContent="The hidden message/alaby: char1 " ;

}

function dropHandler(ev) {
    ev.preventDefault();
    console.log("drop");
	let usrmsg = prompt("Enter the hidden message");
	if (usrmsg == "char1"){
		para.textContent="You have sucessfully hidden body "; 
		//winscrn();
		}else{
		//loscrn();
	}
	}
    //test test test
