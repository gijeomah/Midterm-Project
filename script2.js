//Define bttns first
let kilbtn = document.getElementById('kill');
let detbtn = document.getElementById('detect');
//defining text
let para = document.getElementById('main_intro');
let caption = document.getElementById('story1');
let image = document.getElementById("image");
let draimg = document.createElement('img');
let contain = document.getElementById('buttonContainer');
console.log(contain);
//accessing the button
let okbtn = document.getElementById("submit");
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
    image.src="backyard.jpeg";
    let inpt = document.createElement('input');
    console.log(inpt);
    inpt.type="text";
    inpt.textContent = "WHOSS DEAD BOdY IS THIS";
    contain.appendChild(inpt);
    clrbtn(kilbtn);
    clrbtn(detbtn);
    okbtn.hidden=false;
    okbtn.addEventListener("click",function(){
        if (inpt.value=="This is my sisters toy dummy"){
        winscrn();
    }else{
        loscrn();
    }
    });

    image.addEventListener("mouseover", function(){
        image.setAttribute("data-toggle", "tooltip");
        image.title = "Type: This is my sisters toy dummy";

        // let msg = prompt("WHOSS DEAD BOdY IS THIS");
        // if (msg==" This is my sisters toy dummy"){
        //     winscrn();
        // }else{
        //     loscrn();
        // }

    });



};
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
    clrbtn(kilbtn);
    clrbtn(detbtn);
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

function clrbtn(btn_nme){
    btn_nme.remove()
}



function winscrn(){
    console.log("win");
	image.src="win.jpeg";
	para.textContent="You Win!"
    clrbtn(caption);
    clrbtn(kilbtn);
    clrbtn(detbtn);
    clrbtn(ok);
    //clear buttons
};
function loscrn(){
	console.log("lose");
	image.src="lose.jpeg";
	para.textContent="You Lose!";
    clrbtn(caption);
    clrbtn(kilbtn);
    clrbtn(detbtn);
    //clear buttons
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
		winscrn();
		}else if(usrmsg !== "char1" && timer>0){
            para.textContent="You have until the timer runs out!";
        }else{
            loscrn();
        }
	};
    //test test test tes
