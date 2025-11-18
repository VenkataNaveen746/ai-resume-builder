# 🤖 AI Resume Builder

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

An intelligent, AI-powered resume builder that helps users create professional resumes with smart suggestions, multiple templates, and real-time preview capabilities.

## 📋 Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [AI Features](#ai-features)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- **Smart Form Interface**: Intuitive step-by-step form for entering resume details
- **AI-Powered Suggestions**:
  - Auto-generate professional summaries
  - Enhance work experience descriptions
  - Suggest relevant skills based on job role
  - Improve content with AI writing assistance

### Resume Sections
- Personal Information (Name, Contact, Links)
- Professional Summary
- Education History
- Work Experience
- Projects Portfolio
- Technical Skills
- Certifications

### Templates & Export
- **3 Professional Templates**:
  - Modern (Gradient design)
  - Classic (Traditional format)
  - Creative (Colorful layout)
- **PDF Export**: Download resume as high-quality PDF
- **Real-time Preview**: See changes instantly
- **Save Progress**: Local storage support to save your work

### Additional Features
- Responsive design (works on all devices)
- Clean and intuitive UI/UX
- No backend required - runs entirely in browser
- Privacy-focused - all data stays local

## 🎥 Demo

### Screenshots
*(Add screenshots of your resume builder here)*

### Live Demo
👉 **[Try it now!](https://venkatanave en746.github.io/ai-resume-builder/)**

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI Integration**: OpenAI API / Custom AI logic
- **PDF Generation**: jsPDF library
- **Storage**: LocalStorage API
- **Hosting**: GitHub Pages

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git (optional)

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/VenkataNaveen746/ai-resume-builder.git
cd ai-resume-builder
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

3. **Optional: Configure AI Features**
   - Open `script.js`
   - Add your API key if using external AI services
   ```javascript
   const AI_API_KEY = 'your-api-key-here';
   ```

## 🚀 Usage

### Creating Your Resume

1. **Enter Personal Information**
   - Fill in your name, email, phone, and professional links

2. **Add Professional Summary**
   - Write your own or click "Generate with AI" for suggestions

3. **Education Details**
   - Add your degrees, institutions, and years
   - Click "+ Add Education" for multiple entries

4. **Work Experience**
   - Enter job titles, companies, and duration
   - Use "Enhance with AI" to improve descriptions

5. **Projects**
   - Showcase your best work with descriptions and links

6. **Skills**
   - Add skills manually or get AI suggestions

7. **Choose Template**
   - Select from Modern, Classic, or Creative designs

8. **Preview & Download**
   - Click "Preview Resume" to see final output
   - Click "Download PDF" to save your resume
   - Use "Save Progress" to continue later

## 📁 Project Structure

```
ai-resume-builder/
│
├── index.html          # Main HTML file with form structure
├── styles.css          # Complete styling and responsive design
├── script.js           # JavaScript logic and AI features
├── README.md          # Project documentation
├── LICENSE            # MIT License
└── .gitignore         # Git ignore file
```

## 🤖 AI Features

### 1. Professional Summary Generator
- Analyzes your experience and education
- Generates tailored professional summaries
- Multiple style options (formal, creative, technical)

### 2. Experience Enhancement
- Rewrites job descriptions for impact
- Adds action verbs and quantifiable achievements
- Optimizes for ATS (Applicant Tracking Systems)

### 3. Smart Skill Suggestions
- Recommends skills based on your role
- Industry-specific skill sets
- Trending technologies

### 4. Content Optimization
- Grammar and spelling checks
- Readability improvements
- Keyword optimization for job descriptions

## 🎨 Customization

### Adding New Templates

1. Add template HTML in `script.js`:
```javascript
function generateMinimalTemplate(data) {
  // Your template code here
}
```

2. Add template preview in `styles.css`:
```css
.minimal-preview {
  background: #your-design;
}
```

### Modifying AI Prompts

Edit the AI prompts in `script.js`:
```javascript
const SUMMARY_PROMPT = "Your custom prompt here...";
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test on multiple browsers
- Update README for new features

## 📝 To-Do List

- [ ] Add more resume templates
- [ ] Implement LinkedIn import
- [ ] Add cover letter generator
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Resume analytics (keyword density, readability score)
- [ ] Export to Word format
- [ ] Resume comparison tool

## 🐛 Known Issues

- PDF generation may take a few seconds for large resumes
- Some special characters may not render in PDF
- AI features require internet connection

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Venkata Naveen** - *Initial work* - [VenkataNaveen746](https://github.com/VenkataNaveen746)

## 🙏 Acknowledgments

- Inspired by modern resume builders
- AI assistance powered by OpenAI
- Icons from Font Awesome
- PDF generation using jsPDF

## 📞 Contact

For questions or support:
- Email: naveentummala_venkata@srmap.edu.in
- GitHub: [@VenkataNaveen746](https://github.com/VenkataNaveen746)

## ⭐ Support

If you found this project helpful, please give it a ⭐️!

---

**Project created for Smart Tech Club Project Showcase - November 2025**
