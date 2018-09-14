$(document).ready(function () {

    // Define all varibles and arrays
    var count = 0;
    var time = 30;
    var timer;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var artistSong = ["Queen - Bohemian Rhapsody", "Drake - God's Plan's", "Eminem - Lose Yourself", "Fallout Boy - Uma Thurman", "Blink 182 - All the Small Things", "The Killers - When You were Young", "TLC - No Scrub", "Michael Jackson - Beat It"];
    var question = ["Too late, my time has come Sends shivers down my ___", "She say, Do you love me? I tell her, Only partly I only love my bed and my ___, I'm sorry", "Look, if you had one shot, one opportunity, To seize everything you ever wanted, One moment, Would you capture it or just let it ___?", "She wants to dance like Uma Thurman, Bury me 'til I ___", "Late night, come home, Work sucks, I know, She left me ___by the stairs ", "You sit there in your heartache, Waiting on some beautiful ___to, To save your from your old ways", "A scrub is a guy that thinks he's fly, He's also known as a ___", "They told him don't you ever come around here, Don't want to see your ___ , you better disappear"];
    var answer = ["Spine", "Mom", "Slip", "Confess", "Roses", "Boy", "Busta", "Face"];
    var choiceOne = ["Back", "Mom", "Split", "Confess", "Tulips", "Fool", "Busta", "Plans"];
    var choiceTwo = ["Spine", "Dog", "Dip", "Undress", "Kisses", "Girl", "Pranksta", "Butt"];
    var choiceThree = ["Crack", "Cash", "Slip", "Do Less", "Chocolates", "Boy", "Broke Man", "Face"];
    var choiceFour = ["Mind", "Bros", "Fall Through", "Caress", "Roses", "Scrub", "Faker", "Vans"];
    var gifs = ["https://media.giphy.com/media/1WDyG7bCEKgOk/giphy.gif", "https://media.giphy.com/media/jwR4iEmJ0fcmk/giphy.gif","https://media.giphy.com/media/7jeMXMtG66HcY/giphy.gif","https://media.giphy.com/media/l0Iy43PHc1KIdZa1O/source.gif","https://media.giphy.com/media/DBqzFVf7iyUMg/giphy.gif","https://media.giphy.com/media/3o6fJ4ipTvOT9wSI1y/source.gif","https://media.giphy.com/media/fmeTX8AURI4co/giphy.gif","https://media.giphy.com/media/gsnKLKhs41KSY/giphy.gif"]

    // hide divs on load
    $(".choice").hide();
    $(".retry").hide();
    $("section").hide();

    // make my choice divs clickable and run function on click
    $("#choice1Div").on("click", checkAnswer)
    $("#choice2Div").on("click", checkAnswer)
    $("#choice3Div").on("click", checkAnswer)
    $("#choice4Div").on("click", checkAnswer)

    // start game button
    $(".start").on("click", function () {
        $("section").show();
        $(".start").hide();
        displayQuestion();
    })

    //restart button
    $(".retry").on("click", function () {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        count = 0;
        $(".retry").hide();
        displayQuestion();
    })

    // function for timer countdown
    function countdown() {
        if (time == 0 && count <= answer.length-1 ) {
            clearTimeout(timer);
            $("#timePlace").html("You're Outta Time!!");
            outOfTime();
        } else if (time <= 5) {
            $("#timePlace").css("color", "red");
            $("#timePlace").html(time + " secs remaining");
            time--;
        } else {
            $("#timePlace").html(time + " secs remaining");
            time--;
        }
    }

    // checks to see if choice selected is right
    function checkAnswer() {
        console.log($(this).text());
        if ($(this).text() === answer[count]) {
            showCorrectPage();
        } else {
            console.log("Incorrect!")
            showIncorrectPage();
        }
    }

    // next 5 functions switch views
    // displays the next question
    function displayQuestion() {
        $("#timePlace").css("color", "white");
        time = 30;
        clearInterval(timer);
        clearTimeout();
        timer = setInterval(countdown, 1000);
        $("#timePlace").show();
        $("#timePlace").html(time + " secs remaining");

        $("#answerDiv").hide();
        $("#imageDiv").hide();
        $("#correctDiv").hide();
        $("#incorrectDiv").hide();
        $("#unansweredDiv").hide();

        $("#artistSongDiv").show();
        $("#questionDiv").show();
        $(".choice").show();

        var questionNumber = count + 1;
        $("#artistSongDiv").html(questionNumber + ". " + artistSong[count]);
        $("#questionDiv").html('"' + question[count] + '"');

        $("#choice1Div").html(choiceOne[count]);
        $("#choice2Div").html(choiceTwo[count]);
        $("#choice3Div").html(choiceThree[count]);
        $("#choice4Div").html(choiceFour[count]);

    }

    // shows correct answer view
    function showCorrectPage() {
        $("#answerDiv").show();
        $("#imageDiv").show();
        $("#correctDiv").show();

        $(".choice").hide();
        $("#timePlace").hide();

        $("#imageDiv").html(`<img src="${gifs[count]}" alt=/>`)
        $("#correctDiv").css("color", "green");
        $("#correctDiv").html("You Guessed Correct!!");

        correct++;
        count++;

        if (count <= answer.length - 1) {
            setTimeout(displayQuestion, 3000);
        }
        else {
            setTimeout(gameOver, 3000);
        }
    }

    // shows out of time view
    function outOfTime() {
        $("#answerDiv").show();
        $("#imageDiv").show();
        $("#unansweredDiv").show();

        $(".choice").hide();

        $("#imageDiv").html(`<img src="${gifs[count]}" alt=/>`)
        $("#unansweredDiv").css("color", "yellow");
        $("#unansweredDiv").html("You answered nothing, you loser!");
        $("#answerDiv").html("<u>Correct was Lyric: " + answer[count]+"</u>");

        unanswered++;
        count++;

        if (count <= answer.length - 1) {
            setTimeout(displayQuestion, 3000);
        }
        else {
            setTimeout(gameOver, 3000);
        }
    }

    // shows incorrect view
    function showIncorrectPage() {
        $("#answerDiv").show();
        $("#imageDiv").show();
        $("#incorrectDiv").show();

        $(".choice").hide();
        $("#timePlace").hide();

        $("#imageDiv").html(`<img src="${gifs[count]}" alt=/>`)
        $("#incorrectDiv").css("color", "red");
        $("#incorrectDiv").html("Incorrect Guess!!");
        $("#answerDiv").html("<u>Correct was Lyric: " + answer[count]+"</u>");

        incorrect++;
        count++;
        
        if (count <= answer.length - 1) {
            setTimeout(displayQuestion, 3000);
        }
        else {
            setTimeout(gameOver, 3000);
        }
    }

    // show game over view
    function gameOver() {
        $("#artistSongDiv").hide();
        $(".choice").hide();
        $("#timePlace").hide();
        $("#answerDiv").hide();
        $("#imageDiv").hide();

        $("#incorrectDiv").show();
        $("#correctDiv").show();
        $("#unansweredDiv").show();
        $(".retry").show();

        var results = (correct / answer.length) * 100;
        $("#questionDiv").html("Your score: " + results + "%");
        $("#correctDiv").html("Correct: " + correct);
        $("#incorrectDiv").html("Incorrect: " + incorrect);
        $("#unansweredDiv").html("Unanswered: " + unanswered);
    }

});
