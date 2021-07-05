import Page from "./page";
import RequestManager from "../requestManager";

class ContactsPage extends Page {

    onSubmit(event) {
        const form = document.querySelector('.form');
        event.preventDefault();

        const formData = new FormData(form);
        RequestManager.submitForm(formData).then(async result => {
            const response = await result.json();

            if (response.status == 1) {
                localStorage.setItem('submitted', '2');
            } else {
                localStorage.setItem('submitted', '1');
            }
            this.rerender();
        });
    }

    componentDidMount() {
        if (!localStorage.getItem('submitted') || localStorage.getItem('submitted') === '1') {
            localStorage.setItem('submitted', '0');
        }

        const form = document.querySelector('.form');

        if (form) {
            form.addEventListener('submit', this.onSubmit.bind(this));
        }
    }

    componentDidUpdate() {
        const form = document.querySelector('.form');

        if (form) {
            form.addEventListener('submit', this.onSubmit.bind(this));
        }
    }

    render() {
        let returnsValue = ``;
        const submitted = +localStorage.getItem('submitted');

        returnsValue = `    
            <div class="row justify-content-center">
                <div class="col-md-8">
 
                    <h1 class="page-title">Contact</h1>
                    <h3 class="page-subtitle d-flex justify-content-center"><hr class="line" style="margin: 20px"> Contact me for your projects <hr class="line" style="margin: 20px;"> </h3>
        
                </div>   
            </div>
            <div class="mt-5"></div>
            <div class="row contacts-container">
            `;

        if (submitted === 0 || !submitted) {

            returnsValue += `
                <div class="col-md-5">
                    <form action='' class='form'>
                      <p class='field required'>
                        <label class='label required' for='name'>Your name</label>
                        <input class='text-input' id='name' name='name' required type='text'>
                      </p>
                      <p class='field required'>
                        <label class='label' for='email_phone'>E-mail or Phone</label>
                        <input class='text-input' id='email_phone' name='email_phone' required>
                      </p>
                      <p class='field required'>
                        <label class='label' for='thoughts'>Share Your Thoughts</label>
                        <textarea class='textarea' cols='50' id='thoughts' name='thoughts' rows='4'></textarea>
                      </p>
                      <p class='field'>
                        <input class='button submit-btn' type='submit' value='Submit!'>
                      </p>
 
                    </form>
                </div>
                
                <div class="col-md-2">
                    <div class="contacts-line">
                        <p>Or</p>
                    </div>
                    
                </div>
                
                <div class="col-md-5 contacts-column">
                   <h1 class="title-strong">Roman</h1>
                   <h3 class="description-light">roman.nikolyuk@gmail.com</h3>
                   <h3 class="description-light">+380994664647</h3>
                   <div class="mt-5"></div>
                   <h3 class="contacts-location-text">Ukraine, Lutsk</h3>
                </div>
               
            `;

        } else if (submitted === 2) {
            returnsValue += `
                <div class="col-md-12">
                    <div class="row contacts-info-text">
                        <h1 class="contacts-form-submitted">Thanks! I will contact You</h1>
                    </div>
                </div>
            `;
        } else if (submitted === 1) {
            returnsValue += `
                <div class="col-md-12">
                    <div class="row contacts-info-text">
                        <h1 class="contacts-form-submitted">Sorry! The server rejected your data. Check their validity or try again later</h1>
                    </div>
                </div>
                
                <div class="col-md-5">
                    <form action='' class='form'>
                      <p class='field required'>
                        <label class='label required' for='name'>Your name</label>
                        <input class='text-input' id='name' name='name' required type='text'>
                      </p>
                      <p class='field required'>
                        <label class='label' for='email_phone'>E-mail or Phone</label>
                        <input class='text-input' id='email_phone' name='email_phone' required>
                      </p>
                      <p class='field required'>
                        <label class='label' for='thoughts'>Share Your Thoughts</label>
                        <textarea class='textarea' cols='50' id='thoughts' name='thoughts' rows='4'></textarea>
                      </p>
                      <p class='field'>
                        <input class='button submit-btn' type='submit' value='Submit!'>
                      </p>
 
                    </form>
                </div>
                
                <div class="col-md-2">
                    <div class="contacts-line">
                        <p>Or</p>
                    </div>
                    
                </div>
                
                <div class="col-md-5 contacts-column">
                   <h1 class="title-strong">Roman</h1>
                   <h3 class="description-light">roman.nikolyuk@gmail.com</h3>
                   <h3 class="description-light">+380994664647</h3>
                   <div class="mt-5"></div>
                   <h3 class="contacts-location-text">Ukraine, Lutsk</h3>
                </div>
            `;
        }

        returnsValue += '</div>';
        return returnsValue;
    }

    pageInfo() {
        return {
            title: 'Contact With Me',
            url: 'contacts'
        };
    }
}

export default ContactsPage;