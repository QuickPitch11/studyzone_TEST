#!/usr/bin/env python3
"""Create the remaining 4 quiz HTML files"""

# Template function
def create_quiz_html(subject_info):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>{subject_info['title']} - StudyZone</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="stylesheet" href="style.css">
</head>

<body class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

<header class="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <div class="flex items-center gap-3">
      <a href="index.html" class="flex items-center gap-3 hover:opacity-80 transition">
        <i data-lucide="book-open" class="w-8 h-8 text-blue-600"></i>
        <h1 class="text-2xl font-bold">StudyZone</h1>
      </a>
    </div>

    <nav class="hidden md:flex gap-8 items-center">
      <a href="research.html" class="font-medium text-gray-700 hover:text-blue-600">Research</a>
      <a href="textbooks.html" class="font-medium text-gray-700 hover:text-blue-600">Textbooks</a>
      <a href="about.html" class="font-medium text-gray-700 hover:text-blue-600">About</a>
      <a href="contact.html" class="font-medium text-gray-700 hover:text-blue-600">Contact Us</a>
    </nav>

    <button id="menuBtn" class="md:hidden p-2">
      <i data-lucide="menu" class="w-6 h-6"></i>
    </button>
  </div>

  <div id="mobileMenu" class="hidden md:hidden border-t px-4 py-4 bg-white">
    <a href="research.html" class="block py-2 font-medium text-gray-700 hover:text-blue-600">Research</a>
    <a href="textbooks.html" class="block py-2 font-medium text-gray-700 hover:text-blue-600">Textbooks</a>
    <a href="about.html" class="block py-2 font-medium text-gray-700 hover:text-blue-600">About</a>
    <a href="contact.html" class="block py-2 font-medium text-gray-700 hover:text-blue-600">Contact Us</a>
  </div>
</header>

<main class="max-w-4xl mx-auto px-4 py-12">
  <div class="text-center mb-12">
    <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r {subject_info['color']} rounded-full mb-6">
      <i data-lucide="{subject_info['icon']}" class="w-10 h-10 text-white"></i>
    </div>
    <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{subject_info['title']}</h1>
    <p class="text-xl text-gray-600">{subject_info['description']}</p>
  </div>

  <!-- Quiz Container -->
  <div id="quizContainer" class="space-y-8">
    <!-- Questions will be dynamically generated here -->
  </div>

  <!-- Submit Button -->
  <div class="mt-12 text-center">
    <button id="submitQuiz" class="px-8 py-4 bg-{subject_info['button_color']}-600 text-white text-lg font-semibold rounded-lg hover:bg-{subject_info['button_color']}-700 transition flex items-center gap-2 mx-auto">
      <i data-lucide="check-circle" class="w-6 h-6"></i>
      Submit Quiz
    </button>
  </div>

  <!-- Results Section -->
  <div id="quizResults" class="hidden mt-12 bg-white rounded-xl shadow-lg p-8 border-l-4 border-{subject_info['button_color']}-500">
    <h2 class="text-3xl font-bold mb-6 text-gray-800 text-center">Quiz Results</h2>
    <div id="scoreDisplay" class="text-center mb-8"></div>
    <div class="flex justify-center gap-4 flex-wrap">
      <a href="{subject_info['analysis_page']}" class="px-6 py-3 bg-{subject_info['button_color']}-600 text-white rounded-lg hover:bg-{subject_info['button_color']}-700 transition flex items-center gap-2">
        <i data-lucide="book-open" class="w-5 h-5"></i>
        Review Material
      </a>
      <button onclick="location.reload()" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
        <i data-lucide="refresh-cw" class="w-5 h-5"></i>
        Retake Quiz
      </button>
    </div>
  </div>

  <!-- Navigation Buttons -->
  <div class="mt-12 flex justify-center gap-4 flex-wrap">
    <a href="{subject_info['subject_page']}" class="px-6 py-3 bg-{subject_info['button_color']}-600 text-white rounded-lg hover:bg-{subject_info['button_color']}-700 transition flex items-center gap-2">
      <i data-lucide="book-open" class="w-5 h-5"></i>
      Back to {subject_info['subject_name']}
    </a>
    <a href="more-subjects.html" class="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition flex items-center gap-2">
      <i data-lucide="arrow-left" class="w-5 h-5"></i>
      Back to Subjects
    </a>
  </div>
</main>

<script>
  lucide.createIcons();
  
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  
  if (menuBtn && mobileMenu) {{
    menuBtn.addEventListener("click", () => {{
      mobileMenu.classList.toggle("hidden");
    }});
  }}

  // Question Bank - 40 questions total
  const questionBank = {subject_info['questions']};

  // Shuffle array function
  function shuffleArray(array) {{
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {{
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }}
    return shuffled;
  }}

  // Select 15 random questions
  const selectedQuestions = shuffleArray(questionBank).slice(0, 15);
  const correctAnswers = {{}};
  const explanations = {{}};

  // Generate quiz HTML
  const quizContainer = document.getElementById('quizContainer');
  selectedQuestions.forEach((q, index) => {{
    const questionNum = index + 1;
    const questionId = `q${{questionNum}}`;
    
    // Store correct answer and explanation
    correctAnswers[questionId] = q.correct;
    explanations[questionId] = q.explanation;
    
    // Shuffle options with correct answer tracking
    const optionsWithIndex = q.options.map((opt, idx) => ({{ text: opt, originalIndex: idx }}));
    const shuffledOptions = shuffleArray(optionsWithIndex);
    
    // Find new position of correct answer
    const newCorrectIndex = shuffledOptions.findIndex(opt => opt.originalIndex === q.correct);
    correctAnswers[questionId] = newCorrectIndex;
    
    // Create question HTML
    const questionHTML = `
      <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-{subject_info['button_color']}-500 quiz-question">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Question ${{questionNum}}</h3>
        <p class="text-lg text-gray-700 mb-6">${{q.question}}</p>
        <div class="space-y-3">
          ${{shuffledOptions.map((opt, optIndex) => `
            <label class="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition">
              <input type="radio" name="${{questionId}}" value="${{optIndex}}" class="mt-1">
              <span class="text-gray-700">${{opt.text}}</span>
            </label>
          `).join('')}}
        </div>
        <div class="feedback mt-4 hidden"></div>
      </div>
    `;
    
    quizContainer.innerHTML += questionHTML;
  }});

  lucide.createIcons();

  // Submit button handler
  document.getElementById('submitQuiz').addEventListener('click', () => {{
    let score = 0;
    let answered = 0;
    
    const questions = document.querySelectorAll('.quiz-question');
    
    questions.forEach((question, index) => {{
      const questionId = `q${{index + 1}}`;
      const selected = question.querySelector(`input[name="${{questionId}}"]:checked`);
      const feedback = question.querySelector('.feedback');
      
      if (selected) {{
        answered++;
        const selectedValue = parseInt(selected.value);
        const isCorrect = selectedValue === correctAnswers[questionId];
        
        if (isCorrect) {{
          score++;
          question.classList.remove('border-red-500', 'border-yellow-500');
          question.classList.add('border-{subject_info['button_color']}-500');
          feedback.innerHTML = `
            <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p class="font-semibold text-green-800 mb-2">✓ Correct!</p>
              <p class="text-green-700">${{explanations[questionId]}}</p>
            </div>
          `;
        }} else {{
          question.classList.remove('border-{subject_info['button_color']}-500', 'border-yellow-500');
          question.classList.add('border-red-500');
          feedback.innerHTML = `
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p class="font-semibold text-red-800 mb-2">✗ Incorrect</p>
              <p class="text-red-700">${{explanations[questionId]}}</p>
            </div>
          `;
        }}
        
        feedback.classList.remove('hidden');
      }} else {{
        question.classList.remove('border-{subject_info['button_color']}-500', 'border-red-500');
        question.classList.add('border-yellow-500');
        feedback.innerHTML = `
          <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p class="font-semibold text-yellow-800">Question not answered</p>
          </div>
        `;
        feedback.classList.remove('hidden');
      }}
    }});
    
    const percentage = answered > 0 ? Math.round((score / 15) * 100) : 0;
    const resultDiv = document.getElementById('quizResults');
    const scoreDisplay = document.getElementById('scoreDisplay');
    
    let gradeColor = 'text-red-600';
    let message = 'Keep studying!';
    
    if (percentage >= 90) {{
      gradeColor = 'text-green-600';
      message = 'Excellent! You have mastered this material!';
    }} else if (percentage >= 80) {{
      gradeColor = 'text-blue-600';
      message = 'Great job! You have a strong understanding!';
    }} else if (percentage >= 70) {{
      gradeColor = 'text-yellow-600';
      message = 'Good work! Review the explanations to improve.';
    }} else if (percentage >= 60) {{
      gradeColor = 'text-orange-600';
      message = 'Fair. Consider reviewing the material more thoroughly.';
    }}
    
    scoreDisplay.innerHTML = `
      <div class="text-center">
        <div class="text-6xl font-bold ${{gradeColor}} mb-4">${{percentage}}%</div>
        <p class="text-2xl text-gray-700 mb-2">${{score}} out of 15 correct</p>
        <p class="text-xl text-gray-600 mb-6">${{message}}</p>
      </div>
    `;
    
    resultDiv.classList.remove('hidden');
    resultDiv.scrollIntoView({{ behavior: 'smooth', block: 'center' }});
  }});
</script>

</body>
</html>'''

# Due to character limits, I'll create the files with questions split into a separate part
# First, let me create the starter files and then append the question banks

print("Script ready - creating quiz files...")
print("Note: This is a template generator script")
