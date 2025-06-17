# Professional Software Engineer Resume

A beautiful, responsive, and professional resume webpage designed specifically for software engineers. This resume features a modern design with smooth animations, interactive elements, and PDF download functionality.

## Features

- 🎨 **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- 📄 **PDF Export**: One-click PDF download functionality
- 🖨️ **Print Support**: Optimized for printing with proper styling
- ⚡ **Interactive**: Hover effects, smooth scrolling, and interactive elements
- 🎯 **Software Engineer Focused**: Sections specifically designed for tech professionals
- 🔧 **Easy Customization**: Simple HTML structure for easy content updates

## Files Structure

```
cv/
├── index.html          # Main resume HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for PDF download and interactions
├── img/
│   └── selfimg.jpg     # Your profile image
└── README.md           # This file
```

## Quick Start

1. **Open the resume**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to replace demo content with your information
3. **Update profile image**: Replace `img/selfimg.jpg` with your own photo
4. **Download PDF**: Click the "Download PDF" button to save as PDF

## Customization Guide

### Personal Information
Edit the header section in `index.html`:

```html
<h1 class="name">Your Name</h1>
<h2 class="title">Your Title</h2>
<p class="tagline">Your professional summary</p>
```

### Contact Information
Update the contact details:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
```

### Skills
Modify the skills section by updating the skill tags:

```html
<div class="skill-tags">
    <span class="skill-tag">Your Skill 1</span>
    <span class="skill-tag">Your Skill 2</span>
</div>
```

### Experience
Update the experience section with your work history:

```html
<div class="experience-item">
    <div class="experience-header">
        <h4>Your Job Title</h4>
        <span class="company">Company Name</span>
        <span class="duration">Start Date - End Date</span>
    </div>
    <ul class="experience-details">
        <li>Your achievement 1</li>
        <li>Your achievement 2</li>
    </ul>
</div>
```

### Projects
Add your projects to the projects section:

```html
<div class="project-item">
    <h4>Project Name</h4>
    <p>Project description</p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
</div>
```

## Sections Included

1. **Header**: Profile image, name, title, and contact information
2. **Technical Skills**: Categorized skills with visual tags
3. **Professional Experience**: Work history with achievements
4. **Notable Projects**: Portfolio projects with technologies used
5. **Education**: Academic background
6. **Certifications**: Professional certifications

## Features Explained

### PDF Download
- Uses `html2pdf.js` library for high-quality PDF generation
- Automatically formats for A4 paper size
- Includes all styling and images
- Shows loading state and success/error notifications

### Responsive Design
- Mobile-first approach
- Adapts to different screen sizes
- Optimized typography and spacing
- Touch-friendly interactive elements

### Interactive Elements
- Hover effects on cards and buttons
- Smooth animations and transitions
- Click-to-copy contact information
- Keyboard shortcuts (Ctrl+P for PDF download)

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## Tips for Best Results

1. **Profile Image**: Use a high-quality, professional photo (recommended size: 400x400px)
2. **Content Length**: Keep descriptions concise but impactful
3. **Skills**: Focus on relevant technologies for your target positions
4. **Projects**: Include live links or GitHub repositories when possible
5. **PDF Download**: Test the PDF generation to ensure proper formatting

## Customization Options

### Colors
The color scheme can be modified in `styles.css`:

```css
/* Primary colors */
--primary-color: #3498db;
--secondary-color: #2ecc71;
--accent-color: #e74c3c;
```

### Fonts
Change the font family in `styles.css`:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Layout
Adjust the container width and spacing:

```css
.container {
    max-width: 1200px; /* Increase for wider layout */
}
```

## Troubleshooting

### PDF Download Issues
- Ensure you're using a modern browser
- Check that all images are properly loaded
- Try refreshing the page before downloading
- Use the print button as an alternative

### Image Not Loading
- Verify the image path is correct
- Ensure the image file exists in the `img/` folder
- Check file permissions

### Styling Issues
- Clear browser cache
- Ensure all CSS files are properly linked
- Check for JavaScript errors in browser console

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions about customization, please check the browser console for error messages and ensure all files are properly linked.

---

**Happy job hunting! 🚀** 