import React from 'react';
import styled from 'styled-components'

import {Home} from '@styled-icons/heroicons-outline/Home';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {Mail} from '@styled-icons/ionicons-outline/Mail';

const StyledMenuItem = styled.li`
    &:after {
        content: 'jkfoi'
    }
`
// const IconHome = styled(Home)`
// color: red;
// width: 20px; height: 20px;
// `

const NOTIFICATION_STATES = {
    home: <Home />,
    about: <EmailOutline />,
    skills: <Mail />,
  };


console.log('esto es', Home.displayName, EmailOutline.displayName, 'este es menu');

// const RedHome = styled(Home)`
//     color: red;
//     width: 20px; height: 20px;
// `

const MenuItem = ({name}) => {
    return (
        <StyledMenuItem>            
            {name.toUpperCase()}
            {NOTIFICATION_STATES[name]}
        </StyledMenuItem>
    );
  };

  export default MenuItem;