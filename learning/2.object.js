class Dog {
    // properties
    name = ""
    color = ""
    eyeColor = ""
    height = ""
    length = ""
    weight = ""

    //special method
    //consturctor adalah bawaan dari js, suatu method yang pertama kali di eksekusi
    constructor (name, color, eyeColor, height,length,weight ) {
        this.name = name
        this.color = color
        this.eyeColor = eyeColor
        this.height = height
        this.length = length
        this.weight = weight
    }

    //method
    sit() {
        console.log(`${this.name} berwarna ${this.color}`)
        console.log(`mata berwarna ${this.eyeColor}`)
        console.log(`tingginya ${this.height}`)
        console.log(`panjangnya ${this.length}`)
        console.log(`lebarnya ${this.weight}`)
    }

    layDown() {

    }

    shake() {

    }
}

const anjing = new Dog("anjing" , "merah" ,"hitam" , "500cm" , "1 meter" , "300cm")
anjing.sit()