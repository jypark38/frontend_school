// 주의! 이 코드를 이해하려 하지 마세요. 복붙!

// 지금까지 배운 것 + 앞으로 배울 것으로 우리가 뭘 할 수 있는가?
// http://test.api.weniv.co.kr/mall 코드는 백엔드 개발자가 주는겁니다.
// 백엔드 개발자 : 'http://test.api.weniv.co.kr/mall에서 json형식으로 쇼핑몰 데이터를 던지고 있으니 이걸 받아서 쇼핑몰 UI를 만들어주세요!'


fetch('http://test.api.weniv.co.kr/mall')
.then(data => data.json())
.then(data => console.log(data))

fetch('http://test.api.weniv.co.kr/mall')
.then(data => data.json())
.then(data => {
    data.forEach(item => {
        console.log(item)
    })
})

fetch('http://test.api.weniv.co.kr/mall')
.then(data => data.json())
.then(data => {
    data.forEach(item => {
        console.log(item.thumbnailImg);
        console.log(item.productName);
        console.log(item.price);
    })
})

fetch('http://test.api.weniv.co.kr/mall')
.then(data => data.json())
.then(data => {
    data.forEach(item => {
        console.log('http://test.api.weniv.co.kr/' + item.thumbnailImg);
        console.log(item.productName);
        console.log(item.price);
    })
})

// DOM을 생성하여 화면에 출력되게 해본다

fetch('http://test.api.weniv.co.kr/mall')
.then(data => data.json())
.then(data => {
    const main = document.createElement('main');
    data.forEach(item => {
        // console.log('http://test.api.weniv.co.kr/' + item.thumbnailImg);
        // console.log(item.productName);
        // console.log(item.price);
        const productCard = document.createElement('article');
        // const productImg = document.createElement('img');
        const productName = document.createElement('h2');
        const productPrice = document.createElement('p');

        productName.textContent = item.productName;
        productPrice.textContent = item.price;

        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        main.appendChild(productCard);
    })
    document.body.appendChild(main);
})

// six
fetch('http://test.api.weniv.co.kr/mall')
.then(data => data.json())
.then(data => {
    const main = document.createElement('main');
    data.forEach(item => {
        // console.log('http://test.api.weniv.co.kr/' + item.thumbnailImg);
        // console.log(item.productName);
        // console.log(item.price);
        const productCard = document.createElement('article');
        const productImg = document.createElement('img');
        const productName = document.createElement('h2');
        const productPrice = document.createElement('p');

        productName.textContent = item.productName;
        productPrice.textContent = item.price;
        productImg.setAttribute('src', 'http://test.api.weniv.co.kr/' + item.thumbnailImg)
        productCard.appendChild(productImg)
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        main.appendChild(productCard);
    })
    document.body.appendChild(main);
})
