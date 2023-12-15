document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.background-images img');
  let index = 0;

  function rotateBackground() {
      const activeImage = document.querySelector('.background-images img.active');
      activeImage.style.opacity = 0;

      index = (index + 1) % images.length;
      const nextImage = images[index];
      nextImage.style.opacity = 1;


      activeImage.classList.remove('active');
      nextImage.classList.add('active');
  }


  images[0].style.opacity = 1;
  images[0].classList.add('active');

  // Rotate the background every 8 seconds 
  setInterval(rotateBackground, 8000);
});



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



// SUBSCRIBE FUNCTION
function subscribe() {

// Shows the popup
const popup = document.getElementById('subscribePopup');
popup.style.display = 'block';

// Hides the popup after 5 seconds (1000 = 1s)
setTimeout(() => {
    popup.style.display = 'none';
}, 5000);
}



document.getElementById('subscribeButton').addEventListener('click', function (e) {
    e.preventDefault(); // Prevents the jump to the top of the page

    // Shows the popup
    document.getElementById('subscribePopup').style.display = 'block';

    
});



  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal
  function openModal(imageIndex) {
    var modalImage = document.getElementById("gallerymodalImage");
    var img = document.getElementsByClassName("galleryhover-shadow")[imageIndex - 1];
    modal.style.display = "block";
    modalImage.innerHTML = '<img src="' + img.src + '" alt="bike">';

    // Disable scrolling when the modal is open
    document.body.style.overflow = "hidden";
  }

  // Close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    // Enable scrolling when the modal is closed
    document.body.style.overflow = "auto";
  }

  // Close the modal if the overlay is clicked
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };