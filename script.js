'use strict';
window.onload = () => {
  const vocabulary = [
    {english: 'Apple', german: 'Apfel', japanese: 'リンゴ', russian: 'Яблоко', uzbek: 'Olma'}, 
    {english: 'Backpack', german: 'Rucksack', japanese: 'バックパック', russian: 'Рюкзак', uzbek: 'Ryukzak'}, 
    {english: 'Bed', german: 'Bett', japanese: 'ベッド', russian: 'Кровать', uzbek: 'Yotoq'}, 
    {english: 'Bird', german: 'Vogel', japanese: '鳥', russian: 'Птица', uzbek: 'Qush'}, 
    {english: 'Book', german: 'Buch', japanese: '本', russian: 'Книга', uzbek: 'Kitob'}, 
    {english: 'Bread', german: 'Brot', japanese: 'パン', russian: 'Хлеб', uzbek: 'Non'}, 
    {english: 'Car', german: 'Auto', japanese: '車', russian: 'Машина', uzbek: 'Mashina'}, 
    {english: 'Carrot', german: 'Karotte', japanese: 'ニンジン', russian: 'Морковь', uzbek: 'Sabzi'},
    {english: 'Cat', german: 'Katze', japanese: '猫', russian: 'Кошка', uzbek: 'Mushuk'}, 
    {english: 'Chair', german: 'Stuhl', japanese: '椅子', russian: 'Стул', uzbek: 'Stul'}, 
    {english: 'Cheese', german: 'Käse', japanese: 'チーズ', russian: 'Сыр', uzbek: 'Pishloq'},
    {english: 'Clock', german: 'Uhr', japanese: 'クロック', russian: 'Часы', uzbek: 'Soat'}, 
    {english: 'Cloud', german: 'Wolke', japanese: '雲', russian: 'Облако', uzbek: 'Bulut'}, 
    {english: 'Compass', german: 'Kompass', japanese: 'コンパス', russian: 'Компас', uzbek: 'Kompas'},
    {english: 'Cucumber', german: 'Gurke', japanese: 'キュウリ', russian: 'Огурец', uzbek: 'Bodring'},
    {english: 'Dog', german: 'Hund', japanese: '犬', russian: 'Собака', uzbek: 'It'}, 
    {english: 'Door', german: 'Tür', japanese: 'ドア', russian: 'Дверь', uzbek: 'Eshik'}, 
    {english: 'Earth', german: 'Erde', japanese: '地球', russian: 'Земля', uzbek: 'Yer'}, 
    {english: 'Egg', german: 'Ei', japanese: '卵', russian: 'Яйцо', uzbek: 'Tuxum'},
    {english: 'Envelope', german: 'Umschlag', japanese: '封筒', russian: 'Конверт', uzbek: 'Konvert'},
    {english: 'Fire', german: 'Feuer', japanese: '火', russian: 'Огонь', uzbek: 'Olov'}, 
    {english: 'Fish', german: 'Fisch', japanese: '魚', russian: 'Рыба', uzbek: 'Baliq'},
    {english: 'Flower', german: 'Blume', japanese: '花', russian: 'Цветок', uzbek: 'Gul'}, 
    {english: 'Forest', german: 'Wald', japanese: '森', russian: 'Лес', uzbek: 'Oʻrmon'}, 
    {english: 'Glass', german: 'Glas', japanese: 'コップ', russian: 'Стакан', uzbek: 'Stakan'}, 
    {english: 'Hammer', german: 'Hammer', japanese: 'ハンマー', russian: 'Молоток', uzbek: 'Bolgʻa'},
    {english: 'Hat', german: 'Hut', japanese: '帽子', russian: 'Шляпа', uzbek: 'Shlyapa'}, 
    {english: 'House', german: 'Haus', japanese: '家', russian: 'Дом', uzbek: 'Uy'}, 
    {english: 'Key', german: 'Schlüssel', japanese: '鍵', russian: 'Ключ', uzbek: 'Kalit'}, 
    {english: 'Meat', german: 'Fleisch', japanese: '肉', russian: 'Мясо', uzbek: 'Goʻsht'},
    {english: 'Microscope', german: 'Mikroskop', japanese: '顕微鏡', russian: 'Микроскоп', uzbek: 'Mikroskop'},
    {english: 'Milk', german: 'Milch', japanese: '牛乳', russian: 'Молоко', uzbek: 'Sut'},
    {english: 'Mirror', german: 'Spiegel', japanese: '鏡', russian: 'Зеркало', uzbek: 'Koʻzgu'},
    {english: 'Moon', german: 'Mond', japanese: '月', russian: 'Луна', uzbek: 'Oy'}, 
    {english: 'Mountains', german: 'Gebirge', japanese: '山', russian: 'Горы', uzbek: 'Togʻlar'}, 
    {english: 'Mushrooms', german: 'Pilze', japanese: 'キノコ', russian: 'Грибы', uzbek: 'Qoʻziqorinlar' },
    {english: 'Onion', german: 'Zwiebel', japanese: '玉ねぎ', russian: 'Лук', uzbek: 'Piyoz'},
    {english: 'Pen', german: 'Stift', japanese: 'ペン', russian: 'Ручка', uzbek: 'Ruchka'}, 
    {english: 'Pencil', german: 'Bleistift', japanese: '鉛筆', russian: 'Карандаш', uzbek: 'Qalam'},
    {english: 'Phone', german: 'Telefon', japanese: '電話', russian: 'Телефон', uzbek: 'Telefon'}, 
    {english: 'Pineapple', german: 'Ananas', japanese: 'パイナップル', russian: 'Ананас', uzbek: 'Ananas'},
    {english: 'Rain', german: 'Regen', japanese: '雨', russian: 'Дождь', uzbek: 'Yomgʻir' }, 
    {english: 'Rice', german: 'Reis', japanese: '米', russian: 'Рис', uzbek: 'Guruch'},
    {english: 'Salt', german: 'Salz', japanese: '塩', russian: 'Соль', uzbek: 'Tuz'},
    {english: 'Scissors', german: 'Schere', japanese: 'はさみ', russian: 'Ножницы', uzbek: 'Qaychilar'},
    {english: 'Screwdriver', german: 'Schraubendreher', japanese: 'ドライバー', russian: 'Отвёртка', uzbek: 'Otvertka'},
    {english: 'Snow', german: 'Schnee', japanese: '雪', russian: 'Снег', uzbek: 'Qor'}, 
    {english: 'Stamp', german: 'Briefmarke', japanese: '切手', russian: 'Марка', uzbek: 'Marka'},
    {english: 'Suitcase', german: 'Koffer', japanese: 'スーツケース', russian: 'Чемодан', uzbek: 'Chamadon'}, 
    {english: 'Sun', german: 'Sonne', japanese: '太陽', russian: 'Солнце', uzbek: 'Quyosh'}, 
    {english: 'Tomato', german: 'Tomate', japanese: 'トマト', russian: 'Помидор', uzbek: 'Pomidor'},
    {english: 'Tree', german: 'Baum', japanese: '木', russian: 'Дерево', uzbek: 'Daraxt'}, 
    {english: 'Umbrella', german: 'Regenschirm', japanese: '傘', russian: 'Зонт', uzbek: 'Soyabon'},
    {english: 'Water', german: 'Wasser', japanese: '水', russian: 'Вода', uzbek: 'Suv'},
    {english: 'Wind', german: 'Wind', japanese: '風', russian: 'Ветер', uzbek: 'Shamol'}, 
    {english: 'Wrench', german: 'Schraubenschlüssel', japanese: 'レンチ', russian: 'Гаечный ключ', uzbek: 'Gayka kaliti'},
  ];
  
  const cards = [];
  const sounds = [];
  const audioContext = new AudioContext();
  let cardsNumber = 0;
  let checkedLanguages = ['english'];

  function init() {
    updateLanguages();
    initCards();
    setWord();
    setCardsDimensions();
  }

  function updateLanguages() {
    const target = event.target;
    const localStorageName = 'wasistdas-languages';
    if (target.type === undefined) {
      const localStorageCheckedLanguages = localStorage.getItem(localStorageName);
      if (localStorageCheckedLanguages === null || JSON.parse(localStorageCheckedLanguages).length === 0) {
        localStorage.setItem(localStorageName, JSON.stringify(checkedLanguages));
      }
      else {
        checkedLanguages = [...JSON.parse(localStorageCheckedLanguages)];
        const checkboxes = document.getElementsByTagName('input');
        for (const check of checkboxes) {
          if (check.checked && !checkedLanguages.includes(check.value)) check.checked = false;
          else if (!check.checked && checkedLanguages.includes(check.value)) check.checked = true;
        }
      }
    }
    else if (target.type === 'checkbox') {
      const checkboxes = document.getElementsByTagName('input');
      for (const check of checkboxes) {
        if (check.checked && !checkedLanguages.includes(check.value)) checkedLanguages.push(check.value);
        else if (!check.checked && checkedLanguages.includes(check.value)) checkedLanguages.splice(checkedLanguages.indexOf(check.value), 1);
      }
      const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      if (!checkedCheckboxes.length) {
        document.getElementById('english').checked = true;
        checkedLanguages.push('english');
      }
      localStorage.setItem(localStorageName, JSON.stringify(checkedLanguages))
    }
  }

  function initCards() {
    const words = shuffleArray(vocabulary);
    const cardsContainer = document.getElementById('cards-container');

    const w = document.body.offsetWidth;
    const breakPoints = [[0,319], [320,767], [768,1023], [1024,10000]];
    breakPoints.forEach((bp, i) => {
      if (w >= bp[0] && w <= bp[1]) {
        cardsNumber = (i + 1) * 9;
      }
    });

    cards.length = 0;
    const cardsContainerChildren = cardsContainer.children;      
    for (let i = 0; i < cardsNumber; i++) {
      const card = (cardsContainerChildren.length === cardsNumber) ? cardsContainerChildren[i] : document.createElement('article');
      if (cardsContainerChildren.length !== cardsNumber) {
        card.addEventListener('pointerdown', handleCardPick);
        card.classList.add('card');
      }
      else {
        card.style.opacity = 1;
      }
      card.style.maskImage = `url(icons/${words[i]['english']}.svg)`;
      card.style.maskRepeat = 'no-repeat';
      card.style.maskPosition = 'center';
      card.style.maskSize = 'contain';

      const languageIndex = Math.random() * checkedLanguages.length | 0;
      const language = checkedLanguages[languageIndex];
      card.setAttribute('data-word', words[i][language]);
      card.setAttribute('data-language', language);
      cards.push(card);
    }
  
    if (cardsContainerChildren.length !== cardsNumber) cardsContainer.append(...cards);  
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.random() * (i + 1) | 0;
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function setWord() {
    const word = document.getElementById('word');
    const wordCardIndex = Math.random() * cards.length | 0;
    const card = cards[wordCardIndex]
    word.textContent = card.dataset.word;

    const languageMap = {english: 'english', japanese: '日本語', german: 'deutsch', russian: 'русский', uzbek: 'oʻzbekcha'};
    const wordLanguage = document.getElementById('word-language');
    wordLanguage.textContent = languageMap[card.dataset.language];
  }
  
  function handleCardPick(event) {
    const card = event.target;
    const word = document.getElementById('word');
    if (card.dataset.word === word.textContent) {
      const index = cards.indexOf(card);
      if (index > -1) {
        const soundIndex = Math.random() * sounds.length | 0;
        playSound(soundIndex);
        cards.splice(index, 1);
        card.style.opacity = 0;
        if (!cards.length) init();          
        else setWord();
      }
    }
    else {
      word.classList.add('shake');
      setTimeout(() => {
        word.classList.remove('shake');
      }, 500);
    }
  }

  function getCardsContainerDimensions() {
    const cardsContainer = document.getElementById('cards-container');
    const wordContainer = document.getElementById('word-container');
    const header = document.getElementById('header');
    const headerDimensions = getElementDimensions(header, false);
    const wordContainerDimensions = getElementDimensions(wordContainer, false);
    const cardsContainerDimensions = getElementDimensions(cardsContainer);
    cardsContainerDimensions.height = document.body.offsetHeight - headerDimensions.height - wordContainerDimensions.height;
    return cardsContainerDimensions;
  }

  function setCardsDimensions() {
    const cards = document.getElementsByClassName('card');
    const cardsContainer = document.getElementById('cards-container');
    const cardsContainerDimensions = getCardsContainerDimensions();
    cardsContainer.style.height = `${cardsContainerDimensions.height}px`;
    const bestCells = bestPartition(cardsNumber, cardsContainerDimensions.width, cardsContainerDimensions.height);

    for (let i = 0; i < bestCells.length; i++) {
      cards[i].style.width = `${bestCells[i].w}px`;
      cards[i].style.height = `${bestCells[i].h}px`;
    }
  }

  function getElementDimensions(element, subtractPadding=true) {
    const widthWithPaddings = element.clientWidth;
    const heightWithPaddings = element.clientHeight;
    const elementComputedStyle = window.getComputedStyle(element, null);
    const paddingLeftRight = parseFloat(elementComputedStyle.paddingLeft) + parseFloat(elementComputedStyle.paddingRight);
    const paddingTopBottom = parseFloat(elementComputedStyle.paddingTop) + parseFloat(elementComputedStyle.paddingBottom);

    return {width: widthWithPaddings - subtractPadding * paddingLeftRight, height: heightWithPaddings - subtractPadding * paddingTopBottom};
  }

  // https://stackoverflow.com/a/72751948
  function bestPartition(N, W, H) {
    let min = 999999;
    let bestCells = null;
    const partitions = allPartitions(N);
    for (const partition of partitions) {
      const cells = fixateLayout(partition, W, H);

      let squareFitness = 0.0;
      for (const cell of cells) {
        squareFitness += (cell.w - cell.h) * (cell.w - cell.h);
      }
      if (squareFitness < min) {
        min = squareFitness;
        bestCells = cells;
      }
    }
    return bestCells;
  }

  function allPartitions(N) {
    let k = 0;
    const partitions = [];
    const p = new Array(N).fill(0);
    p[k] = N;
    while (true) {
      let remVal = 0;
      partitions.push([...p.slice(0, k + 1)]);
      while (k >= 0 && p[k] === 1) {
        remVal += p[k];
        k--;
      }
      if (k < 0) return partitions;
      p[k]--;
      remVal++;
      while (remVal > p[k]) {
        p[k + 1] = p[k];
        remVal -= p[k];
        k++;
      }
      p[k + 1] = remVal;
      k++;
    }
  }

  function fixateLayout(p, W, H) {
    const cells = [];
    const h = H / p.length;
    for (let j = 0; j < p.length; j++) {
      const w = W / p[j];
      for (let i = 0; i < p[j]; i++) {
        cells.push({w: w, h: h});
      }
    }
    return cells;
  }

  function playSound(index) {
    if (index >= 0 && index < sounds.length) {
      const source = audioContext.createBufferSource();
      source.buffer = sounds[index];
      source.connect(audioContext.destination);
      source.start();
    }
    else {
      console.error('Invalid sound index');
    }
  }


  async function initSounds() {
    for (let i = 0; i < 2; i++) {
      const buffer = await loadSoundBuffer(`sounds/${i}.mp3`);
      sounds.push(buffer);
    }
  }

  async function loadSoundBuffer(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return await audioContext.decodeAudioData(arrayBuffer);
  }
  
  function initListeners() {
    const checkboxes = document.getElementsByTagName('input');
    for (const check of checkboxes) {
      check.addEventListener('change', init);
    }
    window.addEventListener('resize', setCardsDimensions)
  }

  init();
  initSounds();
  initListeners();
};