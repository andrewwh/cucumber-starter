import {DimensionMap} from './dimension';

export interface Dimensions {
    landscape: DimensionMap;
    portrait: DimensionMap;
}

/**
 * Breakpoints for small, medium and large viewports in portrait and lanscape
 */
export const dimensions: Dimensions = {
    landscape:  {
        large: {
            name: 'large',
            orientation: 'landscape',
            width: 1920,
            height: 1080
        },
        medium: {
            name: 'medium',
            orientation: 'landscape',
            width: 1024,
            height: 768
        },
        small: {
            name: 'small',
            orientation: 'landscape',
            width: 667,
            height: 375
        }        
    },

    portrait: {
        large: {
            name: 'large',
            orientation: 'portrait',
            width: 1080,
            height: 1920
        },
        medium: {
            name: 'medium',
            orientation: 'portrait',
            width: 767,
            height: 1024
        },
        small: {
            name: 'small',
            orientation: 'portrait',
            width: 375,
            height: 667
        }        
    }
}
