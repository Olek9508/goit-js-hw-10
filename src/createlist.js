// import refs from './index';
import Notiflix from 'notiflix';
import { render, createMarkup } from './render';

function createList(list) {
  if (list.length > 10) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (list.length > 1 && list.length <= 10) {
    return createMarkup(list);
  } else {
    render(list);
  }
}

export { createList };
