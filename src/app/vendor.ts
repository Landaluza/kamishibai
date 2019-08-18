/* after changing this file run 'npm run webpack:build' */
/* tslint:disable */
// import '../content/scss/vendor.scss';

// Imports all fontawesome core and solid icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faThumbsUp,
    faThumbsDown,
    faUser,
    faSort,
    faSave,
    faPlus,
    faPencilAlt,
    faBan,
    faTimes,
    faHome
} from '@fortawesome/free-solid-svg-icons';

// Adds the SVG icon to the library so you can use it in your page
library.add(faThumbsUp);
library.add(faThumbsDown);
library.add(faSort);
library.add(faBan);
library.add(faTimes);
library.add(faPencilAlt);
library.add(faHome);
library.add(faUser);
library.add(faSave);
library.add(faPlus);

// import 'chart.js/src/chart.js';
