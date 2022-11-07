
let homeScore = 0
let guestScore = 0
let homeScoreDisplay = document.getElementById("home_score_display")
let guestScoreDisplay = document.getElementById("guest_score_display")
let homeWinning = document.getElementById("home_winning")
let guestWinning = document.getElementById("guest_winning")

// home section
function addOneHome() {
    homeScoreDisplay.textContent = homeScore += 1
    hiScore()
}

function addTwoHome() {
    homeScoreDisplay.textContent = homeScore += 2
    hiScore()
}


function addThreeHome() {
    homeScoreDisplay.textContent = homeScore += 3
    hiScore()
}


// guest section
function addOneGuest() {
    guestScoreDisplay.textContent = guestScore += 1
    hiScore()
}

function addTwoGuest() {
    guestScoreDisplay.textContent = guestScore += 2
    hiScore()
}

function addThreeGuest() {
    guestScoreDisplay.textContent = guestScore += 3
    hiScore()
}

// who's ahead
function hiScore() {
    if(homeScore > guestScore) {
        homeWinning.textContent = "yay!"
        guestWinning.textContent = "boo!"
    } else if(guestScore > homeScore) {
        guestWinning.textContent = "yay!"
        homeWinning.textContent = "boo!"
    } else {
        homeWinning.textContent = "tie!"
        guestWinning.textContent = "tie!"
    }
}

function hiScoreOff() {
    homeWinning.textContent = ""
        guestWinning.textContent = ""
}

// reset button
function resetAll() {
    homeScore = 0
    guestScore = 0
    homeScoreDisplay.textContent = homeScore
    guestScoreDisplay.textContent = guestScore
    hiScoreOff()
}



