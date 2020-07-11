//option 2 - JQuery Smooth Scroll

// we want to grab the links that are in the navbar (basically the different sections) this is the code to do so below:
// $(".navbar a").on("click", function (e) {
//   if (this.hash !== "") {
//     e.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800
//     );
//   }
// });

////option 3 -Smooth scroll Script
////this will work on any link but just chose to use the class navbar
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 800,
});
