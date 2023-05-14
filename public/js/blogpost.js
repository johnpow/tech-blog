const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-full').value.trim();
    const url = window.location.href;
    const blogpost_id = url.substring(url.lastIndexOf('/') + 1);
    
    
    if (comment) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment,blogpost_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  

  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);
