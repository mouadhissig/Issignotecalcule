const subjectsBySemester = {
    1: [
        { name: "Anatomie-physiologie (1)", coeff: 2.5, credits: 5, isAnatomie: true },
        { name: "Déontologie-Ethique", coeff: 1, credits: 2 },
        { name: "Soins dans la Communauté (1)", coeff: 1, credits: 2 },
        { name: "Démarche de soins", coeff: 1.5, credits: 3 },
        { name: "Microbiologie, parasitologie et immunité", coeff: 1, credits: 2 },
        { name: "Introduction à la Discipline infirmière", coeff: 1.5, credits: 3 },
        { name: "Psychologie du développement social", coeff: 1, credits: 2 }, // 2 notes
        { name: "Techniques infirmières 1", coeff: 1.5, credits: 3, singleNote: true, controlThreshold: 8 },
        { name: "Anglais médicale (1)", coeff: 1, credits: 2, noControl: true },
        { name: "Droit de patient", coeff: 1, credits: 2, noControl: true },
        { name: "2CN (1)", coeff: 1, credits: 2, noControl: true },
        { name: "Technique de communication (1)", coeff: 1, credits: 2, noControl: true }
    ],
    2: [
        { name: "Philosophie des sciences", coeff: 1, credits: 2, noControl: true },
        { name: "Anatomie-physiologie (2)", coeff: 1.5, credits: 3, isAnatomie: true },
        { name: "Pharmacologie (1)", coeff: 1, credits: 2 },
        { name: " Soins à la mére et au nouveau né", coeff: 1, credits: 2 },
        { name: "Hygiène et environnement", coeff: 1, credits: 2 },
        { name: "Relation d'aide", coeff: 1, credits: 2 },
        { name: "Techniques infirmières 2", coeff: 1, credits: 2, singleNote: true, controlThreshold: 8 },
        { name: "Biologie Clinique", coeff: 0.5, credits: 1 },
        { name: "Sociologie de la santé", coeff: 1, credits: 2, noControl: true },
        { name: "Techniques de communication (2)", coeff: 1, credits: 2, noControl: true },
        { name: "2CN (2)", coeff: 1, credits: 2, noControl: true },
        { name: "Anglais médicale (2)", coeff: 1, credits: 2, noControl: true },
        { name: "Initiation aux premiers secours", coeff: 1, credits: 2, singleNote: true, controlThreshold: 8 },
        { name: "Stage hospitalier en médecine-chirurgie", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 }
    ],
    3: [
        { name: "Stage hospitalier en pédiatrie", coeff: 1.5, credits: 3, singleNote: true, controlThreshold: 10 },
        { name: "Soins infirmiers en pédiatrie", coeff: 1.5, credits: 3, isSpecialCase: true }, // Special case: 1 DS + 2 exams
        { name: "Soins infirmiers en cardiologie", coeff: 1, credits: 2, isSpecialCase: true }, // Special case: 1 DS + 2 exams
        { name: "Soins infirmiers en pneumologie", coeff: 1, credits: 2, isSpecialCase: true }, // Special case: 1 DS + 2 exams
        { name: "Pharmacologie (2)", coeff: 1, credits: 2 },
        { name: "Soins infirmiers en neurologie", coeff: 1, credits: 2 },
        { name: "Soins infirmiers en infectieux", coeff: 1, credits: 2, isSpecialCase: true }, // Special case: 1 DS + 2 exams
        { name: "Soins infirmiers et handicap", coeff: 0.5, credits: 1, noControl: true },
        { name: "Santé et sécurité au travail", coeff: 1, credits: 2, noControl: true },
        { name: "Soins infirmiers et santé de l'adolescent", coeff: 0.5, credits: 1, noControl: true },
        { name: "Stage hospitalier en médecine-chirurgie", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 },
        { name: "Techniques infirmières (3)", coeff: 1, credits: 2, singleNote: true, controlThreshold: 10 },
        { name: "Recherche documentaire", coeff: 1, credits: 2, noControl: true },
        { name: "Anglais médical (3)", coeff: 1, credits: 2, noControl: true }
    ],
    4: [
        { name: "Raisonnement et jugement clinique", coeff: 1, credits: 2 },
        { name: "Stage hospitalier en médecine-chirurgie", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 },
        { name: "Système de santé", coeff: 1, credits: 2, noControl: true },
        { name: "Économie de la santé", coeff: 1, credits: 2, noControl: true },
        { name: "Soins infirmiers en endocrinologie et diététique nutrition", coeff: 1.5, credits: 3, isSpecialCase: true }, // Special case: 1 DS + 2 exams
        { name: "Soins infirmiers en pathologie digestive", coeff: 1, credits: 2, isSpecialCase: true }, // Special case: 1 DS + 2 exams
        { name: "Soins infirmiers en situations critiques", coeff: 1.5, credits: 3, isSpecialCase: true }, // Special case: 1 DS + 2 exams
        { name: "Soins infirmiers en uro-néphrologie et hémodialyse", coeff: 1.5, credits: 3 },
        { name: "Soins infirmiers en Orthopédie", coeff: 1, credits: 2, isSpecialCase: true }, // Special case: 1 DS + 2 exams
        { name: "Soins infirmiers en gynéco-obstétrique", coeff: 1.5, credits: 3 },
        { name: "Anglais médical (4)", coeff: 1, credits: 2, noControl: true },
        { name: "Méthodologie de la recherche (1)", coeff: 1, credits: 2, noControl: true }
    ],
    5: [
        { name: "Soins infirmiers aux personnes âgées", coeff: 2.5, credits: 5 },
        { name: "Soins infirmiers en santé mentale", coeff: 2.5, credits: 5 },
        { name: "Soins infirmiers dans la communauté (2)", coeff: 2, credits: 4 },
        { name: "Carcinologie", coeff: 1, credits: 2 },
        { name: "Hématologie", coeff: 1, credits: 2 },
        { name: "Dermatologie/ORL/Ophtalmo", coeff: 0.5, credits: 1, isDermatologie: true }, // Special case: 1 DS + 3 exams
        { name: "Stage hospitalier au bloc opératoire", coeff: 1, credits: 2, singleNote: true, controlThreshold: 10 },
        { name: "Stage hospitalier en soins critiques", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 },
        { name: "Méthodologie de la recherche (2)", coeff: 1, credits: 2, noControl: true },
        { name: "Statistiques", coeff: 0.5, credits: 1, noControl: true },
        { name: "Qualité et sécurité des soins", coeff: 1, credits: 2, noControl: true }
    ],
    6: [
        { name: "Stage hospitalier de soins auprès des personnes âgées", coeff: 1, credits: 2, singleNote: true, controlThreshold: 10 },
        { name: "Soins chez les hémodialysés", coeff: 1.5, credits: 3, singleNote: true, controlThreshold: 10 },
        { name: "Projet de fin d'études", coeff: 7, credits: 14, singleNote: true, controlThreshold: 10 },
        { name: "Stage hospitalier d'intégration", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 },
        { name: "Stage hospitalier de soins communautaires", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 },
        { name: "Stage hospitalier de soins en santé mentale", coeff: 1.5, credits: 3, singleNote: true, controlThreshold: 10 }
    ]
};

// Function to create input fields
function createSubjectInputs() {
    const semester = document.getElementById('semesterSelect').value;
    const subjects = subjectsBySemester[semester];
    const container = document.getElementById('subjectsContainer');
    container.innerHTML = '';

    subjects.forEach((subject, index) => {
        const card = document.createElement('div');
        card.className = 'subject-card';

        if (subject.isAnatomie) {
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff}, Cr: ${subject.credits})</h3>
                ${Array.from({length: 3}, (_, i) => `
                    <div class="input-group">
                        <input type="number" placeholder="DS ${i+1}" id="anat_ds${index}_${i}">
                        <input type="number" placeholder="Exam ${i+1}" id="anat_exam${index}_${i}">
                    </div>
                `).join('')}
            `;
        } else if (subject.isDermatologie) {
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff}, Cr: ${subject.credits})</h3>
                <div class="input-group">
                    <input type="number" placeholder="DS" id="derm_ds${index}">
                    <input type="number" placeholder="Exam Dermatologie" id="derm_exam1${index}">
                    <input type="number" placeholder="Exam ORL" id="derm_exam2${index}">
                    <input type="number" placeholder="Exam Ophtalmo" id="derm_exam3${index}">
                </div>
            `;
        } else if (subject.isSpecialCase) {
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff}, Cr: ${subject.credits})</h3>
                <div class="input-group">
                    <input type="number" placeholder="DS" id="special_ds${index}">
                    <input type="number" placeholder="Exam 1" id="special_exam1${index}">
                    <input type="number" placeholder="Exam 2" id="special_exam2${index}">
                </div>
            `;
        } else if (subject.singleNote) {
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff}, Cr: ${subject.credits})</h3>
                <div class="input-group">
                    <input type="number" placeholder="Note" id="note_${index}">
                </div>
            `;
        } else {
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff}, Cr: ${subject.credits})</h3>
                <div class="input-group">
                    <input type="number" placeholder="DS Note" id="ds_${index}">
                    <input type="number" placeholder="Exam Note" id="exam_${index}">
                </div>
            `;
        }
        container.appendChild(card);
    });
}

const subjectsBySemester = {
    // ... (keep ALL the subject arrays EXACTLY as you have them, no changes needed here)
};

// Calculation function
function calculateAverage() {
    const semester = document.getElementById('semesterSelect').value;
    const subjects = subjectsBySemester[semester];
    let total = 0, totalCoeff = 0, totalCredits = 0, earnedCredits = 0;
    const warnings = [];
    const noControlSubjects = new Set([
        "Anglais médicale (2)", "Philosophie des sciences", "2CN (2)", 
        "Sociologie de la santé", "Technique de communication (2)", 
        "Système de santé", "Economie de la santé", "Méthodologie de la recherche (1)", 
        "Anglais médical (4)", "Anglais médical (1)", "Droit du patient", "2CN (1)",
        "Anglais médicale (1)", "Psychologie du développement social", 
        "Technique de communication (1)", "Santé et sécurité au travail", 
        "Soins infirmiers et handicap", "Soins infirmiers et santé de l'adolescent", 
        "Recherche documentaire", "Anglais médicale (3)", "Qualité et sécurité des soins", 
        "Méthodologie de la recherche (2)", "Statistiques"
    ]);

    // ... rest of the calculateAverage function remains EXACTLY THE SAME ...
    subjects.forEach((subject, index) => {
        // ... existing calculation logic ...
    });

    // ... existing result display logic ...
}

// ... rest of your code remains unchanged ...
        let rawAverage = 0;

        // Calculate average based on subject type
        if (subject.isAnatomie) {
            const averages = Array.from({length: 3}, (_, i) => {
                const ds = parseFloat(document.getElementById(`anat_ds${index}_${i}`).value) || 0;
                const exam = parseFloat(document.getElementById(`anat_exam${index}_${i}`).value) || 0;
                return (ds * 0.3) + (exam * 0.7);
            });
            rawAverage = averages.reduce((a,b) => a + b, 0) / 3;
        } 
        else if (subject.isDermatologie) {
            const ds = parseFloat(document.getElementById(`derm_ds${index}`).value) || 0;
            const exam1 = parseFloat(document.getElementById(`derm_exam1${index}`).value) || 0;
            const exam2 = parseFloat(document.getElementById(`derm_exam2${index}`).value) || 0;
            const exam3 = parseFloat(document.getElementById(`derm_exam3${index}`).value) || 0;
            rawAverage = (ds * 0.3) + ((exam1 + exam2 + exam3) / 3 * 0.7);
        } 
        else if (subject.isSpecialCase) {
            const ds = parseFloat(document.getElementById(`special_ds${index}`).value) || 0;
            const exam1 = parseFloat(document.getElementById(`special_exam1${index}`).value) || 0;
            const exam2 = parseFloat(document.getElementById(`special_exam2${index}`).value) || 0;
            rawAverage = (ds * 0.3) + ((exam1 + exam2) / 2 * 0.7);
        } 
        else if (subject.singleNote) {
            rawAverage = parseFloat(document.getElementById(`note_${index}`).value) || 0;
        } 
        else {
            const ds = parseFloat(document.getElementById(`ds_${index}`).value) || 0;
            const exam = parseFloat(document.getElementById(`exam_${index}`).value) || 0;
            rawAverage = (ds * 0.3) + (exam * 0.7);
        }

        // Credits calculation
        totalCredits += subject.credits;
        if (rawAverage >= 10) earnedCredits += subject.credits;

        // Control checks
        const threshold = subject.controlThreshold || 6;
        if (!subject.noControl && !noControlSubjects.has(subject.name) && rawAverage < threshold) {
            warnings.push(`Contrôle requis dans ${subject.name} (Note: ${rawAverage.toFixed(2)})`);
        }

        total += rawAverage * subject.coeff;
        totalCoeff += subject.coeff;
    });

    // Display results
    const finalAverage = total / totalCoeff;
    let resultHTML = `Moyenne Semestrielle: ${finalAverage.toFixed(2)}/20`;
    if (warnings.length > 0) {
        resultHTML += `<br><br><span class="warning">ATTENTION:</span><br>${warnings.join('<br>')}`;
    }

    document.getElementById('result').innerHTML = resultHTML;
    document.getElementById('creditsResult').innerHTML = 
        `Crédits Totaux: ${totalCredits}<br>Crédits Validés: ${earnedCredits}`;
}

// Initialize
document.addEventListener('DOMContentLoaded', createSubjectInputs);
document.getElementById('semesterSelect').addEventListener('change', createSubjectInputs);