document.addEventListener("DOMContentLoaded", () => {
   setTimeout( () => {
      hideLoader();
      showContent();
   }, 2000);

   function hideLoader() {
      const loader = document.querySelector('#preloader');
      loader.style.display = 'none';
   }

   function showContent() {
      const content = document.querySelector('#status');
      content.style.display = 'block';
   }
});