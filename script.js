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
//create the dect and kill buttons
let kill = document.getElementById('kill');
let dect = document.getElementById('detect');
// defineing the scene page mover
let sceneNum=0;
function Scene1(){
    sceneNum++; 
    if (sceneNum == 1){
        //image1.src= image.jpg replace the image later 
        caption.textContent="You are in the School cafe"; //not needed. 
        //Reveal the info!  
        //msg.style.display = "block";
        //okbtn=
        kill.addEventListener('click', killer);
        //if(text.value == "Killer"){
            //add an event listner when user clicks the killer image
            //display the image when the even lister is clicked 
            //display the character images 
            //image change to the classroom
            //caption.textContent="You are now in the classroom";
            //para.textContent="You killed Char 1 hide the body or Weapon?(*Click Next*)";
        //}
    //if (sceneNum == 2 ){
    //text.textContent="Hide the murder weapon or Hide the body" }
    //call backyard function

    }
};
function killer(){
    caption.textContent = "You are now in the classroom";
    para.textContent = "You killed char 1 hide the body or weapon?";
    //Putting the classroom image
    image.src="Class.jpg";
    //msg.style.display = "block";
    //msg.textContent="Hide the body or hide the murder weapon?";
    let wepbtn = document.createElement('button');
    let clasbtn = document.createElement('button');
    wepbtn.addEventListener('click', fight);
    //if (text.value == "Weapon"){
    //okbtn.addEventListener('click',backyard);
    //}

}
    


function fight(){
    console.log ("idk right now");
}
//function backyard(){
    //if (text.value == "Weapon"){
    //call fight here



    //}
//}
