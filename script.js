//When user clicks the next button the two options appear
let bttn1 = document.getElementById('bttn1');
let caption = document.getElementById('story1');
let text = document.getElementById('textInput');
let msg = document.getElementsById('customModal')
//Creating certain html elements! 
let para = document.createElement('p');
//Workking on buttons forward & Back 
bttn1.addEventListener('click', Scene1);
// defineing the scene page mover
let sceneNum=0;
function Scene1(){
    sceneNum++; 
    if (sceneNum == 1){
        //image1.src= image.jpg replace the image later 
        caption.textContent="You are in the School cafe"; //not needed. 
        //Reveal the info! 
        msg.style.display = "block";
        if(text.value == "Killer"){
            //add an event listner when user clicks the killer image
            //display the image when the even lister is clicked 
            //display the character images 
            //image change to the classroom
            caption.textContent="You are now in the classroom";
            para.textContent="You killed Char 1 hide the body or Weapon?(*Click Next*)";
        }
    //if (sceneNum == 2 & text.value=="killer"){
    //text.textContent="Hide the murder weapon or Hide the body" }
        
    }
}