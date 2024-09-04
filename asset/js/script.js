function showSection(sectionId) {
    var sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block";
        var videos = selectedSection.querySelectorAll("video");
        videos.forEach(function(video) {
            video.setAttribute("playsinline", "");
            video.setAttribute("controls", "");
        });
    }
}

$(document).ready(function() {
    $('#character-form').submit(function(event) {
        event.preventDefault();
        var formData = new FormData($(this)[0]);
        $.ajax({
            url: 'php/handlebotform.php',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                alert(response);
            },
            error: function() {
                alert('An error occurred while processing your request.');
            }
        });
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
showSection("section1");

function toggleIframe(url) {
    var existingIframe = document.querySelector("iframe[src='" + url + "']");
    if (existingIframe) {
        existingIframe.parentNode.removeChild(existingIframe);
    } else {
        var iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.style.width = "100%";
        iframe.style.height = "750px";
        document.body.appendChild(iframe);
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateImages() {
    const images = document.querySelectorAll('.grid-item');
    images.forEach(image => {
        const randomNumber = getRandomNumber(1, 50);
        image.src = `asset/img/${randomNumber}.webp`;
    });
}
updateImages();
setInterval(updateImages, 4000);
let currentPage = 1;

function showNextPage() {
    const pageContainers = document.querySelectorAll('.page');
    if (currentPage < pageContainers.length) {
        pageContainers[currentPage - 1].classList.remove('active');
        currentPage++;
        pageContainers[currentPage - 1].classList.add('active');
        scrollToTop();
        updateButtonStates();
    }
}

function showPreviousPage() {
    const pageContainers = document.querySelectorAll('.page');
    if (currentPage > 1) {
        pageContainers[currentPage - 1].classList.remove('active');
        currentPage--;
        pageContainers[currentPage - 1].classList.add('active');
        scrollToTop();
        updateButtonStates();
    }
}

function updateButtonStates() {
    const nextButton = document.querySelector('.goonbutton:nth-child(3)');
    const previousButton = document.querySelector('.goonbutton:nth-child(4)');
    const pageContainers = document.querySelectorAll('.page');
    if (currentPage === pageContainers.length) {
        nextButton.classList.add('disabled');
        nextButton.disabled = true;
    } else {
        nextButton.classList.remove('disabled');
        nextButton.disabled = false;
    }
    if (currentPage === 1) {
        previousButton.classList.add('disabled');
        previousButton.disabled = true;
    } else {
        previousButton.classList.remove('disabled');
        previousButton.disabled = false;
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
document.querySelector('.page:first-child').classList.add('active');
updateButtonStates();

function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}