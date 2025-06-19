import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { toast } from 'react-hot-toast';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        toast.success(`${name} added successfully!`);
        form.reset();
      })
      .catch(() => {
        toast.error('Failed to add contact');
      });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input type="text" name="name" className={css.input} required />
      </label>
      <label className={css.label}>
        Number
        <input type="tel" name="number" className={css.input} required />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
