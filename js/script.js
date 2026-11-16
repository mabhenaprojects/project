const courses = [
  { id: 1, title: "Web Dev",
    desc: "HTML, CSS, JS." },
  { id: 2, title: "Databases",
    desc: "Master SQL." },
  { id: 3, title: "Mobile Apps",
    desc: "Build apps." },
 
];

const list = document.getElementById("course-list");

function renderCourses(items) {

    list.innerHTML = "";

    for (const c of items) {

        const card = document.createElement("article");

        card.className = "course-card";

        card.innerHTML =
            `<h3>${c.title}</h3>
             <p>${c.desc}</p>`;

        list.appendChild(card);

    }

}
renderCourses(courses);

const searchBox = document.getElementById("search");
const noResults = document.getElementById("no-results");
 
function searchCourses() {
  const term = searchBox.value.toLowerCase().trim();
 
  const matches = courses.filter(c =>
    c.title.toLowerCase().includes(term)
  );
 
  renderCourses(matches);
  noResults.hidden = matches.length > 0;
}
 
searchBox.addEventListener("input", searchCourses);
