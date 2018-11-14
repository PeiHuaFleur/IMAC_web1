const siteTitle = document.querySelector('#site-title');
// semicolon is not mandatory here
const siteTitle2 = document.querySelectorAll('#p-grid');
console.log(siteTitle);

siteTitle2.forEach(elm => console.log(elm.innerHTML));
