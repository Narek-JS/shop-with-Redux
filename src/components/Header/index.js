import { Link } from "react-router-dom";
import { Continer } from "..";
import { WORDS } from "../../consts/words";
import classes from './style.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <Continer>
                <div className={classes.wrapperHeaderContent}>
                    <Link to={WORDS.PATHS.HOME}> 
                        <h1 className={classes.title}>{WORDS.TITLE}</h1> 
                    </Link>
                </div>  
            </Continer>
        </header>
    );
};

export { Header };