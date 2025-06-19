import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Welcome to the Contact Book App</h1>
      <p className={css.text}>
        This is a simple application where you can register, log in, and manage your personal list of contacts. ✨
      </p>
    </section>
  );
};

export default HomePage;
