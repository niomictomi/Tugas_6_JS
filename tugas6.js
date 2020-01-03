function tugas6() {
    for (var i = 1; i <= 20; i++) {
        console.log(i)
    }
}

function tugas6a() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log("Bilangan Genap ke "+i/2)
        } else 
        if (i%3==0) {
            console.log("Ganjil : "+i)

        }
    }

}


console.log("Perulangan 20x")
tugas6()
console.log("-------------------------")
console.log("Perulangan Bilangan Genap / Ganjil")
console.log("-------------------------")
tugas6a()