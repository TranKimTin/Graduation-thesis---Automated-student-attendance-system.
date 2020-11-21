import React from 'react';
import {Loader, Image, Segment, Dimmer} from 'semantic-ui-react';

const LoaderActive = () => (
    <Segment style={{zIndex: 0}}>
        <Dimmer active inverted>
            <Loader indeterminate>Preparing data...</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png'/>
    </Segment>
);

export default LoaderActive;