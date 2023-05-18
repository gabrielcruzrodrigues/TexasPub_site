document.addEventListener('DOMContentLoaded', function() {
    let lazyImages = document.querySelectorAll('img[data-src]');

    for (let i = 0; i < lazyImages.length; i++) {
        lazyImages[i].setAttribute('src', lazyImages[i].getAttribute('data-src'));
        lazyImages[i].removeAttribute('data-src');
    };
});