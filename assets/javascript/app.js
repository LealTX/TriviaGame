$(document).ready(function () {
    var count = 0;
    var time = 30;
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

    $(".start").on("click", function () {
        startGame();
    });

    function startGame() {
        $(".start").hide();
        displayQuestion();
    }

    function countdown() {
            if (time == 0) {
                clearTimeout(timer);
                $("#timePlace").html("You're Outta Time!!");
                // doSomething();
            } else {
                $("#timePlace").html(time + " secs remaining");
                time--;
            }
        }

        function displayQuestion() {
            $("#answerDiv").hide();
            $("#imageDiv").hide();

            $("#timePlace").show();
            $("#artistSongDiv").show();
            $("#questionDiv").show();
            $(".choice").show();

            timer = setInterval(countdown, 1000);
            var questionNumber = count + 1;
            $("#artistSongDiv").html(questionNumber + ". " + artistSong[count]);
            $("#questionDiv").html('"' + question[count] + '"');
            $("#choice1Div").html(choiceOne[count]);
            $("#choice2Div").html(choiceTwo[count]);
            $("#choice3Div").html(choiceThree[count]);
            $("#choice4Div").html(choiceFour[count]);
        }

    });
