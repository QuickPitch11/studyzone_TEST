// StudyZone Authentication Library
// Note: This is a client-side demo. For production, use proper backend authentication.

const StudyZoneAuth = {
  // Check if user is logged in
  isAuthenticated: function() {
    const session = localStorage.getItem('studyzone_session');
    return session !== null;
  },

  // Get current session
  getSession: function() {
    const session = localStorage.getItem('studyzone_session');
    return session ? JSON.parse(session) : null;
  },

  // Check if current user is a guest
  isGuest: function() {
    const session = this.getSession();
    return session ? session.isGuest === true : false;
  },

  // Require authentication (redirect if not logged in)
  requireAuth: function(redirectUrl = 'login.html') {
    if (!this.isAuthenticated()) {
      window.location.href = redirectUrl;
      return false;
    }
    return true;
  },

  // Get user info
  getUser: function() {
    const session = this.getSession();
    if (!session) return null;

    const users = JSON.parse(localStorage.getItem('studyzone_users') || '[]');
    return users.find(u => u.email === session.email);
  },

  // Update navigation to show login status
  updateNavigation: function() {
    const session = this.getSession();
    const nav = document.querySelector('nav');
    
    if (!nav) return;

    if (session && !session.isGuest) {
      // User is logged in
      const userButton = `
        <div class="relative">
          <button id="userMenuBtn" class="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition">
            <i data-lucide="user" class="w-5 h-5 text-blue-600"></i>
            <span class="font-medium text-gray-700">${session.name.split(' ')[0]}</span>
          </button>
          <div id="userDropdown" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
            <a href="dashboard.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
            <hr class="my-2">
            <button onclick="StudyZoneAuth.logout()" class="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Log Out</button>
          </div>
        </div>
      `;
      
      // Add user menu to navigation if it doesn't exist
      if (!document.getElementById('userMenuBtn')) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = userButton;
        nav.appendChild(tempDiv.firstElementChild);
        
        // Reinitialize Lucide icons
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }

        // Add dropdown functionality
        const userMenuBtn = document.getElementById('userMenuBtn');
        const userDropdown = document.getElementById('userDropdown');
        
        if (userMenuBtn && userDropdown) {
          userMenuBtn.addEventListener('click', () => {
            userDropdown.classList.toggle('hidden');
          });

          document.addEventListener('click', (e) => {
            if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
              userDropdown.classList.add('hidden');
            }
          });
        }
      }
    } else {
      // User is not logged in - show login/signup links
      const loginLinks = nav.querySelector('a[href="login.html"]');
      if (!loginLinks) {
        nav.innerHTML += `
          <a href="login.html" class="font-medium text-gray-700 hover:text-blue-600">Log In</a>
          <a href="signup.html" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Sign Up</a>
        `;
      }
    }
  },

  // Logout
  logout: function() {
    localStorage.removeItem('studyzone_session');
    window.location.href = 'index.html';
  },

  // Track quiz completion
  trackQuizCompletion: function(quizName, score, totalQuestions) {
    const session = this.getSession();
    if (!session || session.isGuest) return; // Don't track for guests

    const statsKey = 'studyzone_stats_' + session.email;
    const stats = JSON.parse(localStorage.getItem(statsKey) || '{}');

    stats.quizzesTaken = (stats.quizzesTaken || 0) + 1;
    
    // Calculate average score
    const totalScore = (stats.totalScore || 0) + score;
    stats.totalScore = totalScore;
    stats.avgScore = Math.round((totalScore / stats.quizzesTaken));

    // Update study streak
    const today = new Date().toDateString();
    const lastStudy = stats.lastStudyDate;
    
    if (lastStudy !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastStudy === yesterday.toDateString()) {
        stats.studyStreak = (stats.studyStreak || 0) + 1;
      } else {
        stats.studyStreak = 1;
      }
      
      stats.lastStudyDate = today;
    }

    // Store recent activity
    stats.recentActivity = stats.recentActivity || [];
    stats.recentActivity.unshift({
      quiz: quizName,
      score: score,
      totalQuestions: totalQuestions,
      percentage: Math.round((score / totalQuestions) * 100),
      date: new Date().toISOString()
    });

    // Keep only last 10 activities
    stats.recentActivity = stats.recentActivity.slice(0, 10);

    localStorage.setItem(statsKey, JSON.stringify(stats));
  }
};

// Auto-initialize on page load
if (typeof window !== 'undefined') {
  window.StudyZoneAuth = StudyZoneAuth;
}
