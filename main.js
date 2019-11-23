

//getting the required things

let currentWord = document.getElementById("currentWord");
let inputHere = document.getElementById("inputHere");
let gameStatus = document.getElementById("gameStatus");
let score = document.getElementById("score");
let time = document.getElementById("time");
let gameOver = document.getElementById("gameOver");
let mode = document.getElementById("mode");



//will be the first modal to get the difficulty level from user
$(window).on('load',function(){
    $("#styleMode").trigger("click");
});   

//setting the default mode(i.e Novice Mode)
score.innerHTML=0;

mode.innerHTML = "Novice";
currentTime = 7;
time.innerHTML = 7;

//creating a 30 words array
let ProWords = [
"helpless",
"frequent",
"ignorant",
"innocent",
"annoying",
"powerful",
"literate",
"venomous",
"shocking",
"devilish",
"faithful",
"mindless",
"pastoral",
"doubtful",
"detailed",
"unwieldy",
"picayune",
"valuable",
"friendly",
"existing",
"flagrant",
"wretched",
"slippery",
"relieved",
"skillful",
"well-off",
"hypnotic",
"cautious",
"graceful",
"debonair",
"quickest",
"periodic",
"cultured",
"parallel",
"actually",
"resolute",
"obeisant",
"opposite",
"addicted",
"previous",
"didactic",
"probable",
"splendid",
"horrible",
"cheerful",
"vengeful",
"imported",
"vigorous",
"adorable",
"aberrant",
"discreet",
"tranquil",
"complete",
"infamous",
"truthful",
"spurious",
"guttural",
"youthful",
"talented",
"careless",
"diligent",
"imminent",
"coherent",
"bustling",
"grateful",
"dazzling",
"critical",
"gigantic",
"terrific",
"familiar",
"animated",
"gorgeous",
"tasteful",
"pleasant",
"distinct",
"chemical",
"thankful",
"obedient",
"precious",
"tangible",
"flippant",
"adhesive",
"gruesome",
"military",
"educated",
"rightful",
"grieving",
"internal",
"pregnant",
"informal",
"spotless",
"succinct",
"dramatic",
"vagabond",
"decisive",
"possible",
"spiteful",
"abnormal",
"economic",
"flawless"
]

let MediumWords =[
"clothes",
"article",
"country",
"college",
"product",
"payment",
"opinion",
"charity",
"fortune",
"cabinet",
"message",
"storage",
"failure",
"penalty",
"finding",
"meaning",
"speaker",
"airport",
"vehicle",
"society",
"climate",
"control",
"village",
"highway",
"reading",
"setting",
"freedom",
"history",
"passion",
"version",
"teacher",
"session",
"library",
"hearing",
"mixture",
"arrival",
"student",
"revenue",
"success",
"variety",
"writing",
"tension",
"surgery",
"wedding",
"anxiety",
"funeral",
"alcohol",
"science",
"outcome",
"manager",
"quality",
"thought",
"disease",
"ability",
"drawing",
"garbage",
"fishing",
"concept",
"grocery",
"trainer",
"emotion",
"diamond",
"warning",
"problem",
"bedroom",
"courage",
"chapter",
"context",
"housing",
"analyst",
"physics",
"reality"
]

let words = [
"steady",
"future",
"hushed",
"paltry",
"mature",
"savory",
"gifted",
"brainy",
"elated",
"fierce",
"innate",
"bitter",
"unique",
"little",
"afraid",
"scarce",
"spotty",
"lavish",
"classy",
"robust",
"shrill",
"useful",
"sturdy",
"craven",
"gratis",
"unfair",
"stupid",
"greasy",
"hollow",
"secret",
"recent",
"lively",
"acidic",
"clever",
"silent",
"spooky",
"polite",
"greedy",
"brawny",
"global",
"knotty",
"fluffy",
"crabby",
"sudden",
"rotten",
"skinny",
"strong",
"pumped",
"square",
"normal",
"uneven",
"asleep",
"clammy",
"shaggy",
"second",
"ablaze",
"homely",
"quirky",
"caring",
"plucky",
"flashy",
"narrow",
"groovy",
"torpid",
"united",
"orange",
"vulgar",
"cuddly",
"petite",
"guilty",
"smoggy",
"bright",
"watery",
"nimble",
"former",
"loving",
"closed",
"kindly",
"chilly",
"severe",
"entire",
"uppity",
"feeble",
"abrupt",
"mellow",
"sticky",
"ad hoc",
"abject",
"joyous",
"seemly",
"dreary",
"racial",
"unruly",
"chunky",
"sloppy",
"famous",
"superb",
"spiffy",
"bouncy",
"stingy"
]


function novice(){
  mode.innerHTML = "Novice";
  $("#closeModal").trigger("click");
  currentTime = 7;
  time.innerHTML = 7;
randomWordGenerator();


}

function medium(){
  mode.innerHTML = "Medium";
  $("#closeModal").trigger("click");
  currentTime = 5;
  time.innerHTML = 5;
randomWordGenerator();


}

function pro(){
  mode.innerHTML = "Pro"
  currentTime = 3;
  time.innerHTML = 3;
  $("#closeModal").trigger("click");
randomWordGenerator();


}

//generating a random word

function randomWordGenerator(){

if(mode.innerHTML=="Novice"){

let wordLength = words.length;

let randomWord = Math.floor((Math.random()*wordLength)+1);

currentWord.innerHTML = words[randomWord];


}else if(mode.innerHTML == "Medium"){

let MediumWordLength = MediumWords.length;

let MediumRandomWord = Math.floor((Math.random()*MediumWordLength)+1);

currentWord.innerHTML = MediumWords[MediumRandomWord];

}else if(mode.innerHTML == "Pro"){

ProWordLength = ProWords.length;

let ProRandomWord = Math.floor((Math.random()*ProWordLength)+1);

currentWord.innerHTML = ProWords[ProRandomWord];
}else{

let wordLength = words.length;

let randomWord = Math.floor((Math.random()*wordLength)+1);

currentWord.innerHTML = words[randomWord];
}
}

randomWordGenerator();


inputHere.addEventListener("focus",startTime);
inputHere.addEventListener("keydown",checkEnter);

//this function will call when the user will hit enter after inputting the value
function checkEnter(e){
  if(e.key=="Enter"){
       decide();
  }

}

function decide(){
      if(inputHere.value==currentWord.innerHTML){
          if(mode.innerHTML == "Novice"){
                     currentTime=7;
                    score.innerText++;
          }else if(mode.innerHTML == "Medium"){
                    currentTime =5;
                    score.innerText++;
                    score.innerText++;
          }else if(mode.innerHTML == "Pro"){
                    currentTime = 3;
                    score.innerText++;
                    score.innerText++;
                    score.innerText++;

          }else{
                    currentTime=7;
                    score.innerText++;
          }
      randomWordGenerator();
      inputHere.value="";
    }else{
      gameOver.classList.add("failure");            //to add a styling class
      gameStatus.innerHTML = "You Lose";
      inputHere.setAttribute("disabled","true");
      clearTimeout(clearIt);
      time.innerHTML = "0";
      gameOver.innerHTML = "INCORRECT WORD ! REFRESH THE PAGE TO START AGAIN"
    }

//the above else block will stop the timeInterval and will reset the input value and tell the user to refresh the game
}


//this function will call when user will start to enter the value
function startTime(){
  
  time.innerHTML = currentTime;
  
  currentTime--;  
  
  if(currentTime<0){
  
    currentTime=0;
    
    time.innerHTML = 0;
  }

  if(currentTime>=0){
   
    clearIt = setTimeout(startTime,1000);    //the clearIt will use to stop the setTimeOut method
  
  }

  if(time.innerHTML==0){
   
    gameOver.classList.add("failure");
   
    gameOver.innerHTML = "TIME UP! REFRESH THE PAGE TO START AGAIN";
   
    inputHere.setAttribute("disabled","true");
  
  }

}
    