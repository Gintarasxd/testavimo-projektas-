
function initMap() {
    var lentvaris = {lat: 54.64783, lng: 25.04443};  
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: lentvaris,
        mapTypeId: 'roadmap'
    });
    var marker = new google.maps.Marker({
        position: lentvaris,
        map: map
    });
}

document.addEventListener("DOMContentLoaded", function() {
    if (typeof google !== 'undefined') {
        initMap();
    }
});



document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(function(item) {
        item.addEventListener('click', changeColorToBlue);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const leavesContainer = document.getElementById('leaves-container');
    
    for (let i = 0; i < 50; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.animationDuration = (5 + Math.random() * 5) + 's';
        leavesContainer.appendChild(leaf);
    }
});



