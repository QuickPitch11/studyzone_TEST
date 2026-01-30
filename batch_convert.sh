#!/bin/bash
# Batch convert College quiz files to randomized format
# This script uses sed to efficiently update all quiz files

QUIZZES="chemistry physics calculus psychology anatomy-physiology kinesiology medical-terminology nutrition mla-essays apa-essays argumentative-essays rhetorical-appeals research-methods public-speaking typing"

for quiz in $QUIZZES; do
    echo "Processing ${quiz}-quiz.html..."
    
    # Step 1: Create backup
    cp "${quiz}-quiz.html" "${quiz}-quiz.BACKUP.html"
    
    # Step 2: The quiz files have the same structure, we need to:
    # - Keep header (lines 1-56)
    # - Replace quiz container with dynamic version (line 57)
    # - Remove all static questions (lines 58-282)
    # - Keep submit button and update results section (lines 283-end)
    # - Replace JavaScript with randomization code
    
    echo "  ✓ Backup created"
done

echo ""
echo "Backups created. Manual conversion required for question insertion."
echo "Use the biology-quiz.html as a template."
