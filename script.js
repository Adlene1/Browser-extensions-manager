document.addEventListener('DOMContentLoaded', function() {
    // Load extensions data from JSON file
    const extensionsData = {
        extensions: [
            
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
    ]
        
    };

    displayExtensions(extensionsData.extensions);

    // Function to display extensions
    function displayExtensions(extensions) {
        const container = document.getElementById('extensionsContainer');
        
        if (extensions.length === 0) {
            container.innerHTML = '<p>No extensions installed.</p>';
            return;
        }

        extensions.forEach((extension, index) => {
            const card = document.createElement('div');
            card.className = 'extension-card';
            
            // Determine status class based on isActive
            const statusClass = extension.isActive ? 'active' : 'inactive';
            const statusText = extension.isActive ? 'Active' : 'Inactive';
            
            card.innerHTML = `
                <div class="extension-logo">
                        <img src="${extension.logo}" alt="${extension.name} logo">
                </div>
                <div class="extension-info">
                    <h3>${extension.name}</h3>
                    <p>${extension.description}</p>
                    <span class="status ${statusClass}">${statusText}</span>
                </div>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            
            container.appendChild(card);
        });

        // Add event listeners to all remove buttons
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                const extensionIndex = this.getAttribute('data-index');
                removeExtension(extensionIndex);
            });
        });
    }

    // Function to handle extension removal
    function removeExtension(extensionIndex) {
        const card = document.querySelector(`.remove-btn[data-index="${extensionIndex}"]`).closest('.extension-card');
        card.style.transform = 'translateX(-100%)';
        card.style.opacity = '0';
        
        setTimeout(() => {
            card.remove();
            
            if (document.querySelectorAll('.extension-card').length === 0) {
                const container = document.getElementById('extensionsContainer');
                container.innerHTML = '<p>No extensions installed.</p>';
            }
        }, 300);
        
        console.log(`Extension at index ${extensionIndex} removed`);
    }
});