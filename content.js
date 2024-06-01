// Function to create and show the hover card
async function showHoverCard(event) {
  if (event.target.tagName === 'A') {
      const hoverCard = document.createElement('div');
      hoverCard.className = "hover-card";


        const data  = await fetch(event.target.href)
        const html = await data.text()
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const text = doc.body.textContent;

        const sentenceRegex = /[^.!?]*years of experience[^.!?]*[.!?]/gi;

        const YOE= text.match(sentenceRegex)
  
  
        hoverCard.innerText = `YOE :${YOE}`;

       document.body.appendChild(hoverCard);

      // Position the hover card near the cursor
      hoverCard.style.top = `${event.clientY + window.scrollY + 10}px`;
      hoverCard.style.left = `${event.clientX + window.scrollX + 10}px`;

      // Store reference to the hover card in the element's dataset
      event.target.dataset.hoverCardId = hoverCard;
  }
}

// Function to remove the hover card
function hideHoverCard(event) {
  if (event.target.tagName === 'A') {
      const hoverCard = document.querySelector('.hover-card');
      if (hoverCard) hoverCard.remove();
  }
}

// Attach event listeners to the document for event delegation
document.addEventListener('mouseover', showHoverCard);
document.addEventListener('mouseout', hideHoverCard);

