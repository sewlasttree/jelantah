document.addEventListener("DOMContentLoaded", () => {
   setTimeout( () => {
      // hideLoader();
      // showContent();
      showPage()
   }, 1000);

   // function hideLoader() {
   //    const loader = document.querySelector('#preloader');
   //    loader.style.display = 'none';
   // }

   // function showContent() {
   //    const content = document.querySelector('#status');
   //    content.style.display = 'block';
   // }

    function showPage() {
      document.querySelector("#preloader").style.opacity = 0;
      document.querySelector("#status").style.opacity = 1;
    }

});