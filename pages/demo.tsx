import * as React from 'react';
import styled from 'styled-components';
import Appetize from '../components/Appetize';
import Heading from '../components/Heading';
import LayoutContainer from '../components/Layout';

const PUBLIC_KEY = `${process.env.NEXT_PUBLIC_APPETIZE_KEY}`;

const AppetizeContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Demo: React.FC = () => {
    return (
        <LayoutContainer>
            <Heading
                title="Demo"
                message="Try zTuber before installing it" />

            <AppetizeContainer>
                <Appetize publicKey={PUBLIC_KEY} />
            </AppetizeContainer>

        </LayoutContainer>
    );
}

export default Demo;