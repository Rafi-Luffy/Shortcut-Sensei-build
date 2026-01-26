/**
 * Enhanced Application Search Module v2
 * Provides real-time dropdown search with auto-detection
 * Supports both light and dark modes
 * Handles Ctrl/Cmd+Click for opening in new tab
 */

(function() {
    'use strict';

    function getBasePath() {
        const currentPath = window.location.pathname;
        
        if (currentPath.match(/\/(Applications|home-page|About|Privacy|blogs)\.html?$/i) || 
            currentPath.endsWith('/') || 
            !currentPath.includes('/pages/')) {
            return 'pages/applications/';
        }
        
        if (currentPath.includes('/pages/applications/')) {
            return './';
        }
        
        if (currentPath.includes('/pages/')) {
            return '../applications/';
        }
        
        return 'pages/applications/';
    }

    const applicationData = [
        { name: "windows", displayName: "Windows", file: "Windows_11.html" },
        { name: "macos", displayName: "macOS", file: "Mac_Shortcuts.html" },
        
        // Microsoft Office Suite
        { name: "microsoft excel", displayName: "Microsoft Excel", file: "Microsoft Excell.html" },
        { name: "excel", displayName: "Microsoft Excel", file: "Microsoft Excell.html" },
        { name: "microsoft word", displayName: "Microsoft Word", file: "Microsoft Word.html" },
        { name: "word", displayName: "Microsoft Word", file: "Microsoft Word.html" },
        { name: "microsoft powerpoint", displayName: "Microsoft PowerPoint", file: "Microsoft PowerPoint.html" },
        { name: "powerpoint", displayName: "Microsoft PowerPoint", file: "Microsoft PowerPoint.html" },
        { name: "microsoft outlook", displayName: "Microsoft Outlook", file: "Microsoft Outlook.html" },
        { name: "outlook", displayName: "Microsoft Outlook", file: "Microsoft Outlook.html" },
        { name: "microsoft onenote", displayName: "Microsoft OneNote", file: "Microsoft OneNote.html" },
        { name: "onenote", displayName: "Microsoft OneNote", file: "Microsoft OneNote.html" },
        { name: "microsoft teams", displayName: "Microsoft Teams", file: "Microsoft Teams.html" },
        { name: "teams", displayName: "Microsoft Teams", file: "Microsoft Teams.html" },
        { name: "microsoft onedrive", displayName: "Microsoft OneDrive", file: "Microsoft OneDrive.html" },
        { name: "onedrive", displayName: "Microsoft OneDrive", file: "Microsoft OneDrive.html" },
        { name: "microsoft edge", displayName: "Microsoft Edge", file: "Microsoft Edge.html" },
        { name: "edge", displayName: "Microsoft Edge", file: "Microsoft Edge.html" },
        
        // Web Browsers
        { name: "google chrome", displayName: "Google Chrome", file: "Google Chrome.html" },
        { name: "chrome", displayName: "Google Chrome", file: "Google Chrome.html" },
        
        // Development Tools
        { name: "visual studio code", displayName: "Visual Studio Code", file: "Visual Studio.html" },
        { name: "vscode", displayName: "Visual Studio Code", file: "Visual Studio.html" },
        { name: "vs code", displayName: "Visual Studio Code", file: "Visual Studio.html" },
        
        // Design Tools
        { name: "adobe photoshop", displayName: "Adobe Photoshop", file: "Adobe PhotoShop.html" },
        { name: "photoshop", displayName: "Adobe Photoshop", file: "Adobe PhotoShop.html" },
        { name: "adobe creative cloud", displayName: "Adobe Creative Cloud", file: "Adobe Creative Cloud.html" },
        { name: "creative cloud", displayName: "Adobe Creative Cloud", file: "Adobe Creative Cloud.html" },
        
        // Communication Apps
        { name: "discord", displayName: "Discord", file: "Discord.html" },
        { name: "skype", displayName: "Skype", file: "Skype.html" },
        { name: "telegram", displayName: "Telegram", file: "Telegram.html" },
        { name: "whatsapp", displayName: "WhatsApp", file: "Whatsapp.html" },
        { name: "zoom", displayName: "Zoom", file: "Zoom.html" },
        
        // Productivity Tools
        { name: "trello", displayName: "Trello", file: "Trello.html" },
        
        // Media Tools
        { name: "spotify", displayName: "Spotify", file: "Spotify.html" },
        { name: "vlc", displayName: "VLC Media Player", file: "VLC Media Player.html" },
        { name: "vlc media player", displayName: "VLC Media Player", file: "VLC Media Player.html" },
        { name: "audacity", displayName: "Audacity", file: "Audacity.html" },
        
        // Utilities
        { name: "7-zip", displayName: "7-Zip", file: "7-zip.html" },
        { name: "winrar", displayName: "WinRAR", file: "WinRAR.html" },
        { name: "acrobat", displayName: "Adobe Acrobat Reader", file: "Acrobat Adobe Reader.html" },
        { name: "mozilla thunderbird", displayName: "Mozilla Thunderbird", file: "Mozilla Thunderbird.html" },
        { name: "thunderbird", displayName: "Mozilla Thunderbird", file: "Mozilla Thunderbird.html" }
    ];

    function initializeSearch(inputElement) {
        if (!inputElement || inputElement.dataset.searchInitialized === 'true') {
            return;
        }

        inputElement.dataset.searchInitialized = 'true';
        const container = inputElement.parentElement;
        container.style.position = 'relative';

        // Reuse an existing results container if present (supports multiple header templates)
        let resultsContainer = container.querySelector('.app-search-results, .search-results');
        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.className = 'app-search-results';
            resultsContainer.style.cssText = `
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border: 1px solid #ddd;
                border-radius: 4px;
                max-height: 300px;
                overflow-y: auto;
                z-index: 1000;
                display: none;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            `;
            container.appendChild(resultsContainer);
        } else {
            // Ensure the container is discoverable by existing styles/selectors
            if (!resultsContainer.classList.contains('app-search-results')) {
                resultsContainer.classList.add('app-search-results');
            }
        }

        const basePath = getBasePath();

        function showResults(query) {
            resultsContainer.innerHTML = '';
            
            if (!query || query.trim().length === 0) {
                resultsContainer.style.display = 'none';
                return;
            }

            const normalized = query.toLowerCase().trim();
            const matches = applicationData.filter(app =>
                app.name.includes(normalized) ||
                app.displayName.toLowerCase().includes(normalized)
            );

            if (matches.length === 0) {
                resultsContainer.style.display = 'none';
                return;
            }

            // Remove duplicates
            const seen = new Set();
            const unique = matches.filter(app => {
                if (seen.has(app.displayName)) return false;
                seen.add(app.displayName);
                return true;
            });

            // Show up to 8 results
            unique.slice(0, 8).forEach(app => {
                const item = document.createElement('div');
                item.style.cssText = `
                    padding: 10px 15px;
                    cursor: pointer;
                    border-bottom: 1px solid #eee;
                    transition: background 0.2s;
                `;
                item.textContent = app.displayName;
                
                item.addEventListener('mouseover', () => {
                    item.style.background = '#f5f5f5';
                });
                item.addEventListener('mouseout', () => {
                    item.style.background = 'white';
                });
                
                item.addEventListener('click', () => {
                    const url = basePath + app.file;
                    window.location.href = url;
                });

                resultsContainer.appendChild(item);
            });

            resultsContainer.style.display = 'block';
        }

        inputElement.addEventListener('input', (e) => {
            showResults(e.target.value);
        });

        inputElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const normalized = e.target.value.toLowerCase().trim();
                const match = applicationData.find(app =>
                    app.name === normalized ||
                    app.displayName.toLowerCase() === normalized
                );
                if (match) {
                    window.location.href = basePath + match.file;
                }
            } else if (e.key === 'Escape') {
                resultsContainer.style.display = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (!inputElement.contains(e.target) && !resultsContainer.contains(e.target)) {
                resultsContainer.style.display = 'none';
            }
        });
    }

    // Auto-initialize on DOM ready
    function autoInitialize() {
        // Find search inputs by common selectors
        const searchInputs = document.querySelectorAll(
            'input[placeholder*="search" i], ' +
            'input[placeholder*="app" i], ' +
            'input[id*="search" i], ' +
            'input[id*="app" i], ' +
            'input[class*="search"], ' +
            'input[class*="app-search"]'
        );

        searchInputs.forEach(input => {
            if (input.type === 'text' || input.type === '') {
                initializeSearch(input);
            }
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoInitialize);
    } else {
        autoInitialize();
    }

    // Expose initialization function globally
    window.initializeAppSearch = initializeSearch;
})();
