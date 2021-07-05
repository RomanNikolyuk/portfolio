import Page from "./page";
import RequestManager from "../requestManager";
import store from "../../store";
import {receivedWork, requestWork, workAliasChange, workChange} from "../../actions/work-actions";
import Loader from "./fetchLoader";
import Swiper from "swiper";

class WorkInfoPage extends Page {

    async componentDidMount() {

        store.dispatch(requestWork());

        const work = await RequestManager.work(this.params);

        store.dispatch(receivedWork(work));

        this.setListeners();
    }

    setListeners() {
        const slider = new Swiper('.swiper-container', {
            direction: 'vertical',
            navigation: {
                nextEl: '.more-button',
            },
            loop: true,
            mousewheel: true,
        });

        const nextSlideButton = document.querySelector('.more-button');

        nextSlideButton.addEventListener('click', () => {
            slider.slideNext();
        });


        const prevWorkButton = document.querySelector('.prev-project-btn'),
            nextWorkButton = document.querySelector('.next-project-btn');

        if (prevWorkButton)
            prevWorkButton.addEventListener('click', (event) => {
                store.dispatch(workChange(store.getState().work.prevAlias));
            });

        if (nextWorkButton)
            nextWorkButton.addEventListener('click', (event) => {
                store.dispatch(workChange(store.getState().work.nextAlias));
            });
    }

    async componentDidUpdate() {
        const {newWorkAlias} = store.getState();

        if (newWorkAlias) {
            store.dispatch(workAliasChange(null));

            store.dispatch(requestWork());

            const work = await RequestManager.work(newWorkAlias);

            store.dispatch(receivedWork(work));
            this.setListeners();
        }
    }

    render() {
        const {work, loading} = store.getState();

        if (loading || work === null) {
            return Loader();
        }

        const {title, description, images, url, nextAlias, prevAlias} = store.getState().work;

        return (
            `
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <h1 class="page-title">${title}</h1>
                        <h3 class="page-subtitle d-flex justify-content-center"><hr class="line" style="margin: 20px"> ${description} <hr class="line" style="margin: 20px;"> </h3>
                    </div>
                </div>
                
                <div class="row justify-content-center">
                
                <div class="container work-info-container">
                    <div class="row justify-content-between">
                    <div class="col-md-2 align-self-center work-prev-text">
                    ${
                (() => {
                    if (prevAlias.length > 0) {
                        return '<span class="prev-project-btn">Previous Project</span>';
                    }
                    return '';
                })()
            }
                    </div>
                    
                        
                    <div class="col-md-8">
                        
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                            ${
                (() => {
                    let returnn = '';
                    images.forEach(path => {
                        returnn += `<div class="swiper-slide"><a href="${url}" target="_blank"><img src="${path}" alt="${title}" class="work-info-img"></a></div>`;
                    })
                    return returnn;
                })()

            }
                              
                            </div>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination"></div>
                          </div>
                           
                          <span class="more-button work-info-more">more</span>

                                                
                    </div>
                    <div class="col-md-2 align-self-center work-next-text">
                    ${
                (() => {
                    if (nextAlias.length > 0) {
                        return "<span class=\"next-project-btn\">Next Project</span>";
                    }
                    return '';
                })()
            }
                    </div>
                        
                    </div>
                    
                   
                </div>
                
</div>
            `
        );

    }

    pageInfo() {
        return {
            'title': store.getState().work ? store.getState().work.title : 'Working on...',
            'url': store.getState().work ? '/works/' + store.getState().work.alias : '/works/'
        };
    }
}

export default WorkInfoPage;