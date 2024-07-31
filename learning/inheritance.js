class animal {
    brain = true
    legs = 0;

    angry () {
        console.log("woff wooff woff")
    }
}

class human extends animal {
    legs = 2;

    talk () {
        console.log("hello gais")
    }
}

class pet extends animal {
    legs = 4;
    fleas = 0;
}

class dog extends pet {
    fleas = 8;
}

class cat extends pet {
    fleas = 4;
}

const animal = new animal ()
animal.angry ()

const human = new human ()
human.talk ()
human.angry ()




//eksekusinya dari bawah ke atas
//animal tak bisa mengeksekusi yang ada di anakannya, namun sebaliknya, anakannya mampu mengeksekusi apa yang ada di animal