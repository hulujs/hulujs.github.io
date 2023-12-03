import { RecoilURLSync } from '~ck';
import Layout from '/Users/Mizi/works/hulu/demo29/hulu/.caokong/src/layout.tsx';

const Component = function WrapperLayout() {
    return (<RecoilURLSync>
        <Layout />
    </RecoilURLSync>)
}

export { Component };