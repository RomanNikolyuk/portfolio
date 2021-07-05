import Page from "./page";
import Loader from "./fetchLoader";
import store from "../../store";
import {worksRequested, worksReceived} from "../../actions/work-actions";
import RequestManager from "../requestManager";

class WorksPage extends Page {
    async componentDidMount() {
        if (store.getState().works === null) {
            store.dispatch(worksRequested());

            const works = await RequestManager.works();

            store.dispatch(worksReceived(works));
        }


        if (window.screen.width > 768) {
            const rows = document.querySelectorAll('.works-article .row');

            rows.forEach(row => {
                const viewMore = row.querySelector('.works-view-more');
                viewMore.style.display = 'none';

                row.addEventListener('mouseover', () => {
                    viewMore.style.display = 'flex';
                });

                row.addEventListener('mouseleave', () => {
                    viewMore.style.display = 'none';
                });

            });
        }

    }

    render() {
        const {loading, works} = store.getState();

        if (loading || works === null) {
            return Loader();
        }


        return (
            `<div class="row justify-content-center">
                <div class="col-md-6">
                    <h1 class="page-title">Works</h1>
                    <h3 class="page-subtitle d-flex justify-content-center"><hr class="line" style="margin: 20px"> See my last projects <hr class="line" style="margin: 20px;"> </h3>
                </div>
            </div>
           
        
            ${(() => {
                let returnn = '';
                
                works.forEach(work => {
                    
                    returnn += `
                        <div class="row justify-content-between works-container">
                            <article class="container works-article">
                                <div class="row works-unit">
                                    <div class="col-md-6 works-text-container">
                                        <h1 class="works-title title-strong"><a href="/works/${work.alias}">${work.title}</a></h1>
                                        <h3 class="works-description description-light">${work.description} <br> <span class="tools"></span> <span class="tools hover-orange">${work.tools}</span></h3>
                                        
                                        <a href="/works/${work.alias}" class="works-view-more tools"> <hr class="line-works-page" style=""> view more</a>
                                    </div>
                                    <div class="col-md-6">
                                        <a href="/works/${work.alias}"><img src="${work.image}" alt="${work.title}" class="works-img"></a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    `; 
                });
                
                return returnn;
            })()}
`
        );


    }

    pageInfo() {
        return  {
            'title': 'My Works',
            'url': '/works'
        };
    }
}

export default WorksPage;