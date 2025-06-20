# Technical Context: bitcoin.rocks

## Technology Stack

### Frontend Technologies
- **HTML5**: Semantic markup with modern standards
- **CSS3**: Single stylesheet approach with responsive design
- **JavaScript (ES5/ES6)**: Client-side functionality and interactivity
- **jQuery 3.6.1**: DOM manipulation and AJAX requests
- **jquery.i18n**: Internationalization framework for multi-language support

### Server Technologies
- **Apache HTTP Server**: Web server with .htaccess configuration
- **Static File Serving**: No server-side processing required
- **URL Rewriting**: Clean URLs without .html extensions

### Development Tools
- **Git**: Version control and collaboration
- **GitHub**: Repository hosting and community contributions
- **Text Editors**: Atom (recommended) or any text editor
- **GitHub Desktop**: Simplified Git workflow for contributors

### Third-Party Services
- **MicroAnalytics**: Privacy-focused website analytics
- **Adobe Typekit**: Web font delivery (Proxima Nova family)
- **External CDNs**: jQuery and other library hosting

## Development Environment Setup

### Prerequisites
- **Git**: For version control and repository management
- **Text Editor**: Atom, VS Code, or similar
- **Web Browser**: Modern browser for testing
- **GitHub Account**: For contributions and collaboration

### Local Development Setup
```bash
# Clone the repository
git clone https://github.com/sovenor/bitcoin-rocks.git
cd bitcoin-rocks

# Open in text editor
atom . # or code . for VS Code

# Serve locally (optional)
python -m http.server 8000
# or
php -S localhost:8000
```

### File Structure Understanding
```
bitcoin-rocks/
├── *.html                 # Main pages
├── css/style.css          # Single stylesheet
├── jquery/                # JavaScript libraries and custom code
├── i18n/                  # Translation files by language
├── img/                   # Images organized by category
├── business/              # Business-specific pages
├── sticker-files/         # Downloadable resources
├── README.md              # Project documentation
├── CONTRIBUTING.md        # Contribution guidelines
└── LICENSE.md             # MIT license
```

## Dependencies and Libraries

### Core JavaScript Libraries
```html
<!-- jQuery Core -->
<script src="jquery/jquery.min.js"></script>

<!-- Internationalization -->
<script src="jquery/jquery.i18n/src/jquery.i18n.js"></script>
<script src="jquery/jquery.i18n/src/jquery.i18n.messagestore.js"></script>
<script src="jquery/jquery.i18n/src/jquery.i18n.fallbacks.js"></script>
<script src="jquery/jquery.i18n/src/jquery.i18n.parser.js"></script>
<script src="jquery/jquery.i18n/src/jquery.i18n.emitter.js"></script>
<script src="jquery/jquery.i18n/src/jquery.i18n.language.js"></script>

<!-- Custom Scripts -->
<script src="jquery/language.js"></script>
<script src="jquery/refresh-css.js"></script>
```

### CSS Dependencies
```html
<!-- Main Stylesheet -->
<link rel="stylesheet" href="css/style.css">

<!-- Adobe Typekit Fonts -->
<link rel="stylesheet" href="https://use.typekit.net/ful2oqu.css">
```

### Font Stack
- **Primary**: Proxima Nova (via Adobe Typekit)
- **Headings**: Proxima Nova Condensed, Proxima Soft
- **Fallback**: Sans-serif system fonts

## Configuration Files

### .htaccess Configuration
```apache
# URL rewriting to remove .html extensions
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)$ $1.html [NC,L]

# Cache control for static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### Translation File Structure
```json
{
  "last-updated": "2024-01-01",
  "locale": "en",
  "authors": ["Author Name"],
  "translation_key": "Translation value",
  "another_key": "Another value"
}
```

## Development Workflow

### Adding New Content
1. **HTML Structure**: Add semantic markup to appropriate page
2. **Translation Keys**: Create data-i18n attributes for translatable text
3. **Translation Files**: Add translation strings to all language files
4. **Styling**: Add CSS classes following existing patterns
5. **Testing**: Verify functionality across languages and devices

### Translation Workflow
1. **Fork Repository**: Create personal fork on GitHub
2. **Clone Locally**: Download repository to local machine
3. **Duplicate Language Folder**: Copy /i18n/en/ to new language code
4. **Translate Content**: Update JSON files with translated text
5. **Test Locally**: Verify translations display correctly
6. **Submit Pull Request**: Contribute back to main repository

### Deployment Process
1. **Development**: Make changes in local environment
2. **Testing**: Verify functionality across browsers and devices
3. **Commit**: Save changes to Git repository
4. **Push**: Upload changes to GitHub
5. **Deploy**: Upload files to production server
6. **Verify**: Confirm changes are live on bitcoin.rocks

## Technical Constraints

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (current versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Legacy Support**: Limited IE support (graceful degradation)

### Performance Requirements
- **Page Load Time**: Under 3 seconds on 3G connection
- **Image Optimization**: Compressed images under 500KB each
- **JavaScript**: Non-blocking script loading
- **CSS**: Single stylesheet under 100KB

### Accessibility Standards
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Color Contrast**: WCAG AA compliance for text readability
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Readers**: Proper ARIA labels and descriptions

## Security Considerations

### Content Security
- **Static Files Only**: No server-side code execution
- **External Links**: Curated and verified external resources
- **No User Data**: Minimal data collection (analytics only)
- **HTTPS**: Secure connection for all traffic

### Privacy Protection
- **Analytics**: Privacy-focused MicroAnalytics (no IP tracking)
- **No Cookies**: Minimal cookie usage (language preference only)
- **No Tracking**: No third-party tracking scripts
- **Open Source**: Transparent code for security review

## Maintenance and Updates

### Regular Maintenance Tasks
- **Content Updates**: Keep educational resources current
- **Translation Updates**: Maintain translation completeness
- **Dependency Updates**: Update jQuery and other libraries
- **Performance Monitoring**: Track site speed and availability
- **Security Updates**: Monitor for vulnerabilities

### Monitoring and Analytics
- **MicroAnalytics**: Privacy-focused visitor statistics
- **GitHub Insights**: Repository activity and contributions
- **Community Feedback**: Issues and discussions on GitHub
- **Performance Metrics**: Page load times and user engagement

This technical context provides the foundation for understanding and contributing to the bitcoin.rocks platform.
