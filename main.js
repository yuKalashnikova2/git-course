// создать div 
const div = document.createElement('div');

//добавить у нему класс wrapper 
 div.classList.add('wrapper');

// посместить его в тэг body 
const body = document.body;
body.appendChild(div);

//создать заголовок h1 DoM
const header = document.createElement('h1');
header.textContent('DoM');

//добавить h1 перед дивом с классом wrapper 

div.insertAdjacentElement('beforebegin', header);

//создать список ul 

const ul = `
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
</ul>
`;
//поместить наш список в див с классом wrapper 

div.innerHTML = ul;
//==============

//создать изображение 

const img = document.createElement('img');
//1 добавить атрибут source 
img.src = 'https://picsum.photos/240';
//2 добавить атрибут width со значением 240 
img.width = 240;
 //3 добавить класс super 

 img.classList.add('super');

 //добавить свойство alt "Super MAn"

 img.alt = 'Super MAn'
 
 //добавить изображение внутрь элемента с классом wrapper 

 div.appendChild(img);

 //Используя html строку созздать div с классом 'pDiv' + c 2 параграфами 

 const elemHTML = `
 <div class='pDiv'>
 <p>Параграф1</p>
 <p>Параграф2</p>
 </div>`

 // поместить этот div до элемента ul

 const ulList = div.querySelector('ul');
ulList.insertAdjacentElement('beforebegin', elemHTML );
 
//добавить для 2 параграфа класс text 

const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');

//удалить 1 параграф 
pDiv.firstElementChild.remove();

//cоздать функцию ganarateAutoCard 
//которая принимает 3 аргумента: brand color year
//и возвращает разметку hml

const ganarateAutoCard = (brand,color,year) => {
    return `

    `
}





