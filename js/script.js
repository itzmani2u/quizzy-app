let questions = [
  {
    question: "What is the Color of Apple?",
    options: ["(a) Red", "(b) Blue", "(c) Pink", "(d) Green"],
    answerGiven: undefined,
    answer: 1
  },
  {
    question: "What is the Color of Banana?",
    options: ["(a) Red", "(b) Yellow", "(c) Pink", "(d) Green"],
    answerGiven: undefined,
    answer: 2
  },
  {
    question: "What is the Color of Orange?",
    options: ["(a) Red", "(b) Blue", "(c) Pink", "(d) Orange"],
    answerGiven: undefined,
    answer: 4
  }
];

var answers = [];

if (questions.length) {
  div = "";
  questions.forEach((item, index) => {
    div +=
      '<div class="card card' +
      index +
      ' mt-3 mb-3">' +
      '    <div class="card-body pb-0">' +
      '      <h5 class="card-title">' +
      (index + 1) +
      ") " +
      item.question +
      "</h5>" +
      "    </div>" +
      '    <div class="pl-3 pb-3 list-group list-group-flush">' +
      "      " +
      renderOptions(item.options, index) +
      "    </div>" +
      "  </div>";
  });
  document.getElementById("questions").innerHTML = div;
}

function renderOptions(options, idx) {
  var list = "";
  options.forEach((option, index) => {
    list +=
      '<div class="form-check"><input type="radio" class="form-check-input" id="answerOption' +
      idx +
      index +
      '" data-question-no="' +
      idx +
      '" name="options' +
      idx +
      '" onchange="handleChange(event)" value="' +
      (index + 1) +
      '"><label class="form-check-label" for="answerOption' +
      idx +
      index +
      '" >' +
      option +
      "</label></div>";
  });
  return list;
}

function handleChange(event) {
  var questionNo = event.currentTarget.dataset.questionNo;
  var answer = parseInt(event.currentTarget.value);
  questions[questionNo].answerGiven = answer;
}

function evaluateQuiz(event) {
  debugger;
  event.preventDefault();
  document.getElementById("score-box").style.display = "block";
  var totalQuestions = questions.length;
  var scoreCount = 0;
  questions.forEach((qAnswer, index) => {
    var currentCard = "card" + index;
    var element, nameSuccess, nameDanger, arr;
    element = document.getElementsByClassName(currentCard);
    nameSuccess = "border-success";
    nameDanger = "border-danger";
    arr = element[0].className.split(" ");
    if (qAnswer.answer === qAnswer.answerGiven) {
      scoreCount++;
      if (arr.indexOf(name) == -1) {
        element[0].className += " " + nameSuccess;
      }
    } else {
      if (arr.indexOf(name) == -1) {
        element[0].className += " " + nameDanger;
      }
    }
  });
  var scorePercentage = scoreCount / totalQuestions * 100;
  document.getElementById("correctAswers").innerHTML = scoreCount;
  document.getElementById("totalQuestions").innerHTML = totalQuestions;
  document.getElementById("finalScore").innerHTML = scorePercentage.toFixed(2);
  if (scorePercentage > 50) {
    document.getElementById("score-box").className += " " + "bg-success";
  } else document.getElementById("score-box").className += " " + "bg-danger";
}
