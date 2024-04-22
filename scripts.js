const scrollHandler = entries => {
    // Find the first entry which intersecting and ratio > 0.9 to highlight.
    let entry = entries.find(entry => {
        return entry.isIntersecting && entry.intersectionRatio > 0.9;
    });
    if (!entry) return;

    document.querySelectorAll(".toc a").forEach((item) => {
        item.classList.remove("active");
    });

    // let url = new URL(`#${entry.target.id}`);
    let link = document.querySelector(`.toc a[href$="${decodeURIComponent(`#${entry.target.id}`)}"]`)
    if (link) {
        link.classList.add("active");
        link.scrollIntoView({ behavior: "auto", block: "nearest" });
    }
};
// Set -100px root margin to improve highlight experience.
const observer = new IntersectionObserver(scrollHandler, { threshold: 1 });
let items = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
items.forEach(item => observer.observe(item));

function scroll_into_view() { document.getElementsByTagName('main')[0].scrollIntoView(true)};

(function() {
    // Find all the elements on the page that use class="m-protected"
    var allElements = document.getElementsByClassName('m-protected');

    // Loop through all the elements, and update them
    for (var i = 0; i < allElements.length; i++) {
        // fetch the hex-encoded string from the href property
        var encoded = allElements[i].getAttribute('href');

        // decode the email address
        var decoded = atob(encoded.substring(1));

        // Set the link to be a "mailto:" link
        allElements[i].href = 'mailto:' + decoded;

    }

    allElements = document.getElementsByClassName('m-protected-innertext');

    // Loop through all the elements, and update them
    for (var i = 0; i < allElements.length; i++) {  
        encoded = allElements[i].innerText;
    
        // decode the email address
        decoded = atob(encoded.substring(1));
    
        // Replace the innerText
        allElements[i].innerText = decoded;
    }

    // same for phone
     // Find all the elements on the page that use class="m-protected"
     var allElements = document.getElementsByClassName('p-protected');

     // Loop through all the elements, and update them
     for (var i = 0; i < allElements.length; i++) {
         // fetch the hex-encoded string from the href property
         var encoded = allElements[i].getAttribute('href');
 
         // decode the email address
         var decoded = atob(encoded.substring(1));
 
         // Set the link to be a "mailto:" link
         allElements[i].href = 'tel:' + decoded;
 
     }
 
     allElements = document.getElementsByClassName('p-protected-innertext');
 
     // Loop through all the elements, and update them
     for (var i = 0; i < allElements.length; i++) {  
         encoded = allElements[i].innerText;
     
         // decode the email address
         decoded = atob(encoded.substring(1));
     
         // Replace the innerText
         allElements[i].innerText = decoded;
     }
        
})();
