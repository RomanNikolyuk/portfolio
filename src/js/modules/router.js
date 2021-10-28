import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import WorksPage from "./pages/worksPage";
import WorkInfoPage from "./pages/workInfoPage";
import store from "../store";
import {workChange} from "../actions/work-actions";
import ContactsPage from "./pages/contactsPage";
import NotFoundPage from "./pages/404Page";

class Router {
    #routes = {
        '/': HomePage,
        '/about': AboutPage,
        '/works/{alias}': WorkInfoPage,
        '/works': WorksPage,
        '/contacts': ContactsPage
    }


    constructor(selector, homeSelector) {
        this.links = document.querySelectorAll(selector);
        this.homeLink = document.querySelector(homeSelector);


        this.setListeners();
        this.fillCurrentPage();
    }

    setListeners() {
        document.body.addEventListener('click', (event) => {
            if (event.target.nodeName === 'A') {
                event.preventDefault();

                this.routeSelected(event.target);
            }
        });

        /**
         * Back Button Select
         **/
        window.addEventListener('popstate', () => {
            const simulationA = document.createElement('a');
            simulationA.href = window.location.pathname;

            this.routeSelected(simulationA);
        });

        this.homeLink.addEventListener('click', (event) => {
            event.preventDefault();

            this.routeSelected(this.homeLink);
        });

    }

    fillCurrentPage() {
        const currentRoute = window.location.pathname;

        const a = document.querySelector(`a[href="${currentRoute}"]`);

        this.routeSelected(a);
    }

    routeSelected(a) {
        let params = null;

        let currentRoute = null;

        if (a) {
            const href = a.getAttribute('href');

            for (let route in this.#routes) {

                if (this.#isRoute(route, href)) {

                    currentRoute = this.#routes[route];

                    params = this.#getParams(route, href);

                    break;
                }
            }
        }

        currentRoute ? new currentRoute(params ? params : null) : new NotFoundPage;
    }

    #isRoute(route, href) {
        const hrefSplit = href.split('/');
        const routeSplit = route.split('/');

        let i = 0;
        let match = null;
        routeSplit.forEach(r => {
            if (r === hrefSplit[i] || (r.match(/{/) && hrefSplit[i])) {
                match = match !== false;
            } else {
                match = false;
            }
            i++;
        });

        return match;

    }

    /**
     * Get Vars from route like {alias}
     */
    #getParams(route, href) {
        let indexStart   = route.indexOf('{');
        let symbolUrl    = href[indexStart];
        let closestSlash = href.slice(indexStart).indexOf('/');

        if (indexStart > -1 && closestSlash === -1) {
            closestSlash = href.length - 1;
        }

        if (indexStart && symbolUrl) {
            return href.slice(indexStart, closestSlash + indexStart);
        }

        return false;
    }
}

export default Router;