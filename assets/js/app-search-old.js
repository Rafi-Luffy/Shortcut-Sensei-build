/**
 * Application Search Module
 * Provides real-time dropdown search functionality across all pages
 * Supports both light and dark modes
 * Handles Ctrl/Cmd+Click for opening in new tab
 */

(function() {
    'use strict';

    /**
     * Get the correct base path for linking to application pages
     * Automatically detects current page location and adjusts paths accordingly
     */
    function getBasePath() {
        const currentPath = window.location.pathname;
        
        // If we're in the root directory (Applications.html, home-page.html, etc.)
        if (currentPath.match(/\/(Applications|home-page|About|Privacy|blogs)\.html?$/i) || 
            currentPath.endsWith('/') || 
            !currentPath.includes('/pages/')) {
            return 'pages/applications/';
        }
        
        // If we're in /pages/applications/ directory
        if (currentPath.includes('/pages/applications/')) {
            return './';
        }
        
        // If we're in /pages/user/ or /pages/blogs/ directory
        if (currentPath.includes('/pages/')) {
            return '../applications/';
        }
        
        // Default fallback
        return 'pages/applications/';
    }

    // Application names - URLs will be constructed dynamically
    const applicationData = [
        // Operating Systems
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
        { name: "slack", displayName: "Slack", file: "Slack.htm" },
        
        // Productivity Tools
        { name: "trello", displayName: "Trello", file: "Trello.html" },
        
        // Media Tools
        { name: "spotify", displayName: "Spotify", file: "Spotify.html" },
        { name: "vlc", displayName: "VLC Media Player", file: "VLC Media Player.html" },
        { name: "vlc media player", displayName: "VLC Media Player", file: "VLC Media Player.html" },
        { name: "audacity", displayName: "Audacity", file: "Audacity.html" },
        
        // Utilities
        { name: "file explorer", displayName: "File Explorer", file: "File Explorer.htm" },
        { name: "explorer", displayName: "File Explorer", file: "File Explorer.htm" },
        { name: "7-zip", displayName: "7-Zip", file: "7-zip.html" },
        { name: "winrar", displayName: "WinRAR", file: "WinRAR.html" },
        { name: "acrobat", displayName: "Adobe Acrobat Reader", file: "Acrobat Adobe Reader.html" },
        { name: "adobe reader", displayName: "Adobe Acrobat Reader", file: "Acrobat Adobe Reader.html" },
        { name: "mozilla thunderbird", displayName: "Mozilla Thunderbird", file: "Mozilla Thunderbird.html" },
        { name: "thunderbird", displayName: "Mozilla Thunderbird", file: "Mozilla Thunderbird.html" }
    ];

    /**
     * Initialize search functionality for a given search input
     * @param {string} searchInputId - The ID of the search input element
     * @param {string} searchResultsId - The ID of the search results container (optional, will be created if not exists)
     */
    window.initializeAppSearch = function(searchInputId, searchResultsId) {
        const searchInput = document.getElementById(searchInputId);
        if (!searchInput) {
            console.warn(`Search input with ID "${searchInputId}" not found`);
            return;
        }

        // Get or create search results container
        let searchResults = document.getElementById(searchResultsId || `${searchInputId}Results`);
        if (!searchResults) {
            searchResults = document.createElement('div');
            searchResults.id = searchResultsId || `${searchInputId}Results`;
            searchResults.className = 'app-search-results';
            searchInput.parentElement.style.position = 'relative';
            searchInput.parentElement.appendChild(searchResults);
        }

        // Build applications list with correct paths for current page
        const basePath = getBasePath();
        const applications = applicationData.map(app => ({
            name: app.name,
            displayName: app.displayName,
            url: basePath + app.file
        }));

        // Function to display search results as dropdown
        function displaySearchResults(query) {
            searchResults.innerHTML = '';
            
            if (!query) {
                searchResults.style.display = 'none';
                return;
            }
            
            query = query.toLowerCase().trim();
            
            // Filter applications based on query
            const matchingApps = applications.filter(app => 
                app.name.includes(query) || app.displayName.toLowerCase().includes(query)
            );
            
            if (matchingApps.length === 0) {
                searchResults.style.display = 'none';
                return;
            }
            
            // Remove duplicates based on displayName and url
            const uniqueApps = [];
            const seen = new Set();
            for (const app of matchingApps) {
                const key = `${app.displayName}|${app.url}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    uniqueApps.push(app);
                }
            }
            
            // Create and display results (limit to 8 results)
            uniqueApps.slice(0, 8).forEach(app => {
                const resultItem = document.createElement('div');
                resultItem.className = 'app-search-result-item';
                resultItem.textContent = app.displayName;
                
                resultItem.addEventListener('click', (e) => {
                    if (e.ctrlKey || e.metaKey) {
                        // Ctrl/Cmd + Click: open in new tab
                        window.open(app.url, '_blank');
                    } else {
                        // Normal click: navigate to page
                        window.location.href = app.url;
                    }
                });
                
                searchResults.appendChild(resultItem);
            });
            
            searchResults.style.display = 'block';
        }

        // Event listeners
        searchInput.addEventListener('input', function() {
            displaySearchResults(this.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.toLowerCase().trim();
                const firstMatch = applications.find(app => 
                    app.name.includes(query) || app.displayName.toLowerCase().includes(query)
                );
                if (firstMatch) {
                    if (e.ctrlKey || e.metaKey) {
                        window.open(firstMatch.url, '_blank');
                    } else {
                        window.location.href = firstMatch.url;
                    }
                }
            }
        });
        
        // Close results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    };

    // Auto-initialize if common search input IDs exist
    document.addEventListener('DOMContentLoaded', function() {
        // Try common search input IDs
        const commonSearchIds = ['app', 'searchInput', 'search', 'appSearch'];
        commonSearchIds.forEach(id => {
            const input = document.getElementById(id);
            if (input && !input.dataset.searchInitialized) {
                initializeAppSearch(id);
                input.dataset.searchInitialized = 'true';
            }
        });
    });
})();
