document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  
    // Challenge 2: Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        const breedList = document.getElementById('dog-breeds');
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching breeds:', error));
  
    // Challenge 3: Change font color on click
    const breedList = document.getElementById('dog-breeds');
    
    breedList.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue';
      }
    });
  
    // Challenge 4: Filter breeds by selected letter
    const breedDropdown = document.getElementById('breed-dropdown');
  
    breedDropdown.addEventListener('change', event => {
      const selectedLetter = event.target.value;
      const breeds = breedList.getElementsByTagName('li');
  
      Array.from(breeds).forEach(breed => {
        if (selectedLetter === 'all' || breed.textContent.startsWith(selectedLetter)) {
          breed.style.display = '';
        } else {
          breed.style.display = 'none';
        }
      });
    });
  });