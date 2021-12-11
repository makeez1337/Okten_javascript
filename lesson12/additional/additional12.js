// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


const wrapDiv = document.getElementsByClassName('wrap')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        for (const user of users) {
            const divForUser = document.createElement('div');
            wrapDiv.appendChild(divForUser);
            divForUser.style.backgroundColor = 'cornflowerblue';
            divForUser.style.height = '100%';
            divForUser.style.width = '400px';
            divForUser.style.margin = '10px';
            divForUser.style.display = 'flex';
            divForUser.style.textAlign = 'center';
            divForUser.style.flexDirection = 'column';
            divForUser.style.borderRadius = '5px';

            const h4ForUserName = document.createElement('h1');
            divForUser.appendChild(h4ForUserName);
            h4ForUserName.innerText = `${user.name} ${user.id}`

            const pForUserName = document.createElement('p');
            divForUser.appendChild(pForUserName);
            pForUserName.innerText = `USERNAME - ${user.username}`;

            const pForEmail = document.createElement('p');
            divForUser.appendChild(pForEmail);
            pForEmail.innerText = `EMAIL - ${user.email}`;

            const pForAdress = document.createElement('p');
            divForUser.appendChild(pForAdress);
            pForAdress.innerText = 'ADRESS:'
            pForAdress.style.marginTop = '30px';

            const pForStreet = document.createElement('p');
            divForUser.appendChild(pForStreet);
            pForStreet.innerText = `Street: ${user.address['street']}`

            const pForCity = document.createElement('p');
            divForUser.appendChild(pForCity);
            pForCity.innerText = `City: ${user.address['city']}`;

            const buttonForUser = document.createElement('button');
            divForUser.appendChild(buttonForUser);
            buttonForUser.innerText = 'SHOW POST';

            buttonForUser.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(responcepost => responcepost.json())
                    .then(posts => {
                        for (const post of posts) {
                            if (post.userId === user.id) {
                                const divForPost = document.createElement('div');
                                const h5ForTitle = document.createElement('h5');
                                const postId = document.createElement('p');
                                postId.innerText = post.id;
                                divForPost.appendChild(postId);
                                h5ForTitle.innerText = post.title;
                                const pForPostBody = document.createElement('p');
                                pForPostBody.innerText = post.body;
                                divForPost.appendChild(h5ForTitle);
                                divForPost.appendChild(pForPostBody);
                                divForUser.appendChild(divForPost);
                                divForPost.style.border = '1px solid black';
                                const buttonForPost = document.createElement('button');
                                divForPost.appendChild(buttonForPost);
                                buttonForPost.innerText = 'CHECK COMMENTS';
                                buttonForPost.style.width = '100%';

                                buttonForPost.onclick = function () {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(responce => responce.json())
                                        .then(comments => {
                                            for (const comment of comments) {
                                                if (comment.postId === post.id) {
                                                    const divForComment = document.createElement('div');
                                                    const pForComment = document.createElement('p');
                                                    const commentId = document.createElement('p');
                                                    commentId.innerText = comment.id;
                                                    divForComment.appendChild(commentId);
                                                    divForComment.style.border = '1px solid black';
                                                    divForComment.appendChild(pForComment);
                                                    pForComment.innerText = comment.body;
                                                    divForPost.appendChild(divForComment);
                                                    divForComment.style.backgroundColor = 'red';
                                                }
                                                buttonForPost.disabled = 'true';
                                            }
                                        })
                                };


                            }
                            buttonForUser.disabled = 'true';
                        }
                    })
            };


        }

    })






