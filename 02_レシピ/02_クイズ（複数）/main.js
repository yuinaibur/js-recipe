const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuizButton = document.getElementById("next-quiz")

let quizNumber = 0

const quizzes = [
  {
    text:
      "アルティメットクイズ第1問！公式ルールのアルティメットは何人制の競技でしょう？",
    choices: [
      {
        text: "5人制",
        isCorrect: false,
        feedback: "不正解…でも、5人制の大会もあるよ！",
      },
      {
        text: "7人制",
        isCorrect: true,
        feedback: "正解！",
      },
      {
        text: "9人制",
        isCorrect: false,
        feedback: "不正解…",
      },
    ],
  },

  {
    text:
      "アルティメットクイズ第2問！次のうち、アルティメットのポジション名としてふさわしくないものはどれでしょう？",
    choices: [
      {
        text: "ハンドラー",
        isCorrect: false,
        feedback:
          "不正解！ハンドラーは、ディスクのパスの職人で、シュートもするよ！",
      },
      {
        text: "ディープ",
        isCorrect: false,
        feedback:
          "不正解！ディープは、走って跳んで、華麗にディスクをキャッチする人だよ！",
      },
      {
        text: "シューター",
        isCorrect: true,
        feedback:
          "正解！シューターというポジションはアルティメットにはないよ！",
      },
    ],
  },

  {
    text:
      "アルティメットクイズ第3問！アルティメットでは、ディスクを持っている間、何歩歩くことができるでしょう？",
    choices: [
      {
        text: "0歩",
        isCorrect: true,
        feedback: "正解！ディスクを持ったら歩けないよ！",
      },
      {
        text: "3歩",
        isCorrect: false,
        feedback: "不正解…",
      },
      {
        text: "5歩",
        isCorrect: false,
        feedback: "不正解…歩きすぎだよ！笑",
      },
    ],
  },
]

const reloadQuiz = function(quizNumber) {
  const quiz = quizzes[quizNumber]

  quizText.textContent = quiz.text

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text

  feedback.textContent = ""

  nextQuizButton.classList.add("hidden")
}

const choose = function(choiceNumber) {
  const choice = quizzes[quizNumber].choices[choiceNumber]
  feedback.textContent = choice.feedback

  if (choice.isCorrect) {
    if (quizNumber < quizzes.length - 1) {
      nextQuizButton.classList.remove("hidden")
    }
  }
}

choice1.onclick = function() {
  choose(0)
}

choice2.onclick = function() {
  choose(1)
}

choice3.onclick = function() {
  choose(2)
}

nextQuizButton.onclick = function() {
  quizNumber += 1
  reloadQuiz(quizNumber)
}

reloadQuiz(0)
