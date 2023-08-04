function getPilihanComputer() {
    const comp = Math.random();
    if ( comp < 0.3) return 'gajah';
    if ( comp > 0.3 && comp < 0.7) return 'orang';
    return 'semut';
}

function getHasil(player, comp) {
    if (player == comp) return "SERI!";
    if ( player == "gajah") return ( comp == 'orang') ? 'MENANG!' : 'KALAH!'; 
    if ( player == 'orang') return ( comp == 'semut') ? 'MENANG!' : 'KALAH!';
    if ( player == 'semut') return ( comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(gacoan) {
    gacoan.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = gacoan.className;
        const hasil = getHasil(pilihanPlayer, pilihanComputer);

        const imgComputer = document.querySelector('.img-komputer');
        imgComputer.setAttribute('src' , 'Assets/' + pilihanComputer + '.png');

        const info =document.querySelector('.info');
        info.innerHTML = hasil;
    });
});

// const pGajah = document.querySelector('.gajah');
//     pGajah.addEventListener('click', function(){
//         const pilihanComputer = getPilihanComputer();
//         const pilihanPlayer = pGajah.className;
//         const hasil = getHasil(pilihanPlayer, pilihanComputer);

//         const imgComputer = document.querySelector('.img-komputer');
//         imgComputer.setAttribute('src', '/Javascript/DOM/assets-suwitJepang/' + pilihanComputer + '.png');

//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//     })














// 


