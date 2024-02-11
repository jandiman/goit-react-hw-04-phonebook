import { FaTrash } from 'react-icons/fa';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class ContactListItem extends Component {
  handleDelete = () => {
    const { filteredContact, deleteContact } = this.props;
    deleteContact(filteredContact.id);
  };

  render() {
    const { filteredContact } = this.props;
    return (
      <li className={css.contactListItem}>
        <p>{filteredContact.name}:</p>
        <p>{filteredContact.number}</p>
        <button onClick={this.handleDelete}>
          <FaTrash />
        </button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
