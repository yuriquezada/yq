import React from 'react';
import styled from 'styled-components';
import {Home} from '@styled-icons/heroicons-outline/Home';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {Mail} from '@styled-icons/ionicons-outline/Mail';

const StyledMenuItem = styled.li`
    &:after {
        content: 'jkfoi'
    }
`
// const HomeIcon = styled(Home)`
// color: red;
// width: 20px; height: 20px;
// `
// const MenuIconStyles = css`
//     color: red;
//     width: 20px; height: 20px;
// `;

// const NOTIFICATION_STATES = {
//     home: <Home />,
//     about: <EmailOutline />,
//     skills: <Mail />,
// };

const icons = [
    Home,
    EmailOutline,
    Mail,
    Mail,
    Mail
];
// const icons = ({name}) => {
//     const misiconos =  [
//         Home,
//         EmailOutline,
//         Mail
//     ]

//     // const singleValue = misiconos.find(iconito => iconito.id === name).component
//     // console.log(singleValue, 'TEEEEEEEEE')
//     // return (
//     //     // misiconos.find(iconito => iconito.id === name).component
//     //     // singleValue
//     //     // misiconos.filter(iconito => (iconito.name === name)).component
//     //     // words.filter(word => word.length > 6);
//     // );
// }
// const RedHome = styled(Icon)`
//     color: red;
//     width: 20px; height: 20px;
// `
const MenuItem = ({name}) => {
    const i = name;
    const idx = parseInt(i, 10)+0;
    // const numerito = idx;
    const Icon = icons[idx];
    console.log(Icon, 'aaaaaaa aah', name, idx, typeof(idx), typeof(name), typeof(i));
    return (
        <StyledMenuItem>            
            {name}
            {/* {NOTIFICATION_STATES[name]} */}
            <Icon />     
        </StyledMenuItem>
    );
    // idx++
  };

  export default MenuItem;