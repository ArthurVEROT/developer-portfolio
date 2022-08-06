
import spaceInvader from '../assets/png/Space_Invaders_Logo.png'
import cash from '../assets/png/cash.png'
import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Space invaders',
        projectDesc: 'Reproduction of the famous game Space Invaders in JavaScript, HTLM (Canvas), and CSS.',
        tags: ['JavaScript', 'HTML', 'CSS'],
        code: 'https://github.com/ArthurVEROT/SpaceInvaders-Galaga-Project1',
        demo: 'https://arthurverot.github.io/SpaceInvaders-Galaga-Project1/',
        image: spaceInvader
    },
    {
        id: 2,
        projectName: 'Trading simulator',
        projectDesc: 'REST API to run a trading simulation app. On this app, you can trade over 100 cryptos and 12,000 stocks. To do this, we used the APIs of Binance and IEX.',
        tags: ['NodeJS', 'ExpressJS'],
        code: 'https://github.com/ArthurVEROT/trading-simulator-project2',
        demo: 'https://documenter.getpostman.com/view/21225395/UzBjrnaW',
        image: cash
    },
    // {
    //     id: 3,
    //     projectName: '',
    //     projectDesc: 'Weather forecast systems and applications predict weather conditions based on multiple parameters.',
    //     tags: ['Django', 'CSS', 'Material Ui'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: three
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/