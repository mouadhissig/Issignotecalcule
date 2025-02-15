const subjectsBySemester = {
    1: [
        { name: "Anatomie physiologie 1", coeff: 2.5, isAnatomie: true },
        { name: "Déontologie éthique", coeff: 1 },
        { name: "Discipline infirmière", coeff: 1.5 },
        { name: "Microbiologie", coeff: 1 },
        { name: "Techniques infirmières", coeff: 1.5, singleNote: true, controlThreshold: 8 }, // Control threshold updated to 8
        { name: "Démarche de soin", coeff: 2 },
        { name: "Technique de Communication", coeff: 1 },
        { name: "Droit de patient", coeff: 1 },
        { name: "C2I", coeff: 1 },
        { name: "Anglais", coeff: 1 },
        { name: "Psychologie", coeff: 1 }
    ],
    2: [
        { name: "Biologie clinique", coeff: 1 },
        { name: "Anatomie physiologie 2", coeff: 2, isAnatomie: true },
        { name: "Pharmacologie 1", coeff: 1 },
        { name: "Soins mère/nouveau-né", coeff: 1.5 },
        { name: "Hygiène environnement", coeff: 1 },
        { name: "Techniques infirmières 2", coeff: 2, singleNote: true, controlThreshold: 8 },
        { name: "Relation d'aide", coeff: 2 },
        { name: "Démarche de soins 2", coeff: 2 },
        { name: "Anglais 2", coeff: 1 },
        { name: "Sémantique des soins", coeff: 1 }
    ],
    3: [
        { name: "Soins adultes 1", coeff: 3 },
        { name: "Soins neurologiques", coeff: 1.5 },
        { name: "Soins pédiatriques", coeff: 2 },
        { name: "Techniques infirmières 3", coeff: 1.5, singleNote: true, controlThreshold: 8 },
        { name: "Soins communautaires 2", coeff: 2 },
        { name: "Recherche documentaire", coeff: 1 },
        { name: "Ergonomie et sécurité", coeff: 1.5 },
        { name: "Santé adolescente", coeff: 1 }
    ],
    4: [
        { name: "Soins adultes 2", coeff: 3 },
        { name: "Soins en pathologie digestive", coeff: 2 },
        { name: "Soins endocrinologie", coeff: 2 },
        { name: "Soins orthopédiques", coeff: 1.5 },
        { name: "Soins en situations critiques", coeff: 2.5 },
        { name: "Méthodologie recherche", coeff: 1 },
        { name: "Législation santé", coeff: 1.5 }
    ],
    5: [
        { name: "Soins en oncologie", coeff: 2.5 },
        { name: "Soins gériatriques", coeff: 2 },
        { name: "Soins santé mentale", coeff: 2.5 },
        { name: "Soins en bloc opératoire", coeff: 2 },
        { name: "Gestion de soins", coeff: 1.5 },
        { name: "Recherche en soins", coeff: 2 }
    ],
    6: [
        { name: "Stage d'intégration", coeff: 6, singleNote: true },
        { name: "Projet de fin d'étude", coeff: 2 },
        { name: "Soins hémodialyse", coeff: 1.5 },
        { name: "Soins personnes âgées", coeff: 2 }
    ]
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
        if (subject.isAnatomie) {
            // Special case: Anatomie (3 DS and 3 Exam notes)
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff})</h3>
                <div class="input-group">
                    <input type="number" min="0" max="20" step="0.01" placeholder="DS 1" id="ds1_${index}">
                    <input type="number" min="0" max="20" step="0.01" placeholder="Exam 1" id="exam1_${index}">
                </div>
                <div class="input-group">
                    <input type="number" min="0" max="20" step="0.01" placeholder="DS 2" id="ds2_${index}">
                    <input type="number" min="0" max="20" step="0.01" placeholder="Exam 2" id="exam2_${index}">
                </div>
                <div class="input-group">
                    <input type="number" min="0" max="20" step="0.01" placeholder="DS 3" id="ds3_${index}">
                    <input type="number" min="0" max="20" step="0.01" placeholder="Exam 3" id="exam3_${index}">
                </div>
            `;
        } else if (subject.singleNote) {
            // Special case: Only one input for "Techniques infirmières"
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff})</h3>
                <div class="input-group">
                    <input type="number" min="0" max="20" step="0.01" placeholder="Note" id="note${index}">
                </div>
            `;
        } else {
            // Normal case: DS and Exam inputs
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff})</h3>
                <div class="input-group">
                    <input type="number" min="0" max="20" step="0.01" placeholder="DS Note" id="ds${index}">
                    <input type="number" min="0" max="20" step="0.01" placeholder="Exam Note" id="exam${index}">
                </div>
            `;
        }
        container.appendChild(card);
    });
}

// Function to calculate the semester average and credits
function calculateAverage() {
    const semester = document.getElementById('semesterSelect').value;
    const subjects = subjectsBySemester[semester];
    let total = 0;
    let totalCoeff = 0;
    let totalCredits = 0;
    let earnedCredits = 0;
    const warnings = [];
    const excludedSubjects = new Set(["C2I", "Psychologie", "Droit de patient"]);

    subjects.forEach((subject, index) => {
        let rawAverage = 0;
        let contribution = 0;
        const subjectCredits = subject.coeff * 2; // Credits = coefficient * 2

        if (subject.isAnatomie) {
            // Anatomie special case
            const ds1 = parseFloat(document.getElementById(`ds1_${index}`).value) || 0;
            const exam1 = parseFloat(document.getElementById(`exam1_${index}`).value) || 0;
            const ds2 = parseFloat(document.getElementById(`ds2_${index}`).value) || 0;
            const exam2 = parseFloat(document.getElementById(`exam2_${index}`).value) || 0;
            const ds3 = parseFloat(document.getElementById(`ds3_${index}`).value) || 0;
            const exam3 = parseFloat(document.getElementById(`exam3_${index}`).value) || 0;

            const moyenne1 = (ds1 * 0.3 + exam1 * 0.7);
            const moyenne2 = (ds2 * 0.3 + exam2 * 0.7);
            const moyenne3 = (ds3 * 0.3 + exam3 * 0.7);
            rawAverage = (moyenne1 + moyenne2 + moyenne3) / 3;
            contribution = rawAverage * subject.coeff;

        } else if (subject.singleNote) {
            // Techniques infirmières special case
            rawAverage = parseFloat(document.getElementById(`note${index}`).value) || 0;
            contribution = rawAverage * subject.coeff;
            
        } else {
            // Normal subjects
            const ds = parseFloat(document.getElementById(`ds${index}`).value) || 0;
            const exam = parseFloat(document.getElementById(`exam${index}`).value) || 0;
            rawAverage = (ds * 0.3 + exam * 0.7);
            contribution = rawAverage * subject.coeff;
        }

        // Check for control needed
        const controlThreshold = subject.controlThreshold || 6; // Default is 6, except for Techniques infirmières (8)
        if (rawAverage < controlThreshold && !excludedSubjects.has(subject.name)) {
            warnings.push(`Contrôle dans ${subject.name}`);
        }

        // Calculate credits
        totalCredits += subjectCredits;
        if (rawAverage >= 10) {
            earnedCredits += subjectCredits;
        }

        total += contribution;
        totalCoeff += subject.coeff;
    });

    const finalAverage = total / totalCoeff;
    let resultHTML = `Semester Average: ${finalAverage.toFixed(2)}/20`;
    
    if (warnings.length > 0) {
        resultHTML += `<br><br><span style="color: #dc2626;">Attention:</span><br>${warnings.join('<br>')}`;
    }

    document.getElementById('result').innerHTML = resultHTML;
    document.getElementById('creditsResult').innerHTML = `Total Credits: ${totalCredits}<br>Earned Credits: ${earnedCredits}`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    createSubjectInputs(); // Load subjects for the default semester (Semester 1)
});

document.getElementById('semesterSelect').addEventListener('change', createSubjectInputs);