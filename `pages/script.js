const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = galleryImages.length - 1;
  if (currentIndex >= galleryImages.length) currentIndex = 0;
  lightboxImg.src = galleryImages[currentIndex].src;
}

function filterImages(category) {
  galleryImages.forEach(img => {
    const match = img.getAttribute('data-category');
    img.style.display = (category === 'all' || category === match) ? 'block' : 'none';
  });
}

// Close lightbox on background click
lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});