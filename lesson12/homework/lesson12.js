// 1.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// Виконання
// const rowCols5 = document.getElementsByClassName('row row-cols-5')[0];
// console.log(rowCols5);
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         for (const post of posts) {
//             const divForPost = document.createElement('div');
//             divForPost.classList.add('col');
//             rowCols5.appendChild(divForPost);
//             divForPost.style.display = 'flex';
//             divForPost.style.justifyContent = 'center';
//             divForPost.style.textAlign = 'center';
//             divForPost.style.backgroundColor = 'cornflowerblue';
//             divForPost.style.flexDirection = 'column';
//             divForPost.style.borderRight = '3px solid black';
//             divForPost.style.borderBottom = '3px solid black';
//
//
//             const h2ForTitle = document.createElement('h2');
//             divForPost.appendChild(h2ForTitle);
//             h2ForTitle.innerText = post.title;
//
//             const pForBody = document.createElement('p');
//             divForPost.appendChild(pForBody);
//             pForBody.innerText = post.body;
//
//
//
//         }
//     })


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

//Виконання
// const rowCols5 = document.getElementsByClassName('row row-cols-5')[0];
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments => {
//         for (const comment of comments) {
//             let divForComment = document.createElement('div');
//             rowCols5.appendChild(divForComment);
//
//             divForComment.style.backgroundColor = 'red';
//             divForComment.style.display = 'flex';
//             divForComment.style.justifyContent = 'start';
//             divForComment.style.textAlign = 'center';
//             divForComment.style.borderRight = '3px solid black';
//             divForComment.style.borderBottom = '3px solid black';
//             divForComment.style.flexDirection = 'column';
//
//             const h4ForName = document.createElement('h4');
//             h4ForName.innerText = comment.name;
//             divForComment.appendChild(h4ForName);
//
//             const pForEmail = document.createElement('p');
//             divForComment.appendChild(pForEmail);
//             pForEmail.innerText = comment.email;
//
//             const pForText = document.createElement('p');
//             divForComment.appendChild(pForText);
//             pForText.innerText = comment.body;
//             pForText.style.fontSize = '10px';
//             pForText.style.color = 'black';
//             pForText.style.fontWeight = '900';
//
//
//
//
//
//         }
//     })