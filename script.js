document.querySelectorAll('.file').forEach(file => {  
  file.addEventListener('click', () => {  
    alert('This is a mock file. Real OneDrive would open it.');  
  });  
});  
