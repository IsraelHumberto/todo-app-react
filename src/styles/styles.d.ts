import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme{
        name: string

        body: string;
        bgHeaderDesktop: any;
        bgHeaderMobile: any;
        IconToogle: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }>;

        colors: {
            primary: string,
            textMain: string
        }
    }
}