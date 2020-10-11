import HasFormatter from "interfaces/HasFormatter";

export default class ListItem {
  constructor(private container: HTMLUListElement) { }

  render(item: HasFormatter, title: string, position: 'start' | 'end') {
    const listItem = document.createElement('li');

    const heading = document.createElement('h2');
    heading.textContent = title;
    listItem.append(heading)

    const details = document.createElement('details');
    details.textContent = item.format();
    listItem.append(details);

    if (position === 'start') {
      this.container.prepend(listItem);
    } else {
      this.container.append(listItem)
    }
  }
}
