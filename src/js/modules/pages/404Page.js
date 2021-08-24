import Page from "./page";

class NotFoundPage extends Page {
    render() {
        return `
            <div class="row justify-content-center align-self-center not-found-container">
                <div class="col-md-12">
                    <h1 class="not-found-big">404</h1>
                    <h3 class="not-found-medium">Page not Found</h3>
                    <h5 class="not-found-small"><hr class="line" style="margin: 8px 20px">There is no such page 😢<hr class="line" style="margin: 8px 20px"></p>
                </div>
            </div>
        `;
    }

    pageInfo() {
        return {
            title: 'Page not found 😑',
            url: ''
        };
    }
}

export default NotFoundPage;