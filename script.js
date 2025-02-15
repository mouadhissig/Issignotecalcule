const subjectsBySemester = {
    1: [
        { name: "Anatomie-physiologie 1", coeff: 2.5, credits: 5, isAnatomie: true },
        { name: "Déontologie-Ethique", coeff: 1, credits: 2 },
        { name: "soin dan la Communauté", coeff: 1, credits: 2 },
        { name: "démarche de soins", coeff: 1.5, credits: 3 },
        { name: "microbiologie", coeff: 1, credits: 2 },
        { name: "Introduction à la Discipline infirmière", coeff: 1.5, credits: 3 },
        { name: "Psychologie du développement social", coeff: 1, credits: 2 }, // 2 notes
        { name: "Techniques infirmières 1", coeff: 1.5, credits: 3, singleNote: true, controlThreshold: 8 },
        { name: "Anglais médical (1)", coeff: 1, credits: 2, noControl: true },
        { name: "Droit du patient", coeff: 1, credits: 2, noControl: true },
        { name: "2CN (1)", coeff: 1, credits: 2, noControl: true },
        { name: "Technique de communication (1)", coeff: 1, credits: 2, noControl: true }
    ],
    2: [
        { name: "Philosophie des sciences", coeff: 1, credits: 2, noControl: true },
        { name: "Sociologie de la santé", coeff: 1, credits: 2, noControl: true },
        { name: "Techniques de communication (2)", coeff: 1, credits: 2, noControl: true },
        { name: "2CN (2)", coeff: 1, credits: 2, noControl: true },
        { name: "Anglais médical (2)", coeff: 1, credits: 2, noControl: true },
        { name: "Initiation aux premiers secours", coeff: 1, credits: 2, singleNote: true, controlThreshold: 8 },
        { name: "Stage hospitalier en médecine-chirurgie", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 }
    ],
    3: [
        { name: "Santé et sécurité au travail", coeff: 1, credits: 2, noControl: true },
        { name: "Soins infirmiers et handicap", coeff: 0.5, credits: 1, noControl: true },
        { name: "Soins infirmiers et santé de l'adolescent", coeff: 0.5, credits: 1, noControl: true },
        { name: "Recherche documentaire", coeff: 1, credits: 2, noControl: true },
        { name: "Anglais médical (3)", coeff: 1, credits: 2, noControl: true },
        { name: "Examen Pratique Pédiatrie", coeff: 1.5, credits: 3, singleNote: true, controlThreshold: 10 },
        { name: "Examen Pratique Médecine", coeff: 1.5, credits: 3, singleNote: true, controlThreshold: 10 }
    ],
    4: [
        { name: "Système de santé", coeff: 1, credits: 2, noControl: true },
        { name: "Économie de la santé", coeff: 1, credits: 2, noControl: true },
        { name: "Soins infirmiers en endocrinologie et diététique nutrition", coeff: 1.5, credits: 3 },
        { name: "Soins infirmiers en pathologie digestive", coeff: 1, credits: 2 },
        { name: "Soins infirmiers en situations critiques", coeff: 1.5, credits: 3 },
        { name: "Soins infirmiers en uro-néphrologie et hémodialyse", coeff: 1.5, credits: 3 },
        { name: "Soins infirmiers en Orthopédie", coeff: 1, credits: 2 },
        { name: "Soins infirmiers en gynéco-obstétrique", coeff: 1.5, credits: 3 },
        { name: "Anglais médical (4)", coeff: 1, credits: 2, noControl: true },
        { name: "Méthodologie de la recherche (1)", coeff: 1, credits: 2, noControl: true }
    ],
    5: [
        { name: "Bloc Opératoire", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 },
        { name: "Soins Critiques", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 },
        { name: "Qualité et sécurité des soins", coeff: 1, credits: 2, noControl: true },
        { name: "Méthodologie de la recherche (2)", coeff: 1, credits: 2, noControl: true },
        { name: "Statistiques", coeff: 0.5, credits: 1, noControl: true }
    ],
    6: [
        { name: "Projet fin d'étude", coeff: 7, credits: 14, singleNote: true, controlThreshold: 10 },
        { name: "Stage d'intégration", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 },
        { name: "Rapport hémodialyse", coeff: 1.5, credits: 3, singleNote: true, controlThreshold: 10 },
        { name: "Rapport Dispensaire", coeff: 2, credits: 4, singleNote: true, controlThreshold: 10 },
        { name: "TD santé mentale", coeff: 1.5, credits: 3, singleNote: true, controlThreshold: 10 }
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

// Calculation function
function calculateAverage() {
    const semester = document.getElementById('semesterSelect').value;
    const subjects = subjectsBySemester[semester];
    let total = 0, totalCoeff = 0, totalCredits = 0, earnedCredits = 0;
    const warnings = [];
    const noControlSubjects = new Set([
        "Anglais médical (1)", "Droit du patient", "2CN (1)", "Psychologie du développement social",
        "Technique de communication (1)", "Philosophie des sciences", "Sociologie de la santé",
        "Technique de communication (2)", "2CN (2)", "Anglais médical (2)", "Santé et sécurité au travail",
        "Soins infirmiers et handicap", "Soins infirmiers et santé de l'adolescent", "Recherche documentaire",
        "Anglais médical (3)", "Système de santé", "Économie de la santé", "Anglais médical (4)",
        "Méthodologie de la recherche (1)", "Qualité et sécurité des soins", "Méthodologie de la recherche (2)", "Statistiques"
    ]);

    subjects.forEach((subject, index) => {
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