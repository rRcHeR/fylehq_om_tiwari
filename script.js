  // Get the modal
  var modal = document.getElementById("contactModal");

  // Get the button that opens the modal
  var btn = document.getElementById("contactUsBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }



  document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const projectImage = document.querySelectorAll('.project-image');

    projects.forEach((project, index) => {
        project.addEventListener('click', function() {
            // Remove active class from all projects
            projects.forEach(p => p.classList.remove('active'));
            // Add active class to the clicked project
            this.classList.add('active');

            // Change project image based on clicked project
            if (index === 0) {
                projectImage[0].classList.add ='active'
            } else if (index === 1) {
                projectImage[1].classList.add ='active'
            } else if (index === 2) {
                projectImage[2].classList.add ='active'
            }
        });
    });
});


