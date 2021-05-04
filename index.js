const accordionBtns = document.querySelectorAll('.accordion-btn');

const toggleActiveContent = function () {
    hiddenContents.forEach((content) => {
        content.classList.toggle('hidden-content-active');
    });
};

const toggleActiveArrow = function () {
    arrowIcons.forEach((icon) => {
        icon.classList.toggle('fa-chevron-down-active');
    });
};

accordionBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        const currentSection = e.target.closest('section');
        const currentContent = currentSection.querySelector('.hidden-content');
        const currentIcon = currentSection.querySelector('.fa-chevron-down');
        currentContent.classList.toggle('hidden-content-active');
        currentIcon.classList.toggle('fa-chevron-down-active');
    });
});
