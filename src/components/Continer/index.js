
import classes from './style.module.css';


const Continer = ({ children }) => {
    return (
        <div className={classes.continer}>
            {children}
        </div>
    );
};

export { Continer };