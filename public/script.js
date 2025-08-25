document.addEventListener("DOMContentLoaded", () => {
  console.log("Lapcomps IT Service Website Loaded ✅");
  
  // Example simple form handler
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting Lapcomps! We'll get back to you soon.");
    form.reset();
  });
});
