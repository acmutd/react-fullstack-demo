import React from 'react';

// string, number, object, null, undefined, Arrays
// custom types

type Props = {
    text?: string,
    color?: string
}

const defaultProps: Props = {
    text: 'default text',
    color: 'white'
}

const fn = (color: string = "white") => {
    console.log(color);
}

const Header = (props: Props = defaultProps) => {

    //react hook
    // useState

    // has no parameters but will style compile because of default parameters
    fn();

    // overrides white default parameters
    fn('red');

    return (<div style={{ backgroundColor: (props.color === undefined) ? defaultProps.color : props.color }}>
        {(props.text === undefined) ? defaultProps.text : props.text}
    </div>)
}

export default Header;