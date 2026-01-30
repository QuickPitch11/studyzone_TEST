# Generate the final 4 quiz files
import json

files_to_create = ['mla-essays-quiz-NEW.html', 'apa-essays-quiz-NEW.html', 'argumentative-essays-quiz-NEW.html', 'public-speaking-quiz-NEW.html']

for fname in files_to_create:
    print(f"Would create: {fname}")
    
print(f"\nTotal: {len(files_to_create)} files to create")
