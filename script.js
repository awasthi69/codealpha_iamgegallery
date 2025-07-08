const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.lightbox-nav .prev');
const nextBtn = document.querySelector('.lightbox-nav .next');
const filterButtons = document.querySelectorAll('.filters button');

let currentIndex = 0;
let images = Array.from(galleryItems);

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox(img.src);
  });
});

function showLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.gallery-item').forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    images = Array.from(document.querySelectorAll('.gallery-item img'))
      .filter(img => img.closest('.gallery-item').style.display !== 'none');
  });
});
