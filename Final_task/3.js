function drawImage(n) {
    if (n % 2 === 0) {
        console.log("Parameter harus bilangan ganjil");
        return;
    }

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            if (i === Math.floor(n / 2) || j === Math.floor(n / 2)) {
                row += "# ";
            } else {
                row += "* ";
            }
        }
        console.log(row.trim());
    }
}

console.log(drawImage(5));
console.log();
console.log(drawImage(7));
