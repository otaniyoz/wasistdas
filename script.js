'use strict';
window.onload = () => {
  const vocabulary = [
    {'english': 'Abduction', 'german': 'Entführung', 'japanese': '誘拐', 'russian': 'Похищение', 'uzbek': 'Oʻgʻirlash', 'turkish': 'Kaçırma'}, 
    {'english': 'Aerial lift', 'german': 'Luftseilbahn', 'japanese': '索道', 'russian': 'Канатная дорога', 'uzbek': 'Kanat yoʻl', 'turkish': 'Teleferik'}, 
    {'english': 'Airplane', 'german': 'Flugzeug', 'japanese': '飛行機', 'russian': 'Самолёт', 'uzbek': 'Samolyot', 'turkish': 'Uçak'}, 
    {'english': 'Airship', 'german': 'Luftschiff', 'japanese': '飛行船', 'russian': 'Дирижабль', 'uzbek': 'Dirijabl', 'turkish': 'Hava gemisi'}, 
    {'english': 'Anchor', 'german': 'Anker', 'japanese': '錨', 'russian': 'Якорь', 'uzbek': 'Langar', 'turkish': 'Çapa'}, 
    {'english': 'Ant', 'german': 'Ameise', 'japanese': 'アリ', 'russian': 'Муравей', 'uzbek': 'Chumoli', 'turkish': 'Karınca'}, 
    {'english': 'Apple', 'german': 'Apfel', 'japanese': 'リンゴ', 'russian': 'Яблоко', 'uzbek': 'Olma', 'turkish': 'Elma'}, 
    {'english': 'Aquarium', 'german': 'Aquarium', 'japanese': 'アクアリウム', 'russian': 'Аквариум', 'uzbek': 'Akvarium', 'turkish': 'Akvaryum'}, 
    {'english': 'Backpack', 'german': 'Rucksack', 'japanese': 'バックパック', 'russian': 'Рюкзак', 'uzbek': 'Ryukzak', 'turkish': 'Sırt çantası'}, 
    {'english': 'Bamboo', 'german': 'Bambus', 'japanese': '竹', 'russian': 'Бамбук', 'uzbek': 'Bambuk', 'turkish': 'Bambu'}, 
    {'english': 'Banana', 'german': 'Banane', 'japanese': 'バナナ', 'russian': 'Банан', 'uzbek': 'Banan', 'turkish': 'Muz'}, 
    {'english': 'Baseball', 'german': 'Baseball', 'japanese': '野球', 'russian': 'Бейсбол', 'uzbek': 'Beysbol', 'turkish': 'Beyzbol'}, 
    {'english': 'Basketball', 'german': 'Basketball', 'japanese': 'バスケットボール', 'russian': 'Баскетбол', 'uzbek': 'Basketbol', 'turkish': 'Basketbol'}, 
    {'english': 'Bed', 'german': 'Bett', 'japanese': 'ベッド', 'russian': 'Кровать', 'uzbek': 'Yotoq', 'turkish': 'Yatak'}, 
    {'english': 'Bee', 'german': 'Biene', 'japanese': 'ハナバチ', 'russian': 'Пчела', 'uzbek': 'Asalari', 'turkish': 'Arı'}, 
    {'english': 'Beehive', 'german': 'Bienenstock', 'japanese': '養蜂箱', 'russian': 'Улей', 'uzbek': 'Asalari uyasi', 'turkish': 'Arı kovanı'}, 
    {'english': 'Bench', 'german': 'Bank', 'japanese': 'ベンチ', 'russian': 'Скамейка', 'uzbek': 'Xarrak', 'turkish': 'Bank'}, 
    {'english': 'Bicycle', 'german': 'Fahrrad', 'japanese': '自転車', 'russian': 'Велосипед', 'uzbek': 'Velosiped', 'turkish': 'Bisiklet'}, 
    {'english': 'Birch', 'german': 'Birke', 'japanese': 'カバノキ属', 'russian': 'Берёза', 'uzbek': 'Qayin', 'turkish': 'Hush'}, 
    {'english': 'Bird', 'german': 'Vogel', 'japanese': '鳥', 'russian': 'Птица', 'uzbek': 'Qush', 'turkish': 'Kush'}, 
    {'english': 'Black hole', 'german': 'Schwarzes Loch', 'japanese': 'ブラックホール', 'russian': 'Чёрная дыра', 'uzbek': 'Qora tuynuk', 'turkish': 'Kara delik'}, 
    {'english': 'Blueberries', 'german': 'Blaubeeren', 'japanese': 'ブルーベリー', 'russian': 'Черника', 'uzbek': 'Koʻk mevalar', 'turkish': 'Yaban mersini'}, 
    {'english': 'Bolide', 'german': 'Bolide', 'japanese': '火球', 'russian': 'Болид', 'uzbek': 'Bolid', 'turkish': 'Bolit'}, 
    {'english': 'Book', 'german': 'Buch', 'japanese': '本', 'russian': 'Книга', 'uzbek': 'Kitob', 'turkish': 'Kitap'}, 
    {'english': 'Bowling', 'german': 'Bowling', 'japanese': 'ボウリング', 'russian': 'Боулинг', 'uzbek': 'Bowling', 'turkish': 'Bovling'}, 
    {'english': 'Bread', 'german': 'Brot', 'japanese': 'パン', 'russian': 'Хлеб', 'uzbek': 'Non', 'turkish': 'Ekmek'}, 
    {'english': 'Bus', 'german': 'Bus', 'japanese': 'バス', 'russian': 'Автобус', 'uzbek': 'Avtobus', 'turkish': 'Otobüs'}, 
    {'english': 'Butterfly', 'german': 'Schmetterling', 'japanese': '蝶', 'russian': 'Бабочка', 'uzbek': 'Kapalak', 'turkish': 'Kelebek'}, 
    {'english': 'Cactus', 'german': 'Kaktee', 'japanese': 'サボテン', 'russian': 'Кактус', 'uzbek': 'Kaktus', 'turkish': 'Kaktüs'}, 
    {'english': 'Campfire', 'german': 'Lagerfeuer', 'japanese': 'キャンプファイヤー', 'russian': 'Костёр', 'uzbek': 'Gulxan', 'turkish': 'Kamp ateshi'}, 
    {'english': 'Candle', 'german': 'Kerze', 'japanese': 'ろうそく', 'russian': 'Свеча', 'uzbek': 'Sham', 'turkish': 'Mum'}, 
    {'english': 'Car', 'german': 'Auto', 'japanese': '車', 'russian': 'Машина', 'uzbek': 'Mashina', 'turkish': 'Araba'}, 
    {'english': 'Carrot', 'german': 'Karotte', 'japanese': 'ニンジン', 'russian': 'Морковь', 'uzbek': 'Sabzi', 'turkish': 'Havuç'}, 
    {'english': 'Cat', 'german': 'Katze', 'japanese': '猫', 'russian': 'Кошка', 'uzbek': 'Mushuk', 'turkish': 'Kedi'}, 
    {'english': 'Centipede', 'german': 'Tausendfüßer', 'japanese': 'ムカデ', 'russian': 'Сколопендра', 'uzbek': 'Mingoyoq', 'turkish': 'Kırkayak'}, 
    {'english': 'Chair', 'german': 'Stuhl', 'japanese': '椅子', 'russian': 'Стул', 'uzbek': 'Stul', 'turkish': 'Sandalye'}, 
    {'english': 'Chapel', 'german': 'Kapelle', 'japanese': '礼拝堂', 'russian': 'Часовня', 'uzbek': 'Masjid', 'turkish': 'Shapel'}, 
    {'english': 'Cheese', 'german': 'Käse', 'japanese': 'チーズ', 'russian': 'Сыр', 'uzbek': 'Pishloq', 'turkish': 'Peynir'}, 
    {'english': 'Cherry blossom', 'german': 'Kirschblüte', 'japanese': 'さくら', 'russian': 'Сакура', 'uzbek': 'Gilos gul', 'turkish': 'Kiraz çiçek'}, 
    {'english': 'City', 'german': 'Stadt', 'japanese': '都市', 'russian': 'Город', 'uzbek': 'Shahar', 'turkish': 'Shehir'}, 
    {'english': 'Clock', 'german': 'Uhr', 'japanese': '時計', 'russian': 'Часы', 'uzbek': 'Soat', 'turkish': 'Saat'}, 
    {'english': 'Cloud', 'german': 'Wolke', 'japanese': '雲', 'russian': 'Облако', 'uzbek': 'Bulut', 'turkish': 'Bulut'}, 
    {'english': 'Cockroach', 'german': 'Kakerlake', 'japanese': 'ゴキブリ', 'russian': 'Таракан', 'uzbek': 'Tarakan', 'turkish': 'Hamamböceghi'}, 
    {'english': 'Compass', 'german': 'Zirkel', 'japanese': 'コンパス', 'russian': 'Циркуль', 'uzbek': 'Sirkul', 'turkish': 'Pergel'}, 
    {'english': 'Cotton', 'german': 'Baumwolle', 'japanese': '木綿', 'russian': 'Хлопок', 'uzbek': 'Paxta', 'turkish': 'Pamuk'}, 
    {'english': 'Crab', 'german': 'Krabbe', 'japanese': '蟹', 'russian': 'Краб', 'uzbek': 'Qisqichbaqa', 'turkish': 'Yengeç'}, 
    {'english': 'Crescent', 'german': 'Mondsichel', 'japanese': '三日月', 'russian': 'Полумесяц', 'uzbek': 'Yarim oy', 'turkish': 'Hilal'}, 
    {'english': 'Cucumber', 'german': 'Gurke', 'japanese': 'キュウリ', 'russian': 'Огурец', 'uzbek': 'Bodring', 'turkish': 'Salatalık'}, 
    {'english': 'Diamond', 'german': 'Diamant', 'japanese': 'ダイヤモンド', 'russian': 'Алмаз', 'uzbek': 'Olmos', 'turkish': 'Elmas'}, 
    {'english': 'Dog', 'german': 'Hund', 'japanese': '犬', 'russian': 'Собака', 'uzbek': 'It', 'turkish': 'Köpek'}, 
    {'english': 'Door', 'german': 'Tür', 'japanese': 'ドア', 'russian': 'Дверь', 'uzbek': 'Eshik', 'turkish': 'Kapı'}, 
    {'english': 'Duck', 'german': 'Ente', 'japanese': 'カモ', 'russian': 'Утка', 'uzbek': 'Oʻrdak', 'turkish': 'Ördek'}, 
    {'english': 'Ear', 'german': 'Ohr', 'japanese': '耳', 'russian': 'Ухо', 'uzbek': 'Quloq', 'turkish': 'Kulak'}, 
    {'english': 'Earth', 'german': 'Erde', 'japanese': '地球', 'russian': 'Земля', 'uzbek': 'Yer', 'turkish': 'Dünya'}, 
    {'english': 'Egg', 'german': 'Ei', 'japanese': '卵', 'russian': 'Яйцо', 'uzbek': 'Tuxum', 'turkish': 'Yumurta'}, 
    {'english': 'Envelope', 'german': 'Umschlag', 'japanese': '封筒', 'russian': 'Конверт', 'uzbek': 'Konvert', 'turkish': 'Zarf'}, 
    {'english': 'Eye', 'german': 'Auge', 'japanese': '目', 'russian': 'Глаз', 'uzbek': 'Koʻz', 'turkish': 'Göz'}, 
    {'english': 'Fern', 'german': 'Farn', 'japanese': 'シダ', 'russian': 'Папоротник', 'uzbek': 'Paporotnik', 'turkish': 'Eghrelti'}, 
    {'english': 'Fir', 'german': 'Tanne', 'japanese': 'モミ属', 'russian': 'Пихта', 'uzbek': 'Archa', 'turkish': 'Göknar'}, 
    {'english': 'Fire', 'german': 'Feuer', 'japanese': '火', 'russian': 'Огонь', 'uzbek': 'Olov', 'turkish': 'Atesh'}, 
    {'english': 'Fire extinguisher', 'german': 'Feuerlöscher', 'japanese': '消火器', 'russian': 'Огнетушитель', 'uzbek': 'Oʻt oʻchirgich', 'turkish': 'Yangın söndürücü'}, 
    {'english': 'Firefly', 'german': 'Leuchtkäfer', 'japanese': 'ホタル', 'russian': 'Светлячок', 'uzbek': 'Yonarqurt', 'turkish': 'Ateshböceghi'}, 
    {'english': 'Firetruck', 'german': 'Feuerwehrfahrzeug', 'japanese': '消防車', 'russian': 'Пожарная машина', 'uzbek': 'Oʻt oʻchirish mashinasi', 'turkish': 'İtfaiye aracı'}, 
    {'english': 'Fish', 'german': 'Fisch', 'japanese': '魚', 'russian': 'Рыба', 'uzbek': 'Baliq', 'turkish': 'Balık'}, 
    {'english': 'Flour', 'german': 'Mehl', 'japanese': '小麦粉', 'russian': 'Мука', 'uzbek': 'Un', 'turkish': 'Un'}, 
    {'english': 'Flower', 'german': 'Blume', 'japanese': '花', 'russian': 'Цветок', 'uzbek': 'Gul', 'turkish': 'Çiçek'}, 
    {'english': 'Fly', 'german': 'Fliege', 'japanese': 'ハエ', 'russian': 'Муха', 'uzbek': 'Chivin', 'turkish': 'Sinek'}, 
    {'english': 'Football', 'german': 'Amerikanischer Fußball', 'japanese': 'アメリカンフットボール', 'russian': 'Американский футбол', 'uzbek': 'Amerika futboli', 'turkish': 'Amerikan futbolu'}, 
    {'english': 'Forest', 'german': 'Wald', 'japanese': '森', 'russian': 'Лес', 'uzbek': 'Oʻrmon', 'turkish': 'Orman'}, 
    {'english': 'Forge', 'german': 'Schmiede', 'japanese': '鍛冶屋', 'russian': 'Кузница', 'uzbek': 'Temirchilik', 'turkish': 'Demirci'}, 
    {'english': 'Gate', 'german': 'Tor', 'japanese': '門', 'russian': 'Ворота', 'uzbek': 'Darvoza', 'turkish': 'Geçit'}, 
    {'english': 'Glass', 'german': 'Glas', 'japanese': 'コップ', 'russian': 'Стакан', 'uzbek': 'Stakan', 'turkish': 'Bardak'}, 
    {'english': 'Grasshopper', 'german': 'Heuschrecke', 'japanese': 'バッタ', 'russian': 'Кузнечик', 'uzbek': 'Chigirtka', 'turkish': 'Çekirge'}, 
    {'english': 'Hammer', 'german': 'Hammer', 'japanese': '槌', 'russian': 'Молоток', 'uzbek': 'Bolgʻa', 'turkish': 'Çekiç'}, 
    {'english': 'Hat', 'german': 'Hut', 'japanese': '帽子', 'russian': 'Шляпа', 'uzbek': 'Shlyapa', 'turkish': 'Shapka'}, 
    {'english': 'Heart', 'german': 'Herz', 'japanese': '心臓', 'russian': 'Сердце', 'uzbek': 'Yurak', 'turkish': 'Kalp'}, 
    {'english': 'Helicopter', 'german': 'Hubschrauber', 'japanese': 'ヘリコプター', 'russian': 'Вертолет', 'uzbek': 'Vertolyot', 'turkish': 'Helikopter'}, 
    {'english': 'Hospital', 'german': 'Krankenhaus', 'japanese': '病院', 'russian': 'Больница', 'uzbek': 'Shifoxona', 'turkish': 'Hastane'}, 
    {'english': 'House', 'german': 'Haus', 'japanese': '家', 'russian': 'Дом', 'uzbek': 'Uy', 'turkish': 'Ev'}, 
    {'english': 'I-beam', 'german': 'I-Träger', 'japanese': 'Iビーム', 'russian': 'Двутавр', 'uzbek': 'Dvutavr', 'turkish': 'I-kirish'}, 
    {'english': 'Iceberg', 'german': 'Eisberg', 'japanese': '氷山', 'russian': 'Айсберг', 'uzbek': 'Aysberg', 'turkish': 'Buzdaghı'}, 
    {'english': 'Jellyfish', 'german': 'Qualle', 'japanese': 'クラゲ', 'russian': 'Медуза', 'uzbek': 'Meduza', 'turkish': 'Denizanası'}, 
    {'english': 'Jupiter', 'german': 'Jupiter', 'japanese': '木星', 'russian': 'Юпитер', 'uzbek': 'Yupiter', 'turkish': 'Jüpiter'}, 
    {'english': 'Kayak', 'german': 'Kajak', 'japanese': 'カヤック', 'russian': 'Каяк', 'uzbek': 'Qayiq', 'turkish': 'Kayak'}, 
    {'english': 'Key', 'german': 'Schlüssel', 'japanese': '鍵', 'russian': 'Ключ', 'uzbek': 'Kalit', 'turkish': 'Anahtar'}, 
    {'english': 'Ladybug', 'german': 'Marienkäfer', 'japanese': 'テントウムシ', 'russian': 'Божья коровка', 'uzbek': 'Xonqizi', 'turkish': 'Ughur böceghi'}, 
    {'english': 'Landing', 'german': 'Landung', 'japanese': '着陸', 'russian': 'Посадка', 'uzbek': 'Qoʻnish', 'turkish': 'İnish'}, 
    {'english': 'Lantern', 'german': 'Laterne', 'japanese': 'ガスランタン', 'russian': 'Фонарь', 'uzbek': 'Gaz fonari', 'turkish': 'Gaz feneri'}, 
    {'english': 'Lighter', 'german': 'Feuerzeug', 'japanese': 'ライター', 'russian': 'Зажигалка', 'uzbek': 'Engilroq', 'turkish': 'Çakmak'}, 
    {'english': 'Lighthouse', 'german': 'Leuchtturm', 'japanese': '灯台', 'russian': 'Маяк', 'uzbek': 'Mayoq', 'turkish': 'Deniz feneri'}, 
    {'english': 'Lips', 'german': 'Lippen', 'japanese': '唇', 'russian': 'Губы', 'uzbek': 'Lablar', 'turkish': 'Dudaklar'}, 
    {'english': 'Lizard', 'german': 'Echse', 'japanese': 'トカゲ', 'russian': 'Ящерица', 'uzbek': 'Kaltakesak', 'turkish': 'Kertenkele'}, 
    {'english': 'Love', 'german': 'Liebe', 'japanese': '愛', 'russian': 'Любовь', 'uzbek': 'Sevgi', 'turkish': 'Ashk'}, 
    {'english': 'Magpie', 'german': 'Elster', 'japanese': '鵲', 'russian': 'Сорока', 'uzbek': 'Hakka', 'turkish': 'Saksaghan'}, 
    {'english': 'Matches', 'german': 'Streichhölzer', 'japanese': 'マッチ', 'russian': 'Спички', 'uzbek': 'Gugurt', 'turkish': 'Kibrit'}, 
    {'english': 'Meat', 'german': 'Fleisch', 'japanese': '肉', 'russian': 'Мясо', 'uzbek': 'Goʻsht', 'turkish': 'Et'}, 
    {'english': 'Microscope', 'german': 'Mikroskop', 'japanese': '顕微鏡', 'russian': 'Микроскоп', 'uzbek': 'Mikroskop', 'turkish': 'Mikroskop'}, 
    {'english': 'Milk', 'german': 'Milch', 'japanese': '牛乳', 'russian': 'Молоко', 'uzbek': 'Sut', 'turkish': 'Süt'}, 
    {'english': 'Mill', 'german': 'Mühle', 'japanese': '製粉所', 'russian': 'Мельница', 'uzbek': 'Tegirmon', 'turkish': 'Deghirmen'}, 
    {'english': 'Mirror', 'german': 'Spiegel', 'japanese': '鏡', 'russian': 'Зеркало', 'uzbek': 'Koʻzgu', 'turkish': 'Ayna'}, 
    {'english': 'Moon', 'german': 'Mond', 'japanese': '月', 'russian': 'Луна', 'uzbek': 'Oy', 'turkish': 'Ay'}, 
    {'english': 'Moped', 'german': 'Moped', 'japanese': '原付', 'russian': 'Мопед', 'uzbek': 'Moped', 'turkish': 'Mopet'}, 
    {'english': 'Mosquito', 'german': 'Stechmücke', 'japanese': '蚊', 'russian': 'Комар', 'uzbek': 'Pashsha', 'turkish': 'Sivrisinek'}, 
    {'english': 'Motorcycle', 'german': 'Motorrad', 'japanese': 'オートバイ', 'russian': 'Мотоцикл', 'uzbek': 'Mototsikl', 'turkish': 'Motosiklet'}, 
    {'english': 'Motor oil', 'german': 'Motoröl', 'japanese': 'エンジンオイル', 'russian': 'Моторное масло', 'uzbek': 'Motor moyi', 'turkish': 'Motor yaghı'}, 
    {'english': 'Mountains', 'german': 'Gebirge', 'japanese': '山', 'russian': 'Горы', 'uzbek': 'Togʻlar', 'turkish': 'Daghlar'}, 
    {'english': 'Mushrooms', 'german': 'Pilze', 'japanese': 'キノコ', 'russian': 'Грибы', 'uzbek': 'Qoʻziqorinlar', 'turkish': 'Mantarlar'}, 
    {'english': 'Neptune', 'german': 'Neptun', 'japanese': '海王星', 'russian': 'Нептун', 'uzbek': 'Neptun', 'turkish': 'Neptün'}, 
    {'english': 'Obelisk', 'german': 'Obelisk', 'japanese': 'オベリスク', 'russian': 'Обелиск', 'uzbek': 'Obelisk', 'turkish': 'Dikilitash'},
    {'english': 'Octopus', 'german': 'Krake', 'japanese': 'タコ', 'russian': 'Осьминог', 'uzbek': 'Sakkizoyoq', 'turkish': 'Ahtapot'}, 
    {'english': 'Odonata', 'german': 'Libelle', 'japanese': 'トンボ', 'russian': 'Стрекоза', 'uzbek': 'Ninachi', 'turkish': 'Kızböcek'},
    {'english': 'Onion', 'german': 'Zwiebel', 'japanese': '玉ねぎ', 'russian': 'Лук', 'uzbek': 'Piyoz', 'turkish': 'Soghan'}, 
    {'english': 'Owl', 'german': 'Eule', 'japanese': '梟', 'russian': 'Сова', 'uzbek': 'Boyqush', 'turkish': 'Baykush'}, 
    {'english': 'Pear', 'german': 'Birne', 'japanese': '梨', 'russian': 'Груша', 'uzbek': 'Nok', 'turkish': 'Armut'}, 
    {'english': 'Pen', 'german': 'Stift', 'japanese': 'ペン', 'russian': 'Ручка', 'uzbek': 'Ruchka', 'turkish': 'Kalem'}, 
    {'english': 'Pencil', 'german': 'Bleistift', 'japanese': '鉛筆', 'russian': 'Карандаш', 'uzbek': 'Qalam', 'turkish': 'Kurshun kalem'}, 
    {'english': 'Petroleum', 'german': 'Erdöl', 'japanese': '石油', 'russian': 'Нефть', 'uzbek': 'Neft', 'turkish': 'Petrol'}, 
    {'english': 'Phone', 'german': 'Telefon', 'japanese': '電話', 'russian': 'Телефон', 'uzbek': 'Telefon', 'turkish': 'Telefon'}, 
    {'english': 'Pillar', 'german': 'Säule', 'japanese': '柱', 'russian': 'Колонна', 'uzbek': 'Ustun', 'turkish': 'Sütun'}, 
    {'english': 'Pineapple', 'german': 'Ananas', 'japanese': 'パイナップル', 'russian': 'Ананас', 'uzbek': 'Ananas', 'turkish': 'Ananas'}, 
    {'english': 'Power station', 'german': 'Kraftwerk', 'japanese': '発電所', 'russian': 'Электростанция', 'uzbek': 'Elektr stantsiyasi', 'turkish': 'Elektrik santralı'},
    {'english': 'Pyramid', 'german': 'Pyramide', 'japanese': 'ピラミッド', 'russian': 'Пирамида', 'uzbek': 'Ehrom', 'turkish': 'Piramit'}, 
    {'english': 'Quadcopter', 'german': 'Quadrocopter', 'japanese': 'クアッドコプター', 'russian': 'Квадрокоптер', 'uzbek': 'Kvadrokopter', 'turkish': 'Kuadkopter'}, 
    {'english': 'Rain', 'german': 'Regen', 'japanese': '雨', 'russian': 'Дождь', 'uzbek': 'Yomgʻir', 'turkish': 'Yaghmur'}, 
    {'english': 'Raven', 'german': 'Kolkrabe', 'japanese': 'ワタリガラス', 'russian': 'Ворон', 'uzbek': 'Quzgʻun', 'turkish': 'Karakarga'}, 
    {'english': 'Rice', 'german': 'Reis', 'japanese': '米', 'russian': 'Рис', 'uzbek': 'Guruch', 'turkish': 'Pirinç'}, 
    {'english': 'Salt', 'german': 'Salz', 'japanese': '塩', 'russian': 'Соль', 'uzbek': 'Tuz', 'turkish': 'Tuz'}, 
    {'english': 'Satellite', 'german': 'Satellit', 'japanese': '人工衛星', 'russian': 'Спутник', 'uzbek': 'Sunʼiy yoʻldosh', 'turkish': 'Yapay uydu'}, 
    {'english': 'Saturn', 'german': 'Saturn', 'japanese': '土星', 'russian': 'Сатурн', 'uzbek': 'Saturn', 'turkish': 'Satürn'}, 
    {'english': 'Scissors', 'german': 'Schere', 'japanese': 'はさみ', 'russian': 'Ножницы', 'uzbek': 'Qaychilar', 'turkish': 'Makas'}, 
    {'english': 'Screwdriver', 'german': 'Schraubendreher', 'japanese': 'ドライバー', 'russian': 'Отвёртка', 'uzbek': 'Otvertka', 'turkish': 'Tornavida'}, 
    {'english': 'Seahorse', 'german': 'Seepferdchen', 'japanese': 'タツノオトシゴ', 'russian': 'Морской конёк', 'uzbek': 'Dengiz otchasi', 'turkish': 'Denizatı'}, 
    {'english': 'Seashell', 'german': 'Muschel', 'japanese': '貝殻', 'russian': 'Ракушка', 'uzbek': 'Chigʻanoq', 'turkish': 'Deniz kabughu'}, 
    {'english': 'Shark', 'german': 'Hai', 'japanese': '鮫', 'russian': 'Акула', 'uzbek': 'Akula', 'turkish': 'Köpekbalıghı'}, 
    {'english': 'Skull', 'german': 'Schädel', 'japanese': '頭蓋骨', 'russian': 'Череп', 'uzbek': 'Bosh suyagi', 'turkish': 'Kafatası'}, 
    {'english': 'Snail', 'german': 'Schnecke', 'japanese': '蝸牛', 'russian': 'Улитка', 'uzbek': 'Shilliqqurt', 'turkish': 'Salyangoz'}, 
    {'english': 'Snake', 'german': 'Schlange', 'japanese': '蛇', 'russian': 'Змея', 'uzbek': 'Ilon', 'turkish': 'Yılan'}, 
    {'english': 'Snow', 'german': 'Schnee', 'japanese': '雪', 'russian': 'Снег', 'uzbek': 'Qor', 'turkish': 'Kar'}, 
    {'english': 'Snowman', 'german': 'Schneemann', 'japanese': '雪だるま', 'russian': 'Снеговик', 'uzbek': 'Qorbobo', 'turkish': 'Kardan adam'}, 
    {'english': 'Football', 'german': 'Fußball', 'japanese': 'サッカー', 'russian': 'Футбол', 'uzbek': 'Futbol', 'turkish': 'Futbol'}, 
    {'english': 'Squid', 'german': 'Tintenfisch', 'japanese': 'イカ', 'russian': 'Кальмар', 'uzbek': 'Kalmar', 'turkish': 'Kalamar'}, 
    {'english': 'Stamp', 'german': 'Briefmarke', 'japanese': '切手', 'russian': 'Марка', 'uzbek': 'Marka', 'turkish': 'Pul'}, 
    {'english': 'Starfish', 'german': 'Seestern', 'japanese': '海星', 'russian': 'Морская звезда', 'uzbek': 'Dengiz yulduzi', 'turkish': 'Denizyıldızı'}, 
    {'english': 'Steering wheel', 'german': 'Lenkrad', 'japanese': 'ハンドル', 'russian': 'Руль', 'uzbek': 'Rul', 'turkish': 'Direksiyon'}, 
    {'english': 'Stomach', 'german': 'Magen', 'japanese': '胃', 'russian': 'Желудок', 'uzbek': 'Meʻda', 'turkish': 'Mide'}, 
    {'english': 'Stroller', 'german': 'Kinderwagen', 'japanese': '乳母車', 'russian': 'Коляска', 'uzbek': 'Bolalar aravachasi', 'turkish': 'Bebek arabası'}, 
    {'english': 'Stump', 'german': 'Baumstumpf', 'japanese': '切り株', 'russian': 'Пень', 'uzbek': 'Daraxt dumi', 'turkish': 'Kütük'}, 
    {'english': 'Subway', 'german': 'U-Bahn', 'japanese': '地下鉄', 'russian': 'Метро', 'uzbek': 'Metro', 'turkish': 'Metro'}, 
    {'english': 'Suitcase', 'german': 'Koffer', 'japanese': 'スーツケース', 'russian': 'Чемодан', 'uzbek': 'Chamadon', 'turkish': 'Bavul'}, 
    {'english': 'Sun', 'german': 'Sonne', 'japanese': '太陽', 'russian': 'Солнце', 'uzbek': 'Quyosh', 'turkish': 'Günesh'}, 
    {'english': 'Swallow', 'german': 'Schwalbe', 'japanese': 'ツバメ', 'russian': 'Ласточка', 'uzbek': 'Qaldirgʻoch', 'turkish': 'Kırlangıç'}, 
    {'english': 'Takeoff', 'german': 'Abflug', 'japanese': '離陸', 'russian': 'Взлёт', 'uzbek': 'Parvoz', 'turkish': 'Kalkısh'}, 
    {'english': 'Taxi', 'german': 'Taxi', 'japanese': 'タクシー', 'russian': 'Такси', 'uzbek': 'Taksi', 'turkish': 'Taksi'}, 
    {'english': 'Tent', 'german': 'Zelt', 'japanese': 'テント', 'russian': 'Палатка', 'uzbek': 'Chodir', 'turkish': 'Çadır'}, 
    {'english': 'Tennis', 'german': 'Tennis', 'japanese': 'テニス', 'russian': 'Теннис', 'uzbek': 'Tennis', 'turkish': 'Tenis'}, 
    {'english': 'Tomato', 'german': 'Tomate', 'japanese': 'トマト', 'russian': 'Помидор', 'uzbek': 'Pomidor', 'turkish': 'Kızanak'}, 
    {'english': 'Tooth', 'german': 'Zahn', 'japanese': '歯', 'russian': 'Зуб', 'uzbek': 'Tish', 'turkish': 'Dish'}, 
    {'english': 'Torch', 'german': 'Fackel', 'japanese': 'たいまつ', 'russian': 'Факел', 'uzbek': 'Mashʻal', 'turkish': 'Meshale'}, 
    {'english': 'Tram', 'german': 'Straßenbahn', 'japanese': '路面電車', 'russian': 'Трамвай', 'uzbek': 'Tramvay', 'turkish': 'Tramvay'}, 
    {'english': 'Tree', 'german': 'Baum', 'japanese': '木', 'russian': 'Дерево', 'uzbek': 'Daraxt', 'turkish': 'Aghaç'}, 
    {'english': 'Trolleybus', 'german': 'Oberleitungsbus', 'japanese': 'トロリーバス', 'russian': 'Троллейбус', 'uzbek': 'Trolleybus', 'turkish': 'Troleybüs'}, 
    {'english': 'Turtle', 'german': 'Schildkröte', 'japanese': '亀', 'russian': 'Черепаха', 'uzbek': 'Toshbaqa', 'turkish': 'Kaplumbagha'}, 
    {'english': 'UFO', 'german': 'Unidentifiziertes Flugobjekt', 'japanese': '未確認飛行物体', 'russian': 'Неопознанный летающий объект', 'uzbek': 'Nomaʻlum uchar jism', 'turkish': 'UFO'}, 
    {'english': 'Umbrella', 'german': 'Regenschirm', 'japanese': '傘', 'russian': 'Зонт', 'uzbek': 'Soyabon', 'turkish': 'Shemsiye'}, 
    {'english': 'Uranus', 'german': 'Uranus', 'japanese': '天王星', 'russian': 'Уран', 'uzbek': 'Uran', 'turkish': 'Uranüs'}, 
    {'english': 'Volleyball', 'german': 'Volleyball', 'japanese': 'バレーボール', 'russian': 'Волейбол', 'uzbek': 'Voleybol', 'turkish': 'Voleybol'}, 
    {'english': 'Water', 'german': 'Wasser', 'japanese': '水', 'russian': 'Вода', 'uzbek': 'Suv', 'turkish': 'Su'}, 
    {'english': 'Watermelon', 'german': 'Wassermelone', 'japanese': '西瓜', 'russian': 'Арбуз', 'uzbek': 'Qovun', 'turkish': 'Karpuz'}, 
    {'english': 'Water tower', 'german': 'Wasserturm', 'japanese': '給水塔', 'russian': 'Водонапорная башня', 'uzbek': 'Suv minorasi', 'turkish': 'Su kulesi'}, 
    {'english': 'Willow', 'german': 'Weide', 'japanese': 'ヤナギ', 'russian': 'Ива', 'uzbek': 'Tol', 'turkish': 'Söghüt'}, 
    {'english': 'Wind', 'german': 'Wind', 'japanese': '風', 'russian': 'Ветер', 'uzbek': 'Shamol', 'turkish': 'Rüzgar'}, 
    {'english': 'Wooden log', 'german': 'Holzscheit', 'japanese': '木の丸太', 'russian': 'Бревно', 'uzbek': 'Daraxt poyasi', 'turkish': 'Ahshap kütük'}, 
    {'english': 'Woodlouse', 'german': 'Kellerassel', 'japanese': 'ワラジムシ亜目', 'russian': 'Мокрица', 'uzbek': 'Eshakqurtlar', 'turkish': 'Hamam böceghi'}, 
    {'english': 'Wrench', 'german': 'Schraubenschlüssel', 'japanese': 'レンチ', 'russian': 'Гаечный ключ', 'uzbek': 'Gayka kaliti', 'turkish': 'İngiliz anahtarı'}, 
    {'english': 'Yatai', 'german': 'Yatai', 'japanese': '屋台', 'russian': 'Ятай', 'uzbek': 'Yatai', 'turkish': 'Yatai'},
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
    const breakPoints = [[0,319], [320,767], [768,1023], [1024,10000]];
    const w = document.body.offsetWidth;
    breakPoints.forEach((bp, i) => {
      if (w >= bp[0] && w <= bp[1]) {
        cardsNumber = (i + 1) * 9;
      }
    });

    cards.length = 0;
    const cardsContainerChildren = cardsContainer.children;
    if (cardsContainerChildren.length && cardsContainerChildren.length !== cardsNumber) {
      while(cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.lastChild);
      }
    }

    for (let i = 0; i < cardsNumber; i++) {
      const card = (cardsContainerChildren.length === cardsNumber) ? cardsContainerChildren[i] : document.createElement('article');
      if (cardsContainerChildren.length !== cardsNumber) {
        card.addEventListener('pointerdown', handleCardPick);
        card.classList.add('card');
      }
      else {
        card.style.opacity = 1;
      }
      card.style.maskImage = `url(icons/${words[i]['english'].replace(' ', '_')}.svg)`;
      card.style.maskRepeat = 'no-repeat';
      card.style.maskPosition = 'center';
      card.style.maskSize = 'contain';

      const languageIndex = Math.random() * checkedLanguages.length | 0;
      const language = checkedLanguages[languageIndex];
      card.setAttribute('data-word', words[i][language]);
      card.setAttribute('data-language', language);
      cards.push(card);
    }
    
    cardsContainer.append(...cards);
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

    const languageMap = {english: 'english', japanese: '日本語', german: 'deutsch', russian: 'русский', uzbek: 'oʻzbekcha', turkish: 'türkçe'};
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
    const rect = element.getBoundingClientRect();
    const widthWithPaddings = rect.width | 0;
    const heightWithPaddings = rect.height | 0;
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
    window.addEventListener('resize', setCardsDimensions);
  }

  init();
  initSounds();
  initListeners();
};
