import BaseView from './BaseView.js';
import Bus from '../scripts/EventBus.js';

const templateFunc = window.fest['components/Lost/Lost.tmpl'];

export default class LostView extends BaseView {
  constructor(el) {
    super(el);
    this.score = null;
    this.user = null;
    this.el.classList.add('lost-section');
  }

  show() {
    Bus.emit('get-user', this);
    super.show();
  }

  setUser(user) {
    this.user = user;
    super.show();
  }

  render() {
    this.el.innerHTML = '';

    this._renderLost();
  }

  _renderLost() {
    this.el.innerHTML = templateFunc(this.user);

    const home = this.el.getElementsByClassName('js-header__home-button')[0];
    if (home !== undefined) {
      home.addEventListener('click', (event) => {
        event.preventDefault();
        Bus.emit('open-menu');
      });
    }
  }
}
