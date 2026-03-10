//When user clicks the next button the two options appear
let bttn1 = document.getElementById('bttn1');
let caption = document.getElementById('story1');
let text = document.getElementById('textInput');
let msg = document.getElementById('customModal');
let okbtn = document.getElementById('okBtn');
//Creating certain html elements! 
let para = document.getElementById('main_intro');
//Workking on buttons forward & Back 
bttn1.addEventListener('click', Scene1);
// defining the image
let image = document.getElementById("image");
// defineing the scene page mover
let sceneNum=0;
function Scene1(){
    sceneNum++; 
    if (sceneNum == 1){
        //image1.src= image.jpg replace the image later 
        caption.textContent="You are in the School cafe"; //not needed. 
        //Reveal the info!  
        msg.style.display = "block";
        //okbtn=
        okbtn.addEventListener('click',killer);
        //if(text.value == "Killer"){
            //add an event listner when user clicks the killer image
            //display the image when the even lister is clicked 
            //display the character images 
            //image change to the classroom
            //caption.textContent="You are now in the classroom";
            //para.textContent="You killed Char 1 hide the body or Weapon?(*Click Next*)";
        //}
    //if (sceneNum == 2 & text.value=="killer"){
    //text.textContent="Hide the murder weapon or Hide the body" }
    }
}
function killer(){
    if (text.value == "Killer"){
        caption.textContent = "You are now in the classroom";
        para.textContent = "You killed char 1 hide the body or weapon?";
        //Putting the classroom image
        image.src="Class.jpg";

    }
}