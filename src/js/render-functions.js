export default function renderImages(images){
  const list = document.querySelector('.gallery');
  // list.innerHTML = '';

  const markup = images.map(image => {
    return `
    <li class="card">
    <a class="card-link" href=${image.webformatURL}>
      <img src="${image.webformatURL}" alt="${image.tags}">
      <div class="stats">
        <div class="stats-item">
          <p class="elements">Likes</p>
          ${image.likes}
        </div>
        <div class="stats-item">
          <p class="elements">Views</p>
          ${image.views}
        </div>
        <div class="stats-item">
          <p class="elements">Comments</p>
          ${image.comments}
        </div>
        <div class="stats-item">
          <p class="elements">Downloads</p>
          ${image.downloads}
        </div>
      </div>
    </li>
  `;
  }).join('');
  return markup;
}
