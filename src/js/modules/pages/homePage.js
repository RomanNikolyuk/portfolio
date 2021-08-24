import Page from "./page";
import Loader from "./fetchLoader";

class HomePage extends Page {


    render() {
        return `
        <div class="home-container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="home-title "><strong>Hi!</strong> <br> Let's do something beautiful together</h1>
                </div>
            </div>
    
            <div class="row justify-content-between tips">
                <div class="col-md-5">
                    <h3 class="home-tip">Select one of the menu items</h3>
                </div>
                <div class="col-md-2">
                    <a href="https://t.me/vl_st1" target="_blank"><i class="fab fa-telegram-plane"></i></a>
                    <a href="https://www.instagram.com/vl_st__/" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        `;
    }

    pageInfo() {
        return {title: 'Site Creator | Roman Nikolyuk, Web Developer', url: '/'};
    }
}

export default HomePage;