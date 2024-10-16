document.addEventListener('DOMContentLoaded', () => {
    const toc = document.getElementById('toc');
    const headings = document.querySelectorAll('h1, h2, h3');
    const tocList = document.createElement('ul');

    headings.forEach((heading, index) => {
        if (heading.id === 'toc') return;

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        
        heading.id = `section-${index}`;
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        
        listItem.appendChild(link);
        
        if (heading.tagName === 'H1') {
            tocList.appendChild(listItem);
        } else if (heading.tagName === 'H2') {
            if (!tocList.lastElementChild.querySelector('ul')) {
                tocList.lastElementChild.appendChild(document.createElement('ul'));
            }
            tocList.lastElementChild.querySelector('ul').appendChild(listItem);
        } else if (heading.tagName === 'H3') {
            const lastH2 = tocList.lastElementChild.querySelector('ul').lastElementChild;
            if (!lastH2.querySelector('ul')) {
                lastH2.appendChild(document.createElement('ul'));
            }
            lastH2.querySelector('ul').appendChild(listItem);
        }
    });

    const tocTitle = document.createElement('h2');
    tocTitle.textContent = 'Table of Contents';
    toc.appendChild(tocTitle);
    toc.appendChild(tocList);
});