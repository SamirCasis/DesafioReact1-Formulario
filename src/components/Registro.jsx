import Alerta from './Alerta';
import Formulario from './Formulario';
import SocialButton from './SocialButton';

const Registro = ({ error, setError }) => {

  return (
    <main className="registro">
      <h1>Crea una cuenta</h1>
      <section className="botones mt-3">
        <SocialButton facebook={'facebookF'} />
        <SocialButton github={'github'} />
        <SocialButton linkedin={'linkedin'} />
      </section>
      <p className="mt-3">O usa tu email para registrarte</p>
      <Formulario setError={setError} />
      <article className="mt-3">
        <Alerta error={error} />
      </article>
    </main>
  );
};

export default Registro;

