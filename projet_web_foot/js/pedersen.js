document.addEventListener('DOMContentLoaded', function() {
    // Gestion des marque-pages
    const bookmarks = document.querySelectorAll('.bookmark');
    bookmarks.forEach(bookmark => {
        bookmark.addEventListener('click', function() {
            // Retirer la classe active de tous les marque-pages
            bookmarks.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au marque-page cliqué
            this.classList.add('active');
        });
    });

    // Gestion du quiz
    const questions = document.querySelectorAll('.question');
    const correctAnswers = {
        'q1': 'fortuna',
        'q2': '2016',
        'q3': 'premier-but',
        'q4': 'humanitaire',
        'q5': '135'
    };

    // Afficher les boutons de validation quand une réponse est sélectionnée
    questions.forEach(question => {
        const radios = question.querySelectorAll('input[type="radio"]');
        const validateButton = question.querySelector('.validate-button');
        
        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                validateButton.style.display = 'block';
            });
        });
    });

    // Gestion de la validation des questions
    const validateButtons = document.querySelectorAll('.validate-button');
    validateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const questionName = this.dataset.question;
            const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
            
            if (selectedAnswer) {
                const labels = this.parentElement.querySelectorAll('label');
                labels.forEach(label => {
                    const radio = label.querySelector('input[type="radio"]');
                    radio.disabled = true;
                    
                    if (radio.value === correctAnswers[questionName]) {
                        label.classList.add('correct');
                    } else if (radio === selectedAnswer) {
                        label.classList.add('incorrect');
                    }
                });
                
                this.style.display = 'none';
            }
        });
    });
}); 