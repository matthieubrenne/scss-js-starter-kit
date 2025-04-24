//--------------------------------------------------------------------//
//                       js/animations.js                             //
//    Ce fichier gère l’application d’animations CSS via JavaScript,  //
//   par exemple pour déclencher les animations au scroll ou au clic. //
//                                                                    //
//                   Exemple d’élément à animer                       //
//                 <div data-animation="fade-in">                     //
//                      Contenu qui apparaîtra en fondu.              //
//                 </div>                                             //
//--------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne tous les éléments avec la classe data-animation
    const animatedElements = document.querySelectorAll("[data-animation]");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // déclenche quand 10% de l’élément est visible
    };

    // Callback pour IntersectionObserver
    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.dataset.animation;
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target); // n’anime qu’une fois
            }
        });
    };

    const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
    );

    animatedElements.forEach((el) => {
        observer.observe(el);
    });
});
