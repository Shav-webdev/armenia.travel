const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1920px',
    desktopL: '2560px',
}

export const device = {
    mobileSMin: `(min-width: ${size.mobileS})`,
    mobileMMin: `(min-width: ${size.mobileM})`,
    mobileLMin: `(min-width: ${size.mobileL})`,
    tabletMin: `(min-width: ${size.tablet})`,
    laptopMin: `(min-width: ${size.laptop})`,
    laptopLMin: `(min-width: ${size.laptopL})`,
    desktopMin: `(min-width: ${size.desktop})`,
    desktopLMin: `(min-width: ${size.desktopL})`,

    mobileSMax: `(max-width: ${size.mobileS})`,
    mobileMMax: `(max-width: ${size.mobileM})`,
    mobileLMax: `(max-width: ${size.mobileL})`,
    tabletMax: `(max-width: ${size.tablet})`,
    laptopMax: `(max-width: ${size.laptop})`,
    laptopLMax: `(max-width: ${size.laptopL})`,
    desktopMax: `(max-width: ${size.desktop})`,
    desktopLMax: `(max-width: ${size.desktopL})`
};
