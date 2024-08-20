document.addEventListener("DOMContentLoaded", function() {
    const videoGrid = document.querySelector('.video-grid');

    // Liste des vidéos (vous pouvez également récupérer cela via l'API YouTube)
    const videos = [
        { title: "Dernière vidéo", id: "aCw3mhyY-Z8" },
        { title: "Avant dernière vidéo", id: "JZ4HomGZcy4" },
        { title: "Ce mois-ci", id: "CWypr3M3EKs" }
    ];

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>${video.title}</p>
        `;
        videoGrid.appendChild(videoElement);
    });
});