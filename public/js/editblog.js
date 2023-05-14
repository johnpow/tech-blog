
const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const blog_title = document.querySelector('#new-blogpost-title').value.trim();
    const blog_category = document.querySelector('#new-blogpost-category').value.trim();
    const blog_description = document.querySelector('#new-blogpost-desc').value.trim();
  
    const url = window.location.href;
    const blogpost_id = url.substring(url.lastIndexOf('/') + 1);
    
    if (blog_title && blog_category && blog_description) {
      const response = await fetch(`/api/editpost/${blogpost_id}`, {
        method: 'PUT',
        body: JSON.stringify({ blog_title, blog_description, blog_category }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blogpost');
      }
    }
  };
  

  const cancelButtonHandler = (event) => {
    console.log("cancel button clicked");
     event.preventDefault();
    document.location.replace('/dashboard');

  };
  
  document
    .querySelector('.update-blogpost-form')
    .addEventListener('submit', updateFormHandler);
  
 
  
    document
    .querySelector('#cancelBtn')
    .addEventListener('click', cancelButtonHandler);
  