const box = document.querySelector('#outer-box');
let symbol = 'X';

box.addEventListener('click',insertXO);

function insertXO(e){

    if(e.target.classList.contains('inner-box')){

        if(e.target.firstElementChild.innerText!=='X'&&e.target.firstElementChild.innerText!=='O'){
            e.target.firstElementChild.innerText = symbol;
        }else{
            return;
        }
        if(symbol==='X'){
            e.target.firstElementChild.style.color='#FF2400';
        }
        else{
            e.target.firstElementChild.style.color='#0437F2';
        }
        const mark = win_check(symbol);
        if(mark!=='X' && mark!=='O' && mark!=='tie'){
            if(symbol==='X'){
                symbol = 'O';
            }else{
                symbol = 'X';
            }
        }
        else if(mark==='tie'){
            document.querySelector('#tie').innerText="It's a Tie! Well played both Thanks for playing";
            document.getElementById('gametie').children[2].innerText = '1';
            document.querySelector('#tie').style.display = 'block';
            document.querySelector('#tie').style.opacity = '1';
            box.removeEventListener('click',insertXO);
        }
        else{
            document.querySelector('#won').innerText = `Congradulation ${mark} has won the game! Thanks for playing`;
            document.getElementById(`user${mark.toLowerCase()}`).children[2].innerText = '1';
            document.querySelector('#won').style.display = 'block';
            document.querySelector('#won').style.opacity = '1';
            box.removeEventListener('click',insertXO);
        }
    }
}

function win_check(sym){
    const c = box.children;
    const child = Array.from(c);
    let p= new Array(0,1,2,3,4,5,6,7,8);
    mark = sym;
    for(let i =0;i<child.length;i++){
        if(child[i].children[0].innerText!==''){
            p[i] = child[i].children[0].innerText;
        }
    }
    if((p[0]===p[1]&&p[1]===p[2])||(p[3]===p[4]&&p[4]==p[5])||(p[6]===p[7]&&p[7]===p[8])||(p[0]===p[3]&&p[3]===p[6])||(p[1]===p[4]&&p[4]===p[7])||(p[2]===p[5]&&p[5]===p[8])||(p[0]===p[4]&&p[4]===p[8])||(p[2]===p[4]&&p[4]===p[6])){
        return mark;
    }
    let flag;
    flag=0;
    for(let i=0;i<p.length;i++){
        if(typeof p[i]==='number'){
            flag=1;
            break;
        }
    }
    if(flag!==1){
        return 'tie';
    }
}