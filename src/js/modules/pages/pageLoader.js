import Page from "./page";

class PageLoader extends Page {
    render() {
        return `
                <div class="loader-wrap">
                    <div class="loading">
                        <div class="bounceball"></div>
                        <div class="loader-text">NOW LOADING</div>
                    </div>
                </div>
`;
    }
}

export default PageLoader;