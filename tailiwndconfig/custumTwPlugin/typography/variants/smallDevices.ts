import { LARGE_Common_Properties,MEDIUM_Common_Properties,SMALL_Common_Properties,EXTRA_SMALL_Common_Properties } from '../constant';
import { TypographyStylesKeyValue } from '../types';

export const BELOW_MD: TypographyStylesKeyValue = {
  '.display-1': { fontSize: 48, lineHeight: 60,letterSpacing:-0.96, fontWeight: 400 },
  '.display-2': { fontSize: 30, lineHeight: 38,letterSpacing: -0.96, fontWeight: 400 },
  '.display-3': { fontSize: 24, lineHeight: 32,letterSpacing: -0.72, fontWeight: 400 },

  h1: { fontSize: 36, lineHeight: 44, letterSpacing: -0.72, fontWeight: 400 },
  h2: { fontSize: 30, lineHeight: 38, fontWeight: 400 },
  h3: { fontSize: 24, lineHeight: 32, fontWeight: 400 },
  h4: { fontSize: 20, lineHeight: 28, fontWeight: 400 },
  h5: { fontSize: 20, lineHeight: 28, fontWeight: 400 },
  h6: { fontSize: 20, lineHeight: 28, fontWeight: 400 },

  ".lg-regular": LARGE_Common_Properties,
  ".lg-bold": { ...LARGE_Common_Properties,letterSpacing: 0.36, fontWeight: 700 },
  ".lg-italic": {...LARGE_Common_Properties, fontStyle : 'italic'},
  ".lg-link": LARGE_Common_Properties,

  ".md-regular": MEDIUM_Common_Properties,
  ".md-bold": { ...MEDIUM_Common_Properties,letterSpacing: 0.32, fontWeight: 700 },
  ".md-italic": {...MEDIUM_Common_Properties,fontStyle : 'italic'},
  ".md-link": MEDIUM_Common_Properties,

  ".sm-regular": SMALL_Common_Properties,
  ".sm-bold": { ...SMALL_Common_Properties, letterSpacing: 0.28, fontWeight: 700 },
  ".sm-italic": {...SMALL_Common_Properties,fontStyle : 'italic'},
  ".sm-link": SMALL_Common_Properties,

  ".xs-regular": EXTRA_SMALL_Common_Properties,
  ".xs-bold": { ...EXTRA_SMALL_Common_Properties, letterSpacing: 0.24, fontWeight: 700 },
  ".xs-italic": {...EXTRA_SMALL_Common_Properties,fontStyle : 'italic'},
};
