// script.js
const subjectsBySemester = {
    1: [
        { name: "Anatomie physiologie 1", coeff: 2.5, isAnatomie: true },
        { name: "Déontologie éthique", coeff: 1 },
        { name: "Discipline infirmière", coeff: 1.5 },
        { name: "Microbiologie", coeff: 1 },
        { name: "Techniques infirmières", coeff: 1.5, singleNote: true },
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
        { name: "Techniques infirmières 2", coeff: 2, singleNote: true },
        { name: "Relation d'aide", coeff: 2 },
        { name: "Démarche de soins 2", coeff: 2 },
        { name: "Anglais 2", coeff: 1 },
        { name: "Sémantique des soins", coeff: 1 }
    ],
    3: [
        { name: "Soins adultes 1", coeff: 3 },
        { name: "Soins neurologiques", coeff: 1.5 },
        { name: "Soins pédiatriques", coeff: 2 },
        { name: "Techniques infirmières 3", coeff: 1.5, singleNote: true },
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

// Rest of the JavaScript code remains the same as previous version
// [Include the createSubjectInputs, calculateAverage, and event listeners from previous answer]
// (Note: Due to character limits, full JS code is maintained in previous response)