import projects from './projects.js';

function createCard(project) {
  // Create article element
  const article = document.createElement('article');
  article.className =
    'flex flex-row items-center justify-center w-full sm:w-1/2 lg:w-1/3';

  // Create card container
  const cardContainer = document.createElement('div');
  cardContainer.className =
    'flex flex-col w-full p-8 leading-7 border-2 rounded-md border-stone-900';
  article.appendChild(cardContainer);

  // Create image container
  const imageContainer = document.createElement('div');
  imageContainer.className = 'flex flex-col items-center';
  cardContainer.appendChild(imageContainer);

  // Create image element
  const image = document.createElement('img');
  image.src = project.image;
  image.className = 'object-contain rounded-md h-60 w-120';
  imageContainer.appendChild(image);

  // Create title element
  const title = document.createElement('h3');
  title.className = 'p-2 mt-4 text-2xl font-bold text-center uppercase';
  title.textContent = project.title;
  cardContainer.appendChild(title);

  // Create badges container
  const badgesContainer = document.createElement('div');
  badgesContainer.className = 'flex flex-col items-center justify-center';
  cardContainer.appendChild(badgesContainer);

  // Create badge image element
  const badgeImage = document.createElement('img');
  badgeImage.src = project.badge;
  badgesContainer.appendChild(badgeImage);

  // Create GitHub link element
  const githubLink = document.createElement('a');
  githubLink.href = project.github;
  githubLink.className =
    'font-bold text-yellow-600 transition duration-300 ease-in-out hover:text-yellow-900';
  githubLink.textContent = 'see more on GitHub';
  badgesContainer.appendChild(githubLink);

  // Create description container
  const descriptionContainer = document.createElement('div');
  cardContainer.appendChild(descriptionContainer);

  // Create description elements
  const description = document.createElement('p');
  description.textContent = project.description;
  descriptionContainer.appendChild(description);

  const features = document.createElement('p');
  features.className = 'py-3 font-semibold';
  features.textContent = project.features;
  descriptionContainer.appendChild(features);

  // Append the card to the desired parent element
  const parentElement = document.getElementById('projectCardsContainer');
  parentElement.appendChild(article);
}

// Iterate through the 'projects' array and create a card for each project

projects.forEach((project) => {
  createCard(project);
});
