import { HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./PerfilIcon.module.css";
import perfilIconPath from "assets/imagens/perfil.png";

type Props = HTMLAttributes<HTMLDivElement>

function PerfilIcon({ className, ...rest }: Props) {
    return (
        <img
            className={classNames(styles.icon, className)}
            src={perfilIconPath}
            alt=""
            {...rest} />
    );
}
export default PerfilIcon;