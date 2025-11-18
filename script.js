// AI Resume Builder - JavaScript
let selectedTemplate = 'modern';
let skills = [];

// Add Education
function addEducation() {
    const container = document.getElementById('education-container');
    const div = document.createElement('div');
    div.className = 'education-entry';
    div.innerHTML = `
        <input type="text" placeholder="Degree" class="degree">
        <input type="text" placeholder="Institution" class="institution">
        <input type="text" placeholder="Year" class="year">
        <input type="text" placeholder="CGPA" class="grade">
    `;
    container.appendChild(div);
}

// Add Experience
function addExperience() {
    const container = document.getElementById('experience-container');
    const div = document.createElement('div');
    div.className = 'experience-entry';
    div.innerHTML = `
        <input type="text" placeholder="Job Title" class="job-title">
        <input type="text" placeholder="Company" class="company">
        <input type="text" placeholder="Duration" class="duration">
        <textarea placeholder="Description..." class="description" rows="3"></textarea>
    `;
    container.appendChild(div);
}

// Add Project
function addProject() {
    const container = document.getElementById('projects-container');
    const div = document.createElement('div');
    div.className = 'project-entry';
    div.innerHTML = `
        <input type="text" placeholder="Project Title" class="project-title">
        <input type="text" placeholder="Technologies" class="technologies">
        <textarea placeholder="Project description..." class="project-desc" rows="3"></textarea>
        <input type="url" placeholder="Project Link" class="project-link">
    `;
    container.appendChild(div);
}

// Add Skills
function addSkills() {
    const input = document.getElementById('skills-input');
    const newSkills = input.value.split(',').map(s => s.trim()).filter(s => s);
    skills = [...new Set([...skills, ...newSkills])];
    renderSkills();
    input.value = '';
}

// Render Skills
function renderSkills() {
    const container = document.getElementById('skills-tags');
    container.innerHTML = skills.map(skill => `
        <div class="skill-tag">
            ${skill}
            <span class="remove" onclick="removeSkill('${skill}')">×</span>
        </div>
    `).join('');
}

// Remove Skill
function removeSkill(skill) {
    skills = skills.filter(s => s !== skill);
    renderSkills();
}

// Select Template
function selectTemplate(template) {
    selectedTemplate = template;
    document.querySelectorAll('.template-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    document.querySelector(`[data-template="${template}"]`).classList.add('selected');
}

// Generate Summary with AI
function generateSummary() {
    const summaries = [
        "Passionate software developer with expertise in building scalable applications. Strong problem-solving skills and dedication to clean code.",
        "Results-driven professional with experience in full-stack development. Proven track record of delivering high-quality projects on time.",
        "Innovative developer skilled in modern web technologies. Committed to continuous learning and staying updated with industry trends."
    ];
    document.getElementById('summary').value = summaries[Math.floor(Math.random() * summaries.length)];
    alert('✨ AI Summary Generated!');
}

// Suggest Skills
function suggestSkills() {
    const suggestedSkills = ['JavaScript', 'Python', 'React', 'Node.js', 'HTML/CSS', 'Git', 'MongoDB', 'SQL', 'TypeScript', 'Docker'];
    const random = suggestedSkills.sort(() => 0.5 - Math.random()).slice(0, 5);
    document.getElementById('skills-input').value = random.join(', ');
    alert('✨ Skills Suggested! Click "Add Skills" to add them.');
}

// Collect Form Data
function collectData() {
    const data = {
        personal: {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            linkedin: document.getElementById('linkedin').value,
            github: document.getElementById('github').value
        },
        summary: document.getElementById('summary').value,
        education: [],
        experience: [],
        projects: [],
        skills: skills,
        template: selectedTemplate
    };
    
    // Collect Education
    document.querySelectorAll('.education-entry').forEach(entry => {
        data.education.push({
            degree: entry.querySelector('.degree').value,
            institution: entry.querySelector('.institution').value,
            year: entry.querySelector('.year').value,
            grade: entry.querySelector('.grade').value
        });
    });
    
    // Collect Experience
    document.querySelectorAll('.experience-entry').forEach(entry => {
        data.experience.push({
            title: entry.querySelector('.job-title').value,
            company: entry.querySelector('.company').value,
            duration: entry.querySelector('.duration').value,
            description: entry.querySelector('.description').value
        });
    });
    
    // Collect Projects
    document.querySelectorAll('.project-entry').forEach(entry => {
        data.projects.push({
            title: entry.querySelector('.project-title').value,
            technologies: entry.querySelector('.technologies').value,
            description: entry.querySelector('.project-desc').value,
            link: entry.querySelector('.project-link').value
        });
    });
    
    return data;
}

// Preview Resume
function previewResume() {
    const data = collectData();
    const modal = document.getElementById('preview-modal');
    const preview = document.getElementById('resume-preview');
    
    preview.innerHTML = generateResumeHTML(data);
    modal.style.display = 'block';
}

// Close Preview
function closePreview() {
    document.getElementById('preview-modal').style.display = 'none';
}

// Generate Resume HTML
function generateResumeHTML(data) {
    return `
        <div class="resume-container">
            <div class="resume-header">
                <h1>${data.personal.name || 'Your Name'}</h1>
                <p>${data.personal.email} | ${data.personal.phone}</p>
                <p>${data.personal.location}</p>
            </div>
            
            ${data.summary ? `<div class="resume-section">
                <h2>Professional Summary</h2>
                <p>${data.summary}</p>
            </div>` : ''}
            
            ${data.education.length ? `<div class="resume-section">
                <h2>Education</h2>
                ${data.education.map(edu => `
                    <div class="resume-item">
                        <h3>${edu.degree}</h3>
                        <p>${edu.institution} - ${edu.year}</p>
                        ${edu.grade ? `<p>CGPA: ${edu.grade}</p>` : ''}
                    </div>
                `).join('')}
            </div>` : ''}
            
            ${data.experience.length ? `<div class="resume-section">
                <h2>Experience</h2>
                ${data.experience.map(exp => `
                    <div class="resume-item">
                        <h3>${exp.title}</h3>
                        <p>${exp.company} - ${exp.duration}</p>
                        <p>${exp.description}</p>
                    </div>
                `).join('')}
            </div>` : ''}
            
            ${data.projects.length ? `<div class="resume-section">
                <h2>Projects</h2>
                ${data.projects.map(proj => `
                    <div class="resume-item">
                        <h3>${proj.title}</h3>
                        <p>${proj.technologies}</p>
                        <p>${proj.description}</p>
                    </div>
                `).join('')}
            </div>` : ''}
            
            ${data.skills.length ? `<div class="resume-section">
                <h2>Skills</h2>
                <p>${data.skills.join(' • ')}</p>
            </div>` : ''}
        </div>
    `;
}

// Download Resume
function downloadResume() {
    alert('📥 PDF Download feature requires a PDF library. For now, you can print this page as PDF (Ctrl+P).');
    window.print();
}

// Save Data
function saveData() {
    const data = collectData();
    localStorage.setItem('resumeData', JSON.stringify(data));
    alert('💾 Data saved successfully!');
}

// Load Data
function loadData() {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
        alert('📂 Data loaded! (Full load functionality requires additional implementation)');
    } else {
        alert('No saved data found!');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('preview-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
