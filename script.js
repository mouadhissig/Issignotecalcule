const subjectsBySemester = {
    1: [
        { name: "Anatomie-physiologie 1", coeff: 2.5, credits: 5, isAnatomie: true },
        { name: "Introduction à la Discipline infirmière", coeff: 1.5, credits: 3 },
        { name: "Déontologie-Ethique", coeff: 1, credits: 2 },
        { name: "Psychologie du développement social", coeff: 1, credits: 2, singleNote: true },
        { name: "Technique de Communication 1", coeff: 1, credits: 2 },
        { name: "Techniques infirmières 1", coeff: 1.5, credits: 3, singleNote: true, controlThreshold: 8 },
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
        { name: "Stage hospitalier en médecine-chirurgie 1", coeff: 2, credits: 4, singleNote: true },
        { name: "Biologie clinique", coeff: 0.5, credits: 1 },
        { name: "Anatomie-Physiologie 2", coeff: 1.5, credits: 3, isAnatomie: true },
        { name: "Pharmacologie 1", coeff: 1, credits: 2 },
        { name: "Techniques infirmières 2", coeff: 1, credits: 2, singleNote: true, controlThreshold: 8 },
        { name: "Relation d'aide", coeff: 1, credits: 2 },
        { name: "Hygiène et environnement", coeff: 1, credits: 2 },
        { name: "Soins à la mère et au nouveau-né", coeff: 1, credits: 2 },
        { name: "Anglais médical 2", coeff: 1, credits: 2 },
        { name: "2CN 2", coeff: 1, credits: 2 }
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
            // Special case: Only one input for "Techniques infirmières" or "Stage"
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff}, Cr: ${subject.credits})</h3>
                <div class="input-group">
                    <input type="number" min="0" max="20" step="0.01" placeholder="Note" id="note_${index}">
                </div>
            `;
        } else {
            // Normal case: DS and Exam inputs
            card.innerHTML = `
                <h3>${subject.name} (Coeff: ${subject.coeff}, Cr: ${subject.credits})</h3>
                <div class="input-group">
                    <input type="number" min="0" max="20" step="0.01" placeholder="DS Note" id="ds_${index}">
                    <input type="number" min="0" max="20" step="0.01" placeholder="Exam Note" id="exam_${index}">
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

        if (subject.isAnatomie) {
            // Anatomie special case
            const ds1 = parseFloat(document.getElementById(`ds1_${index}`).value) || 0;
            const exam1 = parseFloat(document.getElementById(`exam1_${index}`).value) || 0;
            const ds2 = parseFloat(document.getElementById(`ds2_${index}`).value) || 0;
            const exam2 = parseFloat(document.getElementById(`exam2_${index}`).value) || 0;
            const ds3 = parseFloat(document.getElementById(`ds3_${index}`).value) || 0;
            const exam3 = parseFloat(document.getElementById(`exam3_${index}`).value) || 0;

            const avg1 = (ds1 * 0.3) + (exam1 * 0.7);
            const avg2 = (ds2 * 0.3) + (exam2 * 0.7);
            const avg3 = (ds3 * 0.3) + (exam3 * 0.7);
            rawAverage = (avg1 + avg2 + avg3) / 3;
        } else if (subject.singleNote) {
            // Single note subjects
            rawAverage = parseFloat(document.getElementById(`note_${index}`).value) || 0;
        } else {
            // Normal subjects
            const ds = parseFloat(document.getElementById(`ds_${index}`).value) || 0;
            const exam = parseFloat(document.getElementById(`exam_${index}`).value) || 0;
            rawAverage = (ds * 0.3) + (exam * 0.7);
        }

        // Calculate contribution and credits
        contribution = rawAverage * subject.coeff;
        total += contribution;
        totalCoeff += subject.coeff;
        totalCredits += subject.credits;

        if (rawAverage >= 10) {
            earnedCredits += subject.credits;
        }

        // Check for controls
        const threshold = subject.controlThreshold || 6; // Default is 6, except for Techniques infirmières (8)
        if (rawAverage < threshold && !excludedSubjects.has(subject.name)) {
            warnings.push(`Contrôle dans ${subject.name}`);
        }
    });

    const finalAverage = total / totalCoeff;
    let resultHTML = `Moyenne Semestrielle: ${finalAverage.toFixed(2)}/20`;
    
    if (warnings.length > 0) {
        resultHTML += `<br><br><span style="color: #dc2626;">Attention:</span><br>${warnings.join('<br>')}`;
    }

    document.getElementById('result').innerHTML = resultHTML;
    document.getElementById('creditsResult').innerHTML = 
        `Crédits Totaux: ${totalCredits}<br>Crédits Obtenus: ${earnedCredits}`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', createSubjectInputs);
document.getElementById('semesterSelect').addEventListener('change', createSubjectInputs);