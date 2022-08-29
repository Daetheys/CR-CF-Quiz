import {exampleDataset} from './dataset_example.js'
import {dataset} from './dataset.js'
$(document).ready(main);

//global parameters 
const timeBetweenQuestions = 0;

// global variables
let currentQuestionIndex = 0;
let currentInstructionIndex = 0;
let continueClickable = true;
let debug = 1;
let savedState = 0;

function main  ()  {
    init();
}

const saveState = () => {
    localStorage['savedState'] = 1
    localStorage['currentQuestionIndex'] = currentQuestionIndex
    localStorage['currentInstructionIndex'] = currentInstructionIndex
}

const loadState = () => {
    if (!localStorage['savedState'])
        return

    localStorage['savedState'] = 1;
    currentQuestionIndex = parseInt(localStorage['currentQuestionIndex']);
    currentInstructionIndex =  parseInt(localStorage['currentInstructionIndex'])
}

// Shortcut for removing duplicates from arrays
const uniq = (a) => {
    return Array.from(new Set(a));
}

// Accepts a parent id to remove all children
const removeAllChildren = (parent) => {
    let node = document.getElementById(parent)
    node.innerHTML = ``
}

// Initialization functions go here
const init = async () => {
    if (!debug)
        loadState()

    toggleDilemma()
    toggleProgressBar()

    cr_ContinueButton()
    
    // debugger;
    if (currentInstructionIndex < dataset.instructions.length)
        loadInstructions(dataset.instructions[currentInstructionIndex], true);

    //if (currentInstructionIndex == dataset.instructions.length) {
    //    //debugger;
    //    toggleDilemma()
    //    toggleProgressBar()
    //    ad_QuestionIteration()
    //    loadQuestion(dataset.questions[0], true)
    //// }
}

const toggleProgressBar = () => {
    let v = document.getElementById("progress").style.display == "none";
    document.getElementById("progress").style.display = v ?  'block' : 'none'
}

const toggleDilemma = () => {
    let v = document.getElementById("quiz-dilemma-container").style.display == "none";
    document.getElementById("quiz-dilemma-container").style.display = v ?  'block' : 'none'
}



// Loads a multiple choice quiz question
const loadQuestion = async (question, init) => {
    saveState()
    ShowHideContinueButton(dataset.questions[currentQuestionIndex])
    updateProgessBarStatus()
    cr_QuizQuestionText(question.text)
    cr_QuizQuestionTitle(question.title)
    cr_QuizQuestionDilemma(question.dilemma)
    if (question.type == `multiple` || question.type == `single`) {
        loadMultipleChoiceQuestion(question)
        loadPreviousEnteredChoice(question.entered)
    } else if (question.type == `short` || question.type == `long`) {
        loadTextFormQuestion()
        loadPreviousEnteredText(question.entered)
    }
    // Skips loading animation on initialization
    if (!init) {
        await MoveQuestionContainerMiddle()
    }
}

// Loads a multiple choice quiz question
const loadInstructions= async (inst, init) => {
    //debugger;
    saveState()
    ShowHideContinueButton(dataset.instructions[currentInstructionIndex])
    let asHTML = true;
    cr_QuizQuestionText(inst.text,  asHTML)
    cr_QuizQuestionTitle(inst.title)

    // Skips loading animation on initialization
    if (!init) {
        await MoveQuestionContainerMiddle()
    }
}



// Creates elements for multiple choice questions (checkboxes & radios)
const loadMultipleChoiceQuestion = (question) => {
    // Generating answer elements
    let quizAnswersUL = document.getElementById(`quiz-answer-list`)
    // questionHTML.id
    for (let i = 0; i < question.answers.length; i++) {
        let quizQuestionDIV = document.createElement(`div`)
        quizQuestionDIV.className = `quiz-answer-text-container-single unselected-answer`
        // Assigns ID as ASCII values (A = 65, B = 66, etc.)
        quizQuestionDIV.id = (i).toString()
        ad_QuizSelectAnswer(quizQuestionDIV)
        // Generate elements
        let quizQuestionPress = document.createElement(`li`)
        let quizQuestionNumerator = document.createElement(`li`)
        let quizQuestionText = document.createElement(`li`)
        // Adding elements to quiz answers
        ed_QuizQuestionElements(question.type, quizQuestionPress, quizQuestionNumerator, quizQuestionDIV, quizQuestionText, (i+1).toString())
        // Convert ASCII code to text for multiple choice selection
        quizQuestionNumerator.innerText = (i + 1).toString();
        quizQuestionText.innerText = question.answers[i]
        // Psuedoparent append
        quizQuestionDIV.append(quizQuestionPress, quizQuestionNumerator, quizQuestionText)
        // Main parent append
        quizAnswersUL.appendChild(quizQuestionDIV)
    }
}

const loadTextFormQuestion = () => {
    // Generating answer elements
    let quizAnswersUL = document.getElementById(`quiz-answer-list`)
    let questionTextarea = document.createElement(`div`);
    questionTextarea.contentEditable = true
    questionTextarea.className = `form-control question-text-form answer-typed-input-form`;
    questionTextarea.setAttribute(`id`, `questionTextarea`);
    questionTextarea.setAttribute(`data-text`, `Enter answer here...`)
    questionTextarea.setAttribute(`onkeydown`, `SaveWrittenAnswers()`)
    questionTextarea.innerHTML = ``
    quizAnswersUL.append(questionTextarea)
}

// Saves short and long form objects to local object
const SaveWrittenAnswers = () => {
    dataset.questions[currentQuestionIndex].entered[0] = document.getElementById(`questionTextarea`).innerHTML
}


// Assigns answered question attributes to elements that have been entered by user previously
const loadPreviousEnteredChoice = (entered) => {
    for (let i = 0; i < entered.length; i++) {
        selectAnswer(entered[i], true)
    }
}

// re-assigns text to short/long form questions
const loadPreviousEnteredText = () => {
    let entered = dataset.questions[currentQuestionIndex].entered
    if (entered.length > 0) {
        let answer = document.getElementById(`questionTextarea`)
        answer.innerHTML = entered[0]
    }
}

// Moves question off screen in a given direction
const MoveQuestionContainer = (first = `up`, second = `down`) => {
    return new Promise((resolve, reject) => {
        // Assigning correct class
        first = `move-container-` + first
        second = `move-container-` + second
        let parent = document.getElementById(`quiz-question-container`);
        parent.classList.add(first, `fadeout`, `fast-transition`);
        setTimeout(() => {
            parent.classList.remove(first, `fast-transition`)
            parent.classList.add(`no-transition`, second)
            resolve()
        }, 200)
    })

}

// Re-centers question on page
const MoveQuestionContainerMiddle = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parent = document.getElementById(`quiz-question-container`);
            parent.classList.remove(`no-transition`, `fadeout`);
            parent.classList.add(`fast-transition`, `fadein`)
            parent.style.top = `0`
            parent.classList.remove(`move-container-down`, `move-container-up`)
            setTimeout(() => {
                parent.classList.remove(`fadein`)
                resolve()
            }, 200)
        }, 50)
    })
}

// Adds class names to quiz question based on which type of which it is
const ed_QuizQuestionElements = (type, press, numerator, container, text, n) => {
    // Append classes for different types of questions
    if (type == `single`) {
        // Radio button classes
        // press.className = `press-key-label press-label-radio answer-key-numerator unselected-answer-button`
        numerator.className = `answer-key-numerator numerator-radio unselected-answer-button`
        container.classList.add(`question-type-single`)
    } else if (type == `multiple`) {
        // Checkbox classes
        // press.className = `press-key-label press-label-checkbox answer-key-numerator unselected-answer-button`
        numerator.className = `answer-key-numerator numerator-checkbox unselected-answer-button`
        container.classList.add(`question-type-multiple`)
    }
    text.className = `quiz-answer-text-item`
    // press.innerText = `Press ` + n
}

// Assigns the question's text 
const cr_QuizQuestionText = (question, asHTML=false) => {
    // Generating question text
    let quizQuestionTextDIV = document.getElementById(`quiz-question-text-container`)
    let quizQuestionTextSPAN = document.createElement(`span`)
    quizQuestionTextSPAN.className = `quiz-question-text-item`
    let text = question;
    if (!asHTML) {
        text = '<b>Story</b> <br>' + question;
    }
    // if (asHTML) {
    quizQuestionTextSPAN.innerHTML= text;
    // } else {
        // quizQuestionTextSPAN.innerText = '<b>question
    // }
    quizQuestionTextDIV.appendChild(quizQuestionTextSPAN)
}

// Assigns the question's text 
const cr_QuizQuestionTitle = (title) => {
    // Generating question text
    let quizQuestionTitle = document.getElementById(`quiz-question-title`)
    // let quizQuestionTextSPAN = document.createElement(`span`)
    quizQuestionTitle.innerText = title
}

// Assigns the question's text 
const cr_QuizQuestionDilemma = (question) => {
    // Generating question text
    let quizQuestionDilemma = document.getElementById(`quiz-question-dilemma`)
    // let quizQuestionTextSPAN = document.createElement(`span`)
    quizQuestionDilemma.innerHTML = '<b>Question</b><br>' +  question;
}



// Creates continue button
const cr_ContinueButton = () => {
    let continueDIV = document.createElement(`div`)
    let continueBUTTON = document.createElement(`button`)
    let continueSPAN = document.createElement(`span`)
    continueDIV.id = `quiz-continue-button-container`
    continueDIV.className = `quiz-continue-button-container`
    continueBUTTON.className = `quiz-continue-button`
    continueSPAN.className = `quiz-continue-text`
    continueSPAN.id = `quiz-continue-text`
    continueBUTTON.innerHTML = `OK`
    // Moves to next question on click
    continueBUTTON.onclick = async function() {
        if (!continueClickable)
            return;

        continueClickable = false;
        let startQuestions = await loadNewInstruction(`next-question-load`);
        //debugger;
        if (startQuestions) {    
            loadNewQuestion(`next-question-load`)
        }
        
        setTimeout(() => {continueClickable = true}, timeBetweenQuestions);
    }

    continueSPAN.innerHTML = `press ENTER`
    continueDIV.append(continueBUTTON, continueSPAN)
    let parent = document.getElementById('quiz-main-page');//`quiz-question-container`)
    parent.append(continueDIV)
    // Discerns whether or not to show continue button, based on whether or not an answer has been input/selected
    ShowHideContinueButton(dataset.questions[currentQuestionIndex])
}

// Only shows a continue button if a question is selected
const ShowHideContinueButton = (question) => {
    if (question.type == 'short' || question.type == `long`) {
        document.getElementById(`quiz-continue-button-container`).style.display = `initial`
        document.getElementById(`quiz-continue-text`).style.display = `none`
    } else {
        let show = document.getElementById(`quiz-answer-list`).children
        let buttonContainer = document.getElementById(`quiz-continue-button-container`)
        document.getElementById(`quiz-continue-text`).style.display = `initial`
        // Checks if an answer has been selected. If so, shows continue button
        for (let i = 0; i < show.length; i++) {
            if (show[i].classList.contains(`selected-answer`)) {
                buttonContainer.style.display = `initial`
                return
            }
        }
        // If no answer is selected, don't display button
        buttonContainer.style.display = `none`
    }
}

// Function to load next question & possible answers in object
const loadNewQuestion = async (adjustment) => {
    if (currentQuestionIndex === 0) {
        toggleProgressBar();
        toggleDilemma();
    }
    // Saves written answers before moving on to next question
    let type = dataset.questions[currentQuestionIndex].type
    if (type == 'long' || type == 'short') {
        SaveWrittenAnswers()
    }
    // Removes previous question & answers
    if (canLoadNewQuestion(adjustment)) {
        await QuestionContainerLoad(adjustment)
        removeAllChildren(`quiz-answer-list`)
        removeAllChildren(`quiz-question-text-container`)
        //
        // Displays previous questions. Does nothing if no questions to load.
        if (adjustment == `previous-question-load`) {
            loadQuestion(dataset.questions[currentQuestionIndex])
            // Displays next question. Does nothing if no questions to load.
        } else if (adjustment == `next-question-load` && currentQuestionIndex <= dataset.questions.length) {
            loadQuestion(dataset.questions[currentQuestionIndex])
        }
    }
}

// Function to load next question & possible answers in object
const loadNewInstruction = async (adjustment) => {
    // Saves written answers before moving on to next question
    // Displays previous questions. Does nothing if no questions to load.
    let proceed = canLoadNewInstruction(adjustment);
    console.log(proceed);
    if (proceed) {
        removeAllChildren(`quiz-answer-list`)
        removeAllChildren(`quiz-question-text-container`)
        if (adjustment == `previous-question-load`) {
            loadInstructions(dataset.instructions[currentInstructionIndex], false)
            // Displays next question. Does nothing if no questions to load.
        } else if (adjustment == `next-question-load` && currentInstructionIndex <= dataset.instructions.length) {
            loadInstructions(dataset.instructions[currentInstructionIndex], false)
        }
    }
    return !proceed
}



// Checks if we have reached the first or last question
const canLoadNewQuestion = (adjustment) => {
    // In/de-crement based on if user is loading next or previous question
    if (adjustment == `next-question-load`) {
        currentQuestionIndex++
    } else {
        currentQuestionIndex--
    }
    // Fail safe if we have reached last quesiton
    if (currentQuestionIndex > dataset.questions.length - 1) {
        currentQuestionIndex--
        return false
        // Fail safe if trying to move before first question
    } else if (currentQuestionIndex < 0) {
        currentQuestionIndex++
        return false
    }
    return true

}

// Checks if we have reached the first or last instruction
const canLoadNewInstruction = (adjustment) => {
    // In/de-crement based on if user is loading next or previous question
    if (adjustment == `next-question-load`) {
        currentInstructionIndex++
    } else {
        currentInstructionIndex--
    }
    // Fail safe if we have reached last quesiton
    if (currentInstructionIndex > dataset.instructions.length - 1) {
        currentInstructionIndex++
        return false
        // Fail safe if trying to move before first question
    } else if (currentInstructionIndex < 0) {
        currentInstructionIndex++
        return false
    }
    return true

}

// Discerns which direction the question will fly on/off the page
const QuestionContainerLoad = (adjustment) => {
    return new Promise(async (resolve, reject) => {
        if (adjustment == 'next-question-load') {
            // Moves container up off the screen
            await MoveQuestionContainer(`up`, `down`)
        } else {
            // Moves container down off the screen
            await MoveQuestionContainer(`down`, `up`)
        }
        resolve()
    })
}

// Highlights and unhighlights given answers when a keytap is pressed 
// key indicates the id of the given answer, invoking previous will prevent the function from editing the local answered questions object
const selectAnswer = (key, previous) => {
    let answer = document.getElementById(key)
    console.log(answer);
    if (answer) {
        // If only one answer can be given, unselect all answers before reselecting new answer
        if (answer.classList.contains(`question-type-single`)) {
            unselectAllAnswers(document.getElementById('quiz-answer-list'))
        }
        // If answer is not yet selected, select it
        if (answer.classList.contains(`unselected-answer`)) {
            answer.classList.add(`selected-answer`)
            answer.classList.remove(`unselected-answer`)
            indicateSelectedAnswer(answer)
            if (!previous) {
                storeAnswers(true, key)
            }
            // If answer is already selected, unselect it
        } else if (answer.classList.contains(`selected-answer`)) {
            answer.classList.add(`unselected-answer`)
            answer.classList.remove(`selected-answer`)
            // Unhighlight selected answer buttons
            unselectAnswerButton(answer.children)
            if (!previous) {
                storeAnswers(false, key)
            }
        }
    }
    // Triggers a check to see if we should display continue button
    ShowHideContinueButton(dataset.questions[currentQuestionIndex])
}

// Indicate previous is true in order to skip storing answers in the local object
const storeAnswers = (add, key) => {
    // For adding user's answers to the local object
    if (add) {
        if (dataset.questions[currentQuestionIndex].type == `single`) {
            dataset.questions[currentQuestionIndex].entered.length = 0
        }
        dataset.questions[currentQuestionIndex].entered.push(key)
        // For removing user's answers from the local object
    } else {
        dataset.questions[currentQuestionIndex].entered = dataset.questions[currentQuestionIndex].entered.filter(item => item !== key)
    }
    // Ensures there are no duplicate answers in array
    dataset.questions[currentQuestionIndex].entered = uniq(dataset.questions[currentQuestionIndex].entered)
}

// Changes answer button appearance to show as selected
const indicateSelectedAnswer = (answer) => {
    let button = answer.querySelectorAll('.answer-key-numerator')
    for (let i = 0; i < button.length; i++) {
        button[i].classList.add(`selected-answer-button`)
        button[i].classList.remove(`unselected-answer-button`)
    }
}

// Unselects all answers in a question
const unselectAllAnswers = (answerList) => {
    for (let i = 0; i < answerList.childElementCount; i++) {
        let child = answerList.children[i]
        if (child.classList.contains(`selected-answer`)) {
            child.classList.add(`unselected-answer`)
            child.classList.remove(`selected-answer`)
        }
        // re/un-assigns children attribute elements, such as button coloring classes
        unselectAnswerButton(child.children)
    }
}

// Unselects individual quiz answer buttons (e.g. Press A)
const unselectAnswerButton = (child) => {
    for (let j = 0; j < child.length; j++) {
        let childButton = child[j]
        if (childButton && childButton.classList.contains(`selected-answer-button`)) {
            childButton.classList.add(`unselected-answer-button`)
            childButton.classList.remove(`selected-answer-button`)
        }
    }
}

// Change progress bar styling as quiz is completed
const updateProgessBarStatus = () => {
    // Assigning attributes
    let progress = document.getElementById('quiz-progress-bar')
    let text = document.getElementById('progress-bar-text')
    // Value of progress is set in terms of 0 to 100
    let value = Math.floor((calculateQuizProgress(dataset.questions) / dataset.questions.length) * 100)
    // Changing width and aria value 
    progress.setAttribute('aria-valuenow', value)
    progress.style.width = value + `%`
    // Updates progress bar text
    text.innerText = value + '% complete (item ' + (calculateQuizProgress(dataset.questions)+1) + ')'
}

// Finds quiz progress by comparing num of questions answers to total number of questions
const calculateQuizProgress = (questions) => {
    let answers = 0
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].entered.length > 0) {
            answers++
        }
    }
    return answers
}

// Assigns function to change answer attributes with given id
const ad_QuizSelectAnswer = (answer) => {
    answer.onclick = () => {
        selectAnswer(answer.id)
    }
}

// Adds iteration capabilities to previous & next buttons 
const ad_QuestionIteration = () => {
//    let prev = document.getElementById(`previous-question-load`)
//    let next = document.getElementById(`next-question-load`)
//    prev.onclick = () => {
//        loadNewQuestion(prev.id)
//    }
//    next.onclick = () => {
//        loadNewQuestion(next.id)
//    }
}

// Listener for key presses for quiz interaction.
document.onkeydown = function(evt) {
    evt = evt || window.event;
    console.log(evt.keyCode)
    let keyCode = evt.keyCode;
    let selected = document.getElementsByClassName('selected-answer-button').length > 0;
    // Registers key selectors for A to J on multiple choice questions.
    if ((keyCode >= 48 && keyCode <= 57)) {
        selectAnswer(keyCode.toString() - 49)
    }
    // if (evt.keyCode == 38) {
        // loadNewQuestion('previous-question-load')
    // }
    // Moves to next question  using enter key for open ended questions
    let type = dataset.questions[currentQuestionIndex].type
    if (((type == `single` || type == `multiple`) && keyCode == 13 && selected) ) {
        // loadNewQuestion('next-question-load')
        $('.quiz-continue-button')[0].click()
    }
};
