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

        // fermer la carte lors du clic sur le bouton "fas fa-times"
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

// Sélectionnez l'icône de fermeture du panier
let closeCartIcon = document.querySelector('.cart-sidebar .close');

// événement de clic à l'icône de fermeture du panier
closeCartIcon.addEventListener('click', () => {
    closeCartSidebar();
});

// Fonction pour fermer le panier
function closeCartSidebar() {
    let cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.style.display = 'none';
    // Vous pouvez également ajouter d'autres logiques ici si nécessaire
}

