function evaluate(value, resultDiv, criteria) {
    let evaluation = '';
    let evaluationClass = '';

    resultDiv.className = 'result-box'; // Reset class and ensure base class

    if (isNaN(value)) {
        evaluation = '数値を入力してください';
    } else {
        if (value >= criteria.A) {
            evaluation = 'A';
            evaluationClass = 'evaluation-a';
        } else if (value >= criteria.B) {
            evaluation = 'B';
            evaluationClass = 'evaluation-b';
        } else if (value >= criteria.C) {
            evaluation = 'C';
            evaluationClass = 'evaluation-c';
        } else if (value >= criteria.D) {
            evaluation = 'D';
            evaluationClass = 'evaluation-d';
        } else if (value >= criteria.E) {
            evaluation = 'E';
            evaluationClass = 'evaluation-e';
        } else {
            evaluation = '評価基準外';
        }
    }

    resultDiv.textContent = evaluation;
    if (evaluationClass) {
        resultDiv.classList.add(evaluationClass);
    }
}

// Hemoglobin Evaluation
const hemoglobinValueInput = document.getElementById('hemoglobinValue');
const evaluateHemoglobinButton = document.getElementById('evaluateHemoglobinButton');
const hemoglobinResultDiv = document.getElementById('hemoglobinResult');

const hemoglobinCriteria = {
    A: 15.5,
    B: 15.0,
    C: 14.5,
    D: 14.0,
    E: 13.5
};

evaluateHemoglobinButton.addEventListener('click', () => {
    const value = parseFloat(hemoglobinValueInput.value);
    evaluate(value, hemoglobinResultDiv, hemoglobinCriteria);
});

// Ferritin Evaluation
const ferritinValueInput = document.getElementById('ferritinValue');
const evaluateFerritinButton = document.getElementById('evaluateFerritinButton');
const ferritinResultDiv = document.getElementById('ferritinResult');

const ferritinCriteria = {
    A: 100,
    B: 80,
    C: 60,
    D: 40,
    E: 30
};

evaluateFerritinButton.addEventListener('click', () => {
    const value = parseFloat(ferritinValueInput.value);
    evaluate(value, ferritinResultDiv, ferritinCriteria);
});

// PG1 Evaluation
const pg1ValueInput = document.getElementById('pg1Value');
const evaluatePg1Button = document.getElementById('evaluatePg1Button');
const pg1ResultDiv = document.getElementById('pg1Result');

const pg1Criteria = {
    A: 50,
    B: 45,
    C: 40,
    D: 35,
    E: 30
};

evaluatePg1Button.addEventListener('click', () => {
    const value = parseFloat(pg1ValueInput.value);
    evaluate(value, pg1ResultDiv, pg1Criteria);
});