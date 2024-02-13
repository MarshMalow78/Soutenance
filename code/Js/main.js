let favoriteCount = 0;

document.addEventListener('DOMContentLoaded', function () {
    // Ajoutez des écouteurs d'événements pour les boutons de filtrage
    document.querySelector('.filter-btn[data-house="gryffindor"]').addEventListener('click', function () {
        filterCards('gryffindor');
    });

    document.querySelector('.filter-btn[data-house="hufflepuff"]').addEventListener('click', function () {
        filterCards('hufflepuff');
    });

    document.querySelector('.filter-btn[data-house="ravenclaw"]').addEventListener('click', function () {
        filterCards('ravenclaw');
    });

    document.querySelector('.filter-btn[data-house="slytherin"]').addEventListener('click', function () {
        filterCards('slytherin');
    });

    document.querySelector('.filter-btn[data-house="all"]').addEventListener('click', function () {
        showAllCards();
    });
    
});

function filterCards(house) {
    // Masquer toutes les cartes
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.display = 'none');

    // Afficher seulement les cartes de la maison sélectionnée
    const houseCards = document.querySelectorAll(`.card.${house}`);
    houseCards.forEach(card => card.style.display = 'block');

    // Appliquer le fond en fonction de la maison
    document.body.className = `${house}-bg`;
}

function showAllCards() {
    // Afficher toutes les cartes
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.display = 'block');

    // Rétablir le fond gris
    document.body.className = '';
}



function toggleFilterModal() {
    const modal = document.getElementById('filter-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

function applyHouseFilter() {
    const selectedHouse = document.getElementById('house-choice').value;
    toggleFilterModal(); // Fermez la modal

    // Appliquez le filtre de la maison
    if (selectedHouse === 'all') {
        showAllCards();
    } else {
        filterCards(selectedHouse);
    }
}

function toggleModal() {
    const modal = document.getElementById('exchange-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

function performExchange() {
    // Ajoutez votre logique d'échange de cartes ici
    console.log('Échange de cartes effectué !');

    // Fermez la modal après l'échange
    toggleModal();
}



function toggleFavorite(button) {
    // Inversez la classe "favori" pour le bouton
    button.classList.toggle('favori');

    // Changez la couleur du bouton en fonction de l'état favori/non favori
    const isFavorite = button.classList.contains('favori');
    button.style.backgroundColor = isFavorite ? '#8a2be2' : '#ddd'; // Violet ou gris clair
}