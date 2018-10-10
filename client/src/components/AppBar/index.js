import React, { Component } from 'react'

import { observer, inject } from 'mobx-react'

import {
    SimpleTopAppBar
} from 'rmwc'

import TopAppBar from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

@inject('drawerStore')
@observer
class AppBar extends Component {
    render() {
        const { drawerStore } = this.props;
        return (
            <TopAppBar
                title='Miami, FL'
                navigationIcon={<MaterialIcon
                    icon='menu'
                    onClick={() => drawerStore.toggle() }
                />}
                actionItems={[<MaterialIcon key='item' icon='bookmark' />]}
            />
        )
    }
}
export default AppBar