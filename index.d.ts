/**
 * Types for all available colour modes.
 */
export namespace ColourModes {
    /**
     * Hexadecimal Color String
     * @example
     * "#FFC837"
     */
    export type HEX = string;

    /**
     * RGB Color Object
     * @example
     * { r:255, g: 200, b: 55 }
     */
    export type RGB = { r: number; g: number; b: number; };

    /**
     * CSS RGB Color String
     * @example
     * "rgb(255,200,55)"
     */
    export type CSSRGB = string;

    /**
     * HSL Color Object
     * @example
     * { h: 44, s: 100, l: 61 }
     */
    export type HSL = { h: number; s: number; l: number; };

    /**
     * CSS HSL Color String
     * @example
     * "hsl(44,100,61)"
     */
    export type CSSHSL = { h: number; s: number; l: number; };

    /**
     * HSV Color Object
     * @example
     * { h: 44, s: 78, v: 100 }
     */
    export type HSV = { h: number; s: number; v: number; };

    /**
     * CMYK Color Object
     * @example
     * { c: 0.5, m: 1, y: 0.2, k: 0.45 }
     */
    export type CMYK = { c: number; m: number; y: number; k: number; };

    /**
     * YIQ Color Object
     * @example
     * { y: 0.132, i: 0.0222, q: 0.195 }
     */
    export type YIQ = { y: number; i: number; q: number; };

    /**
     * XYZ Color Object
     * @example
     * { X: 41.24, Y: 21.26, Z: 1.93 }
     */
    export type XYZ = { X: number; Y: number; Z: number; };

    /**
     * xyY Color Object
     * @example
     * { x: 0.64, y: 0.33, Y: 21.26 }
     */
    export type XYY = { x: number; y: number; Y: number; };

    /**
     * LMS Color Object
     * @example
     * { rho: 42.266, gamma: 5.561, beta: 2.135 }
     */
    export type LMS = { rho: number; gamma: number; beta: number; };

    /**
     * CIELAB (L*a*b*) Color Object
     * @example
     * { L: 53.23, a: 80.11, b: 67.22 }
     */
    export type CIELAB = { L: number; a: number; b: number; };

    /**
     * CIELUV (L*u*v*) Color Object
     * @example
     * { L: 53.23, u: 175.05, v: 37.75 }
     */
    export type CIELUV = { L: number; u: number; v: number; };

    /**
     * CIELCH (L*C*h*) Color Object
     * @example
     * { L: 53.23, C: 179.08, h: 12.17 }
     */
    export type CIELCH = { L: number; C: number; h: number; };

    /**
     * HSLuv Color Object
     * @example
     * { L: 53.23, C: 179.08, h: 12.17 }
     */
    export type HSLUV = { hu: number; s: number; l: number; };

    /**
     * Represents all available color modes.
     */
    export type Any = (
        HEX | RGB | CSSRGB | HSL | CSSHSL |
        HSV | CMYK | YIQ | XYZ | XYY | LMS |
        CIELAB | CIELUV | CIELCH | HSLUV
    );
}

/**
 * All functions return an object containing all modes of the result.
 */
export type ColourObject = {
    hex: ColourModes.HEX;
    rgb: ColourModes.RGB;
    cssrgb: ColourModes.CSSRGB;
    hsl: ColourModes.HSL;
    csshsl: ColourModes.CSSHSL;
    hsv: ColourModes.HSV;
    cmyk: ColourModes.CMYK;
    yiq: ColourModes.YIQ;
    XYZ: ColourModes.XYZ;
    xyY: ColourModes.XYY;
    lms: ColourModes.LMS;
    cielab: ColourModes.CIELAB;
    cieluv: ColourModes.CIELUV;
    cielch: ColourModes.CIELCH;
    hsluv: ColourModes.HSLUV;
};

/**
 * Helper type for functions that return multiple colour values.
 */
export type ColourObjectArray = {[P in keyof ColourObject]: ColourObject[P][]};

/**
 * Performs colour transformations.
 * @param colour - Any supported colour mode.
 * @returns A colour object containing all available transforms.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#currency_exchange-colour-transformations}
 */
export function convert(colour: ColourModes.Any): ColourObject;

/**
 * Generate a complementary colour
 * @param colour - Any supported colour mode.
 * @returns The complementary colour.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-a-complementary-colour}
 */
export function complementary(colour: ColourModes.Any): ColourObject;

/**
 * Generate an array of triad colours
 * @param colour - Any supported colour mode.
 * @returns Array of 3 colour objects.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-an-array-of-triad-colours}
 */
export function triad(colour: ColourModes.Any): ColourObjectArray;

/**
 * Generate an array of tetrad colours
 * @param colour - Any supported colour mode.
 * @returns Array of 4 colour objects.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-an-array-of-tetrad-colours}
 */
export function tetrad(colour: ColourModes.Any): ColourObjectArray;

/**
 * Find the mid point between two colours
 * [See more]{@link https://github.com/toish/chromatism/blob/master/README.md#find-the-mid-point-between-two-colours}
 * @param colourOne - Any supported colour mode.
 * @param colourTwo - Any supported colour mode.
 * @returns The mid point colour.
 */
export function mid(colourOne: ColourModes.Any, colourTwo: ColourModes.Any): ColourObject;

/**
 * Invert a colour
 * @param colour - Any supported colour mode.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#invert-a-colour}
 * @returns The inverted colour.
 */
export function invert(colour: ColourModes.Any): ColourObject;

/**
 * Invert a grey colour
 * @param colour - Any supported colour mode.
 * @returns The inverted colour.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#invert-a-grey-colour}
 */
export function invertLightness(colour: ColourModes.Any): ColourObject;

/**
 * Blend two colours (Multiply)
 * @param colourOne - Any supported colour mode.
 * @param colourTwo - Any supported colour mode.
 * @returns The blended colour.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#blend-two-colours-multiply}
 */
export function multiply(colourOne: ColourModes.Any, colourTwo: ColourModes.Any): ColourObject;

/**
 * Generate an array of adjacent hue-shifted colours (rainbow effect)
 * @param degrees - The range of hue to include (in degrees, positive or negative)
 * @param sections - How many adjacent colours to return.
 * @param colour - Any supported colour mode.
 * @returns An array of adjacent huge-shifted colours.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-an-array-of-adjacent-hue-shifted-colours-rainbow-effect}
 */
export function adjacent(degrees: number, sections: number, colour: ColourModes.Any): ColourObjectArray;

/**
 * Generate an array of the fade between two colours
 * @param amount - The number of fade colours to return.
 * @param colourFrom - Any supported colour mode.
 * @param colourTo - Any supported colour mode.
 * @returns An array containing the colour fade.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-an-array-of-the-fade-between-two-colours}
 */
export function fade(amount: number, colourFrom: ColourModes.Any, colourTo: ColourModes.Any): ColourObjectArray;

/**
 * Generate a new shade of a colour
 * @param percent - A number between -100 and 100
 * @param colour - Any supported colour mode.
 * @returns The colour shade
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-a-new-shade-of-a-colour}
 */
export function shade(percent: number, colour: ColourModes.Any): ColourObject;

/**
 * Generate a new saturation of a colour
 * @param percent - A number between -100 and 100
 * @param colour - Any supported colour mode.
 * @returns The new saturation of colour.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-a-new-saturation-of-a-colour}
 */
export function saturation(percent: number, colour: ColourModes.Any): ColourObject;

/**
 * Change colour's brightness
 * @param percent - A number between -100 and 100
 * @param colour - Any supported colour mode.
 * @returns The new colour.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#change-colours-brightness}
 */
export function brightness(percent: number, colour: ColourModes.Any): ColourObject;

/**
 * Shift the hue of a colour
 * @param degrees - The degree of hue to shift by (in degrees, positive or negative)
 * @param colour - Any supported colour mode.
 * @returns The new colour.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#shift-the-hue-of-a-colour}
 */
export function hue(degrees: number, colour: ColourModes.Any): ColourObject;

/**
 * Shift the contrast of a colour
 * @param contrastCoeff - A decimal value, normally between 0 and 4
 * @param colour - Any supported colour mode.
 * @returns The shifted contrast colour.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#shift-the-contrast-of-a-colour}
 */
export function contrast(contrastCoeff: number, colour: ColourModes.Any): ColourObject;

/**
 * Greyscale version of the colour
 * @param colour - Any supported colour mode.
 * @returns The greyscale colour
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#greyscale-version-of-the-colour}
 */
export function greyscale(colour: ColourModes.Any): ColourObject;

/**
 * Sepia version of the colour
 * @param colour - Any supported colour mode.
 * @returns The sepia version of the colour
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#sepia-version-of-the-colour}
 */
export function sepia(colour: ColourModes.Any): ColourObject;

/**
 * Determine accessible colour for foreground text
 * @param colour - Any supported colour mode.
 * @returns The accessible foreground colour
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#determine-accessible-colour-for-foreground-text}
 */
export function contrastRatio(colour: ColourModes.Any): ColourObject;

/**
 * Chromatic Adaptation (White point)
 * @param colour - Any supported colour mode.
 * @param illuminantColour - A value from the {@ILLUMINANTS} constant
 * @param sourceIlluminant [{ColourModes.XYZ}] - optional, assumed D65
 * @returns The illuminant shifted colour
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#chromatic-adaptation-white-point}
 */
export function adapt(colour: ColourModes.Any, illuminantColour: ColourModes.Any, sourceIlluminant?: ColourModes.Any): ColourObject;

/**
 * Colour Difference
 * @param colourOne - Any supported colour mode.
 * @param colourTwo - Any supported colour mode.
 * @param luminanceWeight [1] - optional
 * @param chromaWeight [1] - optional
 * @returns A measure of how different the two supplied colours are.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#colour-difference}
 */
export function difference(colourOne: ColourModes.Any, colourTwo: ColourModes.Any, luminanceWeight?: number, chromaWeight?: number): number;

/**
 * Colour Temperature
 * @param colour - Any supported colour mode.
 * @returns The correlated colour temperature of the supplied colour.
 * @see {@link https://github.com/toish/chromatism/blob/master/README.md#colour-temperature}
 */
export function temperature(colour: ColourModes.Any): number;

/**
 * Properties representing standard CIE illuminants constants
 */
interface IlluminantConstants {
    A: ColourModes.XYZ;
    B: ColourModes.XYZ;
    C: ColourModes.XYZ;
    D50: ColourModes.XYZ;
    D55: ColourModes.XYZ;
    D65: ColourModes.XYZ;
    D75: ColourModes.XYZ;
    E: ColourModes.XYZ;
    F2: ColourModes.XYZ;
    F7: ColourModes.XYZ;
    F11: ColourModes.XYZ;
}

/**
 * Exposes standard CIE Illuminants in XYZ colour mode.
 */
export const ILLUMINANTS: IlluminantConstants;

/**
 * Properties representing useful transform matricies
 */
interface TransformConstants {
    BRADFORD: Array<number>;
    INVERSE_BRADFORD: Array<number>;
    SRGB_XYZ: Array<number>;
    INVERSE_SRGB_XYZ: Array<number>;
}

/**
 * Exposes useful built in colour transformation matrcies
 */
export const TRANSFORMS: TransformConstants;
