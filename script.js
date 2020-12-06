let products = [
  {
    name: 'Chengde',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 6575647,
    category: 'North',
    imageUrl: 'images/chengde.jpg'
  },
  {
    name: 'Great Wall',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 234453,
    category: 'North',
    imageUrl: 'images/great_wall.jpg'
  },
  {
    name: 'Guilin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 568647,
    category: 'South',
    imageUrl: 'images/guilin.jpg'
  },
  {
    name: 'Huang Guo Shu',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 4352654,
    category: 'South',
    imageUrl: 'images/Huangguoshu.jpg'
  },
  {
    name: 'Huang Shan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 64376,
    category: 'South',
    imageUrl: 'images/huangshan.jpg'
  },
  {
    name: 'Inner Mongolia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 23456,
    category: 'North',
    imageUrl: 'images/Inner_Mongolia.jpg'
  },
  {
    name: 'Jade Dragon Mountain',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 123454,
    category: 'South',
    imageUrl: 'images/Jade_Dragon.jpg'
  },
  {
    name: 'Potala Palace',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 568456,
    category: 'West',
    imageUrl: 'images/Potala.jpg'
  },
  {
    name: 'Sanya',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 4352463,
    category: 'South',
    imageUrl: 'images/sanya.jpg'
  },
  {
    name: 'Shanghai',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 5648456,
    category: 'South',
    imageUrl: 'images/shanghai.jpg'
  },
  {
    name: 'Tai Shan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 2346546,
    category: 'North',
    imageUrl: 'images/TaiShan.jpg'
  },
  {
    name: 'Terracotta',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 2345564,
    category: 'West',
    imageUrl: 'images/Terracotta.jpg'
  },
  {
    name: 'Tiananmen',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 6548657,
    category: 'North',
    imageUrl: 'images/Tiananmen.jpg'
  },
  {
    name: 'Wuyi Shan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 3265436,
    category: 'South',
    imageUrl: 'images/Wuyi.jpg'
  },
  {
    name: 'West Lake',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lacus, imperdiet a ipsum vel, pellentesque lacinia augue',
    price: 5684456,
    category: 'South',
    imageUrl: 'images/xihu.jpg'
  }
];

function createImage(product) {
  let div = document.createElement('div');
  div.id = 'image';

  let image = document.createElement('img');

  image.src = product['imageUrl'];
  div.appendChild(image);

  return div;
}

function createInfo(product) {
  let div = document.createElement('div');
  div.id = 'information';

  let name = document.createElement('h1');
  let description = document.createElement('p');
  let category = document.createElement('h2');
  let price = document.createElement('h3');

  name.innerHTML = product['name'];
  description.innerHTML = 'Description: ' + product['description'];
  category.innerHTML = 'Category: ' + product['category'];
  price.innerHTML = 'Price: CAD$ ' + new Intl.NumberFormat('en-CA').format(product['price'] / 100);

  div.appendChild(name);
  div.appendChild(description);
  div.appendChild(category);
  div.appendChild(price);

  return div;
}

function showAll() {
  let prod = document.querySelector('.product');
  prod.innerHTML = '';
  for (let a of products) {
    let div = document.createElement('div');
    div.className = 'content';
    let b = createImage(a);
    div.appendChild(b);
    let c = createInfo(a);
    div.appendChild(c);
    prod.appendChild(div);
  }
}

function showNorth() {
  let prod = document.querySelector('.product');
  prod.innerHTML = '';
  for (let a of products) {
    if (a['category'] === 'North') {
      let div = document.createElement('div');
      div.className = 'content';
      let b = createImage(a);
      div.appendChild(b);
      let c = createInfo(a);
      div.appendChild(c);
      prod.appendChild(div);
    }
  }
}

function showSouth() {
  let prod = document.querySelector('.product');
  prod.innerHTML = '';
  for (let a of products) {
    if (a['category'] === 'South') {
      let div = document.createElement('div');
      div.className = 'content';
      let b = createImage(a);
      div.appendChild(b);
      let c = createInfo(a);
      div.appendChild(c);
      prod.appendChild(div);
    }
  }
}

function showWest() {
  let prod = document.querySelector('.product');
  prod.innerHTML = '';
  for (let a of products) {
    if (a['category'] === 'West') {
      let div = document.createElement('div');
      div.className = 'content';
      let b = createImage(a);
      div.appendChild(b);
      let c = createInfo(a);
      div.appendChild(c);
      prod.appendChild(div);
    }
  }
}

window.onload = function() {
  showAll();
  let all = document.querySelector('#all');
  let north = document.querySelector('#north');
  let south = document.querySelector('#south');
  let west = document.querySelector('#west');

  all.addEventListener('click', function() {
    showAll();
  });
  north.addEventListener('click', function() {
    showNorth();
  });
  south.addEventListener('click', function() {
    showSouth();
  });
  west.addEventListener('click', function() {
    showWest();
  });

};
