// - Є масив :
// Створити під кожен елемент оремий блок. В цьому блоці, під кожну властивість, створити окремий блок.
// Для властивості modules зробити список в цьому ж  блоці (в якому знаходиться все)


let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: 'https://res.cloudinary.com/teepublic/image/private/s--y_rRiRKy--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1539274051/production/designs/3302114_0.jpg',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: 'data:image/png;base64,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',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: 'data:image/png;base64,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',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: 'https://st3.depositphotos.com/16030310/18317/v/600/depositphotos_183173562-stock-illustration-qa-letters-logo-initial-logo.jpg',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: 'https://cdn.dribbble.com/users/763363/screenshots/3557947/attachments/791767/fullstack-logo-light.png?compress=1&resize=400x300',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: 'https://escadra.com.ua/wp-content/uploads/2021/08/KaSVZO2q.jpg',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];

for (const courseElement of courses) {
    let elementWrap = document.createElement('div');
    document.body.appendChild(elementWrap);
    elementWrap.style.backgroundColor = 'cornflowerblue';
    elementWrap.style.marginBottom = '100px';
    elementWrap.style.display = 'flex';
    elementWrap.style.flexDirection = 'column';
    elementWrap.style.alignItems = 'center';
    elementWrap.style.width = '500px';
    elementWrap.style.marginLeft = '700px'

    let divForTitle = document.createElement('div');
    elementWrap.appendChild(divForTitle);
    let h1Tag = document.createElement('h1');
    divForTitle.appendChild(h1Tag);
    h1Tag.innerText = courseElement.title;
    divForTitle.classList.add('title');

    let divForMonth = document.createElement('div');
    elementWrap.appendChild(divForMonth);
    divForMonth.innerText = `Month to study - ${courseElement.monthDuration}`;
    divForMonth.style.fontWeight = '900';

    let divForHour = document.createElement('div');
    elementWrap.appendChild(divForHour);
    divForHour.innerText = `Studying hours - ${courseElement.hourDuration}`;
    divForHour.style.color = 'red';

    let divForModules = document.createElement('div');
    elementWrap.appendChild(divForModules);
    let ulForModules = document.createElement('ul');
    divForModules.appendChild(ulForModules);
    for (const moduleLiElement of courseElement.modules) {
        let liElementForModules = document.createElement('li');
        ulForModules.appendChild(liElementForModules);
        liElementForModules.innerText = moduleLiElement;
    }

    let divForLogo = document.createElement('div');
    elementWrap.appendChild(divForLogo);
    let imgOfLogo = document.createElement('img');
    divForLogo.appendChild(imgOfLogo);
    imgOfLogo.src = courseElement.logo;

    let divForPrice = document.createElement('div');
    elementWrap.appendChild(divForPrice);
    divForPrice.innerText = `Price - ${courseElement.price}`;
    divForPrice.style.fontSize = '23px';

    let divForRating = document.createElement('div');
    elementWrap.appendChild(divForRating);
    divForRating.innerText = `Rating - ${courseElement.rating}`;
    divForRating.style.color = 'gold';

    let divForAvgResult = document.createElement('div');
    elementWrap.appendChild(divForAvgResult);
    divForAvgResult.innerText = `Average result - ${courseElement.avgResult}`;


}