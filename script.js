document.addEventListener("DOMContentLoaded", () => {
    console.log("STG Gift Website Loaded");
  });

  /* review form logic*/
  function submitReview(event) {
    event.preventDefault();
  
    const name = document.getElementById("reviewerName").value.trim();
    const rating = document.getElementById("reviewRating").value;
    const reviewText = document.getElementById("reviewText").value.trim();
  
    if (!name || !rating || !reviewText) return;
  
    const stars = "⭐️".repeat(rating);
    const reviewHTML = `
      <div class="review-card">
        <h4>${stars} - ${name}</h4>
        <p>"${reviewText}"</p>
      </div>
    `;
  
    document.getElementById("submittedReviews").innerHTML = reviewHTML + document.getElementById("submittedReviews").innerHTML;
  
    // Clear form
    document.getElementById("reviewerName").value = "";
    document.getElementById("reviewRating").value = "";
    document.getElementById("reviewText").value = "";
  }

  /* filter system*/
function filterProducts(category, event) {
  const allProducts = document.querySelectorAll('.product');
  const buttons = document.querySelectorAll('.tab-btn');

  // Highlight active tab
  buttons.forEach(btn => btn.classList.remove('active'));
  if (event) event.target.classList.add('active');

  // Show/Hide products
  allProducts.forEach(product => {
    const tags = product.getAttribute('data-category');
    if (category === 'all' || (tags && tags.includes(category))) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
