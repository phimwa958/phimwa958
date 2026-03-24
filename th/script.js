// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect on scroll
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the section needs to be visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Common Header and Footer Injection
document.addEventListener('DOMContentLoaded', () => {
    const headerHtml = `
        <nav>
            <div class="logo">
                <a href="index.html"><span>My</span>Portfolio</a>
            </div>
            <ul>
                <li><a href="index.html" id="link-home">หน้าแรก</a></li>
                <li><a href="about.html" id="link-about">เกี่ยวกับดิฉัน</a></li>
                <li><a href="skills.html" id="link-skills">ทักษะ</a></li>
                <li><a href="projects.html" id="link-projects">โปรเจค</a></li>
                <li><a href="certificates.html" id="link-certificates">ประกาศนียบัตร</a></li>
                <li><a href="contact.html" id="link-contact">ติดต่อ</a></li>
            </ul>
        </nav>
    `;

    const footerHtml = `
        <p>ขอบคุณที่เข้าเยี่ยมชมแฟ้มสะสมผลงานของดิฉัน!</p>
        <p>
            <a href="mailto:pim2544varee@gmail.com">อีเมล</a> &nbsp;|&nbsp; 
            <a href="https://www.linkedin.com/in/phimwaree-thannirandorn-a402b2325/" target="_blank">LinkedIn</a> &nbsp;|&nbsp; 
            <a href="https://github.com/phimwa958/" target="_blank">GitHub</a>
        </p>
        <p>&copy; ${new Date().getFullYear()} phimwa958. All rights reserved.</p>
    `;

    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = headerHtml;
        // Set active link based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const linkId = 'link-' + currentPage.replace('.html', '').replace('index', 'home');
        const activeLink = document.getElementById(linkId);
        if (activeLink) activeLink.classList.add('active');
    }

    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = footerHtml;
    }
});