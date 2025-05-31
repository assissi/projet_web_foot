document.addEventListener('DOMContentLoaded', function() {
  const flecheBtn = document.getElementById('flecheBtn');
  const resumeDeroulant = document.getElementById('resumeDeroulant');
  let ouvert = false;

  flecheBtn.addEventListener('click', function() {
    ouvert = !ouvert;
    if (ouvert) {
      resumeDeroulant.style.display = 'flex';
      flecheBtn.style.borderTopColor = '#4E8340';
    } else {
      resumeDeroulant.style.display = 'none';
      flecheBtn.style.borderTopColor = '#eee';
    }
  });
}); 