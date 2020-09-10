//Задача 1
let photoArray = [];
const commentsArray = [
    'Всё отлично!', 'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const descriptionArray = [
    'Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'
];
//Генератор случайных чисел
function digit(index, key = false) {
    let number = Math.floor(Math.random() * index);

    if (key){
        if (number < 15){
            number = 15;
        }
    }

    return number;
}
// Создаём 26 объектов с изображениями и комментариями
for (let i = 1; i <= 26; i++){
    let photoDescription = {};

    photoDescription.url = 'photos/' + i + '.jpg';
    photoDescription.likes = digit(201, true);
    photoDescription.comments = commentsArray[digit(commentsArray.length)];
    photoDescription.description = descriptionArray[digit(descriptionArray.length)];

    photoArray.push(photoDescription);
}
//Задача 2
//Получаем шаблон и создаём DocumentFragment
let pictureElement = document.querySelector('#picture-template').content.querySelector('.picture');
let fragment = document.createDocumentFragment();
//Заполняем DocumentFragment элементами
for (let i = 0; i < photoArray.length; i++){
    let element = pictureElement.cloneNode(true);

    element.querySelector('img').src = photoArray[i].url;
    element.querySelector('.picture-likes').textContent = photoArray[i].likes.toString();
    element.querySelector('.picture-comments').textContent = photoArray[i].comments;

    fragment.appendChild(element);
}
//Задача 3. Отрисовуем элементы в div.pictures
document.querySelector('.pictures').appendChild(fragment);
