document.addEventListener('DOMContentLoaded', function() {
    // Typing intro animation
    const introText = "ДМИТРИЙ ЦЮРА";
    const typingElement = document.getElementById('typingText');
    let i = 0;
    
    function typeWriter() {
        if (i < introText.length) {
            typingElement.innerHTML += introText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            setTimeout(function() {
                document.querySelector('.intro-animation').style.opacity = '0';
                setTimeout(function() {
                    document.querySelector('.intro-animation').style.display = 'none';
                }, 500);
            }, 1000);
        }
    }
    
    typeWriter();

    // Skills data
    const skills = [
        'Python', 'HTML/CSS', 'Работа в команде', 
        'Adobe Photoshop', 'Работа с оргтехникой', 
        'Деловое общение', 'Обучение и развитие', 
        'Документальное сопровождение', 'Техническая поддержка',
        'Работа с клиентами', 'Решение проблем', 'Креативность',
        'Веб-дизайн', 'Настройка ПО', 'Организация мероприятий',
        'Учет товаров', 'Работа с базами данных'
    ];

    // Populate skills grid
    const skillsGrid = document.getElementById('skillsGrid');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsGrid.appendChild(skillItem);
    });

    // Animate skills on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    skillItems.forEach(item => {
        observer.observe(item);
    });

    // Parallax effect for photo frame
    window.addEventListener('mousemove', function(e) {
        const photoFrame = document.querySelector('.photo-frame');
        if (photoFrame) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            photoFrame.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });

    // Section entrance animations
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s, transform 0.8s';
        sectionObserver.observe(section);
    });

    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');

    contactBtn.addEventListener('click', function() {
        contactModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', function() {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Добавляем анимацию для важной информации
    const importantElements = [
        document.querySelector('.name-container'),
        document.querySelector('.about-description'),
        document.querySelectorAll('.timeline-content'),
        document.querySelector('.education-item')
    ];

    importantElements.forEach(element => {
        if (element) {
            if (element.length) {
                // Для NodeList
                element.forEach(el => {
                    el.classList.add('highlight');
                    // Убираем анимацию после 3 циклов
                    setTimeout(() => {
                        el.classList.remove('highlight');
                    }, 6000);
                });
            } else {
                // Для одиночных элементов
                element.classList.add('highlight');
                setTimeout(() => {
                    element.classList.remove('highlight');
                }, 6000);
            }
        }
    });

    // Заполняем декоративные элементы
    const decorationElements = document.querySelectorAll('.decoration-element');
    decorationElements.forEach((el, index) => {
        // Добавляем псевдо-текст в декоративные элементы
        const text = document.createElement('div');
        text.style.position = 'absolute';
        text.style.width = '100%';
        text.style.height = '100%';
        text.style.display = 'flex';
        text.style.justifyContent = 'center';
        text.style.alignItems = 'center';
        text.style.fontFamily = "'Stalinist One', sans-serif";
        text.style.fontSize = '1.5rem';
        text.style.color = 'rgba(255,255,255,0.2)';
        text.style.textTransform = 'uppercase';
        text.style.letterSpacing = '2px';
        
        if (index === 0) text.textContent = 'Python';
        else if (index === 1) text.textContent = 'HTML/CSS';
        else text.textContent = 'Developer';
        
        el.appendChild(text);
    });
});