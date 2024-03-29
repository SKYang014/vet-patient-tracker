async function commentFormHandler(event) {
  event.preventDefault();
  const tech_id = document.querySelector("#tech_id").value;
  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

  const pet_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        pet_id,
        comment_text,
        tech_id,
        // tech_name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);