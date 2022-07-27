import {ReactComponent as IconToogleL} from 'assets/icon-moon.svg'
import {ReactComponent as IconToogleD} from 'assets/icon-sun.svg'

export const lightTheme = {
    name: 'light',
    body: 'hsl(0, 0%, 98%)',

    bgHeaderDesktop: require('assets/bg-desktop-light.jpg'),
    bgHeaderMobile: require('assets/bg-mobile-light.jpg'),

    IconToogle: IconToogleL,

    colors: {
        primary: 'hsl(220, 98%, 61%)',
        textMain: 'hsl(235, 19%, 35%)'
    }
}

export const darkTheme = {
    name: 'dark',
    body: 'hsl(235, 24%, 19%)',

    bgHeaderDesktop: require('assets/bg-desktop-dark.jpg'),
    bgHeaderMobile: require('assets/bg-mobile-dark.jpg'),

    IconToogle: IconToogleD,

    colors: {
        primary: 'hsl(220, 98%, 61%)',
        textMain: 'hsl(236, 9%, 61%)'
    }
}