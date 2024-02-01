let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.querySelector('.btn-preview').onclick = (event) => {
        event.preventDefault();

        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');

        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });

        // Ajout de la logique pour fermer la carte lors du clic sur le bouton "fas fa-times"
        let closeButton = preveiwContainer.querySelector('.fa-times');
        if (closeButton) {
            closeButton.onclick = () => {
                previewBox.forEach(preview => {
                    preview.classList.remove('active');
                });
                preveiwContainer.style.display = 'none';
            };
        }
    };
});

// Ajout de la logique pour fermer la carte lors du clic sur le bouton "fas fa-times" dans chaque preview
previewBox.forEach(preview => {
    let closeButton = preview.querySelector('.fa-times');
    if (closeButton) {
        closeButton.onclick = () => {
            preview.classList.remove('active');
            preveiwContainer.style.display = 'none';
        };
    }
});

// Sélectionnez l'icône de fermeture du panier
let closeCartIcon = document.querySelector('.cart-sidebar .close');

// Ajoutez un événement de clic à l'icône de fermeture du panier
closeCartIcon.addEventListener('click', () => {
    closeCartSidebar();
});

// Fonction pour fermer la latérale droite du panier
function closeCartSidebar() {
    // Supprime la classe 'active' pour masquer la latérale droite
    cartSidebar.classList.remove('active');
}


