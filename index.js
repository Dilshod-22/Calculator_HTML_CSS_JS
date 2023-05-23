let display = document.querySelector(".display");
let getBut = document.querySelectorAll("button");
let allReset = document.querySelector('.reset');
let back = document.querySelector('.back');
for (i = 0; i < getBut.length; i++) {
  getBut[i].onclick = (e) => {
   let val = e.target.innerHTML.trim();
   if(val == 'x'){
         val = '*';
    }else if(val == "÷"){
         val = '/';
    };
    if(display.innerHTML == 0){
      return display.innerHTML = val;
   };
    let valen = display.innerHTML.length;
    if(valen == 9){
        display.style.fontSize = '1.6em';        
    }
    if(valen < 16){
        return display.innerHTML += val;
    }
  };  
};
back.onclick = () => {
    let val = display.innerHTML;
    if(val.length < 2){
        display.innerHTML = '0';
    }else{
        display.innerHTML = val.slice(0, val.length - 1);
    }
    if(val.length < 9){
        display.style.fontSize = '3em';
    }
}
allReset.onclick = () => {
    display.innerHTML = '0';
    display.style.fontSize = '3em';
}
let calculate = document.querySelector('.calcu');
calculate.onclick = () => {
    let val = display.innerHTML;   
    display.innerHTML = eval(val);1
}



let main = document.querySelector('.main')
let radio1 = document.querySelector('.radio1')
let radio2 = document.querySelector('.radio2')
let radio3 = document.querySelector('.radio3')
let key = document.querySelector('.key')
let keys = document.querySelectorAll('.num')
let label = document.querySelectorAll('.label')
let them = document.querySelector(".them")
let title = document.querySelector(".title")
radio1.onclick = () => {
    main.style.background = "rgb(59, 70, 100)"
    display.style.background = "rgb(37, 45, 68)"
    display.style.color = "cornsilk"
    key.style.background = 'rgb(37, 45, 68)'
    allReset.style.background = 'darkslateblue'
    back.style.background = 'darkslateblue'
    label[0].style.color = 'white'
    label[1].style.color = 'white'
    label[2].style.color = 'white'
    them.style.color = 'white'
    title.style.color = 'white'
    for(let i=0;i<keys.length;i++){
        keys[i].style.color = 'black'
        keys[i].style.background = 'rgb(233, 228, 218)'
    }
}

radio2.onclick = () => {
    main.style.background = "rgb(229, 232, 229)"
    display.style.background = "white"
    display.style.color = "black"
    key.style.background = 'rgb( 212, 205, 205)'
    allReset.style.background = 'rgb(57, 129, 135)'
    back.style.background = 'rgb(57, 129, 135)'
    label[0].style.color = 'black'
    label[1].style.color = 'black'
    label[2].style.color = 'black'
    them.style.color = 'black'
    title.style.color = 'black'
    for(let i=0;i<keys.length;i++){
        keys[i].style.color = 'black'
        keys[i].style.background = 'rgb(233, 228, 218)'
    }

}

radio3.onclick = () => {
    main.style.background = "rgb(22, 7, 39)"
    display.style.background = "rgb(29, 8, 54)"
    display.style.color = "rgb(251, 229, 92)"
    key.style.background = 'rgb(29, 8, 54)'
    allReset.style.background = 'rgb(84, 8, 128)'
    back.style.background = 'rgb(84, 8, 128)'
    label[0].style.color = 'rgb(251, 229, 92)'
    label[1].style.color = 'rgb(251, 229, 92)'
    label[2].style.color = 'rgb(251, 229, 92)'
    them.style.color = 'rgb(251, 229, 92)'
    title.style.color = 'rgb(251, 229, 92)'
    for(let i=0;i<keys.length;i++){
        keys[i].style.color = 'rgb(251, 229, 92)'
        keys[i].style.background = 'rgb(51, 26, 78)'
    }
}