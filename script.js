// Dark Mode Toggle
const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');
const darkModeIcons = document.querySelectorAll('.dark-mode-icon');

// Check for saved dark mode preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Update icon based on current theme
function updateDarkModeIcon() {
  const isDark = document.body.classList.contains('dark-mode');
  darkModeIcons.forEach(icon => {
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
  });
  lucide.createIcons();
}

// Initialize icons first
lucide.createIcons();

// Then update dark mode icon
updateDarkModeIcon();

// Toggle dark mode
darkModeToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateDarkModeIcon();
  });
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const searchInput = document.getElementById("searchInput");
const subjectsGrid = document.getElementById("subjectsGrid");
const resourcesGrid = document.getElementById("resourcesGrid");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

const subjects = [
  {
    name: "Kinesiology",
    icon: "users",
    color: "from-blue-500 to-cyan-500",
    description: "Study of human movement and performance",
    page: "kinesiology.html",
    analysisPage: "kinesiology-analysis.html",
    image: "https://github.com/AxolotlBagel82/StudyZone/blob/main/Kinesiology.jpeg?raw=true"
  },
  {
    name: "Biology",
    icon: "heart",
    color: "from-green-500 to-emerald-500",
    description: "Study of living organisms",
    page: "biology.html",
    analysisPage: "biology-analysis.html",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0qkhgdNq6WJYP5JeV2ZaDa2dN2NPcasfxw&s"
  },
  {
    name: "Chemistry",
    icon: "flask-conical",
    color: "from-purple-500 to-fuchsia-500",
    description: "Study of matter and reactions",
    page: "chemistry.html",
    analysisPage: "chemistry-analysis.html",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKyMd088AowWZ1f9oFh6GnfZqnii84ln6BA&s"
  },
  {
    name: "Anatomy & Physiology",
    icon: "eye",
    color: "from-orange-500 to-red-500",
    description: "Study of body structure and biological function",
    page: "anatomy-physiology.html",
    analysisPage: "anatomy-physiology-analysis.html",
    image: "https://media.sciencephoto.com/f0/26/56/26/f0265626-800px-wm.jpg"
  },
  {
    name: "Physics",
    icon: "atom",
    color: "from-indigo-500 to-purple-600",
    description: "Study of matter, energy, and forces",
    page: "physics.html",
    analysisPage: "physics-analysis.html",
    image: "https://www.environmentalscience.org/wp-content/uploads/2018/08/physics-300x300.jpg"
  },
  {
    name: "Medical Terminology",
    icon: "file-text",
    color: "from-teal-500 to-cyan-500",
    description: "Language of healthcare and medicine",
    page: "medical-terminology.html",
    analysisPage: "medical-terminology-analysis.html",
    image: "https://www.ed2go.com/common/images/2/22571/B8719-Medical-Terminology-Series-935x572.jpg"
  },
  {
    name: "Psychology",
    icon: "brain",
    color: "from-pink-500 to-rose-500",
    description: "Study of mind and behavior",
    page: "psychology.html",
    analysisPage: "psychology-analysis.html",
    image: "https://www.simplypsychology.org/wp-content/uploads/psychology.jpeg"
  },
  {
    name: "Nutrition",
    icon: "apple",
    color: "from-yellow-500 to-amber-500",
    description: "Study of food and its effects on health",
    page: "nutrition.html",
    analysisPage: "nutrition-analysis.html",
    image: "https://magazine.einsteinmed.edu/wp-content/uploads/sites/4/2024/10/SF24-Food-Header-Full-FPO-2.jpg"
  }
];

const resources = [
  { title: "Interactive Flashcards", description: "Spaced repetition learning" },
  { title: "Practice Quizzes", description: "Timed assessments" },
  { title: "3D Anatomy Models", description: "Explore anatomy visually" }
];

function renderSubjects(filter = "") {
  if (!subjectsGrid) return;
  
  subjectsGrid.innerHTML = "";

  subjects
    .filter(s => s.name.toLowerCase().includes(filter))
    .forEach((subject, index) => {
      subjectsGrid.innerHTML += `
        <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col h-full">
          <div class="h-32 bg-gradient-to-r ${subject.color} flex items-center justify-center relative overflow-hidden flex-shrink-0">
            <i data-lucide="${subject.icon}" class="w-8 h-8 text-white"></i>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold mb-2">${subject.name}</h3>
            <p class="text-gray-600 mb-4 flex-grow">${subject.description}</p>
            <div class="flex flex-col gap-2 mt-auto">
              <button class="analysis-btn w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition" data-subject-index="${index}">
                In Depth Analysis
              </button>
            </div>
          </div>
        </div>
      `;
    });

  lucide.createIcons();
  
  // Add event listeners to study buttons
  document.querySelectorAll('.study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const subjectIndex = parseInt(e.target.getAttribute('data-subject-index'));
      window.location.href = subjects[subjectIndex].page;
    });
  });
  
  // Add event listeners to analysis buttons
  document.querySelectorAll('.analysis-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const subjectIndex = parseInt(e.target.getAttribute('data-subject-index'));
      if (subjects[subjectIndex].analysisPage) {
        window.location.href = subjects[subjectIndex].analysisPage;
      }
    });
  });
}

function renderResources() {
  if (!resourcesGrid) return;
  
  resourcesGrid.innerHTML = "";
  resources.forEach(res => {
    resourcesGrid.innerHTML += `
      <div class="p-6 bg-blue-50 rounded-xl">
        <h3 class="font-semibold text-lg">${res.title}</h3>
        <p class="text-gray-600">${res.description}</p>
      </div>
    `;
  });
}

if (searchInput) {
  searchInput.addEventListener("input", e => {
    renderSubjects(e.target.value.toLowerCase());
  });
}

// Only render if elements exist (for index.html)
if (subjectsGrid) {
  renderSubjects();
}
if (resourcesGrid) {
  renderResources();
}