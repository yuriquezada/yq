import React from 'react';
import styled from 'styled-components'

import {Home} from '@styled-icons/heroicons-outline/Home'

const StyledMenuItem = styled.li`
    &:after {
        content: 'jkfoi'
    }
`

const RedHome = styled(Home)`
    color: red;
    width: 20px; height: 20px;
`

const MenuItem = ({name}) => {
    return (
        <StyledMenuItem>            
            {name}<RedHome />
        </StyledMenuItem>
    );
  };

  export default MenuItem;