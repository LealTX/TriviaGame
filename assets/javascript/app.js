$(document).ready(function () {
    var count = 0;
    var time = 10;
    var isSelected = false;
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

    $(".choice").hide();

    $("#choice1Div").on("click", checkAnswer)
    $("#choice2Div").on("click", checkAnswer)
    $("#choice3Div").on("click", checkAnswer)
    $("#choice4Div").on("click", checkAnswer)

    $(".start").on("click", function () {
        startGame();
    })

    $(".retry").on("click", function(){
        location.reload();
    })

    function startGame() {
        $(".start").hide();
        displayQuestion();
    }

    function countdown() {
        if (time == 0) {
            clearTimeout(timer);
            $("#timePlace").html("You're Outta Time!!");
            outOfTime();
        } else {
            $("#timePlace").html(time + " secs remaining");
            time--;
        }
    }

    function checkAnswer() {
        console.log($(this).text());

        if ($(this).text() === answer[count]) {
            showCorrectPage();
        } else {
            console.log("Incorrect!")
            showIncorrectPage();
        }
    }

    function displayQuestion() {
        time = 10;
        clearInterval(timer);
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

    function showCorrectPage() {
        $("#answerDiv").show();
        $("#imageDiv").show();
        $("#correctDiv").show();

        $(".choice").hide();
        $("#timePlace").hide();

        $("#correctDiv").html("You Guessed Correct!!");

        correct++;
        count++;

        if (count <= answer.length - 1) {
            setTimeout(displayQuestion, 3000);
        }
        else {
            gameOver();
        }
    }

    function outOfTime() {
        $("#answerDiv").show();
        $("#imageDiv").show();
        $("#unansweredDiv").show();

        $(".choice").hide();

        $("#unansweredDiv").html("You answered nothing, you loser!");
        $("#answerDiv").html("Correct was Lyric: " + answer[count]);

        unanswered++;
        count++;

        if (count <= answer.length - 1) {
            setTimeout(displayQuestion, 3000);
        }
        else {
            gameOver();
        }
    }

    function showIncorrectPage() {
        $("#answerDiv").show();
        $("#imageDiv").show();
        $("#incorrectDiv").show();

        $(".choice").hide();
        $("#timePlace").hide();

        $("#incorrectDiv").html("Incorrect Guess!!");
        $("#answerDiv").html("Correct was Lyric: " + answer[count]);

        incorrect++;
        count++;

        if (count <= answer.length - 1) {
            setTimeout(displayQuestion, 3000);
        }
        else {
            gameOver();
        }
    }

    function gameOver() {
        $("#artistSongDiv").hide();
        $(".choice").hide();
        $("#timePlace").hide();
        $("#answerDiv").hide();

        $("#incorrectDiv").show();
        $("#correctDiv").show();
        $("#unansweredDiv").show();
        $(".retry").show();

        var results = (correct / answer.length)*100;
        $("#questionDiv").html("Your score: "+results+"%");
        $("#correctDiv").html("Correct: "+correct);
        $("#incorrectDiv").html("Incorrect: "+incorrect);
        $("#unansweredDiv").html("Unanswered: "+unanswered);
    }

});
