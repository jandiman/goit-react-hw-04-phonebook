import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={this.setFilter} />
        <ContactList
          filterContact={this.filterContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
