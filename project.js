'use strict';

const project = document.querySelector('.projects-list');
const projectBtns = document.querySelectorAll('.project');
const allProjectDescription = document.querySelectorAll('.common-project-description');
project.addEventListener('click',(e) => {
    const clicked = e.target.closest('.project');
    projectBtns.forEach(element => {
        element.classList.remove('active-project');        
    });
    clicked.classList.add('active-project');
    allProjectDescription.forEach(element => {
        element.classList.remove('active-project-description');
    });
    const movie = document.querySelector(` .movies-${clicked.dataset.tab} `);
    movie.classList.add('active-project-description');
})
