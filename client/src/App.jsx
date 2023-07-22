import React from 'react';

import Router from '@screens';
import { DogProxy } from '@proxies';

window.DogProxy = DogProxy;

export default function App() {
    return <Router />;
}
