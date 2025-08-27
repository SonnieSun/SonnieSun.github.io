document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectName = urlParams.get('project');
    
    if (!projectName) {
        showError('Can\'t find this project');
        return;
    }

    loadProject(projectName);
});

async function loadProject(projectName) {
    try {
        const response = await fetch(`/projects/${projectName}.md`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        if (!response.ok) {
            throw new Error(`Can't find this project: ${projectName}`);
        }
        const markdownText = await response.text();
        const { metadata, content } = parseFrontmatter(markdownText);
    
        renderProject(metadata, content);
        
    } catch (error) {
        console.error('Loading project failure:', error);
        showError('Loading project failure: ' + error.message);
    }
}

function parseFrontmatter(markdownText) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = markdownText.match(frontmatterRegex);
    
    if (!match) {
        return { metadata: {}, content: markdownText };
    }
    
    const frontmatter = match[1];
    const content = match[2];
    
    const metadata = {};
    frontmatter.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.slice(0, colonIndex).trim();
            let value = line.slice(colonIndex + 1).trim();
            
            // process key-values
            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
            }
            // process strings(delete quotes)
            else if ((value.startsWith('"') && value.endsWith('"')) || 
                     (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            
            metadata[key] = value;
        }
    });
    
    return { metadata, content };
}

function renderProject(metadata, markdownContent) {
    // add page title
    document.title = `${metadata.title || 'Unknown Project'} - My Portfolio`;
    
    // add metadata
    if (metadata.category) {
        const categoryElement = document.getElementById('project-category');
        if(metadata.category === 'Rendering') {
            categoryElement.innerHTML = `
                <a href="index.html#rendering" class="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-2">
                    <i class="fa fa-arrow-left mr-2"></i> Back to Rendering Projects
                </a>`;
        } else if(metadata.category === 'PCG') {
            categoryElement.innerHTML = `
                <a href="index.html#pcg" class="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-2">
                    <i class="fa fa-arrow-left mr-2"></i> Back to PCG Projects
                </a>`;
        } else if(metadata.category === 'Animation') {
            categoryElement.innerHTML = `
                <a href="index.html#animation" class="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-2">
                    <i class="fa fa-arrow-left mr-2"></i> Back to Animation Projects
                </a>`;
        }
    }

    if (metadata.title) {
        document.getElementById('project-title').textContent = metadata.title;
    }
    
    if (metadata.timeline) {
        document.getElementById('project-timeline').textContent = metadata.timeline;
    }

    if (metadata.role) {
        document.getElementById('project-role').textContent = metadata.role;
    }
    
    // add Hero images/videos
    const videoElement = document.getElementById('project-video');
    if (metadata.main_video) {
        videoElement.innerHTML = `
            <video controls style="width: 100%; border-radius: 8px;">
                <source src="${metadata.main_video}" type="video/mp4">
                Your browser does not support video playback.
            </video>
        `;
    } else if (metadata.main_img) {
        videoElement.innerHTML = `<img src="${metadata.main_image}" alt="${metadata.main_img_alt}" class="w-full h-auto">`;
    }

    if (metadata.overview) {
        const overviewElement = document.getElementById('project-overview');
        overviewElement.innerHTML = `
            <p class="text-gray-300 mb-6 text-lg">
                ${metadata.overview}
            </p>`;
    }
    
    if (metadata.technologies) {
        const techElement = document.getElementById('project-technologies');
        techElement.innerHTML = Array.isArray(metadata.technologies) 
            ? metadata.technologies.map(tech => `<span class="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">${tech}</span>`).join('')
            : `<span class="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">${metadata.technologies}</span>`;
    }

    if (metadata.img1 && metadata.img1_alt) {
        const img1Element = document.getElementById('project-img-1');
        img1Element.innerHTML = `<img src="${metadata.img1}" alt="${metadata.img1_alt}" class="w-full h-auto">`;
    }
    
    if (metadata.img2 && metadata.img2_alt) {
        const img2Element = document.getElementById('project-img-2');
        img2Element.innerHTML = `<img src="${metadata.img2}" alt="${metadata.img2_alt}" class="w-full h-auto">`;
    }

    if (metadata.img3 && metadata.img3_alt) {
        const img3Element = document.getElementById('project-img-3');
        img3Element.innerHTML = `<img src="${metadata.img3}" alt="${metadata.img3_alt}" class="w-full h-auto">`;
    }

    if (metadata.img4 && metadata.img4_alt) {
        const img4Element = document.getElementById('project-img-4');
        img4Element.innerHTML = `<img src="${metadata.img4}" alt="${metadata.img4_alt}" class="w-full h-auto">`;
    }

    if (metadata.img5 && metadata.img5_alt) {
        const img5Element = document.getElementById('project-img-5');
        img5Element.innerHTML = `<img src="${metadata.img5}" alt="${metadata.img5_alt}" class="w-full h-auto">`;
    }

    if (metadata.img6 && metadata.img6_alt) {
        const img6Element = document.getElementById('project-img-6');
        img6Element.innerHTML = `<img src="${metadata.img6}" alt="${metadata.img6_alt}" class="w-full h-auto">`;
    }
    
    // render Markdown content
    const contentElement = document.getElementById('markdown-content');
    contentElement.innerHTML = marked.parse(markdownContent);
    
    // code highlight
    if (typeof hljs !== 'undefined') {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }

    // hide loading tips, show contents
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.markdown-content').style.display = 'block';
}

function showError(message) {
    console.log(message);
    document.querySelector('.loading').style.display = 'none';
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}