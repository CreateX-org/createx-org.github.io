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

function scroll_into_view() { document.getElementById('features').scrollIntoView({ behavior: 'smooth' }) };