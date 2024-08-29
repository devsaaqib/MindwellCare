// Therapist data (this would ideally come from a backend database)
const therapists = [
    { name: "Dr. Alice Johnson", specialty: "Anxiety" },
    { name: "Dr. Brian Smith", specialty: "Depression" },
    { name: "Dr. Catherine Lee", specialty: "Trauma" },
    { name: "Dr. Daniel Brown", specialty: "Sleep Disorders" },
    { name: "Dr. Emily Davis", specialty: "Eating Disorders" },
    { name: "Dr. Frank Miller", specialty: "Suicidal Thoughts" },
    { name: "Dr. Grace Williams", specialty: "General Mental Health" }
];

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

    // Determine the result and match with a therapist
    let resultText = '';
    let matchedTherapist = '';

    if (totalScore <= 10) {
        resultText = 'Your mental health seems to be in good condition. Keep taking care of yourself!';
        matchedTherapist = therapists.find(t => t.specialty === "General Mental Health");
    } else if (totalScore <= 20) {
        resultText = 'You may be experiencing mild mental health issues. Consider speaking with a professional.';
        matchedTherapist = therapists.find(t => t.specialty === "General Mental Health");
    } else {
        resultText = 'You may be experiencing significant mental health issues. It is recommended to consult with a healthcare provider.';

        // Match therapist based on specific issues
        if (anxiety >= 3) {
            matchedTherapist = therapists.find(t => t.specialty === "Anxiety");
        } else if (depression >= 3) {
            matchedTherapist = therapists.find(t => t.specialty === "Depression");
        } else if (sleep >= 3) {
            matchedTherapist = therapists.find(t => t.specialty === "Sleep Disorders");
        } else if (trauma >= 3) {
            matchedTherapist = therapists.find(t => t.specialty === "Trauma");
        } else if (eatinghabits >= 3) {
            matchedTherapist = therapists.find(t => t.specialty === "Eating Disorders");
        } else if (suicide >= 3) {
            matchedTherapist = therapists.find(t => t.specialty === "Suicidal Thoughts");
        } else {
            matchedTherapist = therapists.find(t => t.specialty === "General Mental Health");
        }
    }

    // Display the result and matched therapist
    document.getElementById('result').innerHTML = `
        <p>${resultText}</p>
        <p>We recommend consulting with: ${matchedTherapist.name}, who specializes in ${matchedTherapist.specialty}.</p>
    `;
})
