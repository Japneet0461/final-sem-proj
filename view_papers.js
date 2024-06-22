let getHeading = localStorage.getItem('departmentSelectedGlobal');
let noPapers = document.querySelector('.no-papers-yet');
const papersList = document.getElementById('papers-list');


document.addEventListener('DOMContentLoaded', function() {
    const departmentNameElement = document.getElementById('department-name');

    // Get the selected department name from local storage
    const getHeading = localStorage.getItem('departmentSelectedGlobal');

    // Set department name in the header
    departmentNameElement.textContent = getHeading + ' Papers';

    // Retrieve uploaded papers for the selected department from local storage
    const uploadedPapers = JSON.parse(localStorage.getItem(getHeading)) || [];

    if(uploadedPapers.length > 0){
        noPapers.classList.add('disp-none');
    }else{
        if(noPapers.classList.contains('disp-none')){
            noPapers.classList.remove('disp-none');
        }
    }

    // Display uploaded papers
    uploadedPapers.forEach(paper => {
        displayPaper(paper.imageUrl, paper.caption);
    });
});

function displayPaper(imageUrl, caption) {
    const paperItem = document.createElement('div');
    paperItem.classList.add('paper-item');
    paperItem.innerHTML = `
        <img src="${imageUrl}" alt="Paper Image">
        <p><strong>Caption:</strong> ${caption}</p>
    `;
    papersList.appendChild(paperItem);
}