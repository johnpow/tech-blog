
const newFormHandler = async (event) => {
  event.preventDefault();

  const blog_title = document.querySelector('#blogpost-title').value.trim();
  const blog_category = document.querySelector('#blogpost-category').value.trim();
  const blog_description = document.querySelector('#blogpost-desc').value.trim();


  if (blog_title && blog_category && blog_description) {
    const response = await fetch(`/api/blogposts`, {
      method: 'POST',
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blogpost');
    }
  }
};

const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

      document.location.replace(`/editblogposts/${id}`);

  }
};

document
  .querySelector('.new-blogpost-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#deleteBtn')
  .addEventListener('click', delButtonHandler);

  document
  .querySelector('#editBtn')
  .addEventListener('click', editButtonHandler);
