<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3f281905bb2a965c301d3529a816d6e7c78f681b
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
<<<<<<< HEAD
=======
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
>>>>>>> 81fc4c7b538cd21adfac2a602a959ab6d67fa1fa
=======
>>>>>>> 3f281905bb2a965c301d3529a816d6e7c78f681b
}