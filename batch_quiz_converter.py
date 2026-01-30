#!/usr/bin/env python3
"""
Batch convert all College subject quizzes to randomized 40-question format
This script generates the complete quiz HTML for each subject
"""

# Template for question banks - each subject gets 40 questions
QUIZ_DATA = {
    "chemistry": {
        "color": "purple",
        "analysis_page": "chemistry-analysis.html",
        "subject_page": "chemistry.html",
        "title": "Chemistry",
        "questions": []  # Will be populated
    },
    "physics": {
        "color": "blue",
        "analysis_page": "physics-analysis.html",
        "subject_page": "physics.html",
        "title": "Physics",
        "questions": []
    },
    "calculus": {
        "color": "indigo",
        "analysis_page": "calculus-analysis.html",
        "subject_page": "calculus.html",
        "title": "Calculus",
        "questions": []
    },
    "psychology": {
        "color": "pink",
        "analysis_page": "psychology-analysis.html",
        "subject_page": "psychology.html",
        "title": "Psychology",
        "questions": []
    },
    "anatomy-physiology": {
        "color": "red",
        "analysis_page": "anatomy-physiology-analysis.html",
        "subject_page": "anatomy-physiology.html",
        "title": "Anatomy & Physiology",
        "questions": []
    },
    "kinesiology": {
        "color": "orange",
        "analysis_page": "kinesiology-analysis.html",
        "subject_page": "kinesiology.html",
        "title": "Kinesiology",
        "questions": []
    },
    "medical-terminology": {
        "color": "teal",
        "analysis_page": "medical-terminology-analysis.html",
        "subject_page": "medical-terminology.html",
        "title": "Medical Terminology",
        "questions": []
    },
    "nutrition": {
        "color": "lime",
        "analysis_page": "nutrition-analysis.html",
        "subject_page": "nutrition.html",
        "title": "Nutrition",
        "questions": []
    }
}

# Generate JavaScript question bank format
def generate_js_questions(questions):
    js_questions = []
    for q in questions:
        js_q = f"""    {{
      question: "{q['q']}",
      options: {q['opts']},
      correct: {q['correct']},
      explanation: "{q['exp']}"
    }}"""
        js_questions.append(js_q)
    return ',\n'.join(js_questions)

# Output format for easy copying
if __name__ == "__main__":
    print("// Question banks for College subject quizzes")
    print("// Copy each section into the corresponding quiz HTML file")
    print()
    
    for subject, data in QUIZ_DATA.items():
        print(f"\n\n{'='*80}")
        print(f"// {data['title'].upper()} QUIZ")
        print(f"// File: {subject}-quiz.html")
        print(f"// Color: {data['color']}")
        print(f"{'='*80}\n")
        print("const questionBank = [")
        print(generate_js_questions(data['questions']))
        print("];")
