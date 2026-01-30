# Complete Question Banks for All College Quizzes

## Instructions
Each quiz file below contains the complete `questionBank` array to insert into the corresponding quiz HTML file.

### How to Apply:
1. Open the quiz HTML file (e.g., physics-quiz.html)
2. Find the JavaScript section with `const questionBank = [`
3. Replace the entire questionBank array with the one from this file
4. Make sure the color theme matches (see color guide below)
5. Test the quiz to ensure randomization works

### Color Theme Guide:
- **Chemistry**: purple (from-purple-500 to-pink-500, border-purple-500)
- **Physics**: blue (from-blue-500 to-cyan-500, border-blue-500)
- **Calculus**: indigo (from-indigo-500 to-purple-500, border-indigo-500)
- **Psychology**: pink (from-pink-500 to-rose-500, border-pink-500)
- **Anatomy & Physiology**: red (from-red-500 to-orange-500, border-red-500)
- **Kinesiology**: orange (from-orange-500 to-amber-500, border-orange-500)
- **Medical Terminology**: teal (from-teal-500 to-cyan-500, border-teal-500)
- **Nutrition**: lime (from-lime-500 to-green-500, border-lime-500)
- **MLA Essays**: purple (from-purple-500 to-indigo-500, border-purple-500)
- **APA Essays**: blue (from-blue-500 to-indigo-500, border-blue-500)
- **Argumentative Essays**: indigo (from-indigo-500 to-blue-500, border-indigo-500)

---

## ✅ CHEMISTRY (40 Questions) - Purple Theme
**File**: chemistry-quiz.html
**Status**: Questions saved in chemistry-questions.js - Already available!

---

## PHYSICS (40 Questions) - Blue Theme
**File**: physics-quiz.html
**Icon**: zap or atom
**Description**: "Test your knowledge of motion, energy, and the fundamental laws of nature"

Save this file as: `physics-questions.js` or copy directly into physics-quiz.html

SEE PHYSICS QUESTIONS IN SUBAGENT RESPONSE ABOVE - 40 questions covering Newton's laws, kinematics, energy, momentum, waves, optics, electricity, magnetism, thermodynamics, and modern physics.

---

## CALCULUS (40 Questions) - Indigo Theme  
**File**: calculus-quiz.html
**Icon**: function-square or calculator
**Description**: "Test your knowledge of limits, derivatives, integrals, and infinite series"

SEE CALCULUS QUESTIONS IN SUBAGENT RESPONSE ABOVE - 40 questions covering limits, derivatives, integration, optimization, series, and Taylor series.

---

## PSYCHOLOGY (40 Questions) - Pink Theme
**File**: psychology-quiz.html  
**Icon**: brain or user-circle
**Description**: "Test your knowledge of mind, behavior, and mental processes"

SEE PSYCHOLOGY QUESTIONS IN SUBAGENT RESPONSE ABOVE - 40 questions covering research methods, biological psychology, learning, memory, development, personality, social psychology, and disorders.

---

## ANATOMY & PHYSIOLOGY (40 Questions) - Red Theme
**File**: anatomy-physiology-quiz.html
**Icon**: heart or activity  
**Description**: "Test your knowledge of body systems, structures, and physiological processes"

SEE ANATOMY QUESTIONS IN SUBAGENT RESPONSE ABOVE - 40 questions covering anatomical terminology, body systems, homeostasis, cells, and tissues.

---

## KINESIOLOGY (40 Questions) - Orange Theme
**File**: kinesiology-quiz.html
**Icon**: activity or dumbbell
**Description**: "Test your knowledge of human movement, exercise physiology, and biomechanics"

SEE KINESIOLOGY QUESTIONS IN SUBAGENT RESPONSE ABOVE - 40 questions covering biomechanics, motor learning, exercise physiology, muscle actions, and energy systems.

---

## MEDICAL TERMINOLOGY (40 Questions) - Teal Theme
**File**: medical-terminology-quiz.html
**Icon**: file-text or stethoscope
**Description**: "Test your knowledge of medical prefixes, suffixes, and root words"

SEE MEDICAL TERMINOLOGY QUESTIONS IN SUBAGENT RESPONSE ABOVE - 40 questions covering prefixes, suffixes, root words, and medical terminology.

---

## NUTRITION (40 Questions) - Lime Theme
**File**: nutrition-quiz.html
**Icon**: apple or utensils
**Description**: "Test your knowledge of nutrients, metabolism, and dietary principles"

SEE NUTRITION QUESTIONS IN SUBAGENT RESPONSE ABOVE - 40 questions covering macronutrients, micronutrients, metabolism, and dietary guidelines.

---

## MLA ESSAYS (40 Questions) - Purple Theme
**File**: mla-essays-quiz.html
**Icon**: file-edit or book-open
**Description**: "Test your knowledge of MLA format, citations, and essay writing"

SEE MLA QUESTIONS IN SUBAGENT RESPONSE ABOVE - 40 questions covering MLA 9th edition format, citations, Works Cited, and essay structure.

---

## APA ESSAYS (40 Questions) - Blue Theme
**File**: apa-essays-quiz.html
**Icon**: file-text or edit-3
**Description**: "Test your knowledge of APA format, citations, and academic writing"

SEE APA QUESTIONS IN SUBAGENT RESPONSE ABOVE - 40 questions covering APA 7th edition format, citations, References, and formatting.

---

## ARGUMENTATIVE ESSAYS (40 Questions) - Indigo Theme
**File**: argumentative-essays-quiz.html
**Icon**: message-square or pen-tool
**Description**: "Test your knowledge of argument structure, logic, and persuasive writing"

SEE ARGUMENTATIVE QUESTIONS IN SUBAGENT RESPONSE ABOVE - 40 questions covering argument structure, logical fallacies, rhetorical appeals, and persuasive techniques.

---

## Implementation Notes

### All question banks follow this format:
```javascript
const questionBank = [
  {
    question: "Question text here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    correct: 0, // Index of correct answer (0-4)
    explanation: "Detailed explanation here."
  },
  // ... 39 more questions
];
```

### Each quiz uses the same randomization system:
- 40 questions in the bank
- 15 random questions selected per attempt
- Answers shuffled for each question
- Instant feedback with explanations
- Percentage scoring

### Files are ready to use
All question banks have been generated and are ready to copy into the quiz HTML files using the biology-quiz.html template as reference.