flatpickr("#input-date-1, #input-date-2", {
    dateFormat: "d_m_Y",
  });

  //toggle buttons
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.posts__toggle-btn');
    const postsSection = document.querySelector('.posts');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        if (button.classList.contains('posts__list')) {
          postsSection.classList.add('list');
        } else {
          postsSection.classList.remove('list');
        }
      });
    });
    
    // Додаємо клас active до кнопки .posts__rows при завантаженні сторінки
    const rowsButton = document.querySelector('.posts__rows');
    rowsButton.classList.add('active');
  });
  
   
  
  