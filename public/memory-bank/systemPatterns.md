# System Patterns: bitcoin.rocks

## Architecture Overview

### High-Level Architecture
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Static Files  │    │  Apache Server   │    │   CDN/Browser   │
│   HTML/CSS/JS   │───▶│  .htaccess       │───▶│   User Access   │
│   Images/Assets │    │  URL Rewriting   │    │   Multi-device  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │
         ▼                       ▼
┌─────────────────┐    ┌──────────────────┐
│ Internationalization │    │   Analytics     │
│   jquery.i18n   │    │  MicroAnalytics │
│   JSON Files    │    │  Privacy-focused │
└─────────────────┘    └──────────────────┘
```

### Core Design Patterns

#### 1. Static Site Generation Pattern
- **No CMS Dependency**: Pure HTML/CSS/JS eliminates server-side complexity
- **Version Control**: All content tracked in Git for transparency
- **Simple Deployment**: Direct file upload to web server
- **High Performance**: No database queries or server processing
- **Reliability**: Minimal failure points

#### 2. Progressive Enhancement Pattern
- **Base HTML**: Semantic markup works without JavaScript
- **CSS Enhancement**: Visual improvements layer on top
- **JavaScript Enhancement**: Interactive features enhance but don't break core functionality
- **Mobile-First**: Responsive design starts with mobile constraints

#### 3. Internationalization Pattern
- **Separation of Content and Presentation**: Text content stored in JSON translation files
- **Dynamic Language Loading**: JavaScript loads appropriate language files
- **Fallback Strategy**: Defaults to English if translation unavailable
- **Browser Language Detection**: Automatic language selection based on user preferences
- **Local Storage**: Remembers user language preference

## Component Architecture

### Page Structure Pattern
```html
<!DOCTYPE html>
<html>
<head>
    <!-- Meta tags, favicons, analytics -->
    <!-- i18n JavaScript libraries -->
    <!-- CSS and fonts -->
</head>
<body>
    <div class="container-main">
        <div class="container-inner">
            <!-- Logo/Navigation -->
            <!-- Content sections -->
            <!-- Footer -->
        </div>
    </div>
</body>
</html>
```

### Content Organization Pattern
- **Topic-Based Sections**: Content grouped by Bitcoin impact areas
- **Color-Coded Categories**: Visual hierarchy through consistent color schemes
- **Modular Text Boxes**: Reusable content container components
- **Responsive Grid**: Flexible layout adapts to screen sizes

### Navigation Pattern
- **Jump Button System**: Quick navigation to page sections
- **Smooth Scrolling**: Enhanced user experience with animated transitions
- **Back Navigation**: Consistent return-to-home functionality
- **Breadcrumb Context**: Clear user location awareness

## Data Flow Patterns

### Translation Loading Flow
```
Page Load → Browser Language Detection → localStorage Check → 
Language Selection → JSON File Loading → DOM Element Updates → 
Callback Functions → Dynamic Content Updates
```

### User Interaction Flow
```
User Action → Event Handler → State Update → 
DOM Manipulation → Visual Feedback → Analytics Tracking
```

## File Organization Patterns

### Directory Structure
```
/
├── index.html (homepage)
├── [topic].html (topic pages)
├── css/
│   └── style.css (single stylesheet)
├── jquery/
│   ├── jquery libraries
│   └── custom JavaScript
├── i18n/
│   ├── [lang]/
│   │   ├── common_[lang].json
│   │   └── [page]_[lang].json
├── img/
│   ├── [category]/
│   └── assets organized by purpose
├── business/
│   └── business-specific pages
└── sticker-files/
    └── downloadable resources
```

### Naming Conventions
- **HTML Files**: Descriptive names matching URL structure
- **Translation Files**: `[page]_[language].json` format
- **Image Files**: Descriptive names with category prefixes
- **CSS Classes**: BEM-inspired naming with semantic meaning

## Styling Patterns

### CSS Architecture
- **Single Stylesheet**: All styles in one file for simplicity
- **Component-Based Classes**: Reusable style components
- **Responsive Design**: Mobile-first media queries
- **Color System**: Consistent color variables for topics
- **Typography Scale**: Hierarchical font sizing system

### Visual Design Patterns
- **Dark Theme**: Consistent dark background with light text
- **Orange Accent**: Bitcoin orange (#FF9500) as primary accent
- **Topic Colors**: Unique colors for each content category
- **Card-Based Layout**: Content containers with hover effects
- **Consistent Spacing**: Standardized margins and padding

## Integration Patterns

### Third-Party Services
- **Analytics**: Privacy-focused MicroAnalytics integration
- **Fonts**: Adobe Typekit font loading
- **External Links**: Curated external resource integration
- **Social Sharing**: Optimized meta tags for social platforms

### Form Handling
- **Client-Side Validation**: JavaScript form validation
- **Progressive Enhancement**: Forms work without JavaScript
- **Country Selection**: Dynamic country/region selection
- **Local Storage**: Form data persistence

## Performance Patterns

### Optimization Strategies
- **Minimal Dependencies**: Only essential JavaScript libraries
- **Image Optimization**: Compressed images with appropriate formats
- **CSS Minification**: Optimized stylesheet delivery
- **Caching Strategy**: Leverages browser and server caching
- **CDN Integration**: External resource optimization

### Loading Patterns
- **Critical CSS**: Above-the-fold styling prioritized
- **Lazy Loading**: Non-critical resources loaded as needed
- **Preloading**: Important resources loaded early
- **Fallback Handling**: Graceful degradation for failed resources

## Security Patterns

### Content Security
- **Static Content**: No server-side code reduces attack surface
- **External Link Validation**: Curated external resource links
- **Privacy Protection**: No user data collection beyond analytics
- **Open Source**: Transparent code for security review

This system architecture provides a solid foundation for the bitcoin.rocks platform while maintaining simplicity and reliability.
