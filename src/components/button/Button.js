import './Button.scss';
import '../../Variables.css';

const Button = (props) => {

    const { padding, background, color, children } = props;

    return (
        <button style={{ padding: padding, backgroundColor: `var(--${background})`, color: `var(--${color})` }} className="button">{children}</button>
    );
}

export default Button;