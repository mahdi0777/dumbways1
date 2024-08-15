function hitungBarang(tipeBarang, quantitas) {
    if (tipeBarang == "A") {
        const harga = 4550
        let diskon = 0
        if (quantitas > 13) {
             diskon = 231 
            
        }
        return (harga - diskon )* quantitas
    }
    if (tipeBarang == "B") {
        const harga = 5330
        let diskon = 0
        if (quantitas > 7) {
            diskon = 23/100
        }
        return harga*quantitas - harga*quantitas*diskon
    }

    if (tipeBarang == "C") {
        const harga = 8653
        return harga*quantitas

    }
}


console.log(hitungBarang("A", 14))

console.log(hitungBarang("B",8))

console.log(hitungBarang("C",10))