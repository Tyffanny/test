let Hunger=0
let MinHunger=0
let MaxHunger=10

let Durst=0
let MinDurst=0
let MaxDurst=50

let shithappens=false

let Herzen=1
let Minherzen=0



console.log("test")
setInterval(() => {
    if (shithappens) {
        return
    }
    //console.log("test",Hunger)
    let initialerHunger = Hunger
    if (Hunger<MaxHunger){
        Hunger++
    
        let Hungeranzeige = document.getElementById('ladebalken');
        Hungeranzeige.innerText = Hunger+' '+'Hunger'
        animiere(initialerHunger)
    }else{
        Katzetot()
        
    
    }

},5000)


function animiere(initialerHunger) {
    
    
    var ladebalken = document.getElementById('ladebalken');
    if (Hunger>6){
        ladebalken.style.backgroundColor='red'
    }else{
        ladebalken.style.backgroundColor='green'
        
    }
    ladebalken.animate(
        [
           
           {
               width: initialerHunger + 'px',
           
            }, {
                width: Hunger + 'px',
                    
            }
            
        ], {
            duration: 5000,
            iterations: 1,
            fill: 'forwards'
        });
    
        
}

function Futter(){
if (Hunger>MinHunger){
Hunger=Hunger-1    }}

function Wasser(){
    if (Durst>MinDurst){
Durst=Durst-3    }}

function animiereDurst(initialerDurst){

var durstanzeige = document.getElementById('durstanzeige');
    if (Durst>40){
        durstanzeige.style.backgroundColor='red'
    }else{
        durstanzeige.style.backgroundColor='#729fc9'
        
    }
    durstanzeige.animate(
        [ 
           
           {
               width: initialerDurst + 'px',
           
            }, {
                width: Durst + 'px',
                    
            }
            
        ], {
            duration: 1000,
            iterations: 1,
            fill: 'forwards'
        });
}


console.log("test")
setInterval(() => {
    if (shithappens) {
        return
    }
    //console.log("test",Durst)
    let initialerDurst = Durst
    if (Durst<MaxDurst){
        Durst++
    
        let Durstanzeige = document.getElementById('durstanzeige');
        Durstanzeige.innerText = Durst+' '+'Durst'
        animiereDurst(initialerDurst)


    }else{
        
      Katzetot()  
    }

},1000)
   

    
function NEU () {
    Durst=0
    Hunger=0
    Herzen=0
    shithappens=false
    let dialog = document.getElementById('dialog');
    dialog.style.display="none"
}

function Katzetot(){
    console.log("test")
 let dialog = document.getElementById('dialog');
        dialog.style.display="block"
        shithappens=true

    let Miau = document.getElementById('Miau')
    Miau.play()
        
}



console.log("zahl")
setInterval(() => {
    Pflanze()
},6000)


function zufaelligeGanzzahl(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

function Pflanze(){
    // HTML-Element, das bewegt werden soll
    let PflanzeBild = document.getElementById('Pflanze');

    let ranTop = zufaelligeGanzzahl(30,250) + 'px'
    let ranLeft = zufaelligeGanzzahl(30,250) + 'px'

    PflanzeBild.animate(
        [
            {   top: PflanzeBild.style.top ,
                left:PflanzeBild.style.left

            },
            {  
                top: ranTop,
                left:ranLeft
            }
            ], {   duration: 5000
        }
    ) 

    PflanzeBild.style.top = ranTop ,
    PflanzeBild.style.left = ranLeft

}






setInterval(() => {
    let Liebe= document.getElementById('Herzen');
        Liebe.innerText = Herzen + '   '+' '+' '+ 'Liebe'

    if (Herzen>Minherzen){

        if (Hunger<2){
        Herzen++}
    
        if (Hunger>7) {
        Herzen-- }
    
    
    
       if (Durst<6){
        Herzen++}
    
       if(Durst>40){
        Herzen--}
    }
},2000)


let Outfit=localStorage.getItem('url')
console.log(Outfit)
if (Outfit!==null){
    document.getElementById('KatzeBild').src = Outfit
}






document.addEventListener('keydown', function(event) {
    console.log("test")

    const container = document.getElementById('Zimmer');
    const katze = document.getElementById('Katze1');
    const step = 10; // Die Anzahl der Pixel, um die das Div bewegt wird
    let top = parseInt(window.getComputedStyle(katze).top);
    let left = parseInt(window.getComputedStyle(katze).left);

    let limits = document.getElementById('zimmer').getBoundingClientRect()

    
    switch (event.key) {
        case 'ArrowUp':

            if(katze.getBoundingClientRect().y > limits.y + 12 ){
                top = top - step;
            }
            
            break;
        case 'ArrowDown':
           
            if(katze.getBoundingClientRect().bottom < limits.bottom - 4 ){
               top += step;
            }

            
            break;
        case 'ArrowLeft':
            left -= step;

            if(katze.getBoundingClientRect().left < limits.left + 5 ){
                right += step;
            }


            break;
        case 'ArrowRight':
            if(katze.getBoundingClientRect().right < limits.right - 10 ){
                left += step;
            }
            break;
    }

    katze.style.top = top + 'px';
    katze.style.left = left + 'px';

    
        
       
    console.log(document.getElementById('zimmer').getClientRects())

});