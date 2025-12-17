// OPEN ORDER MODAL
function orderDish(dishName){
  const modal = document.getElementById("orderModal");
  const dishText = document.getElementById("orderDishName");
  if(modal && dishText){
    dishText.textContent = `You have successfully ordered: ${dishName}`;
    modal.style.display = "flex";
  }
}

// CLOSE ORDER MODAL
function closeOrder(){
  const modal = document.getElementById("orderModal");
  if(modal){
    modal.style.display = "none";
  }
}

// OPTIONAL: close modal on outside click
window.onclick = function(event){
  const modal = document.getElementById("orderModal");
  if(event.target === modal){
    closeOrder();
  }
}
// Contact Form Submission
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Show confirmation alert
    alert(`Thank you, ${name}!\n\nWe have received your message.\n\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);

    // Reset form
    contactForm.reset();
  });
}
