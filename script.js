const subjectsBySemester = {
    1: [
        { name: "Introduction à la Discipline infirmière", coeff: 1.5, credits: 3 },
        { name: "Déontologie-Ethique", coeff: 1, credits: 2 },
        { name: "Anatomie-physiologie 1", coeff: 2.5, credits: 5 },
        { name: "Psychologie du développement social", coeff: 1, credits: 2 },
        { name: "Technique de Communication 1", coeff: 1, credits: 2 },
        { name: "Techniques infirmières 1", coeff: 1.5, credits: 3 },
        { name: "Démarche de soins", coeff: 1.5, credits: 3 },
        { name: "Soins dans la communauté 1", coeff: 1, credits: 2 },
        { name: "Microbiologie; Parasitologie et immunité", coeff: 1, credits: 2 },
        { name: "2CN1", coeff: 1, credits: 2 },
        { name: "Droit du patient", coeff: 1, credits: 2 },
        { name: "Anglais médical 1", coeff: 1, credits: 2 }
    ],
    2: [
        { name: "Philosophie des sciences", coeff: 1, credits: 2 },
        { name: "Techniques de communication 2", coeff: 1, credits: 2 },
        { name: "Sociologie de la santé", coeff: 1, credits: 2 },
        { name: "Initiation aux premiers secours", coeff: 1, credits: 2 },
        { name: "Stage hospitalier en médecine-chirurgie 1", coeff: 2, credits: 4 },
        { name: "Biologie clinique", coeff: 0.5, credits: 1 },
        { name: "Anatomie-Physiologie 2", coeff: 1.5, credits: 3 },
        { name: "Pharmacologie 1", coeff: 1, credits: 2 },
        { name: "Techniques infirmières 2", coeff: 1, credits: 2 },
        { name: "Relation d'aide", coeff: 1, credits: 2 },
        { name: "Hygiène et environnement", coeff: 1, credits: 2 },
        { name: "Soins à la mère et au nouveau-né", coeff: 1, credits: 2 },
        { name: "Anglais médical 2", coeff: 1, credits: 2 },
        { name: "2CN 2", coeff: 1, credits: 2 }
    ],
    3: [
        { name: "Stage hospitalier en pédiatrie", coeff: 1.5, credits: 3 },
        { name: "Soins infirmiers en pédiatrie", coeff: 1.5, credits: 3 },
        { name: "Soins infirmiers en cardiologie", coeff: 1, credits: 2 },
        { name: "Soins infirmiers en pneumologie", coeff: 1, credits: 2 },
        { name: "Pharmacologie 2", coeff: 1, credits: 2 },
        { name: "Soins infirmiers en neurologie", coeff: 1, credits: 2 },
        { name: "Soins infirmiers en infectieux", coeff: 1, credits: 2 },
        { name: "Soins infirmiers et handicap", coeff: 0.5, credits: 1 },
        { name: "Santé et sécurité au travail", coeff: 1, credits: 2 },
        { name: "Soins infirmiers et santé de l'adolescent", coeff: 0.5, credits: 1 },
        { name: "Stage hospitalier en médecine-chirurgie 2", coeff: 2, credits: 4 },
        { name: "Techniques infirmières 3", coeff: 1, credits: 2 },
        { name: "Recherche documentaire", coeff: 1, credits: 2 },
        { name: "Anglais médical 3", coeff: 1, credits: 2 }
    ],
    4: [
        { name: "Raisonnement et jugement clinique", coeff: 1, credits: 2 },
        { name: "Stage hospitalier en médecine-chirurgie 3", coeff: 2, credits: 4 },
        { name: "Système de santé", coeff: 1, credits: 2 },
        { name: "Économie de la santé", coeff: 1, credits: 2 },
        { name: "Soins infirmiers en endocrinologie et en diététique nutrition", coeff: 1.5, credits: 3 },
        { name: "Soins infirmiers en pathologie digestive", coeff: 1, credits: 2 },
        { name: "Soins infirmiers en situations critiques", coeff: 1.5, credits: 3 },
        { name: "Soins infirmiers en uro-néphrologie et hémodialyse", coeff: 1.5, credits: 3 },
        { name: "Soins infirmiers en Orthopédie", coeff: 1, credits: 2 },
        { name: "Soins infirmiers en gynéco-obstétrique", coeff: 1.5, credits: 3 },
        { name: "Anglais médical 4", coeff: 1, credits: 2 },
        { name: "Méthodologie de la recherche 1", coeff: 1, credits: 2 }
    ],
    5: [
        { name: "Soins infirmiers aux personnes âgées", coeff: 2.5, credits: 5 },
        { name: "Soins infirmiers en santé mentale", coeff: 2.5, credits: 5 },
        { name: "Soins infirmiers dans la communauté 2", coeff: 2, credits: 4 },
        { name: "Carcinologie", coeff: 1, credits: 2 },
        { name: "Hématologie", coeff: 1, credits: 2 },
        { name: "Dermatologie/ORL/Ophtalmo", coeff: 0.5, credits: 1 },
        { name: "Stage hospitalier au bloc opératoire", coeff: 1, credits: 2 },
        { name: "Stage hospitalier en soins critiques", coeff: 2, credits: 4 },
        { name: "Méthodologie de la recherche 2", coeff: 1, credits: 2 },
        { name: "Statistiques", coeff: 0.5, credits: 1 },
        { name: "Qualité et sécurité des soins", coeff: 1, credits: 2 }
    ],
    6: [
        { name: "Stage hospitalier de soins auprès des personnes âgées", coeff: 1, credits: 2 },
        { name: "Soins chez les hémato-dialysés", coeff: 1.5, credits: 3 },
        { name: "Projet de fin d'études", coeff: 7, credits: 14 },
        { name: "Stage hospitalier d'intégration", coeff: 2, credits: 4 },
        { name: "Stage hospitalier de soins communautaires", coeff: 2, credits: 4 },
        { name: "Stage hospitalier de soins en santé mentale", coeff: 1.5, credits: 3 }
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
                <h3>${subject.name} (Coeff: ${subject.coeff}, Cr: ${subject.credits})</h3>
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
                <h3>${subject.name} (Coeff: ${subject.coeff}, Cr: ${subject.credits})</h3>
                <div class="input-group">
                    <input type="number" min="0" max="20" step="0.01" placeholder="Note" id="note${index}">
                </div>
            `;
        } else {
            // Normal case: DS and Exam inputs
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff}, Cr: ${subject.credits})</h3>
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
        const subjectCredits = subject.credits; // Credits are now directly from the subject object

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