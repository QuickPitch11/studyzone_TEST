#!/usr/bin/env python3
import os
import glob
import re

# Directory containing the HTML files
directory = "/Users/quickpitch11/Desktop/StudyZone"

# Pattern to search for
search_pattern = 'absolute left-1/2 transform -translate-x-1/2'

# Old header pattern (without mobile menu)
old_header_simple = '''<header class="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-3 flex-1">
        <a href="index.html" class="flex items-center gap-3 hover:opacity-80 transition">
          <i data-lucide="book-open" class="w-8 h-8 text-blue-600"></i>
          <h1 class="text-2xl font-bold">StudyZone</h1>
        </a>
      </div>

      <nav class="hidden md:flex gap-6 items-center absolute left-1/2 transform -translate-x-1/2">
        <a href="high-school.html" class="font-medium text-gray-700 hover:text-blue-600">High School</a>
        <a href="college.html" class="font-medium text-gray-700 hover:text-blue-600">College</a>
      </nav>

      <nav class="hidden md:flex gap-6 items-center flex-1 justify-end">
        <a href="research.html" class="font-medium text-gray-700 hover:text-blue-600">Research</a>
        <a href="textbooks.html" class="font-medium text-gray-700 hover:text-blue-600">Textbooks</a>
        <a href="about.html" class="font-medium text-gray-700 hover:text-blue-600">About</a>
        <a href="contact.html" class="font-medium text-gray-700 hover:text-blue-600">Contact Us</a>
      </nav>

      <button id="menuBtn" class="md:hidden p-2">
        <i data-lucide="menu" class="w-6 h-6"></i>
      </button>
    </div>
  </div>'''

# New header pattern (without mobile menu)
new_header_simple = '''<header class="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
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
  </div>'''

# Counter for updated files
updated_files = []
skipped_files = []
error_files = []

# Get all HTML files
html_files = glob.glob(os.path.join(directory, "*.html"))

for filepath in html_files:
    filename = os.path.basename(filepath)
    
    # Skip index.html
    if filename == "index.html" or filename == "update_headers.py":
        continue
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file contains the old pattern
        if search_pattern not in content:
            skipped_files.append(filename)
            continue
        
        # Try to update
        original_content = content
        
        # Replace the header
        content = content.replace(old_header_simple, new_header_simple)
        
        # Check if replacement was made
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            updated_files.append(filename)
        else:
            error_files.append(filename)
            
    except Exception as e:
        error_files.append(f"{filename} (Error: {str(e)})")

# Print results
print(f"✓ Successfully updated: {len(updated_files)} files")
if updated_files:
    for f in sorted(updated_files):
        print(f"  - {f}")

print(f"\n⊘ Skipped (already updated): {len(skipped_files)} files")

if error_files:
    print(f"\n✗ Needs manual review: {len(error_files)} files")
    for f in sorted(error_files):
        print(f"  - {f}")

print(f"\nTotal processed: {len(html_files) - 1} files")  # -1 for index.html
