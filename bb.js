
// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('#navmenu a');
//     const sections = document.querySelectorAll('main section');

//     // Function to hide all sections
//     function hideSections() {
//         sections.forEach(section => {
//             section.style.display = 'none'; // Hide all sections
//         });
//     }

//     // Function to show the selected section
//     function showSection(sectionId) {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             section.style.display = 'block'; // Show the selected section
//         }
//     }

//     navLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent default anchor behavior
//             const targetId = this.getAttribute('href').substring(1); // Get the target section ID

//             hideSections(); // Hide all sections
//             showSection(targetId); // Show the selected section
//         });
//     });
// });



function showSection(sectionId) {
    // Hide all sections
    const sections = ['hero', 'about', 'stats', 'skills', 'resume', 'portfolio', 'services', 'contact', 'testimonials'];
    sections.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}


