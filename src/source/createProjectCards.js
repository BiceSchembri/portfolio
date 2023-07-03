import projects from './projects.js';

function createCard(project) {
  // Create article element
  const article = document.createElement('article');
  article.className =
    'flex flex-row items-stretch justify-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4';

  // Create card container
  const cardContainer = document.createElement('div');
  cardContainer.className =
    'flex flex-col w-full h-full gap-2 p-4 leading-7 text-center rounded-md bg-stone-800 text-stone-50';
  article.appendChild(cardContainer);

  // Create image container
  const imageContainer = document.createElement('div');
  imageContainer.className = 'flex flex-col items-center';
  cardContainer.appendChild(imageContainer);

  // Create image element
  const image = document.createElement('img');
  image.src = project.image;
  image.className =
    'object-contain border-4 rounded-md border-slate-50 h-60 w-120';
  imageContainer.appendChild(image);

  // Create title element
  const title = document.createElement('h3');
  title.className = 'p-2 mt-4 text-2xl font-bold uppercase';
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
    'py-3 font-bold text-yellow-400 transition duration-300 ease-in-out border-b-4 hover:text-yellow-200';
  githubLink.textContent = 'see more on GitHub';
  badgesContainer.appendChild(githubLink);

  // Create description container
  const descriptionContainer = document.createElement('div');
  descriptionContainer.className = 'pt-4';
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
