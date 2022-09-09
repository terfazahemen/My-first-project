'use strict';
// window.alert('pop');

// document.getElementById('startdiv').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log( document.querySelector('.input').value);
//     // console.log('Terfa');

//     const playerName = document.querySelector('.input').value;

//     const html = `<p id="playername">PLAYER: ${playerName}</p>`;

//     const htmlelmt = document.createElement('div');
//     htmlelmt.innerHTML = html

//     document.querySelector('.playername').insertAdjacentElement("beforeend", htmlelmt)

// });

// document.getElementById('mainpagebody').style.backgroundColor = 'red';

// console.log(Math.trunc(Math.random(0) * 4));
let wrongAnwser2 = Math.trunc(Math.random() * 10);

console.log(wrongAnwser2)

const questionsArr = [    
    
    [
        'What country has won the most World Cups?', 
        'In which organelle of a living cell is DNA found?', 
        'In which country is Mount Everest?',
        'On which continent is the Sahara desert?', 
        'Who was the Ancient Greek God of the Sun?' ,
        'Blood is filtered by which these of organs?',
        'Cryophobia, is the fear of?',
        "What is the world's fastest bird?",
        'What is a group of pandas known as?',
        'Who discovered that the earth revolves around the sun?',
        'Which planet has the most moons?',
        "What's the capital city of Tanzania?",
        "Who designed the Leaning Tower of Pisa?",
        'In what year was NASA Established?',
        'How many stars are on the national flag of USA?',
        "What is Joe Biden's middle name?"
    ], 
    [   
        'Who was the Ancient Greek God of the Sun?' ,
        'Blood is filtered by which these of organs?',
        'Which of these is the most popular language in Africa?',
        'Who discovered that the earth revolves around the sun?',
        'Which planet has the most moons?',
        "What's the capital city of Tanzania?",
        "Who designed the Leaning Tower of Pisa?",
        'In what year was NASA Established?',
        'How many stars are on the national flag of USA?',
        'What country has won the most World Cups?', 
        'Who was the 35th President of the USA?', 
        'In which country is Mount Everest?',
        'On which continent is the Tabernas desert?', 
        "What is the world's fastest bird?",
        'What is a group of pandas known as?',
        "What is Joe Biden's middle name?"
    ],
    [  
        "Who designed the Leaning Tower of Pisa?",
        'In what year was NASA Established?',
        'How many stars are on the national flag of USA?',
        "What is Joe Biden's middle name?",
        'Cryophobia, is the fear of?',
        "What is the world's fastest bird?",
        'What is a group of tigers known as?',
        'Who discovered that the earth revolves around the sun?',
        "In what year was President John F. Kennedy assassinated?",
        'What country has won the most World Cups?', 
        'Which organelle is known as the power house of the cell??', 
        'In which country is Mount Everest?',
        'Who was the longest reigning monarch in british history?', 
        'Who was the 36th president of the USA?',
        'Which planet has the most moons?',
        "What's the capital city of Tanzania?",
        
    ], 
    [   
        "At what temperature (in centigrade) does the water start boiling?" ,
        "Which vitamin can be obtained from sunlight?",
        "In which continent does the country Almeria reside?" ,
        "What is the currency used in South Korea?",
        "Name the three primary colors?",
        "When did World War II end?", 
        "in what battle was Napoleon Bonpart defeated?",
        "Which is the largest bird?",
        "What is the chemical symbol of gold?",
        "Where will you find the smallest bone in the human body?",
        "What does a white flag symbolize?",
        "Which Apollo mission was the first successful mission to land on the moon?",
        "In what year was President John F. Kennedy assassinated?",
        "Name the world’s biggest island.",
        "Which company owns Bugatti, Lamborghini, Audi, Porsche, and Ducati?",
        "Which planet is known as the red planet?"
    ],
    [
        "What is the value of PI constant?",
        "How many continents are there in the world?",
        "Which superhero has kryptonite as his only weakness?",
        "What is the largest continent?",
        "Which country is best known as the Gift of Nile?",
        "Which is the longest river in North America?",
        "What’s the medical term for bad breath?",
        "What is the closest star to Earth?",
        "In what country were the Olympic Games invented?",
        "Who painted the Mona Lisa?",
        "How many bones are there in an elephant’s trunk?",
        "Which was the first American satellite to successfully reach the surface of Mars?",
        "How long does Mercury take to revolve around the sun?",
        "What is the name of the parliament of Spain?",
        "Which country is known as the sugar bowl of the world?",
        "Who is the inventor of the Steam Engine?",
    ],
    [
        
        "What’s the first letter on a typewriter?",
        'Which state is famous for Hollywood?',
        "What is a group of lions called?",
        "What do caterpillars turn into?",
        "What is the capital of Poland?",
        "What date is Halloween celebrated?",
        "How many sides does a octagon have?",
        "What is the largest bone in the human body?",
        "Who was the first American president?",
        "What is the world’s longest river?",
        "Which of these is not a planet?",
        "In which year was America declared independent from England?",
        "Who was the first woman to win a Nobel Prize?",
        "Which company did Michael Jordan promote during his career?",
        "Where is Mount Kilimanjaro located?",
        "Who is the youngest President of the United States of America?"
    ],
    [
        "What language has the most words?",
        "Name the world’s largest ocean?",
        "How many bones do sharks have in their bodies?",
        "Who was the first American to go into space?",
        "How many hearts does an octopus have?",
        "Who made and published the Theory of Relativity?",
        "What is the study of kidneys called?",
        "Which is the hardest natural substance found on earth?",
        "Which part of the plant is responsible for the process of photosynthesis?",
        "Which metal is the most reactive?",
        "What is the name of a Kangaroo offspring?",
        'Which country invented Tea?', 
        "What is the capital of Peru?",
        "What is the approximate height of Mount Everest?",
        "Which of these state is not in the USA?",
        "How long does Venus take to revolve around the sun?"

    ],
    [
        'What is the chemical symbol for salt?',
        'Where is the tallest building in the world located?',
        'What language is spoken in Brazil?',
        'How many stars are on the Brazillian Flag?',
        'I am something,I die when I drink and live when I eat. What am I?',
        'Hg is the chemical symbol of which element?',
        'What part of the atom has no electric charge?',
        'What is the third sign of the zodiac?',
        "in what battle was Napoleon Bonpart defeated?",
        'Which country invented tea?', 
        'Congo was colonized by which country?',
        'What is your body’s largest organ?',
        'Which planet has the most gravity?',
        'Which mammal doesn’t have vocal cords?',
        'Who played Neo in the movie titled "The Matrix"?',
        "What is the hottest planet in the solar system?"
    ],
    [   
        "Whose nose grew longer every time he lied?",
        "The first Olympic Games was held in 1896. In which city?",
        "Which country did Justin Bieber come from?",
        "Who was the renowned civil rights leader who fought through the means of non-violence?",
        "Which country gifted the famous Statue of Liberty?",
        "In which country is the Leaning Tower of Pisa located?",
        "Which mammal has the shortest gestation period?",
        'What is the third sign of the zodiac?',
        "The fictional character of Daredevil is based in which city?",
        "What is the best-selling novel of all time?",
        "How many hearts does an octopus have?",
        "Name the world’s largest ocean?",
        "What language has the most words?",
        "What is the best-selling game of all time?",
        "Which of these states is not in canada?", 
        'Where would you find the Sea of Tranquility?'

    ],
    [ 
        'In which organelle of a living cell is DNA found?', 
        'In which country is Mount Everest?',
        'On which continent is the Tabernas Desert?',
        "In which country is the Leaning Tower of Pisa located?", 
        'Who was the Ancient Greek God of the Sun?',
        "What is the capital of Ireland?",
        "Which country is best known as the Gift of Nile?",
        "Which is the longest river in North America?",
        "The fictional character of Daredevil is based in which city?",
        "What’s the medical term for bad breath?",
        "In which year was America declared independent from England?",
        "Who was the first woman to win a Nobel Prize?",
        "What is the value of PI constant?",
        "What is the name of the parliament of Spain?",
        "Which country is known as the sugar bowl of the world?",
        "Who is the inventor of the Steam Engine?"
    ]
];

let questionArrIndex;
let questionIndex = 0;

const optionsArr = [ 
    [
        ['Italy', 'France', 'Brazil', 'Spain'],
        ['Chromosome', 'Nucleus', 'Golgi Body', 'Plasma Membrane'],
        ['China', 'India', 'Venezuela', 'Nepal'],
        ['Antartica', 'Africa', 'North America', 'South America'],
        ['Zeus', 'Athena', 'Apollo', 'Hermes'],
        ['Liver', 'Pancreas', 'Kidney', 'Heart'],
        ['Needles','Cold', 'Heat', 'Death'],
        ['Golden Eagle', 'Saker Falcon', 'Swift','Peregrine Falcon'],
        ['Parliament','Streak', 'Sloth', 'Embarrasment'],
        ['Leonardo da Vinci', 'Nicolaus Copernicus', 'Neil De Grasse', 'Isaac Newton'],
        ['Jupiter', 'Uranus', 'Mars','Saturn'],
        ['Braziville','Dodoma','Conakry', 'Lome'],
        [' Maurice Koechlin', 'Frédéric Auguste Bartholdi', 'Gustave Eiffel', 'Bonanno Pisano'],
        [1975, 1958, 1956, 1979],
        [40,45, 60, 50],
        ['Wilson','Regan',' Robinette', 'Robert']
    ],
    [
        ['Apollo', 'Hermes','Zeus', 'Athena'], 
        ['Liver', 'Pancreas', 'Kidney', 'Heart'],
        ['English', 'Arabic', 'Zulu','Swahili'],
        ['Nicolaus Copernicus','Leonardo da Vinci', 'Neil De Grasse', 'Isaac Newton'],
        ['Jupiter','Saturn','Uranus', 'Mars',],
        ['Lome','Braziville','Conakry','Dodoma'],
        ['Maurice Koechlin','Bonanno Pisano', 'Frédéric Auguste Bartholdi', 'Gustave Eiffel', ],
        [ 1958, 1956, 1979, 1975],
        [40, 60, 50, 45,],
        ['Italy', 'France', 'Brazil', 'Spain'],
        ['Abraham Lincoln', 'Thomas Jefferson','Richard Nixon','John F. Kennedy'],
        ['Nepal','China', 'India', 'Venezuela', ],
        ['Africa', 'North America','Europe', 'South America'],
        ['Swift','Peregrine Falcon','Golden Eagle', 'Saker Falcon'],
        ['Parliament', 'Sloth', 'Embarrasment','Streak',],
        ['Robinette', 'Robert','Wilson','Regan',]
    ],
    [
        ['Maurice Koechlin', 'Bonanno Pisano', 'Frédéric Auguste Bartholdi', 'Gustave Eiffel'],
        [1975, 1956, 1979, 1958],
        [40, 50,45, 60,],
        ['Wilson','Regan', 'Robert',' Robinette'],
        ['Needles', 'Heat', 'Death','Cold'],
        ['Peregrine Falcon','Golden Eagle', 'Saker Falcon', 'Swift'],
        [ 'Parliament', 'Streak','Pride','Leap'],
        ['Neil De Grasse', 'Isaac Newton','Leonardo da Vinci', 'Nicolaus Copernicus'],
        ['1961', '1962','1963', '1964'], 
        ['Spain','Italy', 'France','Brazil'],
        ['Nuclues','Plasma Membrane','Chromosome', 'Golgi Body',],
        ['China','Nepal','India', 'Venezuela'],
        ['King Leopold III', 'King Charles II', 'Queen Elizbeth I', 'Queen Elizbeth II'],
        ['George Washington','Richard Nixon',"Lyndon B. Johnson" ,'John F. Kennedy'],
        ['Saturn','Jupiter', 'Uranus', 'Mars',],
        ['Dodoma','Braziville','Conakry','Lome']
    ],
    [
        ['120°C', "90°C", "105°C", "100°C"],
        ["Vitamin C","Vitamin B","Vitamin D","Vitamin A"],
        ["Europe","South America","North America","Antartica"],
        ['Yen','Euro', 'Won','Korean Dollar'],
        ["Red, yellow, and blue", "Magenta, Cyan, Green", "Red, Blue, Green", "Red, Magenta, Yellow"], 
        ['1945','1946', "1947", "1948"],
        ["Friedland","Waterloo","Austerlitz","Siege of Toulon"], 
        ["Flamengo", "Humming Bird", "Ostrich", "Cassowary"],
        ["Hg","G","Au","Ar"],
        ["Finger","Nose","Ear","Toe"],
        ["Peace","Surrender","Parley","War"],
        ["Apollo 9","Apollo 10","Apollo 11","Apollo 12"],
        ["1963","1964","1965","1966"],
        ["Iceland","Ronde Island","Greenland","Union Island"],
        ["Packard","Volkswagen","Stellantis","Oldsmobile"],
        ["Mars", "Venus", "Jupiter","Pluto"]
    ],
    [
        [3.142, 6.142, 9.142, 12.141],
        ['Five','Six','Seven','Eight'],
        ["Bane","Batman", "Superman", "Aquaman"],
        ["Africa","Asia","Europe", "North America"],
        ["Israel",'Egypt','Ethiopia',"Congo"],
        ["Amazon River","Missouri River","River Nile","Yangtze River"],
        ["Scurvy","Lockjaw","Canker Sore","Halitosis"],
        ["Aquila Altair","Sun","Lynx", "Polaris"],
        ["USA","Norway","Sweden","Greece"],
        ["Rembrandt","Vincent Van Gogh","Leonardo Da Vinci","Pablo Picasso "],
        [2, 0, 7, 3],
        ["Curiosity","Phoenix 11","Mariner 9","Ingenuity"],
        ["88 days", "120 days","171 days","365 days"],
        ["Crotes", "Storting","Saeima","Congress"],
        ["India","Brazil","Thailand","Cuba"],
        ['Eli Whitney','Johannes Gutenberg','James Wat','Thomas Edison']
    ],
    [
        ["Q","X","Z","M"],
        ["Las Vegas","California", "Chicago","Seattle"],
        ['A Streak',"A Cackle" ,"A Pride", "A Clowder"],
        ["Wasp","Bee","Cricket","Butterfly"],
        ["Lisbon","Warsaw","Bucharest","Manila"],
        ["December 13th","September 31st", "June  11th", "October 31st"],
        ["Six","Seven","Eight","Nine"],
        ["The femur","The Humerus","The Sternum","The Phalanges"],
        ["Abraham Lincoln","John F. Kenedy","George Washington","Thomas Jeferson"],
        ["Missouri River","Amazon River","River Nile","Yangtze River"],
        ["Venus","Uranus","Pluto","Kepler-1649c"],
        ["1775","1776", "1777","1778"],
        ["Louise Glück","Jennifer Doudna","Chimamanda Ngozi Adichie","Marie Curie"],
        ["Champs Sport","Nike","Adidas", "New Balance"],
        ["Ethiopia","Uganda","Kenya","Tanzania"],
        ["John F. Kennedy","Bill Clinton","Theodore Roosevelt","Thomas Jefferson"]
    ],
    [
        ["English", "Portugese","Greek","Italian"],
        ["Artic Ocean", "Atlantic Ocean","Pacific Ocean","Indian Ocean"],
        ["0","2","47","102"],
        ["Alan Shephard","Neil Armstrong","Buzz Aldrin","John Glen"],
        ["One","Two","Three","Four"],
        ["Nikola Tesla","Isaac Newton","Albert Einstein","Thomas Edison"],
        ["Nephrology","Hepatology","Dermatology","Osteology"],
        ["Steel","Diamond","Carbon","Metamorphic Rock"],
        ["Root","Stem","Leaves","Flower"],
        ["Aluminium","Iron","Potassium","Magnesium"],
        ["Joey","Foal","Kits","Pup"],
        ["England","China","India","Turkey"],
        ["Matucana","Huancaya","Conakry","Lima"],
        ["8,873m","8,911m","8,849m","8,790m"],
        ["Ottawa","Detriot","Massachusett","Alabama"],
        ["88 days","174days", "225 days","275 days"]
    ],

    [
        ["C12H22O11", "NaCl", "Fe" ,"Au"],
        ["China","Abu Dhabi","Dubai","UK"],
        ["Brazille","Spanish","French","Portuguese"],
        [27, 30, 33, 35],
        ["Ice","Fish","Fire","Bacteria"],
        ["Mercury","Helium","Hydrogen","Zinc"],
        ["Neutron","Electron","Proton","Nucleus"],
        ["Pisces","Germini","Sagiattarius","Virgo"],
        ["Austerlitz","Siege of Toulon","Friedland","Waterloo"],
        ["Turkey","England","India","China"],
        ["England","France","Belgium","USA"],
        ["Liver","Kidney","Skin","Brain"],
        ["Saturn","Jupiter","Earth","Mercury"],
        ["Chameleon","Giraffe","Rabbit","Pigeon"],
        ["Keanu Reeves","Brad Pitt","Tom Cruise","Chris Evans"],
        ["Venus","Uranus","Mars","Mercury"]
    ],
    [
        ["Mickey Mouse","Pinocchio","The Smurfs","SpongeBob"],
        ["Los Angeles", "Copenhagen","London","Athens"],
        ["USA", "Denmark","Canada","Austria"],
        ["Nelson Mandela"," Martin Luther King, Jr","Malcom X","Kofi Annan"],
        ["France", "England","Russia","Norway"],
        ["USA","Italy","France","Greece"],
        ["Squirrel","Opossum","Hamster","Mouse"],
        ["Germini","Virgo","Pisces","Sagiattarius"],
        ["Harlem","Hell’s Kitchen","Brooklyn","Queens"],
        ["Harry Potter","Lord of the Rings","Don Quixote", "The Bible"],
        ["One","Two","Three","Four"],
        ["Atlantic Ocean","Pacific Ocean","Indian Ocean","Artic Ocean"],
        ["Greek","Latin","Zulu","English"],
        ["Minecraft","Grand Theft Auto VI","Tetris","Pacman"],
        ["Ottawa", "Monreal", "London","Skagel" ],
        ["Saturn","Moon","Mercury","Earth"]
    ],
    [
        ['Chromosome', 'Nucleus', 'Golgi Body', 'Plasma Membrane'],
        ['China', 'India', 'Venezuela', 'Nepal'],
        ['Europe', 'Africa', 'North America', 'South America'],
        ['Italy', 'France', 'Brazil', 'Spain'],
        ['Apollo','Zeus', 'Athena', 'Hermes'],
        ['Istanbul','Budapest','Dublin', 'Ottawa'],
        ["Israel",'Egypt','Ethiopia',"Congo"],
        ["Amazon River","Missouri River","River Nile","Yangtze River"],
        ["Harlem","Hell’s Kitchen","Brooklyn","Queens"],
        ["Scurvy","Lockjaw","Canker Sore","Halitosis"],
        ["1775","1776", "1777","1778"],
        ["Louise Glück","Jennifer Doudna","Chimamanda Ngozi Adichie","Marie Curie"],
        [3.142, 6.142, 9.142, 12.141],
        ["Crotes", "Storting","Saeima","Congress"],
        ["Cuba","England","Mexico","Almeria"],
        ['Thomas Edison','Eli Whitney','Johannes Gutenberg','James Wat']
    ]



];


const correctAnwserObject ={
    correctAnswersIndex0: [2,1,3,1,2,2,1,3,3,1,3,1,3,1,3,2],
    correctAnswersIndex1: [0,2,3,0,1,3,1,0,2,2,3,0,2,1,2,0],
    correctAnswersIndex2: [1,3,1,3,3,0,1,3,2,3,2,1,3,2,0,0], 
    correctAnswersIndex3: [3,2,0,2,2,0,1,2,2,2,1,2,0,2,1,0],
    correctAnswersIndex4: [0,2,2,1,1,1,3,1,3,2,1,2,0,0,3,2],
    correctAnswersIndex5: [0,1,2,3,1,3,2,0,2,1,2,1,3,1,3,0],
    correctAnswersIndex6: [0,2,0,0,2,2,0,1,2,2,0,1,3,2,0,2],
    correctAnswersIndex7: [1,2,3,0,2,0,0,1,3,3,2,2,1,1,0,0],
    correctAnswersIndex8: [1,3,2,1,0,1,1,0,1,2,2,1,3,0,3,1],
    correctAnswersIndex9: [1,3,0,0,0,2,1,1,1,3,1,3,0,0,0,3]
}


let i;
let optionsIndex = 0;
let finalAnwser;
let playerScore = 0;
let currentQuestion = 1;


const startButton = document.getElementById("startdiv");
const inputBox = document.querySelector('.input');
const firstDiv = document.querySelector('.div0');
const mainPageContainer = document.querySelector('.container');
const lifeLine = document.querySelector('.lifelinetext');
const userName = document.querySelector('.playername');
const selectedAnwser = document.getElementById('selectedanswertext');
const yesBox = document.getElementById("yestext");
const noBox = document.getElementById("notext");
const correctOrWrong = document.querySelector('.correctorwrongtext');

const timer = document.querySelector('.timeleft');

const question = document.getElementById('questiontext');

const optionA = document.querySelector('.optA');
const optionB = document.querySelector('.optB');
const optionC = document.querySelector('.optC');
const optionD = document.querySelector('.optD');

const lastPageUI = document.querySelector('.lastpagebody');
const nameOnResult =  document.getElementById('playerName');
const tryAgain = document.querySelector('.try-again')


startButton.addEventListener('click', function(e){
    e.preventDefault();

    // questionArrIndex = Math.trunc(Math.random() * 3) + 1;
    questionArrIndex = Math.trunc(Math.random() * 10);
    i = questionArrIndex;
    questionIndex = 0;
    optionsIndex = 0;
    finalAnwser = 0;
    playerScore = 0;
    currentQuestion = 1;
    let time = 0;

    // console.log(i);
    // console.log(correctAnwserObject['correctAnswersIndex' + i][optionsIndex])

    if(inputBox.value !== ''){

        document.querySelector('.questiondiv1').classList.add('underline');

        mainPageContainer.classList.remove("hidemain");
        firstDiv.classList.add('hidemain');

        userName.innerHTML = '';
        selectedAnwser.textContent = "";
        yesBox.textContent = "";
        noBox.textContent = "";
        correctOrWrong.textContent = "";

        const playerName = inputBox.value;

        const html =` <p class="playername">PLAYER: ${playerName.toUpperCase()}</p>`;

        userName.insertAdjacentHTML('beforeend', html);


        
        const gameOverTimer = function(){
            time = 135;

            const tick = function(){

                const min = String(Math.trunc(time / 60)).padStart(2,0)
                const sec = String(time % 60).padStart(2,0);
        
        
                timer.textContent = `${min}:${sec}`;
        
        
                if(time === 0 ){
                    clearInterval(timerFunction);

                    correctOrWrong.textContent = 'TIME UP🕛';
                    correctOrWrong.classList.add('wrongtext');
                            
                    setTimeout(a => mainPageContainer.classList.add('hidemain'), 1700);
                    setTimeout(a => lastPageUI.classList.remove('hide'), 1700);


                    document.getElementById('playerName').innerHTML = "";


                    const html2 = `<p id="playerName">PLAYER NAME: ${playerName.toUpperCase()}</p> `;
                    // console.log(html2)
                    nameOnResult.insertAdjacentHTML("beforeend", html2);

                    document.getElementById('secondtext').textContent = `SCORE: ${playerScore}/16`;

                    const percentage  = `${(Math.abs(playerScore / 16) * 100).toFixed(1) }%`;

                    // console.log(percentage);
                    document.getElementById('percentage').textContent = `PERCENTAGE: ${percentage}`;

                    document.getElementById('finalmessage').innerHTML = ``;

                        

                    if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] === 0){
                            document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr[i][optionsIndex][0]}`;
                        }

                    else if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] === 1){
                            document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr[i][optionsIndex][1]}`;
                        }

                    else if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] ===2){
                            document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr[i][optionsIndex][2]}`;
                        }
                            
                    else if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] === 3){
                            document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr[i][optionsIndex][3]}`; 
                        }   


                };
    
                    time--;
    
        
            }


            tick();
            const timerFunction = setInterval(tick, 700);
        };
        gameOverTimer();

        // console.log(inputBox.value);


        // Q&A

        question.innerHTML = '';
        // document.querySelector('.mainoption').innerHTML = ' ';

        setTimeout( a =>  question.textContent = `${questionsArr[questionArrIndex][questionIndex]}`, 1000);

        // if(questionArrIndex === i){

            // console.log(optionA.textContent = `A: ${optionsArr[i][optionsIndex][0]}` );
        setTimeout( a => optionA.textContent = `A: ${optionsArr[i][optionsIndex][0] }`, 1000);
        setTimeout( a => optionB.textContent = `B: ${optionsArr[i][optionsIndex][1] }`, 1000);
        setTimeout( a => optionC.textContent = `C: ${optionsArr[i][optionsIndex][2] }`, 1000);
        setTimeout( a => optionD.textContent = `D: ${optionsArr[i][optionsIndex][3] }`, 1000);
        // }
        // else if(questionArrIndex === 2){

        //     setTimeout( a => optionA.textContent = `A: ${optionsArr[i][optionsIndex][0] }`, 1000);
        //     setTimeout( a => optionB.textContent = `B: ${optionsArr[i][optionsIndex][1] }`, 1000);
        //     setTimeout( a => optionC.textContent = `C: ${optionsArr[i][optionsIndex][2] }`, 1000);
        //     setTimeout( a => optionD.textContent = `D: ${optionsArr[i][optionsIndex][3] }`, 1000);
        // }
        // else if(questionArrIndex === 3){

        //     setTimeout( a => optionA.textContent = `A: ${optionsArr[i][optionsIndex][0] }`, 1000);
        //     setTimeout( a => optionB.textContent = `B: ${optionsArr[i][optionsIndex][1] }`, 1000);
        //     setTimeout( a => optionC.textContent = `C: ${optionsArr[i][optionsIndex][2] }`, 1000);
        //     setTimeout( a => optionD.textContent = `D: ${optionsArr[i][optionsIndex][3] }`, 1000);
        // }
        
        


        // OPTION A

        optionA.addEventListener('click', function(e){
            e.preventDefault();
            finalAnwser = 0;
            selectedAnwser.textContent = "A";
            setTimeout( a => noBox.textContent = "NO", 600);
            setTimeout( a => yesBox.textContent = "YES", 600);
            // console.log(questionIndex);
            // console.log(finalAnwser);
            // console.log(correctAnswersIndex1[optionsIndex])
            // console.log(optionsIndex);
            // console.log(finalAnwser, correctAnswersIndex1[optionsIndex]);
        });


        // OPTION B

        optionB.addEventListener('click', function(e){
            e.preventDefault();
            finalAnwser = 1;
            selectedAnwser.textContent = "B";
            setTimeout( a => noBox.textContent = "NO", 600);
            setTimeout( a => yesBox.textContent = "YES", 600);
            // console.log(questionIndex);
            // console.log(finalAnwser);
            // console.log(correctAnswersIndex1[optionsIndex]);
            // console.log(optionsIndex);
            // console.log(finalAnwser, correctAnswersIndex1[optionsIndex]);

        });

        // OPTION C

        optionC.addEventListener('click', function(e){
            e.preventDefault();
            finalAnwser = 2;
            selectedAnwser.textContent = "C";
            setTimeout( a => noBox.textContent = "NO", 600);
            setTimeout( a => yesBox.textContent = "YES", 600);
            // console.log(questionIndex);
            // console.log(finalAnwser);
            // console.log(correctAnswersIndex1[optionsIndex]);
            // console.log(optionsIndex);
            // console.log(finalAnwser, correctAnswersIndex1[optionsIndex]);


        });


        // OPTION D

        optionD.addEventListener('click', function(e){
            e.preventDefault();
            finalAnwser = 3;
            selectedAnwser.textContent = "D";
            setTimeout( a => noBox.textContent = "NO", 600);
            setTimeout( a => yesBox.textContent = "YES", 600);
            // console.log(questionIndex);
            // console.log(finalAnwser);
            // console.log(correctAnswersIndex1[optionsIndex])
            // console.log(optionsIndex);
            // console.log(finalAnwser, correctAnswersIndex1[optionsIndex]);


        });

      
        yesBox.addEventListener('click', function(r){
            r.preventDefault();
            yesBox.textContent = "";
            noBox.textContent = "";

            if(finalAnwser === correctAnwserObject['correctAnswersIndex' + i][optionsIndex]){  

                correctOrWrong.textContent = 'CORRECT✅';
                correctOrWrong.classList.add('correcttext');
                // console.log(questionsArr[questionIndex]);

                setTimeout( a => question.textContent = ``, 1300);
                setTimeout( a =>  selectedAnwser.textContent = '', 1300);
                setTimeout( a =>  correctOrWrong.textContent = '', 1700);
                // setTimeout( a => noBox.textContent = "", 1300);
                // setTimeout( a => yesBox.textContent = "", 1300);


                questionIndex++;
                optionsIndex++;
                playerScore++;
                currentQuestion++;

                setTimeout(a => time = timer.textContent = '03:00', 1650);
                setTimeout(a => time = 135, 1700);
            
                // UPDATE QUESTION


                if(playerScore !== 16){
                    setTimeout( a => document.querySelector(`.questiondiv${currentQuestion}`).classList.add('underline'), 1750);
                    document.querySelector(`.questiondiv${currentQuestion - 1}`).classList.remove('underline');
                }
                   



                setTimeout( a => question.textContent = questionsArr[questionArrIndex][questionIndex], 1700);
                    
                if(questionArrIndex === i && playerScore !== 16){
                setTimeout( a => optionA.textContent = `A: ${optionsArr[i][optionsIndex][0]}`, 1750);                       
                setTimeout( a => optionB.textContent = `B: ${optionsArr[i][optionsIndex][1]}`, 1750);
                setTimeout( a => optionC.textContent = `C: ${optionsArr[i][optionsIndex][2]}`, 1750);
                setTimeout( a => optionD.textContent = `D: ${optionsArr[i][optionsIndex][3]}`, 1750);
                console.log(optionsIndex)

                }

                if (playerScore == 16){
                    console.log(true);
                    setTimeout( a => mainPageContainer.classList.add('hidemain'), 1640);
                    setTimeout( a => lastPageUI.classList.remove('hide'), 1650);

                    document.getElementById('playerName').innerHTML = "";

                    const html2 = `<p id="playerName">PLAYER NAME: ${playerName.toUpperCase()}<p>`;                            
                    console.log(html2)
                    nameOnResult.insertAdjacentHTML("beforeend", html2);

                    document.getElementById('secondtext').textContent = `SCORE: ${playerScore}/16`;

                    const percentage  = `${(Math.abs(playerScore / 16) * 100).toFixed(1) }%`;

                    console.log(percentage);
                    document.getElementById('percentage').textContent = `PERCENTAGE: ${percentage}`;

                    document.getElementById('finalmessage').innerHTML = ``;
                    document.getElementById('finalmessage').textContent = `CONGRATULATIONS🎊🎉💯`;
                }

            }     
            else{
                    console.log('else');
                    correctOrWrong.textContent = 'WRONG❌❗';
                    correctOrWrong.classList.add('wrongtext');
                        
                    setTimeout(a => mainPageContainer.classList.add('hidemain'), 1700);
                    setTimeout(a => lastPageUI.classList.remove('hide'), 1700);


                    document.getElementById('playerName').innerHTML = "";


                    const html2 = `<p id="playerName">PLAYER NAME: ${playerName.toUpperCase()}</p> `;
                    // console.log(html2)
                    nameOnResult.insertAdjacentHTML("beforeend", html2);

                    document.getElementById('secondtext').textContent = `SCORE: ${playerScore}/16`;

                    const percentage  = `${(Math.abs(playerScore / 16) * 100).toFixed(1) }%`;

                    // console.log(percentage);
                    document.getElementById('percentage').textContent = `PERCENTAGE: ${percentage}`;

                    document.getElementById('finalmessage').innerHTML = ``;


                    
                    if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] === 0){
                        document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr[i][optionsIndex][0]}`;
                    }

                    else if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] === 1){
                            document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr[i][optionsIndex][1]}`;
                    }

                    else if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] ===2){
                            document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr[i][optionsIndex][2]}`;
                    }
                            
                    else if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] === 3){
                            document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr[i][optionsIndex][3]}`; 
                    }   



                    // // OPTION ARRAY 2
                    // if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] == 0 && questionArrIndex === 2){
                    //     document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr2[optionsIndex][0]}`;
                    // }

                    // else if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] && questionArrIndex === 2){
                    //     document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr2[optionsIndex][1]}`;
                    // }

                    // else if (correctAnswersIndex1[optionsIndex] == 2 && questionArrIndex === 2){
                    //     document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr2[optionsIndex][2]}`;
                    // }

                    // else if (correctAnswersIndex1[optionsIndex] == 3 && questionArrIndex === 2){
                    //     document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr2[optionsIndex][3]}`; 
                    // }



                    // // OPTION ARRAY 3
                    // if (correctAnswersIndex1[optionsIndex] == 0 && questionArrIndex === 3){
                    //     document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr3[optionsIndex][0]}`;
                    // }

                    // else if (correctAnswersIndex1[optionsIndex] == 1 && questionArrIndex === 3){
                    //     document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr3[optionsIndex][1]}`;
                    // }

                    // else if (correctAnswersIndex1[optionsIndex] == 2 && questionArrIndex === 3){
                    //     document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr3[optionsIndex][2]}`;
                    // }

                    // else if (correctAnswersIndex1[optionsIndex] == 3 && questionArrIndex === 3){
                    //     document.getElementById('finalmessage').textContent = `CORRECT OPTION: ${optionsArr3[optionsIndex][3]}`; 
                    // }
                    //  // document.getElementById('playerName').textContent = playerName.toUpperCase();


                }
        })

        noBox.addEventListener('click', function(r){
            r.preventDefault();
            selectedAnwser.textContent = "";
            yesBox.textContent = "";
            noBox.textContent = "";

        });

        lifeLine.addEventListener('click', function(e){
            e.preventDefault();

            setTimeout(a => lifeLine.innerHTML = "", 400);

                if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] == 0){
                    optionB.innerHTML = "";
                    optionC.innerHTML = "";

                }
                else  if (correctAnwserObject['correctAnswersIndex' + i][optionsIndex] == 1){
                    optionA.innerHTML = "";
                    optionC.innerHTML = "";


                }
                
                if(correctAnwserObject['correctAnswersIndex' + i][optionsIndex] == 2){
                    optionA.innerHTML = "";
                    optionB.innerHTML = "";

                }
                else if(correctAnwserObject['correctAnswersIndex' + i][optionsIndex] == 3){
                    optionA.innerHTML = "";
                    optionB.innerHTML = "";
                




            }
            else{
                // wrongAnwser2 = Math.trunc(Math.random() * 3) + 1;
            }


        })

    }
    else{
        console.log('Empty input');
    }


});

tryAgain.addEventListener('click', function(e){

    // firstDiv.classList.remove('hidemain');
    // mainPageContainer.classList.("hidemain");
    // lastPageUI.classList.add('hide');
    // let tracker = 0;

    // if (tracker == 0){
    //     console.log('try again clicked')
    //     optionsIndex = 0;
    //     // console.log(optionsIndex)
    // }
    // else{
    //     console.log('try again has nor been clicked')
    // }
    // currentQuestion = 1;
    // questionIndex = 0;
    // // optionsIndex = 0;
    // playerScore = 0;
    // // finalAnwser = 0;

    // document.querySelector('.questiondiv1').classList.add('underline');
    
    // console.log(optionsIndex)


    // e.preventDefault();
    // inputBox.value = '';
    // userName.innerHTML = '***Input Name***';
    // question.textContent = "";
    // selectedAnwser.textContent = "";
    // yesBox.textContent = "";
    // noBox.textContent = "";
    // correctOrWrong.textContent = "";

    // setTimeout(a => firstDiv.classList.remove('hidemain'), 200 );
    // setTimeout(a => mainPageContainer.classList.add('hidemain'), 200 );
    // setTimeout(a => lastPageUI.classList.add('hide'), 100);

    
    // setTimeout( a => question.textContent =  questionsArr[questionIndex], 1700);
                

    // setTimeout( a => optionA.textContent = `A: ${optionsArr[i][optionsIndex][0] }`, 1750);
    // setTimeout( a => optionB.textContent = `B: ${optionsArr[i][optionsIndex][1]}`, 1750);
    // setTimeout( a => optionC.textContent = `C: ${optionsArr[i][optionsIndex][2]}`, 1750);
    // setTimeout( a => optionD.textContent = `D: ${optionsArr[i][optionsIndex][3]}`, 1750);

  
    
});



