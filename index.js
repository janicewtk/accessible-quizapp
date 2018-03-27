'use strict';

const STORE = [
  {
  text: `1. The intentional use of harmful behavior so that one can achieve some other goal is called`,
  ans1: `A. Instrumental Aggression`,
  ans2: `B. Passive Aggression`,
  ans3: `C. Active Aggression`,
  ans4: `D. Hostile Aggression`},
  {
  text: `2. Which of the following is NOT a common strategic to reduce cognitive dissonance`,
  ans1: `A. Change the behavior or the cognition`,
  ans2: `B. Seek for information that conflicts with existing beliefs`,
  ans3: `C. Justifying the behavior or the cognition by changing the conflicting cognition`,
  ans4: `D. Justifying the behavior or the behavior by adding new cognitions`},
  {
  text: `3. What is the phenomenon in which individuals are less likely to offer help to a victim when other people are present?`,
  ans1: `A. Group Polarization`,
  ans2: `B. Deindividuation`,
  ans3: `C. Bystander Effect`,
  ans4: `D. Social Loafing`},
  {
  text: `4. Example: Andy called in and requested a day off at work this morning. You think that he did that because he is a lazy and irresponsible person. What concept is this example best illustrating?`,
  ans1: `A. Self-Serving Bias`,
  ans2: `B. Ultimate attribution error`,
  ans3: `C. Situational Attribution`,
  ans4: `D. Dispositional Attribution`},
  {
  text: `5. The tendency to favor one’s own group is called`,
  ans1: `A. Norm`,
  ans2: `B. Ingroup Bias`,
  ans3: `C. Groupthink`,
  ans4: `D. Out-group Homogeneity`},
  {
  text: `6. Which of the followings is NOT a factor that contributes to social loafing?`,
  ans1: `A. Increase in group size`,
  ans2: `B. Low level of motivation`,
  ans3: `C. “Sucker” effect`,
  ans4: `D. Justification of one’s effort`},
  {
  text: `7. The tendency to think that more people notice something about you than they do is called`,
  ans1: `A. Halo Effect`,
  ans2: `B. Spotlight Effect`,
  ans3: `C. Self-verification`,
  ans4: `D. Self-evaluation`},
  {
  text: `8. [ Julie: Can I stay out until 2am? "
	Julie’s Mom: No!
	Julie: How about 11pm?
	Julie’s Mom: Alright.] 
	The above is an example of`,
  ans1: `A. Door-in-the-Face Phenomenon`,
  ans2: `B. Foot-in-the-Door Phenomenon`,
  ans3: `C. Central Route Persuasion`,
  ans4: `D. Peripheral Route Persuasion`},
  {
  text: `9. What is adjusting one’s behavior to thinking to coincide with a group standard?`,
  ans1: `A. Obedience`,
  ans2: `B. Conformity`,
  ans3: `C. Discrimination`,
  ans4: `D. Compliance`},
  {
  text: `10. People tend to overestimate the number of words that began with the letter “K” and underestimated the number of words that had “K” as the third letter is an example of`,
  ans1: `A. Representative Heuristic`,
  ans2: `B. Base Rate Information`,
  ans3: `C. Counterfactual Thinking`,
  ans4: `D. Availability Heuristic`}
];

const CORRECTANSWER = [
  `A. Instrumental Aggression`,
  `B. Seek for information that conflicts with existing beliefs`,
  `C. Bystander Effect`,
  `D. Dispositional Attribution`,
  `B. Ingroup Bias`,    
  `D. Justification of one’s effort`,
  `B. Spotlight Effect`,
  `A. Door-in-the-Face Phenomenon`, 
  `B. Conformity`,
  `D. Availability Heuristic`
  ];
  
const correctFeedbacks = new Array("https://media3.giphy.com/media/l0MYy7QpDDVGVfAAw/200.webp#6-grid1", "https://media2.giphy.com/media/l2YWykMPCmCb9lLWM/200.webp#9-grid1", "https://media1.giphy.com/media/3oGRFp0AqM0BY4axjO/200.webp#15-grid1");

 const incorrectFeedbacks = new Array("https://media2.giphy.com/media/l4pLY0zySvluEvr0c/200.webp#22-grid1", "https://media0.giphy.com/media/3oKIP8quIMUnLdfTAQ/200.webp#28-grid1", "https://media3.giphy.com/media/3o6ZtkhSlz6UQIDC5G/200.webp#37-grid1");
  
var questionNum = 0;
var currentScore = 0;

function clearStartPage () {
  $('.js-quiz-start-content').on('click', `.js-quiz-start-button`, event => {
    $('.js-quiz-start-content').remove();
    console.log('`Clear Start Page` ran');
    renderQuizQuestion ();
    console.log('`Render Quiz Question` ran');
  });
}

function renderQuizQuestion () {
  var i = questionNum;
  var currentQuizScore = currentScore;
  if (i < STORE.length){
    $('.js-quiz-content').append(
    `<form id="quizForm">
      <fieldset>
        <legend>Quiz Question:</legend>
        <span class="quiz-question-text js-quiz-question-text">${STORE[i].text}</span></br>
        <label>
        <input type="radio" id="mc1" name="answer" value="${STORE[i].ans1}" required> ${STORE[i].ans1}</input>
        </label></br>
        <label>
        <input type="radio" id="mc2" name="answer" value="${STORE[i].ans2}" required >  ${STORE[i].ans2}</input>
        </label></br>
        <label>
        <input type="radio" id="mc3" name="answer" value="${STORE[i].ans3}" required > ${STORE[i].ans3}</input>
        </label></br>
        <label>
        <input type="radio" id="mc4" name="answer" value="${STORE[i].ans4}" required > ${STORE[i].ans4}</input>
        </label></br>
        <button id="submit" class="submit">Submit</button>
        </fieldset>
      </form>`
      )
  } else {
    generateFinalResult();
  } 
 }                          

function renderFeedback () {
  $('.js-quiz-content').on('click', `.submit`, event => {
  var i = questionNum;
  var currentQuizScore = currentScore;
  const selectedAnswer = document.querySelector("input:checked");
  console.log(selectedAnswer.value);
  console.log(CORRECTANSWER[i]);
  if (CORRECTANSWER[i] === selectedAnswer.value) {
    console.log(`Correct answer!`);
    $('.js-quiz-content').empty();
    $('.js-quiz-progress').empty();
    $('.js-quiz-feedback').append(
    `<div class="clearfix feedback col-12">
      <p>You got it RIGHT!</p></br>
      <div class="gif"><img src="https://media3.giphy.com/media/l0MYy7QpDDVGVfAAw/200.webp#6-grid1" id="picture"></div></br>
      <p></p>
      <form>
        <button id="next-button" class="next-button">Next</button>
      </form>
    </div>`
      );
      chooseCorrectFeedbackGif();
      var currentQuizScore = currentScore +=1;
    } else { 
    console.log(`Wrong answer!`);
    $('.js-quiz-content').empty();
    $('.js-quiz-progress').empty();
    $('.js-quiz-feedback').append(
      `<div class="feedback clearfix col-12">
        <p>You got it WRONG!</p><br>
          <div class="gif"><img src="https://media2.giphy.com/media/l4pLY0zySvluEvr0c/200.webp#22-grid1" id="picture"></div><br>
          <p>The correct answer is "${CORRECTANSWER[i]}".</p>
          <form>
            <button id="next-button" class="next-button">Next</button>
          </form>
        </div>`
      );
      chooseIncorrectFeedbackGif();
  }
  });
}

function chooseCorrectFeedbackGif() {
  const randomNum = Math.floor(Math.random() * correctFeedbacks.length);
  document.getElementById("picture").src = correctFeedbacks[randomNum];
}
  
function chooseIncorrectFeedbackGif() {
  const randomNum = Math.floor(Math.random() * incorrectFeedbacks.length);
  document.getElementById("picture").src = incorrectFeedbacks[randomNum];
}

function renderNextQuestion () {
  $('.js-quiz-feedback').on('click', `.next-button`, event => {
    console.log(`next is clicked.`);
    $('.js-quiz-feedback').empty();
    var i = questionNum ++;
    updateQuestionInfo ();
    renderQuizQuestion ();
    console.log(questionNum);
    console.log(`Next question is rendered.`);
  });
}

function updateQuestionInfo () {
  var currentQuizScore = currentScore;
  $('.js-quiz-progress').append(
 `<span class="current-question-number"> Completed Question: ${questionNum}/10 </span>
  <span class="current-score"> Current Score: ${currentQuizScore}/10 </span>`);
  console.log(`Question Info is updated.`);
}

function generateFinalResult () {
  var currentQuizScore = currentScore;
  $('.js-quiz-progress').empty();
  if (currentQuizScore < 4) {
    $('.js-quiz-content').append(
      `<p>Final Score: ${currentQuizScore}/10</p>
      <p> You have finished the Quiz.</br> You can do better than this:(</p>
      <form>
      <button id="restart-button" class="restart-button">Restart</button>
      </form>`
    );
  } else if (currentQuizScore < 7) { 
     $('.js-quiz-content').append(
    `<p>Final Score: ${currentQuizScore}/10</p>
    <p>Congratulations! You have finished the Quiz.</br> You did okay. Try harder next time.</p><form>
    <form>
    <button id="restart-button" class="restart-button">Restart</button>
    </form>`
    );
  } else {
     $('.js-quiz-content').append(
    `<p>Final Score: ${currentQuizScore}/10</p>
    <p>Congratulations! You have finished the Quiz.</br> Good job!</p>
      <form>
      <button id="restart-button" class="restart-button">Restart</button>
      </form>`
      );
  }
console.log(`Final result is generated.`);
}

function restartQuiz () {
  $('.js-quiz-content').on('click', `.restart-button`, event => {
  location.reload();
  console.log(`Quiz is restarted.`)
  });
}

function handleQuiz(){
  clearStartPage ();
  renderFeedback ();
  renderNextQuestion ();
  restartQuiz ();
}

$(handleQuiz);
