import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider,} from '@ui-kitten/components';
import Login from "./Screens/Login";

export default () => (
    <ApplicationProvider {...eva} theme={eva.light}>
        <Login/>
    </ApplicationProvider>
);
