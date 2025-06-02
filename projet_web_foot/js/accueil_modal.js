document.addEventListener('DOMContentLoaded', function() {
  const modalTemplateRight = document.getElementById('reduction-impot-modal-template');
  const modalTemplateLeft = document.getElementById('deuxieme-modal-template');
  let modalOverlayRight = null; // Variable pour stocker l'overlay de la modale droite
  let modalOverlayLeft = null; // Variable pour stocker l'overlay de la modale gauche

  // Fonction pour afficher la modale droite
  function showModalRight() {
    if (modalTemplateRight && !modalOverlayRight) { // Vérifie si le template existe et si la modale n'est pas déjà affichée
      const modalContent = modalTemplateRight.content.cloneNode(true);
      modalOverlayRight = modalContent.querySelector('.modal-overlay'); // Stocke l'overlay

      document.body.appendChild(modalContent); // Ajoute la modale au body

      // Récupère le bouton de fermeture une fois la modale ajoutée au DOM
      const closeButton = modalOverlayRight.querySelector('.modal-close');
      closeButton.addEventListener('click', hideModalRight);

      // Optionnel: Fermer la modale en cliquant en dehors du contenu
      modalOverlayRight.addEventListener('click', function(event) {
        if (event.target === modalOverlayRight) {
          hideModalRight();
        }
      });

      // Affiche la modale
      modalOverlayRight.style.display = 'block'; // Utiliser 'block' ou 'flex' selon le besoin CSS
    }
  }

  // Fonction pour cacher la modale droite
  function hideModalRight() {
    if (modalOverlayRight) {
      modalOverlayRight.style.display = 'none';
      // Optionnel: Supprimer la modale du DOM pour nettoyer
      // modalOverlayRight.remove();
      // modalOverlayRight = null; // Réinitialise la variable
    }
  }

  // Fonction pour afficher la modale gauche
  function showModalLeft() {
    if (modalTemplateLeft && !modalOverlayLeft) { // Vérifie si le template existe et si la modale n'est pas déjà affichée
      const modalContent = modalTemplateLeft.content.cloneNode(true);
      modalOverlayLeft = modalContent.querySelector('.modal-overlay-left'); // Stocke l'overlay

      document.body.appendChild(modalContent); // Ajoute la modale au body

      // Récupère le bouton de fermeture une fois la modale ajoutée au DOM
      const closeButton = modalOverlayLeft.querySelector('.modal-close');
      closeButton.addEventListener('click', hideModalLeft);

      // Optionnel: Fermer la modale en cliquant en dehors du contenu
      modalOverlayLeft.addEventListener('click', function(event) {
        if (event.target === modalOverlayLeft) {
          hideModalLeft();
        }
      });

      // Affiche la modale
      modalOverlayLeft.style.display = 'block'; // Utiliser 'block' ou 'flex' selon le besoin CSS
    }
  }

  // Fonction pour cacher la modale gauche
  function hideModalLeft() {
    if (modalOverlayLeft) {
      modalOverlayLeft.style.display = 'none';
      // Optionnel: Supprimer la modale du DOM pour nettoyer
      // modalOverlayLeft.remove();
      // modalOverlayLeft = null; // Réinitialise la variable
    }
  }

  // Attendre 10 secondes (10000 millisecondes) avant d'afficher la modale droite
  setTimeout(showModalRight, 10000);

  // Attendre 15 secondes (15000 millisecondes) avant d'afficher la modale gauche
  setTimeout(showModalLeft, 17000);
}); 