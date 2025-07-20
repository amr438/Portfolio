// Theme toggle functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    console.log('Current theme:', currentTheme);
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        let heroImg = document.querySelector('.hero-image');
        heroImg.classList.remove('hero-image-dark')
        heroImg.classList.add('hero-image')
    } else {
;
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        let heroImg = document.querySelector('.hero-image');
        heroImg.classList.add('hero-image-dark')
    }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') ||  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    let heroImg = document.querySelector('.hero-image');
        heroImg.classList.add('hero-image-dark')
}


function sendEmail() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name !== "" && email !== "" && subject !== "" && message !== "") {
        const phone = "201145856114";
        const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
        const url = `https://wa.me/${phone}?text=${text}`;
        window.open(url, '_blank');
    } else {
        alert("Please fill in all fields before sending the message.");
    }
}

let sendButton = document.querySelector('.submit-btn');
sendButton.addEventListener('click', sendEmail);

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    let height =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let width = window.scrollY / height * 100;
    console.log('Scroll height percentage:', width);
    let widthSpan = document.querySelector('.width');
    widthSpan.style.width = width + '%';
})