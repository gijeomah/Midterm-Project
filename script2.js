//Define bttns first
let kilbtn = document.getElementById('kill');
let detbtn = document.getElementById('detect');
//defining music 
const audio = document.getElementById("myAudio");
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
let txt = document.createElement('p');
let inpt = document.createElement('input');
//defining timer
let timer = 25;
//reassign bttn name 
//check if user clicks killer or detective (putplace holder)
detbtn.addEventListener('click',dection);
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
        detbtn.addEventListener('click',typing);
    });
	

});
function dection(){
    console.log("Dection");
    image.src="backyard.jpeg";
    caption.textContent="Backyard";
    kilbtn.textContent="Look in classroom";
    detbtn.textContent="find Murder Weapon";
    kilbtn.addEventListener('click',classroom);
    detbtn.addEventListener('click',winscrn);

};

function classroom(){
    kilbtn.textContent="Fight/Talk to detective";
    detbtn.textContent="Try to catch BS?";
    kilbtn.addEventListener('click',talk2);
    detbtn.addEventListener('click',loscrn);
    //change kilbtn
    //change background image to classroom
    //contain.appendChild(audio);
    para.textContent="Char1 is dead! You suspect your fellow classmate";
    audio.loop=true;
    audio.volume = 0.75;
    audio.play();

};
async function talk2(){
    clrbtn(kilbtn);
    clrbtn(detbtn);
    let lst = ["Did", "You", "Do", "It"];
    //inpt.hidden=false;
    inpt=inpt.cloneNode(true);//googled
    caption.textContent="Type this: ";
    contain.appendChild(inpt);
    for (let i=0; i<lst.length; i++){
        caption.textContent+=lst[i] + " ";
        await delay (3000);
    };
    inpt.addEventListener("keydown", function(event){
        if (event.key == "Enter"){
            if (inpt.value == "Did You Do It"){
                winscrn();
            }else {
                loscrn();
            }
        }
    });

};

function typing(){
    console.log("typing");
    //clr btns
    clrbtn(kilbtn);
    clrbtn(detbtn);
    //GOOGLED (wipes all previous event listners)
    inpt=inpt.cloneNode(true);
    //type blah blah, in input box 
    para.textContent="Type these words: I , Didn't, Do , It";
    contain.appendChild(inpt);
    caption.textContent="Your Words are: ";
    //check if inpt.value == "Secret Message"
    inpt.addEventListener("keydown",function(event){
        if (event.key=="Enter"){
            if (inpt.value=="I Didn't Do It"){
                winscrn();
            }else{
                loscrn();
            }
        //Goodgled this 
        } else if(event.key.length===1){
            caption.textContent+=event.key;

        }
    
    });
    //display what they are typing
    //event listner to append the key stroke to paragraph tag
    //event listner for the enter key to check if inputvalue
}

function talk(){
    console.log("talk");
    para.textContent="You decided to talk to the detetive huh?";
    caption.textContent="Discover how to woo them over";
    image.src="backyard.jpeg";
    //console.log(inpt);
    inpt=inpt.cloneNode(true);//googled
    inpt.hidden=false;
    //create paragraph tag to ask that question
    txt.textContent = "WHOSS DEAD BOdY IS THIS";
    body.append(txt);
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
    timer = 25;
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
    clrbtn(okbtn);
    clrbtn(txt);
    clrbtn(inpt);
    //clear buttons
};
function loscrn(){
	console.log("lose");
	image.src="lose.jpeg";
	para.textContent="You Lose!";
    clrbtn(caption);
    clrbtn(kilbtn);
    clrbtn(detbtn);
    clrbtn(okbtn);
    clrbtn(txt);
    clrbtn(inpt);
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

async function dropHandler(ev) {
    ev.preventDefault();
    console.log("drop");
	let usrmsg = prompt("Enter the hidden message");
	if (usrmsg == "char1"){
		para.textContent="You have sucessfully hidden body "; 
        await delay(5000);
		winscrn();
		}else if(timer>0){
            para.textContent="You have until the timer runs out!";
        }else{
            loscrn();
        }
    if (timer==0){
        loscrn();
        }
	};
    //test test test tes
//Googled how to delay a command:
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//Googled this too
function playMusic() {
  audio.play();
}

// Function to pause the music
function pauseMusic() {
  audio.pause();
}

