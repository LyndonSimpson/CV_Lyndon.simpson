document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('modal');
  var modalContent = document.getElementById('modal-image');
  var imgContainers = document.getElementsByClassName('img-container');

  for (var i = 0; i < imgContainers.length; i++) {
      imgContainers[i].addEventListener('click', function() {
          var image = this.querySelector('.image');
          modalContent.src = image.src;
          modal.style.display = 'block';
      });
  }

  var closeButton = document.getElementsByClassName('close-button')[0];
  closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
  });
});


