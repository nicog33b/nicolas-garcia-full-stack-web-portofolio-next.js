// font.ts

import { Montserrat, Roboto } from 'next/font/google';

// Configura las fuentes que vas a utilizar
export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});
