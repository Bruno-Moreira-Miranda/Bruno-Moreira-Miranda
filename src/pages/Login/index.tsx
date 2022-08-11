import { Link } from "react-router-dom";
import classNames from "classnames";

import Logo from "components/UI/Logo";
import { TextInput } from "components/UI/Inputs";
import Button from "components/UI/Buttons";

import styles from "./Login.module.css";

function Login() {
    return (
        <main className={classNames(styles.login, "container-main", "padding-v-main")}>
            <Logo className={styles.logo} type="azul" />

            <h1 className={classNames(styles.titulo, "texto-primario", "texto-center")}>
                Já tem conta? Faça seu login:
            </h1>

            <form className={styles.formulario}>
                <TextInput
                    id="login-email"
                    type="email"
                    labelText="Email"
                    placeholder="Insira seu email"
                />

                <TextInput
                    id="login-senha"
                    type="password"
                    labelText="Senha"
                    placeholder="Insira sua senha"
                />

                <Link className={styles.recuperarSenha} to={""} title="Recuperar senha">
                    Esqueci minha senha
                </Link>

                <Button type="button">
                    Entrar
                </Button>
            </form>
        </main>
    );
}
export default Login;