import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

/**
 * Font Awesome normally injects its own <style> tag at runtime. In an SSR'd app
 * that injection loses the race against first paint, so every icon renders at
 * full size for a frame before shrinking ("the FA flash"). Turning autoAddCss
 * off and importing the stylesheet above hands the CSS to Next's bundler
 * instead, where it ships in the initial HTML.
 *
 * Import this module once, from the root layout.
 */
config.autoAddCss = false;
