 let counterTextNode = document.getElementById("counter-display");
let buttonNode = document.getElementById("my-btn");
let messageNode = document.getElementById("special-message");

 let count = 0;

let specialNumbers = [4, 7, 9, 12, 15, 20, 27, 31, 41, 50];

// Button Click Event
buttonNode.addEventListener("click", function () {


    count++;

    counterTextNode.innerText = count;

    counterTextNode.style.transform = "scale(1.15)";

    setTimeout(function () {
        counterTextNode.style.transform = "scale(1)";
    }, 150);

      if (specialNumbers.includes(count)) {



        counterTextNode.style.color = "#E53935";



        messageNode.innerHTML =

            "🎉 Congratulations!<br><strong>" +

            count +

            "</strong> is one of your Special Numbers!";



        messageNode.classList.add("active");



    } else {



        counterTextNode.style.color = "#222";



        messageNode.innerHTML =

            "✨ Keep counting to discover your special numbers.✨";



        messageNode.classList.remove("active");



    }



});