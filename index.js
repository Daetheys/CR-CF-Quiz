import { exampleDataset } from './dataset_example.js'
import { dataset } from './dataset.js'
$(document).ready(main);

/* ------------------------------------------------------------------------------------------ */
/* Main
/* ------------------------------------------------------------------------------------------ */
//global parameters 
const timeBetweenQuestions = 0;

// global variables
let currentQuestionIndex = 0;
let currentInstructionIndex = 0;
let continueClickable = true;
let debug = 1;
let savedState = 0;

function main() {
    init();
}

// Initialization functions go here
const init = async () => {
    if (!debug)
        loadState()
    toggleProgressBar()
    cr_ContinueButton()

    // debugger;
    if (currentInstructionIndex < dataset.instructions.length)
        loadInstructions(dataset.instructions[currentInstructionIndex], true);
}

/*----------------------------------------------------------------------------------------------- */
/* Save data
/*----------------------------------------------------------------------------------------------- */
// Save
const saveWrittenAnswers = () => {
    dataset.questions[currentQuestionIndex].entered[0] = document.getElementById(`questionTextarea`).innerHTML
}

const saveAnswer = (txt, question) => {
    // question.entered = question.entered.join(",")
    question.entered.push(txt)
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



/* ------------------------------------------------------------------------------------------ */
/* State Management
/* ------------------------------------------------------------------------------------------ */
const saveState = () => {
    localStorage['savedState'] = 1
    localStorage['currentQuestionIndex'] = currentQuestionIndex
    localStorage['currentInstructionIndex'] = currentInstructionIndex
    localStorage['answers'] = JSON.stringify(dataset.questions); 
}

const loadState = () => {
    if (!localStorage['savedState'])
        return

    localStorage['savedState'] = 1;
    currentQuestionIndex = parseInt(localStorage['currentQuestionIndex']);
    if (localStorage['answers'] != undefined && localStorage['answers'].length > 0)
        dataset.questions = JSON.parse(localStorage['answers']);
    // currentInstructionIndex = parseInt(localStorage['currentInstructionIndex'])
}

/*----------------------------------------------------------------------------------------------- */
/* Instruction management
/*----------------------------------------------------------------------------------------------- */
// Loads a multiple choice quiz question
const loadInstructions = async (inst, init) => {
    //debugger;
    saveState()
    appendTitle(inst.title)
    let asHTML = true;
    appendInfo('', inst.text[0], [], asHTML)
    appendInfo('', inst.text[1], [currentQuestionIndex,], asHTML)

    
    // appendScenario(`You've completed ${currentQuestionIndex} items so far.`, asHTML)
    showHideContinueButton(dataset.instructions[currentInstructionIndex])

    // Skips loading animation on initialization
    await moveQuestionContainerMiddle()
}

// Function to load next question & possible answers in object
const loadNewInstruction = async (adjustment) => {
    // Saves written answers before moving on to next question
    // Displays previous questions. Does nothing if no questions to load.
    let proceed = canLoadNewInstruction(adjustment);
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

/*----------------------------------------------------------------------------------------------- */
/* Question management
/*----------------------------------------------------------------------------------------------- */

// Appends the scenario
const appendInfo = (title, text, variables, asHTML = false) => {
    // Generating question text
    let quizQuestionTextDIV = document.createElement('div')
    quizQuestionTextDIV.className = 'quiz-question-text-container quiz-question-info-container green'
    let quizQuestionTextSPAN = document.createElement(`span`)
    quizQuestionTextSPAN.className = `quiz-question-text-item`

    let i = 1;
    if (variables.length > 0) {
        variables.forEach(element => {
            text = text.replace('<variable' + i + '>', '<b>' + element + '</b>')
            i++

        });
    }

    if (!asHTML) {
        text = '<b>' + title + '</b> <br>' + text;
    }
    // if (asHTML) {
    quizQuestionTextSPAN.innerHTML = text;
    // } else {
    // quizQuestionTextSPAN.innerText = '<b>question
    // }
    quizQuestionTextDIV.appendChild(quizQuestionTextSPAN)

    let panel = document.getElementById('quiz-question-container')
    panel.appendChild(quizQuestionTextDIV)
}

// Appends the scenario
const appendScenario = (question, asHTML = false) => {
    // Generating question text
    let i = document.getElementById('quiz-question-container').childNodes.length
    let quizQuestionTextDIV = document.createElement('div')
    quizQuestionTextDIV.id = `quiz-question-text-container-` + i
    quizQuestionTextDIV.className = 'quiz-question-text-container quiz-question-story-container'
    let quizQuestionTextSPAN = document.createElement(`span`)
    quizQuestionTextSPAN.className = `quiz-question-text-item`
    let text = question;
    if (!asHTML) {
        text = '<b>Scenario</b> <br>' + question;
    }
    // if (asHTML) {
    quizQuestionTextSPAN.innerHTML = text;
    // } else {
    // quizQuestionTextSPAN.innerText = '<b>question
    // }
    quizQuestionTextDIV.appendChild(quizQuestionTextSPAN)

    let panel = document.getElementById('quiz-question-container')
    panel.appendChild(quizQuestionTextDIV)
}

// Assigns the panel title
const appendTitle = (title) => {
    // Generating question text
    let quizQuestionTitle = document.createElement(`h1`)
    quizQuestionTitle.id = 'quiz-question-title'
    quizQuestionTitle.className = 'bottom-bar'
    // let quizQuestionTextSPAN = ocument.createElement(`span`)
    quizQuestionTitle.innerText = title

    let panel = document.getElementById('quiz-question-container')
    panel.appendChild(quizQuestionTitle)
}

// Assigns the question's text 
const appendDilemma = (question, i) => {
    // Generating question text
    let quizQuestionDilemma = document.createElement('div')
    let quizQuestionDilemmaDIV = document.createElement('div')
    quizQuestionDilemmaDIV.id = "quiz-dilemma-container"
    quizQuestionDilemmaDIV.className = "quiz-question-text-container quiz-question-dilemma-container"

    quizQuestionDilemma.id = `quiz-question-dilemma`
    quizQuestionDilemma.classList.add(`quiz-question-text-item`)
    // let quizQuestionTextSPAN = document.createElement(`span`)
    quizQuestionDilemma.innerHTML = `<b>Question ${i}</b><br>` + question;

    quizQuestionDilemmaDIV.appendChild(quizQuestionDilemma)

    if (i > 1) {
        quizQuestionDilemmaDIV.disabled = true;
        quizQuestionDilemmaDIV.classList.add('opacityblur')
    }

    document.getElementById('quiz-question-container').appendChild(quizQuestionDilemmaDIV)
}

const appendTextFormQuestion = (question, additional) => {
    // Generating answer elements
    // let quizAnswersUL = document.getElementById(`quiz-answer-list`)
    // <div class="input-contain">
    //<input type="text" id="fname" name="fname" autocomplete="off" value="" aria-labelledby="placeholder-fname">
    //<label class="placeholder-text" for="fname" id="placeholder-fname">
    // <div class="text">First Name</div>
    //label>
    //</div>
    let firstdiv = document.createElement(`div`);
    firstdiv.className = "input-contain"
    let seconddiv = document.createElement(`div`);
    seconddiv.className = "text"
    seconddiv.innerText = 'Answer here...'

    let input = document.createElement(`input`);
    input.id = 'fname'
    input.name = 'fname'
    input.autocomplete = 'off'
    input.type = 'text'
    input.setAttribute('value', "")
    // i
    input.setAttribute('aria-labelledby', 'placeholder-fname')

    let label = document.createElement('label')
    label.className = 'placeholder-text'
    label.setAttribute('for', 'fname')
    label.id = 'placeholder-fname'

    label.appendChild(seconddiv)
    firstdiv.appendChild(input)
    firstdiv.appendChild(label)

    input.addEventListener("keyup", () => {
        input.setAttribute("value", input.value);
        saveAnswer(input.value, question)
    })

    if (additional) {
        input.disabled = true;
        firstdiv.classList.add('opacityblur')

    }
    //let questionTextarea = document.createElement(`div`);
    //questionTextarea.contentEditable = true
    //questionTextarea.className = `form-control question-text-form answer-typed-input-form`;
    //questionTextarea.setAttribute(`id`, `questionTextarea`);
    //questionTextarea.setAttribute(`data-text`, `Enter answer here...`)
    //questionTextarea.onkeydown = saveWrittenAnswers;
    // questionTextarea.innerHTML = ``
    document.getElementById('quiz-question-container').appendChild(firstdiv)
}


// Loads a multiple choice quiz question
const loadQuestion = async (question, init, additional = false) => {
    if (!progressBarIsVisible()) {
        toggleProgressBar()
        updateProgessBarStatus()
    }
    if (!additional) {
        saveState()
        appendTitle(question.title)
        appendScenario(question.text)
        updateProgessBarStatus()
    }
    appendDilemma(question.dilemma, additional + 1)
    if (question.type == `multiple` || question.type == `single`) {
        if (question.answers.length <= 2) {
            loadBinaryChoiceQuestion(question)
        } else {
            loadMultipleChoiceQuestion(question)
        }
        loadPreviousEnteredChoice(question.entered)
    } else if (question.type == `short` || question.type == `long`) {
        appendTextFormQuestion(question, additional)
        loadPreviousEnteredText(question.entered)
    }

    // Skips loading animation on initialization
    if (!init) {
        await moveQuestionContainerMiddle()
    }
    showHideContinueButton(dataset.questions[currentQuestionIndex])
}

// Function to load next question & possible answers in object
const loadNewQuestion = async (adjustment) => {
    // Saves written answers before moving on to next question
    let type = dataset.questions[currentQuestionIndex].type
    if (type == 'long' || type == 'short') {
        saveWrittenAnswers()
    }
    // Removes previous question & answers
    if (canLoadNewQuestion(adjustment)) {
        await questionContainerLoad(adjustment)
        // removeAllChildren(`quiz-answer-list`)
        // removeAllChildren(`quiz-question-text-container`)
        removeAllChildren(`quiz-question-container`)
        //
        // Displays previous questions. Does nothing if no questions to load.
        // if (adjustment == `previous-question-load`) {
        // loadQuestion(dataset.questions[currentQuestionIndex])
        // Displays next question. Does nothing if no questions to load.
        if (adjustment == `next-question-load` && currentQuestionIndex <= dataset.questions.length) {
            loadQuestion(dataset.questions[currentQuestionIndex])
            if ("additional" in dataset.questions[currentQuestionIndex])
                loadQuestion(dataset.questions[currentQuestionIndex].additional, false, true)

        }
    }
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

// Discerns which direction the question will fly on/off the page
const questionContainerLoad = (adjustment) => {
    return new Promise(async (resolve, reject) => {
        if (adjustment == 'next-question-load') {
            // Moves container up off the screen
            await moveQuestionContainer(`up`, `down`)
        } else {
            // Moves container down off the screen
            await moveQuestionContainer(`down`, `up`)
        }
        resolve()
    })
}

/*----------------------------------------------------------------------------------------------- */
/* Answer management
/*----------------------------------------------------------------------------------------------- */

const appendAnswersList = () => {
    // Generating answer elements
    let quizAnswersDIV = document.createElement(`div`)
    quizAnswersDIV.id = 'quiz-answer-text-container'
    quizAnswersDIV.className = 'quiz-answer-text-container'

    let quizAnswersUL = document.createElement(`ul`)
    quizAnswersUL.id = `quiz-answer-list`
    quizAnswersUL.className = `quiz-answer-list`

    quizAnswersDIV.appendChild(quizAnswersUL)
    document.getElementById('quiz-question-container').appendChild(quizAnswersDIV)
    return quizAnswersUL
}

// Creates elements for multiple choice questions (checkboxes & radios)
const loadMultipleChoiceQuestion = (question) => {
    // Generating answer elements
    let quizAnswersUL = appendAnswersList()
    // questionHTML.id
    for (let i = 0; i < question.answers.length; i++) {
        let quizQuestionDIV = document.createElement(`div`)
        quizQuestionDIV.className = `quiz-answer-text-container-single unselected-answer`
        // Assigns ID as ASCII values (A = 65, B = 66, etc.)
        quizQuestionDIV.id = (i).toString()
        quizQuestionDIV.onclick = () => {
            selectAnswer(quizQuestionDIV.id, false, 'green', question)
        }
        // Generate elements
        let quizQuestionPress = document.createElement(`li`)
        let quizQuestionNumerator = document.createElement(`li`)
        let quizQuestionText = document.createElement(`li`)
        // Adding elements to quiz answers
        ed_QuizQuestionElements(question.type, quizQuestionPress, quizQuestionNumerator, quizQuestionDIV, quizQuestionText, (i + 1).toString(), 'green')
        // Convert ASCII code to text for multiple choice selection
        quizQuestionNumerator.innerText = (i + 1).toString();
        quizQuestionText.innerText = question.answers[i]
        // Psuedoparent append
        quizQuestionDIV.append(quizQuestionPress, quizQuestionNumerator, quizQuestionText)
        // Main parent append
        quizAnswersUL.appendChild(quizQuestionDIV)
    }
}

// Creates elements for binary choice questions
const loadBinaryChoiceQuestion = (question) => {
    let quizAnswersUL = appendAnswersList()
    let signs = ['✔', '✘']

    // questionHTML.id
    for (let i = 0; i < question.answers.length; i++) {
        let quizQuestionDIV = document.createElement(`div`)
        quizQuestionDIV.className = `quiz-answer-text-container-single unselected-answer`
        quizQuestionDIV.style.width = '45%'

        // Assigns ID as ASCII values (A = 65, B = 66, etc.)
        quizQuestionDIV.id = String.fromCharCode(i + 65);

        quizQuestionDIV.onclick = () => {
            selectAnswer(quizQuestionDIV.id, false, ['green', 'red'][+(i == 1)], question)
            removeOpacityBlur()
        }

        // Generate elements
        let quizQuestionPress = document.createElement(`li`)
        let quizQuestionNumerator = document.createElement(`li`)
        let quizQuestionText = document.createElement(`li`)

        // Adding elements to quiz answers
        ed_QuizQuestionElements(
            question.type,
            quizQuestionPress,
            quizQuestionNumerator,
            quizQuestionDIV,
            quizQuestionText,
            quizQuestionDIV.id,
            ['green', 'red'][+(i == 1)]
        )

        // Convert ASCII code to text for multiple choice selection
        quizQuestionNumerator.innerText = signs[i]

        quizQuestionNumerator.style.fontSize = 30;

        quizQuestionText.innerText = question.answers[i]
        // Psuedoparent append
        quizQuestionDIV.append(quizQuestionPress, quizQuestionNumerator, quizQuestionText)
        // Main parent append
        quizAnswersUL.appendChild(quizQuestionDIV)
    }
}



// Adds class names to quiz question based on which type of which it is
const ed_QuizQuestionElements = (type, press, numerator, container, text, n, color) => {
    // Append classes for different types of questions
    if (type == `single`) {
        // Radio button classes
        // press.className = `press-key-label press-label-radio answer-key-numerator unselected-answer-button`
        numerator.className = `answer-key-numerator numerator-radio unselected-answer-button ${color}`
        container.classList.add(`question-type-single`)
    } else if (type == `multiple`) {
        // Checkbox classes
        // press.className = `press-key-label press-label-checkbox answer-key-numerator unselected-answer-button`
        numerator.className = `answer-key-numerator numerator-checkbox unselected-answer-button ${color}`
        container.classList.add(`question-type-multiple`)
    }
    text.className = `quiz-answer-text-item`
    text.className += ' ' + color
    // press.innerText = `Press ` + n
}



// Highlights and unhighlights given answers when a keytap is pressed 
// key indicates the id of the given answer, invoking previous will prevent the function from editing the local answered questions object
const selectAnswer = (key, previous, color, question) => {
    let answer = document.getElementById(key)
    if (answer) {
        // If only one answer can be given, unselect all answers before reselecting new answer
        if (answer.classList.contains(`question-type-single`)) {
            unselectAllAnswers(document.getElementById('quiz-answer-list'))
        }
        // If answer is not yet selected, select it
        if (answer.classList.contains(`unselected-answer`)) {
            answer.classList.add(`selected-answer`)
            if (color) {
                answer.classList.add(color);
            }
            answer.classList.remove(`unselected-answer`)
            indicateSelectedAnswer(answer, color)
            saveAnswer(answer.textContent, question)
            // if (!previous) {
                // storeAnswers(true, key)
            // }
            // If answer is already selected, unselect it
        } else if (answer.classList.contains(`selected-answer`)) {
            answer.classList.add(`unselected-answer`)
            answer.classList.remove(`selected-answer`)
            // Unhighlight selected answer buttons
            unselectAnswerButton(answer.children)
            // if (!previous) {
                // storeAnswers(false, key)
            // }
        }
    }
    // Triggers a check to see if we should display continue button
    showHideContinueButton(dataset.questions[currentQuestionIndex])
}

// Changes answer button appearance to show as selected
const indicateSelectedAnswer = (answer, color) => {
    let button = answer.querySelectorAll('.answer-key-numerator')
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove(`unselected-answer-button`)
        button[i].classList.add(`selected-answer-button`)
        if (color)
            button[i].classList.add(`${color}`)
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

/* ---------------------------------------------------------------------------------------------------*/
/* Animation and movement
/* ---------------------------------------------------------------------------------------------------*/
// Moves question off screen in a given direction
const moveQuestionContainer = (first = `up`, second = `down`) => {
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
const moveQuestionContainerMiddle = () => {
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

/*----------------------------------------------------------------------------------------------- */
/* Continue management
/*----------------------------------------------------------------------------------------------- */
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
    continueBUTTON.onclick = async function () {
        if (!continueClickable)
            return;

        continueClickable = false;
        let startQuestions = await loadNewInstruction(`next-question-load`);
        //debugger;
        if (startQuestions) {
            loadNewQuestion(`next-question-load`)
        }

        setTimeout(() => { continueClickable = true }, timeBetweenQuestions);
    }

    continueSPAN.innerHTML = `press ENTER`
    continueDIV.append(continueBUTTON, continueSPAN)
    let parent = document.getElementById('quiz-main-page');//`quiz-question-container`)
    parent.append(continueDIV)
    // Discerns whether or not to show continue button, based on whether or not an answer has been input/selected
    showHideContinueButton(dataset.questions[currentQuestionIndex])
}

// Only shows a continue button if a question is selected
const showHideContinueButton = (question) => {
    if (question.type == 'short' || question.type == `long`) {
        document.getElementById(`quiz-continue-button-container`).style.display = `initial`
        document.getElementById(`quiz-continue-text`).style.display = `none`
    } else {
        try {
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
        } catch { }
    }
}

/*----------------------------------------------------------------------------------------------- */
/* Progress bar
/*----------------------------------------------------------------------------------------------- */
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
    text.innerText = value + '% complete (item ' + (calculateQuizProgress(dataset.questions) + 1) + ')'
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

/*----------------------------------------------------------------------------------------------- */
/* listeners functions
/*----------------------------------------------------------------------------------------------- */

// Listener for key presses for quiz interaction.
document.onkeydown = function (evt) {
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
    if (((type == `single` || type == `multiple`) && keyCode == 13 && selected)) {
        // loadNewQuestion('next-question-load')
        $('.quiz-continue-button')[0].click()
    }
};

/*----------------------------------------------------------------------------------------------- */
/* Toggle functions
/*----------------------------------------------------------------------------------------------- */
const toggleProgressBar = () => {
    let v = document.getElementById("progress").style.display == "none";
    document.getElementById("progress").style.display = v ? 'block' : 'none'
}

const progressBarIsVisible = () => {
    return document.getElementById("progress").style.display == 'block'
}

const toggleDilemma = () => {
    let v = document.getElementById("quiz-dilemma-container").style.display == "none";
    document.getElementById("quiz-dilemma-container").style.display = v ? 'block' : 'none'
}

/* ------------------------------------------------------------------------------------------ */
/* Utils
/* ------------------------------------------------------------------------------------------ */
// Shortcut for removing duplicates from arrays
const uniq = (a) => {
    return Array.from(new Set(a));
}

// Accepts a parent id to remove all children
const removeAllChildren = (parent) => {
    let node = document.getElementById(parent)
    node.innerHTML = ``
}

// Accepts a parent id to remove all children
const removeOpacityBlur = () => {
    let node = document.getElementsByTagName('*')
    // debugger
    Array.from(node).map(element => {
        element.disabled = false;
        element.classList.remove('opacityblur')
    });
}

