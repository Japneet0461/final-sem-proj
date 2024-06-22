const departmentName = 'Computer Science';
const uploadForm = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const captionInput = document.getElementById('caption');
const papersList = document.getElementById('papers-list');

const currDept = localStorage.getItem('departmentSelectedGlobal');

const pl = localStorage.getItem(currDept) || [];

document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const captionInput = document.getElementById('caption');
    const papersList = document.getElementById('papers-list');
    const noPapers = document.querySelector('.no-papers-yet');

    // Get the selected department name from local storage
    const currDept = localStorage.getItem('departmentSelectedGlobal');

    // Retrieve uploaded papers for the current department from local storage
    const papers = JSON.parse(localStorage.getItem(currDept)) || [];

    //papers that are currently added
    const localPapers = [];

    // Display existing papers for the current department
    displayPapers();

    // Listen for form submission
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const file = fileInput.files[0];
        const caption = captionInput.value;

        if (file && caption) {
            uploadPaper(file, caption);
        } else {
            alert('Please select a file and enter a caption.');
        }
    });

    // Function to upload paper
    function uploadPaper(file, caption) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;
            const paper = { imageUrl, caption };

            // Add the paper to the current department's list
            papers.push(paper);
            localPapers.push(paper);

            // Save the updated list to local storage
            localStorage.setItem(currDept, JSON.stringify(papers));

            // Display the new paper
            displayPaper(imageUrl, caption);

            // Hide the "no papers" message if papers exist
            if (papers.length > 0) {
                noPapers.classList.add('disp-none');
            }
        };
        reader.readAsDataURL(file);
    }

    // Function to display papers
    function displayPapers() {
        // Clear existing papers in the list
        papersList.innerHTML = '';

        // Display each paper
        localPapers.forEach(paper => {
            displayPaper(paper.imageUrl, paper.caption);
        });

    }

    // Function to display a single paper
    function displayPaper(imageUrl, caption) {
        const paperItem = document.createElement('div');
        paperItem.classList.add('paper-item');
        paperItem.innerHTML = `
            <img src="${imageUrl}" alt="Paper Image">
            <p><strong>Caption:</strong> ${caption}</p>
        `;
        papersList.appendChild(paperItem);
    }
});