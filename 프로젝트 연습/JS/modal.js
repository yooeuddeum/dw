const modalOpenBtn = document.querySelector("#modal-btn").addEventListener("click", (e) => {
    const modal = document.querySelector('.modal');
          modal.classList.toggle('show');
  });
        
  const closeModalBtn = document.querySelector('.close-modal-btn');
  closeModalBtn.addEventListener('click', (e) => {
      const modal = document.querySelector('.modal');
  
      modal.classList.toggle('show');
  });
  
  const modalBackground = document.querySelector('.modal');
  modalBackground.addEventListener('click', (e) => {
      const modal = document.querySelector('.modal');
  
      if (e.target === modal) {
          modal.classList.toggle('show');
      }
  });