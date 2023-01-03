// home
let homeScore = document.getElementById('home-points-text')
    console.log(homeScore)

let homedefaultScore = 0

function add1(){
    homedefaultScore = homedefaultScore + 1
    homeScore.textContent = homedefaultScore
}
function add2(){
    homedefaultScore = homedefaultScore + 2
    homeScore.textContent = homedefaultScore
}
function add3(){
    homedefaultScore = homedefaultScore + 3
    homeScore.textContent = homedefaultScore
}



// Guest
let guestScore = document.getElementById('guest-points-text')
    console.log(guestScore)

let guestdefaultScore = 0

function addguest1(){
    guestdefaultScore = guestdefaultScore + 1
    guestScore.textContent = guestdefaultScore
}

function addguest2(){
    guestdefaultScore = guestdefaultScore + 2
    guestScore.textContent = guestdefaultScore
}

function addguest3(){
    guestdefaultScore = guestdefaultScore + 3
    guestScore.textContent = guestdefaultScore
}

