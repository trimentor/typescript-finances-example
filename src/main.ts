import Invoice from './classes/Invoice';
import Payment from './classes/Payment';
import HasFormatter from './interfaces/HasFormatter';
import ListItem from './templates/ListItem';

const main = document.querySelector('main')!;
const form = document.querySelector('form')!;

const list = document.createElement('ol');
main.append(list);
const listItem = new ListItem(list);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  listItem.render(doc, type.value, 'end');
});
