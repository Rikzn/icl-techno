import { gsap } from "gsap";

export default function() {
    const faqAccordeons = Array.from(document.querySelectorAll('.js-accordeon'));

    faqAccordeons.forEach(accordeon => {
        const btn = accordeon.querySelector('.js-accordeon-btn');
        const content = accordeon.querySelector('.js-accordeon-content');
        let accordeonOpen = false;

        if (!btn || !content) {
            console.error('No button or content for accordeon');
            return;
        }

        btn.addEventListener('click', function(event) {
            event.preventDefault();
            accordeon.classList.toggle('active');
            if (!accordeonOpen) {
                gsap.set(content, { clearProps: 'all' });
                gsap.set(content, { height: 'auto' });
                gsap.from(content, 0.4, { height: 0 });
                accordeonOpen = true;
            } else {
                gsap.set(content, { clearProps: 'all' });
                gsap.set(content, { height: 'auto' });
                gsap.to(content, 0.4, { height: 0 });
                accordeonOpen = false;
            }
        });
    });
}
