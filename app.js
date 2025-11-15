// Language translations
const translations = {
    en: {
        appName: "ShawnCloud",
        enterPasswordToAccess: "Enter password to access your cloud storage",
        passwordPlaceholder: "Enter password",
        unlock: "Unlock",
        passwordError: "Incorrect password, please try again",
        secureData: "Your data is securely encrypted",
        searchFiles: "Search files...",
        navigation: "Navigation",
        myFiles: "My Files",
        trash: "Trash",
        folders: "Folders",
        documents: "Documents",
        photos: "Photos",
        videos: "Videos",
        dragAndDrop: "Drag and drop files",
        orClickToBrowse: "or click to browse from your computer"
    },
    zh: {
        appName: "ShawnCloud",
        enterPasswordToAccess: "输入密码以访问您的云存储",
        passwordPlaceholder: "请输入密码",
        unlock: "解锁",
        passwordError: "密码错误，请重试",
        secureData: "您的数据安全且加密存储",
        searchFiles: "搜索文件...",
        navigation: "导航",
        myFiles: "我的文件",
        trash: "回收站",
        folders: "文件夹",
        documents: "文档",
        photos: "照片",
        videos: "视频",
        dragAndDrop: "拖放文件到此处",
        orClickToBrowse: "或点击从电脑选择文件"
    }
};

// State
let currentLang = localStorage.getItem('shawncloud-language') || 'en';
let isDarkMode = localStorage.getItem('shawncloud-theme') === 'dark';

// Mock files data
const mockFiles = [
    { id: 1, name: "Project Proposal.pdf", type: "pdf", size: "2.4 MB", date: "2024-01-15" },
    { id: 2, name: "Vacation Photo.jpg", type: "image", size: "5.1 MB", date: "2024-01-14" },
    { id: 3, name: "Meeting Notes.docx", type: "doc", size: "1.2 MB", date: "2024-01-13" },
    { id: 4, name: "Budget Spreadsheet.xlsx", type: "excel", size: "890 KB", date: "2024-01-12" },
    { id: 5, name: "Presentation.pptx", type: "ppt", size: "3.7 MB", date: "2024-01-11" },
    { id: 6, name: "Video Tutorial.mp4", type: "video", size: "125 MB", date: "2024-01-10" },
    { id: 7, name: "Design Mockup.fig", type: "design", size: "8.5 MB", date: "2024-01-09" },
    { id: 8, name: "Code Archive.zip", type: "zip", size: "15.3 MB", date: "2024-01-08" }
];

// Translate function
function t(key) {
    return translations[currentLang][key] || key;
}

// Update UI text
function updateLanguage() {
    document.getElementById('lock-subtitle').textContent = t('enterPasswordToAccess');
    document.getElementById('password-input').placeholder = t('passwordPlaceholder');
    document.getElementById('unlock-text').textContent = t('unlock');
    document.getElementById('security-note').textContent = t('secureData');
    document.getElementById('lang-text-lock').textContent = currentLang === 'en' ? '中文' : 'English';
    
    document.getElementById('search-input').placeholder = t('searchFiles');
    document.getElementById('nav-title').textContent = t('navigation');
    document.getElementById('nav-my-files').textContent = t('myFiles');
    document.getElementById('nav-trash').textContent = t('trash');
    document.getElementById('nav-folders').textContent = t('folders');
    document.getElementById('folder-documents').textContent = t('documents');
    document.getElementById('folder-photos').textContent = t('photos');
    document.getElementById('folder-videos').textContent = t('videos');
    document.getElementById('upload-title').textContent = t('dragAndDrop');
    document.getElementById('upload-subtitle').textContent = t('orClickToBrowse');
    document.getElementById('files-title').textContent = t('myFiles');
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('shawncloud-language', currentLang);
    updateLanguage();
}

// Toggle theme
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('shawncloud-theme', isDarkMode ? 'dark' : 'light');
    
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    sunIcon.style.display = isDarkMode ? 'none' : 'block';
    moonIcon.style.display = isDarkMode ? 'block' : 'none';
}

// Password validation
function handlePasswordSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('password-input');
    const errorMsg = document.getElementById('error-message');
    const correctPassword = '910729';
    
    if (input.value === correctPassword) {
        sessionStorage.setItem('shawncloud-unlocked', 'true');
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'grid';
        renderFiles();
    } else {
        input.classList.add('error');
        errorMsg.textContent = t('passwordError');
        input.value = '';
        setTimeout(() => {
            input.classList.remove('error');
        }, 500);
    }
}

// Render files
function renderFiles() {
    const grid = document.getElementById('files-grid');
    grid.innerHTML = mockFiles.map(file => `
        <div class="file-card glass">
            <div class="file-icon">
                ${getFileIcon(file.type)}
            </div>
            <div class="file-name">${file.name}</div>
            <div class="file-info">${file.size}</div>
        </div>
    `).join('');
}

// Get file icon
function getFileIcon(type) {
    const icons = {
        pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
        doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
        video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
        default: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>'
    };
    return icons[type] || icons.default;
}

// Toggle sidebar on mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

// Search functionality
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.file-card');
    cards.forEach(card => {
        const name = card.querySelector('.file-name').textContent.toLowerCase();
        card.style.display = name.includes(query) ? 'block' : 'none';
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check if already unlocked
    const isUnlocked = sessionStorage.getItem('shawncloud-unlocked') === 'true';
    if (isUnlocked) {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'grid';
        renderFiles();
    }
    
    // Apply theme
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('.sun-icon').style.display = 'none';
        document.querySelector('.moon-icon').style.display = 'block';
    }
    
    // Update language
    updateLanguage();
    
    // Event listeners
    document.getElementById('password-form').addEventListener('submit', handlePasswordSubmit);
    document.getElementById('lang-toggle-lock').addEventListener('click', toggleLanguage);
    document.getElementById('lang-toggle-main').addEventListener('click', toggleLanguage);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('menu-toggle').addEventListener('click', toggleSidebar);
    document.getElementById('search-input').addEventListener('input', handleSearch);
    
    // Upload zone click
    document.querySelector('.upload-zone').addEventListener('click', () => {
        alert(currentLang === 'en' ? 'File upload coming soon!' : '文件上传功能即将推出！');
    });
});
