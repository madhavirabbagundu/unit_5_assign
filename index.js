const firstRandom_number = Math.floor(Math.random()*6)+1;

const firstDiceimg = 'images/dice'+firstRandom_number+'.png';

document.querySelectorAll('img')[0].setAttribute('src',firstDiceimg);



//second
const secondRandom_number = Math.floor(Math.random()*6)+1;

const secondDiceimg = 'images/dice'+secondRandom_number+'.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDiceimg);


//third
const thirdRandom_number = Math.floor(Math.random()*6)+1;

const thirdDiceimg = 'images/dice'+thirdRandom_number+'.png';
document.querySelectorAll('img')[2].setAttribute('src',thirdDiceimg);

// condition;
if((firstRandom_number > secondRandom_number) && (firstRandom_number > thirdRandom_number)){
    document.querySelector('h1').innerHTML = 'The Winner is Team_1';
}
 else if((secondRandom_number > thirdRandom_number) && (secondRandom_number > firstRandom_number)){
    document.querySelector('h1').innerHTML = ('The winner is Team_2')
}
else if((firstRandom_number === secondRandom_number)||(firstRandom_number===thirdRandom_number) || (secondRandom_number===thirdRandom_number)){
    document.querySelector('h1').innerHTML = ('The Draw')
}

else if((thirdRandom_number > secondRandom_number) && (thirdRandom_number > firstRandom_number)){
    document.querySelector('h1').innerHTML = ('The winner is Team_3')
}
