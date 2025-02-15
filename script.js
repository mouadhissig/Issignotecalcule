// Define subjects for each semester
const subjectsBySemester = {
    1: [
        { name: "Anatomie-physiologie 1", coeff: 2.5 },
        { name: "Ethique et déontologie infirmière", coeff: 1 },
        { name: "Introduction à la discipline infirmière", coeff: 1.5 },
        { name: "Initiation aux premiers secours", coeff: 1 },
        { name: "Techniques infirmières 1", coeff: 1.5 },
        { name: "Démarche de soins 1", coeff: 2 },
        { name: "Soins infirmiers communautaires 1", coeff: 2 },
        { name: "Microbiologie ; parasitologie et immunité", coeff: 1 },
        { name: "C2i", coeff: 1 },
        { name: "Droits du patient", coeff: 1 },
        { name: "Techniques de communication", coeff: 1 },
        { name: "Anglais", coeff: 1 },
        { name: "Psycho du développement", coeff: 1 },
        { name: "Psychologie sociale", coeff: 1 }
    ],
    // Add other semesters here following the same pattern
};

// Function to create subject input fields dynamically
function createSubjectInputs() {
    const semester = document.getElementById('semesterSelect').value;
    const subjects = subjectsBySemester[semester];
    const container = document.getElementById('subjectsContainer');
    container.innerHTML = ''; // Clear previous content

    subjects.forEach((subject, index) => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <h3>${subject.name} (Coeff: ${subject.coeff})</h3>
            <div class="input-group">
                <input type="number" min="0" max="20" step="0.01" 
                       placeholder="DS Note" id="ds${index}">
                <input type="number" min="0" max="20" step="0.01" 
                       placeholder="Exam Note" id="exam${index}">
            </div>
        `;
        container.appendChild(card);
    });
}

// Function to calculate the semester average
function calculateAverage() {
    const semester = document.getElementById('semesterSelect').value;
    const subjects = subjectsBySemester[semester];
    let total = 0;
    let totalCoeff = 0;

    subjects.forEach((subject, index) => {
        const ds = parseFloat(document.getElementById(`ds${index}`).value) || 0;
        const exam = parseFloat(document.getElementById(`exam${index}`).value) || 0;
        const moyenne = (ds * 0.3 + exam * 0.7) * subject.coeff;
        total += moyenne;
        totalCoeff += subject.coeff;
    });

    const finalAverage = total / totalCoeff;
    document.getElementById('result').innerHTML = `
        Semester Average: ${finalAverage.toFixed(2)}/20
    `;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    createSubjectInputs(); // Load subjects for the default semester (Semester 1)
});

document.getElementById('semesterSelect').addEventListener('change', createSubjectInputs);
