'use strict';

import "./../assets/css/styles.css";
import "./../assets/css/bootstrap.css";
import "./../assets/css/fontawesome.min.css";
import "./../assets/css/font-awesome.css";
import Router from "./modules/router";
import Animate from "./modules/animation";
import menuMobile from "./modules/menuMobile";


window.addEventListener('DOMContentLoaded', () => {
    new Router('.menu-list a, .works-view-more', '.title a');

    Animate();

    menuMobile();
});


