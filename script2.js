//Define bttns first
let kilbtn = document.getElementById('kill');
let detbtn = document.getElementById('detect');
//defining text
let para = document.getElementById('main_intro');
let caption = document.getElementById('story1');
let image = document.getElementById("image");
//reassign bttn name 
//check if user clicks killer or detective
kilbtn.addEventListener('click', function(){
    para.textContent = "You killed char 1 hide the body or weapon?";
    caption.textContent = "You are now in the classroom";
    image.src="Class.jpg";
    let wepbtn = kilbtn.textContent = "Hide the murder Weapon";
    let bdybtn = detbtn.textContent = "Hide the body";
    wepbtn.addEventListener('click',function(){
        let yardbtn = wepbtn.textContent = "Hide in the backyard";
        let clasbtn = bdybtn.textContent = "Hide in the classroom";
        yardbtn.addEventListener('click',fight);
        clasbtn.addEventListener('click',winscrn);
    } )

});
function fight(){
    console.log("idk")
};
function winscrn(){
    console.log("idk")
};
