import * as React from 'react';

export interface AppetizeProps {
    publicKey: string
    device?: 'iphone8' | 'nexus5' | 'nexus7' | 'nexus9' | 'pixel14' | 'pixel14xl' | 'galaxytabs7'
    scrolling?: "yes" | "no"
    color?: "white" | "black"
    autoplay?: boolean
}

const Appetize: React.FC<AppetizeProps> = ({ publicKey, device, scrolling, color, autoplay }) => {
    return (
        <iframe
            src={`https://appetize.io/embed/${publicKey}?device=${device}&deviceColor=${color}&autoplay=${autoplay}`}
            width="378px" height="800px" frameBorder="0" scrolling={scrolling}></iframe>
    );
}

Appetize.defaultProps = {
    device: 'pixel14',
    scrolling: 'no',
    color: 'black',
    autoplay: false
}

export default Appetize;