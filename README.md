# Robert Garcia - Developer Portfolio

A modern, responsive portfolio website showcasing front-end development skills and projects.

## 🎯 Project Overview

This portfolio website was built as part of a capstone project to demonstrate proficiency in:
- HTML5 semantic markup
- CSS3 with modern layout techniques (Flexbox & Grid)
- Vanilla JavaScript for interactivity
- Responsive design principles
- Web accessibility best practices

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll animations and interactive hover effects
- **Modern UI**: Clean, professional design with dark theme
- **Accessible**: Built with semantic HTML and ARIA labels
- **Interactive Navigation**: Smooth scrolling and active section highlighting
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Featured projects with detailed information
- **Social Links**: Connected social media profiles

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (System fonts for performance)

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
│
└── assets/             # Images and other assets (if needed)
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **View the site**
   - Navigate to `http://localhost:8000` (or the port shown)

## 📤 Deployment

### Option 1: GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://yourusername.github.io/portfolio`

### Option 2: Netlify

1. **Sign up at** [Netlify](https://www.netlify.com/)

2. **Deploy via Drag & Drop**
   - Drag your project folder to Netlify's deploy zone
   - Your site will be live instantly!

3. **Or connect to GitHub**
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure build settings (leave empty for static site)
   - Click "Deploy site"

4. **Custom Domain (Optional)**
   - In Netlify dashboard, go to "Domain settings"
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** and your site will be live!

## 🎨 Customization

### Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #c5f82a;     /* Main accent color */
    --bg-dark: #0a0a0a;           /* Background color */
    --text-primary: #ffffff;       /* Main text color */
    /* ... other colors */
}
```

### Content

1. **Personal Information**: Update name, bio, and contact details in `index.html`
2. **Projects**: Modify project details in the Featured Projects section
3. **Skills**: Add or remove skills in the About section
4. **Social Links**: Update href attributes to your social profiles
5. **Images**: Replace placeholder images with your own

### Fonts

The project uses system fonts by default. To use custom fonts:

1. Add Google Fonts link in `<head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   ```

2. Update font-family in `styles.css`:
   ```css
   body {
       font-family: 'Inter', sans-serif;
   }
   ```

## ✅ Checklist Before Deployment

- [ ] Replace all placeholder content with your information
- [ ] Update project images and descriptions
- [ ] Test all links (social media, project links, email)
- [ ] Verify contact form functionality
- [ ] Test responsive design on multiple devices
- [ ] Check browser compatibility
- [ ] Validate HTML and CSS
- [ ] Test accessibility with screen readers
- [ ] Optimize images for web
- [ ] Add meta tags for SEO
- [ ] Test site speed with Lighthouse

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: 769px - 1024px
- Large Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for images
- Sufficient color contrast
- Focus indicators
- Screen reader friendly

## 🐛 Known Issues

None currently. Please report any bugs by creating an issue.

## 📝 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add loading animations
- [ ] Integrate with a CMS
- [ ] Add testimonials section
- [ ] Implement contact form backend
- [ ] Add more project case studies
- [ ] Create downloadable resume

## 📧 Contact

- **Email**: robert.garcia@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from Figma community
- Icons from Font Awesome
- Images from Unsplash (replace with your own)

---

**Built with ❤️ by Robert Garcia**

Last Updated: 2024
