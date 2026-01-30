#!/usr/bin/env python3
"""
Create quiz conversion template for all College subject quizzes
This generates the complete randomization JavaScript for each quiz
"""

import re

# Read the biology quiz as a template
with open('biology-quiz.html', 'r') as f:
    biology_template = f.read()

# Extract the JavaScript section from biology quiz
js_start = biology_template.find('<script>')
js_end = biology_template.find('</script>') + len('</script>')
biology_js = biology_template[js_start:js_end]

# Subject configurations
SUBJECTS = {
    'chemistry': {
        'color': 'purple',
        'icon': 'flask',
        'title': 'Chemistry',
        'description': 'Test your knowledge of chemical reactions, molecular structure, and the periodic table'
    },
    'physics': {
        'color': 'blue',
        'icon': 'zap',
        'title': 'Physics',
        'description': 'Test your understanding of mechanics, energy, waves, and fundamental physics principles'
    },
    'calculus': {
        'color': 'indigo',
        'icon': 'function-square',
        'title': 'Calculus',
        'description': 'Test your mastery of limits, derivatives, integrals, and advanced calculus concepts'
    },
    'psychology': {
        'color': 'pink',
        'icon': 'brain',
        'title': 'Psychology',
        'description': 'Test your knowledge of human behavior, cognition, and psychological principles'
    },
    'anatomy-physiology': {
        'color': 'red',
        'icon': 'heart',
        'title': 'Anatomy & Physiology',
        'description': 'Test your understanding of human body systems, structures, and physiological processes'
    },
    'kinesiology': {
        'color': 'orange',
        'icon': 'activity',
        'title': 'Kinesiology',
        'description': 'Test your knowledge of human movement, biomechanics, and exercise science'
    },
    'medical-terminology': {
        'color': 'teal',
        'icon': 'clipboard-list',
        'title': 'Medical Terminology',
        'description': 'Test your knowledge of medical terms, prefixes, suffixes, and anatomical language'
    },
    'nutrition': {
        'color': 'lime',
        'icon': 'apple',
        'title': 'Nutrition',
        'description': 'Test your understanding of nutrients, metabolism, and dietary principles'
    }
}

def convert_quiz_file(subject, config):
    """Convert a quiz file to the randomized format"""
    filename = f'{subject}-quiz.html'
    
    try:
        with open(filename, 'r') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Warning: {filename} not found, skipping")
        return
    
    # Find and extract the header section (up to quiz container)
    header_end = content.find('<!-- Quiz Container -->')
    if header_end == -1:
        print(f"Error: Could not find quiz container marker in {filename}")
        return
    
    header = content[:header_end]
    
    # Replace color references
    header = header.replace('from-green-500 to-emerald-500', f'from-{config["color"]}-500 to-{config["color"]}-600')
    header = header.replace('text-4xl md:text-5xl font-bold mb-4 text-gray-800">Biology Quiz',
                           f'text-4xl md:text-5xl font-bold mb-4 text-gray-800">{config["title"]} Quiz')
    header = header.replace('Test your knowledge of life sciences and biological processes',
                           config['description'])
    
    # Update icon
    if 'data-lucide="clipboard-check"' in header:
        header = header.replace('data-lucide="clipboard-check"', f'data-lucide="{config["icon"]}"')
    
    # Create the quiz container and results section
    middle_section = f'''<!-- Quiz Container -->
  <div id="quizContainer" class="space-y-8">
    <!-- Questions will be dynamically generated here -->
  </div>

  <!-- Submit Button -->
  <div class="mt-12 text-center">
    <button id="submitQuiz" class="px-8 py-4 bg-{config["color"]}-600 text-white text-lg font-semibold rounded-lg hover:bg-{config["color"]}-700 transition flex items-center gap-2 mx-auto">
      <i data-lucide="check-circle" class="w-6 h-6"></i>
      Submit Quiz
    </button>
  </div>

  <!-- Results Section -->
  <div id="quizResults" class="hidden mt-12 bg-white rounded-xl shadow-lg p-8 border-l-4 border-{config["color"]}-500">
    <h2 class="text-3xl font-bold mb-6 text-gray-800 text-center">Quiz Results</h2>
    <div id="scoreDisplay" class="text-center mb-8"></div>
    <div class="flex justify-center gap-4 flex-wrap">
      <a href="{subject}-analysis.html" class="px-6 py-3 bg-{config["color"]}-600 text-white rounded-lg hover:bg-{config["color"]}-700 transition flex items-center gap-2">
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
    <a href="{subject}.html" class="px-6 py-3 bg-{config["color"]}-600 text-white rounded-lg hover:bg-{config["color"]}-700 transition flex items-center gap-2">
      <i data-lucide="book-open" class="w-5 h-5"></i>
      Back to {config["title"]}
    </a>
    <a href="more-subjects.html" class="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition flex items-center gap-2">
      <i data-lucide="arrow-left" class="w-5 h-5"></i>
      Back to Subjects
    </a>
  </div>
</main>
'''
    
    # Create JavaScript section with placeholder for questions
    js_section = biology_js.replace('border-green-500', f'border-{config["color"]}-500')
    js_section = js_section.replace('border-l-4 border-green-500', f'border-l-4 border-{config["color"]}-500')
    
    # Mark where questions should go
    js_section = js_section.replace('const questionBank = [', 
                                    f'const questionBank = [\n    // TODO: Add 40 {config["title"]} questions here\n    // Template for each question:\n    // {{\n    //   question: "Question text?",\n    //   options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],\n    //   correct: 0,\n    //   explanation: "Detailed explanation..."\n    // }},\n')
    
    # Write the converted file
    new_content = header + middle_section + '\n' + js_section + '\n\n</body>\n</html>'
    
    output_file = f'{subject}-quiz-CONVERTED.html'
    with open(output_file, 'w') as f:
        f.write(new_content)
    
    print(f"✓ Created {output_file}")

if __name__ == "__main__":
    print("Converting quiz files to randomized format...")
    print("=" * 80)
    
    for subject, config in SUBJECTS.items():
        convert_quiz_file(subject, config)
    
    print("=" * 80)
    print("\nConversion complete!")
    print("\nNext steps:")
    print("1. Generate 40 questions for each subject")
    print("2. Insert questions into the // TODO section of each file")
    print("3. Rename files from *-CONVERTED.html to *.html")
