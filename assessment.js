document.getElementById('assessmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values of the selected options
    const anxiety = parseInt(document.querySelector('select[name="anxiety"]').value);
    const depression = parseInt(document.querySelector('select[name="depression"]').value);
    const sleep = parseInt(document.querySelector('select[name="sleep"]').value);
    const mood = parseInt(document.querySelector('select[name="mood"]').value);
    const trauma = parseInt(document.querySelector('select[name="trauma"]').value);
    const eatinghabits = parseInt(document.querySelector('select[name="eatinghabits"]').value);
    const suicide = parseInt(document.querySelector('select[name="suicide"]').value);
    const support = parseInt(document.querySelector('select[name="support"]').value);
    const experience = parseInt(document.querySelector('select[name="experience"]').value);
    const feeling = parseInt(document.querySelector('select[name="feeling"]').value);

    // Calculate the total score
    const totalScore = anxiety + depression + sleep + mood + trauma + eatinghabits + suicide + support + experience + feeling;

    // Determine the result based on the total score
    let resultText = '';
    if (totalScore <= 10) {
        resultText = 'Your mental health seems to be in good condition. Keep taking care of yourself!';
    } else if (totalScore <= 16) {
        resultText = 'You may be experiencing mild mental health issues. Consider speaking with a professional.';
    } else if (totalScore <= 24) {
        resultText = 'Your mental health issues are reasonably high. Consult a therapist and engage in meditation and physical activities to improve your mental health.';
    } else {
        resultText = 'You may be experiencing significant mental health issues. It is recommended to consult with a therapist.';
    }

    // Display the result
    document.getElementById('result').innerText = resultText;
});

