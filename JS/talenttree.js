// Haal alle talent knooppunten op
const talentNodes = document.querySelectorAll('.talent-node');
let unlockedTalents = 0;

// Voeg een event listener toe aan elke talent knop
talentNodes.forEach((node, index) => {
    const button = node.querySelector('.talent-button');
    button.addEventListener('click', () => {
        // Controleer of het talent ontgrendeld kan worden
        if (unlockedTalents === index) {
            // Ontgrendel het talent knooppunt
            node.classList.remove('locked');
            node.classList.add('unlocked');
            button.textContent = 'unlocked';
            button.disabled = true;
            unlockedTalents++;
        }
    });
});