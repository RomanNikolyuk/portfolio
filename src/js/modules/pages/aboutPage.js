import Page from "./page";
import me from '../../../assets/images/me_edited.jpeg';
import "../../../assets/css/smoky-about.css";


class AboutPage extends Page {
    componentDidMount() {
        const moreButton = document.querySelector('.more-button');
        const moreText = document.querySelector('.more-text');

        moreButton.addEventListener('click', (event) => {
            event.preventDefault();
            const isHidden = moreText.classList.contains('hide');

            if (isHidden) {
                moreText.classList.remove('hide');
                moreButton.setAttribute('style', 'animation: smoky 3s 2s both;');
                moreButton.innerHTML = '<span class="more-button-span">h</span><span class="more-button-span">i</span><span class="more-button-span">d</span><span class="more-button-span">e</span>';
                setTimeout(() => {
                    moreButton.remove();
                }, 5500);
            } else {
                moreText.classList.add('hide');
                moreButton.textContent = 'more';
            }

        });

        this.animate();


    }

    animate() {
        let $passage = document.querySelector('.more-text');

        //get the inner HTML of the #weirdtext paragraph
        let rawtxt = $passage.innerHTML;

        //Get the length of the string for use in loop
        let len = rawtxt.length;

        //empty string used to store final text that includes spans
        let newtext = '';


        //For each character inside #weirdtext string (this is why we got length)
        for(let i = 0; i < len; i ++){

            //get a random num between 1 and 5
            let rng = Math.floor(Math.random() * 5) + 1;

            //get the i-th character from the string
            let currentchar = rawtxt.charAt(i);

            let newchar = null;
            if (currentchar === ' '){
                //if it's a space, add an empty .space span
                newchar = '<span class="space"></span>';
            }
            else if (currentchar === '<') {
                newchar = '<br>';
                i += 3;
            }
            else {
                //otherwise, wrap it with a span, and give it class effectN, where N is a random int as before
                newchar = '<span class="effect' + rng + '">' + currentchar + '</span>';
            }
            //add this new "char" (actually it's a char with spans wrapping it) to the empty string
            newtext = newtext + newchar;
        }

        //replace #weirdtext paragraphs inner HTML with the newly created string
        $passage.innerHTML = newtext;
    }

    render() {
        return (
            `    
    <div class="about-container">
    <div class="row justify-content-center about-header">
                  <div class="col-md-6">
                      <h1 class="page-title">About</h1>
                      <h3 class="page-subtitle d-flex justify-content-center"><hr class="line" style="margin: 20px"> See some info about me <hr class="line" style="margin: 20px;"> </h3>
                  </div>
              </div>
           
              <div class="row about-body justify-content-between">
                    <div class="col-md-8">
                        <img src="${me}" alt="Roman Nikolyuk Photo" class="about-image">
                    </div>
                    <div class="col-md-4">
                         <h1 class="title-strong">Roman Nikolyuk</h1> 
                         <h3 class="description-light">Full-Stack Developer</h3>
                         <span class="more-button">more</span>
                    </div>
                </div>
                
              <div class="row more justify-content-center m-md-4">
                    <div class="col-md-5 more-text-container">
                        <p class="more-text hide">
I'm Full Stack developer with experience in <br>Laravel,  React and Wordpress.  I work with <br>each client individually, fully fulfilling his <br>technical task. <br><br>I'm looking for interesting <br>projects which will improve my programming <br>skills and will make money for the client.
                        </p>
                    </div>
              </div> 
</div>
              
            `
        );
    }

    pageInfo() {
        return {
            title: 'About Me',
            url: '/about'
        }
    }
}

export default AboutPage;