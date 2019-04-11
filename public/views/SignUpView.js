import BaseView from './BaseView.js';
import Bus from '../scripts/EventBus.js';

const templateFunc = window.fest['components/SignUp/SignUp.tmpl'];

export default class SignUpView extends BaseView {
    constructor(el) {
        super(el);
    }

    show() {
        super.show();
    }

    render() {
        this.el.innerHTML = '';
        this.el.innerHTML = templateFunc();

        const form = this.el.getElementsByTagName('form')[0];

        form.addEventListener('submit', (event) => {
            // const err = this.el.getElementsByTagName('span')[0];
            // err.innerText = '';
            event.preventDefault();
            Bus.emit('sign-up', form);
        });
    }
}