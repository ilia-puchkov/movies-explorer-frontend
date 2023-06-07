const testMovies = [
  {
    name: 'Кошмар на улице Кобов',
    link: 'https://kinofilmpro.ru/wp-content/uploads/2022/02/w1500_44943050.jpg',
    duration: '2ч20м',
    _id: 1,
  },
  {
    name: 'Мясо и газонокосилка',
    link: 'https://mobimg.b-cdn.net/v3/fetch/40/40d462c94e51a832909042e6057fd45f.jpeg',
    duration: '1ч20м',
    _id: 2,
  },
  {
    name: 'Поехали с девчонками за пивом',
    link: 'https://i.imgflip.com/2qux6n.jpg',
    duration: '2ч30м',
    _id: 3,
  },
  {
    name: 'Неудачный отпуск',
    link: 'https://a-static.besthdwallpaper.com/dune-2021-cast-characters-wallpaper-2048x1152-84579_49.jpg',
    duration: '3ч30м',
    _id: 4,
  },
  {
    name: 'Техасская резня бензопилой',
    link: 'https://www.hypresslive.com/wp-content/uploads/2017/11/Peppa-Pig-Graphic-01_.jpg.jpeg',
    duration: '0ч20м',
    _id: 5,
  },
  {
    name: 'Правительственная шиза',
    link: 'https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/1a/f4/c3/1af4c344-54ed-5fb1-f80b-f298c992153d/pr_source.lsr/1200x675.jpg',
    duration: '1ч50м',
    _id: 6,
    isSaved: true,
  },
  {
    name: 'Певица профессию сменила',
    link: 'https://themagicrain.com/wp-content/uploads/2021/07/vivy-flouriteeyesong-1536x864.png',
    duration: '0ч30м',
    _id: 7,
    isSaved: true,
  },
  {
    name: 'Лимон и Мандарин',
    link: 'https://www.kinonews.ru/insimgs/2022/shotimg/shotimg107828_1.jpg',
    duration: '1ч20м',
    _id: 8,
    isSaved: true,
  },
  /*{
    name: 'Традиционные ценности',
    link: 'https://horrorzone.ru/uploads/_pages3/80715/midsommar-poster.jpg',
    duration: '1ч50м',
    _id: 9,
    isSaved: false,
  },
  {
    name: 'Разборка в Риме',
    link: 'https://freebrd.ru/wp-content/uploads/2023/02/hlw1bgQ94dI.jpg',
    duration: '1ч50м',
    _id: 10,
    isSaved: false,
  },
  {
    name: 'Семейные ценности',
    link: 'https://pic.rutubelist.ru/video/8e/e8/8ee88edf0b1dcd5b6756e091230a0715.jpg',
    duration: '1ч40м',
    _id: 11,
    isSaved: true,
  },
  {
    name: 'Братвка и кольцо',
    link: 'https://ucare.timepad.ru/fad80ac7-b4b3-4b5a-b3b0-dac77c21bce5/poster_event_1759706.jpg',
    duration: '5ч50м',
    _id: 12,
    isSaved: false,
  },
  {
    name: 'Веселое свидание',
    link: 'https://media.kg-portal.ru/images/kickass/kickass_12.jpg',
    duration: '1ч20м',
    _id: 13,
    isSaved: false,
  },
  {
    name: 'Бьет - значит любит',
    link: 'https://img1.goodfon.ru/original/2637x1639/5/2e/gone-girl-ischeznuvshaya.jpg',
    duration: '1ч450м',
    _id: 14,
    isSaved: false,
  },
  {
    name: 'Metallica: Начало',
    link: 'https://mediaformasi.com/content/images/size/w1600/2022/12/Screenshot--108-.png',
    duration: '0ч50м',
    _id: 15,
    isSaved: false,
  },
  {
    name: 'Экстерминаторы',
    link: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/65bd87c0-3d0c-4c14-b426-5fdf94deb3de/1920x',
    duration: '2ч20м',
    _id: 16,
    isSaved: false,
  },*/
];

const testLikedMovies = [
  {
    name: 'Правительственная шиза',
    link: 'https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/1a/f4/c3/1af4c344-54ed-5fb1-f80b-f298c992153d/pr_source.lsr/1200x675.jpg',
    duration: '1ч50м',
    _id: 6,
    isSaved: true,
  },
  {
    name: 'Певица профессию сменила',
    link: 'https://themagicrain.com/wp-content/uploads/2021/07/vivy-flouriteeyesong-1536x864.png',
    duration: '0ч30м',
    _id: 7,
    isSaved: true,
  },
  {
    name: 'Лимон и Мандарин',
    link: 'https://www.kinonews.ru/insimgs/2022/shotimg/shotimg107828_1.jpg',
    duration: '1ч20м',
    _id: 8,
    isSaved: true,
  },
  {
    name: 'Семейные ценности',
    link: 'https://pic.rutubelist.ru/video/8e/e8/8ee88edf0b1dcd5b6756e091230a0715.jpg',
    duration: '1ч40м',
    _id: 11,
    isSaved: true,
  },
];

export { testMovies, testLikedMovies };
