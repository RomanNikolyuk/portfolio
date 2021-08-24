import mojs from 'mo-js';

const Animate = () => {
    menuAnimate();

    textAnimate();
};

function menuAnimate() {
    const links = document.querySelectorAll('.menu-list-normal li a');

    links.forEach(link => link.addEventListener('mouseenter', shootLines));

    function shootLines(e) {

        const itemDim = this.getBoundingClientRect(),
            itemSize = {
                x: itemDim.right - itemDim.left,
                y: itemDim.bottom - itemDim.top,
            },
            shapes = ['line', 'zigzag'],
            color = /*['#2FB5F3',
                '#FF0A47',
                '#FF0AC2',
                '#47FF0A']*/'#ffffff';

        const /*chosenC = Math.floor(Math.random() * colors.length),*/
            chosenS = Math.floor(Math.random() * shapes.length);

        // create shape
        const burst = new mojs.Burst({
            left: itemDim.left + (itemSize.x/2),
            top: itemDim.top + (itemSize.y/2),
            radiusX: itemSize.x,
            radiusY: itemSize.y,
            count: 8,

            children: {
                shape: shapes[chosenS],
                radius: 10,
                scale: {0.8: 1},
                fill: 'none',
                points: 7,
                stroke: color,
                strokeDasharray: '100%',
                strokeDashoffset: { '-100%' : '100%' },
                duration: 350,
                delay: 100,
                easing: 'quad.out',
                isShowEnd: false,
            }
        });

        burst.play();


        const menuTitleNode = document.querySelector('.menu-title-normal');

        menuTitleNode.addEventListener('click', (event) => {
            const isActive = menuTitleNode.classList.contains('menu-title-active');
            if (!isActive) {
                menuTitleNode.classList.add('menu-title-active');

            } else {
                menuTitleNode.classList.remove('menu-title-active');

            }


        });


    }
}

function textAnimate() {
    const body = document.body,
        html = document.documentElement;

    const clientHeight = html.clientHeight;
    const clientWidth = html.clientWidth;

    const text = document.querySelectorAll('p, h1, li, h3, i, a');

    if (window.screen.width > 990) {
        body.addEventListener('pointermove', (event) => {
            /****************************************/

            let cursorYPC = Math.round((event.clientY * 100) / clientHeight);
            let cursorXPC = Math.round((event.clientX * 100) / clientWidth);


            const textTransformY = (2 * cursorYPC) / 100;
            const textTransformX = (5 * cursorXPC) / 100;


            text.forEach(t => {
                t.style.transform = `skew(${textTransformX}deg, ${textTransformY}deg)`;
            });
            /****************************************/

            /*body.style.backgroundPositionY = `${event.clientY / 100}%`;
            body.style.backgroundPositionX = `${event.clientX / 100}%`;*/

            body.style.backgroundPosition = `${event.clientX / 100}% ${event.clientY / 100}%`;
        });
    }

}



export default Animate;