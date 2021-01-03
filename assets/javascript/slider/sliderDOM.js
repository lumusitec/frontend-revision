import Slider from './slider';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubtitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");

let textContent = document.querySelector("#slider-text-content");

export let slider = new Slider(
    {
        elements: [
            {
                title: 'lorem otro',
                subtitle: 'lorem Ipsum',
                image: '1.jpg',
                text: 'Ex nobis doloremque nulla, quae molestiae blanditiis cupiditate perspiciatis Adipisci fugit quam at voluptatibus deserunt quia optio.'
            },
            {
                title: 'lorem otro 2',
                subtitle: 'lorem Ipsum 2 ',
                image: '2.jpg',
                text: 'Cupiditate perspiciatis Adipisci fugit quam at voluptatibus deserunt quia optio.'
            }, {
                title: 'lorem otro 3',
                subtitle: 'lorem Ipsum 3',
                image: '3.jpg',
                text: 'Ex nobis doloremque nulla, quae molestiae blanditiis cupiditate perspiciatis Adipisci fugit quam at voluptatibus deserunt quia optio.'
            }, {
                title: 'lorem otro 4',
                subtitle: 'lorem Ipsum 4',
                image: '4.jpg',
                text: 'Ex nobis doloremque nulla, quae molestiae blanditiis cupiditate perspiciatis Adipisci fugit quam at voluptatibus deserunt quia optio.'
            },
        ],
        animationFunc: function (element) {
            textContent.classList.add("hide");
            sliderImage.classList.add("hide");

            setTimeout(function(){
                sliderSubtitle.innerHTML = element.subtitle;
                sliderText.innerHTML = element.text;
                sliderTitle.innerHTML = element.title;
                sliderImage.src = element.image;

                textContent.classList.remove("hide");
                sliderImage.classList.remove("hide");
            }, 600);

            
        },
        speed: 5000
    }
);

slider.play();