# Rooster Grin Test Site
## Version 1.0
<hr>

### INSTALLATION

    - Clone this repo locally
    - npm install
    - npm start
    - Server will run on port 4001. Port can be changed in server.js if needed.
    - Open browser, navigate to localhost:4001
    - Enjoy!
    
<hr>

### INTRODUCTION

    This is a test site built for Rooster Grin Media. I had one full 
    business day to work on it with the given deadline and my existing 
    responsibilities, so this is what I was able to accomplish in a 
    day's time!

### TECHNOLOGIES EXPLORED
    I considered using React and WordPress, as there were bonus points 
    given for implementing a robust back-end through a CMS, as well as 
    a front-end framework. Unfamiliar with modern WordPress, I was 
    delighted to discover that there is a REST API for all up-to-date 
    WordPress sites, and that it's possible to use WordPress as a 
    back-end without using their user interface/admin panel. That's 
    wonderful, but given the time I had, I went with retrofitting a 
    previous project that had good bones.

### TECHNOLOGIES USED
    Rooster Grin's site was developed using:
    - NodeJS / Express
    - Vanilla JavaScript 
    - Bulma CSS
    - CSS3
    - HTML5

### CHALLENGES, SUCCESSES, & WHAT I LEARNED
#### Successes & What I Learned
    - webkit-text-stroke is a neat CSS feature that worked for this project, 
    but it isn't a web standard, and wouldn't be something to use in a 
    production site. I like outline style fonts, though, and would like to 
    explore more of those
    
    - SVGs were included in the assets, and I hadn't used them,
    but they're easy!
    
    - If a carousel is required, and I'm using a front-end style framework 
    (like Bulma or Bootstrap), choose one that is known to work well with 
    that framework, or carve out time for building one from 
    scratch/troubleshooting. I had not implemented one before, so it was a 
    major win to learn this!
    
#### Challenges
    - Carousels: I tried four options to implement a carousel into this design: Bulma Carousel 
    (an add-on, not supported by Bulma), a CSS/HTML-only carousel, Flickity, 
    and Slick. I gave each 15-30 minutes, and the only ones that didn't substantially 
    break my grid system were Flickity and the CSS/HTML-only option. The CSS/HTML 
    carousel was cleverly implemented, but was also wordy, and I opted for Flickity 
    for its concise code style. Flickity had issues plugging in, so I used their CDN. 
    Slides 2-3 broke the CSS for the carousel, and I ruled out Bulma as a culprit. 
    If I had more time, I would spend a little while troubleshooting Flickity, because 
    it is wonderful in the applications where it does work. Shy of getting that to work, 
    I would build my own from scratch using HTML/CSS/JavaScript.
    
### FAVORITE PARTS!
    - Getting to cut up a design that was made for me and tinker with CSS is
    one of my favorite things! I didn't finish, clearly, but it was still a 
    very fun activity. 
    
### WHAT'S LEFT?
    - Add subtle animations to icons (30 minutes)
    - Change some h3 headers to be dark gray (20m)
    - Add chevron icon to links (Estimate requires research)
    - Add 5 star icons to final section (Est. req. research)
    - Troubleshoot carousel and add additional slides (1-4 hr)
    - Fix placement of section elements with padding, margin, and flex grid tricks (~3 hr)
    - Add markup for name/date to carousel (15m)
    - CSS Tweaks/Polishing (1-3 hr)
