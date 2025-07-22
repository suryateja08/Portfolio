# 🚀 Teja Chennapragada - Portfolio

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Full Stack Developer. Built with React, Material-UI, and EmailJS for seamless contact functionality.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Material--UI](https://img.shields.io/badge/Material--UI-Latest-blue) ![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-orange)

## 🌟 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Sections**: Hero, Skills, Experience, Projects, Education, Certifications, Contact
- **Contact Form**: Functional contact form with EmailJS integration (no backend required)
- **Professional Background**: Developer workspace-themed Hero section
- **Downloadable Resume**: Direct download link for resume/CV
- **Social Integration**: LinkedIn integration
- **Fast Loading**: Optimized performance with React best practices

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - Modern JavaScript framework
- **Material-UI (MUI)** - React component library for styling
- **Typed.js** - Smooth typing animation effects
- **CSS-in-JS** - Styled components with MUI's sx prop

### Email Service
- **EmailJS** - Contact form without backend server

### Development Tools
- **Create React App** - React application boilerplate
- **npm** - Package manager

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── profile-img.jpg
│   ├── resume.pdf
│   └── ...
├── src/
│   ├── Components/
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── EMAILJS_SETUP.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## ✉️ Contact Form Setup

The contact form uses EmailJS for sending emails without a backend server. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the credentials in `src/Components/Contact.jsx`:
   ```javascript
   const SERVICE_ID = 'your_service_id';
   const TEMPLATE_ID = 'your_template_id';
   const PUBLIC_KEY = 'your_public_key';
   ```

For detailed setup instructions, see `EMAILJS_SETUP.md`.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/Components/Hero.jsx` - Name, title, profile description
- `src/Components/Contact.jsx` - Email, phone number, social links
- `public/profile-img.jpg` - Replace with your profile picture
- `public/resume.pdf` - Replace with your resume

### Sections Data
- `src/Components/Skills.jsx` - Add your technical skills
- `src/Components/Experience.jsx` - Update work experience
- `src/Components/Projects.jsx` - Showcase your projects
- `src/Components/Education.jsx` - Educational background
- `src/Components/Certifications.jsx` - Professional certifications

### Styling
- Colors and themes can be modified in each component's `sx` prop
- Global styles are in `src/App.css` and `src/index.css`

## 🚀 Deployment

### GitHub Pages
1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Other Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI

## 📞 Contact

**Teja Chennapragada**
- Email: tejac08221@gmail.com
- Phone: +1 (513) 348-6366
- LinkedIn: [linkedin.com/in/teja-c/](https://www.linkedin.com/in/teja-c/)
- Portfolio: [Live Demo](https://yourusername.github.io/portfolio)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Material-UI** for the excellent component library
- **EmailJS** for seamless contact form integration
- **Unsplash** for high-quality background images
- **Typed.js** for smooth typing animations

## 🔧 Troubleshooting

### Common Issues

1. **Contact form not working**: Verify EmailJS credentials and service setup
2. **Images not loading**: Check file paths in the `public` folder
3. **Build errors**: Ensure all dependencies are installed with `npm install`

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Verify all dependencies are up to date
3. Ensure Node.js version compatibility
4. Review the EmailJS setup guide

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
