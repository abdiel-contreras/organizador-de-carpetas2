export function createCard(title, description) {
    const section = document.createElement('section');
    section.className = 'card';
    section.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    return section;
}
