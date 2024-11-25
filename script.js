document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');

      // Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
      });

      // Burger Animation
      burger.classList.toggle('toggle');
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Dynamic News Items
  const newsContainer = document.querySelector('.news-container');
  const newsItems = [
      { title: 'Annual Day Celebration', date: 'May 15, 2024', content: 'Join us for our grand Annual Day celebration featuring student performances and awards.' },
      { title: 'Science Fair Winners', date: 'April 2, 2024', content: 'Congratulations to our students who won top prizes at the State Science Fair!' },
      { title: 'New Computer Lab', date: 'March 10, 2024', content: 'We're excited to announce the opening of our state-of-the-art computer lab.' }
  ];

  newsItems.forEach(item => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = `
          <h3>${item.title}</h3>
          <p class="date">${item.date}</p>
          <p>${item.content}</p>
      `;
      newsContainer.appendChild(newsItem);
  });

  // Dynamic Testimonials
  const testimonialContainer = document.querySelector('.testimonial-container');
  const testimonials = [
      { name: 'Rahul Sharma', grade: 'Grade 10', content: 'Vishal Bharti School has provided me with countless opportunities to grow academically and personally.' },
      { name: 'Priya Patel', grade: 'Grade 12', content: 'The teachers here are incredibly supportive and have helped me achieve my goals.' },
      { name: 'Amit Singh', grade: 'Grade 8', content: 'I love the extracurricular activities offered at our school. They've helped me discover my passions.' }
  ];

  testimonials.forEach(item => {
      const testimonial = document.createElement('div');
      testimonial.classList.add('testimonial');
      testimonial.innerHTML = `
          <p>"${item.content}"</p>
          <p class="author">- ${item.name}, ${item.grade}</p>
      `;
      testimonialContainer.appendChild(testimonial);
  });
});

