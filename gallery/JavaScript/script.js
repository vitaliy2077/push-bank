   const images = Array.from(document.querySelectorAll('.gallery_img'));
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    function showImage(index) {
      currentIndex = index;
      lightboxImg.src = images[index].src;
      lightbox.classList.remove('hidden');
    }

    function closeLightbox() {
      lightbox.classList.add('hidden');
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    images.forEach((img, index) => {
      img.addEventListener('click', () => showImage(index));
    });

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    });