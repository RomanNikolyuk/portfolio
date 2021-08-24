import store from "../../store";

class Page {
    mainNode = document.querySelector('main');

    constructor(params) {
        this.params = params;
        this.setPage();

        store.subscribe(() => {
            this.fillPage(this.render());
            if (this.componentDidUpdate)
                this.componentDidUpdate();
        });
    }

    setPage() {
        this.clearPage();

        if (this.componentWillMount) {
            this.componentWillMount();
        }

        this.fillPage(this.render());

        if (this.componentDidMount)
            this.componentDidMount();
    }

    clearPage() {
        this.mainNode.innerHTML = '';
    }

    fillPage(html) {

        this.mainNode.innerHTML = html;

        if (this.pageInfo) {
            const {title, url} = this.pageInfo();

            document.querySelector('title').textContent = title + ' | Roman Nikolyuk, Full-Stack Web Developer';
            window.history.pushState({'url': url}, '', url);
        } else {
            document.querySelector('title').textContent = 'Some Beautiful Page | Roman Nikolyuk, Full-Stack Web Developer';
        }
    }

    rerender() {
        this.fillPage(this.render());
        if (this.componentDidUpdate)
            this.componentDidUpdate();
    }
}

export default Page;