document.addEventListener('DOMContentLoaded', function() {
  const bookmarks = document.querySelectorAll('.bookmark');
  
  bookmarks.forEach(bookmark => {
      bookmark.addEventListener('click', function() {
          // Si le marque-page est déjà actif, on le désactive
          if (this.classList.contains('active')) {
              this.classList.remove('active');
              return;
          }
          
          // Désactive tous les autres marque-pages
          bookmarks.forEach(b => b.classList.remove('active'));
          
          // Active le marque-page cliqué
          this.classList.add('active');
      });
  });
  
  // Ferme le contenu si on clique ailleurs sur la page
  document.addEventListener('click', function(event) {
      if (!event.target.closest('.bookmark')) {
          bookmarks.forEach(bookmark => bookmark.classList.remove('active'));
      }
  });

  // Gestion du quiz
  const correctAnswers = {
      q1: '2004',
      q2: '2009',
      q3: '91',
      q4: '2021',
      q5: '2022'
  };

  // Gestion de l'affichage des boutons de validation
  document.querySelectorAll('.options input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', function() {
          const question = this.closest('.question');
          const validateButton = question.querySelector('.validate-button');
          validateButton.style.display = 'block';
      });
  });

  // Gestion de la validation des réponses
  document.querySelectorAll('.validate-button').forEach(button => {
      button.addEventListener('click', function() {
          const questionId = this.dataset.question;
          const question = this.closest('.question');
          const selectedAnswer = question.querySelector(`input[name="${questionId}"]:checked`);
          const allOptions = question.querySelectorAll('.options label');
          const correctAnswer = correctAnswers[questionId];

          // Désactiver les inputs et le bouton
          question.querySelectorAll('input[type="radio"]').forEach(input => {
              input.disabled = true;
          });
          this.disabled = true;

          // Retirer les classes précédentes
          allOptions.forEach(option => {
              option.classList.remove('correct', 'incorrect');
          });

          // Marquer la réponse sélectionnée
          const selectedLabel = selectedAnswer.closest('label');
          if (selectedAnswer.value === correctAnswer) {
              selectedLabel.classList.add('correct');
          } else {
              selectedLabel.classList.add('incorrect');
              // Marquer la bonne réponse
              allOptions.forEach(option => {
                  const input = option.querySelector('input');
                  if (input.value === correctAnswer) {
                      option.classList.add('correct');
                  }
              });
          }
      });
  });

  // Scroll doux pour le bouton du quiz
  document.querySelector('.quiz-button').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#quiz').scrollIntoView({ behavior: 'smooth' });
  });
}); 