// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


const rowCols5 = document.getElementsByClassName('row row-cols-5')[0];


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            const divForPost = document.createElement('div');
            rowCols5.appendChild(divForPost);
            divForPost.style.backgroundColor = 'red';
            divForPost.style.borderRight = '2px solid black';
            divForPost.style.borderBottom = '2px solid black';
            divForPost.style.display = 'flex';
            divForPost.style.flexDirection = 'column';
            divForPost.style.textAlign = 'center';
            divForPost.style.alignItems = 'center';

            const h4ForTitle = document.createElement('h4');
            divForPost.appendChild(h4ForTitle);
            h4ForTitle.innerText = post.title;

            const buttonForOpenBody = document.createElement('button');
            buttonForOpenBody.innerText = 'OPEN COMMENT';
            divForPost.appendChild(buttonForOpenBody);
            buttonForOpenBody.style.width = '50%';

            const divForBody = document.createElement('div');
            divForPost.appendChild(divForBody);
            divForBody.style.backgroundColor = 'cornflowerblue';
            const pForBody = document.createElement('p');
            pForBody.innerText = post.body;
            divForBody.appendChild(pForBody);
            divForBody.style.borderRadius = '5px';
            divForBody.style.marginTop = '5px';
            divForBody.style.display = 'none';


            buttonForOpenBody.onclick = () => {
                if (divForBody.style.display === 'none') {
                    divForBody.style.display = 'block';
                }else {
                    divForBody.style.display = 'none';
                }
            }
        }
    })












