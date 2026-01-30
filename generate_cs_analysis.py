#!/usr/bin/env python3
"""
Generate the complete computer-science-analysis.html file
matching the structure of typing-analysis.html
"""

html_content = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Computer Science - In Depth Analysis | StudyZone</title>
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
      <a href="account.html" class="font-medium text-gray-700 hover:text-blue-600">My Account</a>
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
    <a href="account.html" class="block py-2 font-medium text-gray-700 hover:text-blue-600">My Account</a>
    <a href="textbooks.html" class="block py-2 font-medium text-gray-700 hover:text-blue-600">Textbooks</a>
    <a href="about.html" class="block py-2 font-medium text-gray-700 hover:text-blue-600">About</a>
    <a href="contact.html" class="block py-2 font-medium text-gray-700 hover:text-blue-600">Contact Us</a>
  </div>
</header>

<main class="max-w-5xl mx-auto px-4 py-12">
  <div class="text-center mb-12">
    <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6">
      <i data-lucide="monitor" class="w-10 h-10 text-white"></i>
    </div>
    <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Computer Science: In Depth Analysis</h1>
    <p class="text-xl text-gray-600">A comprehensive exploration of algorithms, data structures, software engineering, artificial intelligence, and computational theory</p>
  </div>

  <div class="space-y-10">
    <!-- Introduction -->
    <div class="bg-white rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-orange-500">
      <h2 class="text-3xl font-bold mb-6 text-gray-800">Introduction</h2>
      <p class="text-gray-700 leading-relaxed text-lg mb-4">Computer science is the systematic study of computation, information processing, and the design of computational systems. It encompasses theoretical foundations (algorithms, complexity theory, formal languages), practical implementation (software engineering, systems programming), and cutting-edge applications (artificial intelligence, machine learning, distributed systems). Computer science is both a mathematical discipline and an engineering practice, bridging abstract reasoning with tangible technology.</p>
      <p class="text-gray-700 leading-relaxed text-lg">This analysis examines core data structures and algorithms, programming paradigms and design principles, operating systems and computer architecture, database theory and systems, artificial intelligence and machine learning, software engineering methodologies, computational complexity, and the interdisciplinary connections that make computer science central to modern innovation.</p>
    </div>

    <!-- Historical Context -->
    <div class="bg-white rounded-xl shadow-lg p-8 md:p-10 border-l-4 border-orange-500">
      <h2 class="text-3xl font-bold mb-6 text-gray-800">Historical Context</h2>
      <h3 class="text-2xl font-bold mb-4 text-gray-800 mt-2">Evolution of Computing</h3>
      <ul class="space-y-3 text-gray-700 leading-relaxed text-lg mb-4">
        <li><strong>Pre-Computer Era (1800s–1930s):</strong> Charles Babbage's Analytical Engine (1837) envisioned programmable computation. Ada Lovelace wrote the first algorithm. Boolean algebra (George Boole, 1854) provided mathematical foundation for logic circuits.</li>
        <li><strong>Theoretical Foundations (1930s–1940s):</strong> Alan Turing formalized computation with the Turing Machine (1936), proving limits of computability. Alonzo Church developed lambda calculus. Claude Shannon linked Boolean algebra to electrical circuits (1937).</li>
        <li><strong>First Computers (1940s–1950s):</strong> ENIAC (1945) performed ballistic calculations using vacuum tubes. Von Neumann architecture (stored-program concept) became standard. FORTRAN (1957) introduced high-level programming.</li>
        <li><strong>Mainframes & Time-Sharing (1960s):</strong> IBM System/360 standardized computer architecture. COBOL, LISP, and ALGOL emerged. Time-sharing enabled multi-user access. Integrated circuits replaced discrete transistors.</li>
        <li><strong>Personal Computing Revolution (1970s–1980s):</strong> Microprocessors (Intel 4004, 1971) enabled affordable computers. C language (1972) and Unix became foundational. Apple II, IBM PC democratized computing. Object-oriented programming (Smalltalk, C++) gained traction.</li>
        <li><strong>Internet & World Wide Web (1990s):</strong> TCP/IP protocols standardized networking. Tim Berners-Lee invented the Web (1989–1991). Java brought "write once, run anywhere." Linux and open-source movement flourished.</li>
        <li><strong>Mobile, Cloud, & AI (2000s–present):</strong> Smartphones (iPhone, 2007) created mobile-first computing. Cloud platforms (AWS, Azure) virtualized infrastructure. Big data, deep learning, and neural networks achieve breakthroughs in AI. Quantum computing emerges as next frontier.</li>
      </ul>
    </div>
'''

# Write to file
output_file = '/Users/quickpitch11/Desktop/StudyZone/computer-science-analysis.html'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f"File written successfully to {output_file}")
print(f"File size: {len(html_content)} bytes")
