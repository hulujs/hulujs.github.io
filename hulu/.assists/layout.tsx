import { RecoilURLSync } from '~ck';
import Layout from '/Users/Mizi/works/hulu/hulujs.github.io/hulu/.caokong/src/layout.tsx';

const Component = function WrapperLayout() {
    return (<RecoilURLSync>
        <Layout />
    </RecoilURLSync>)
}

export { Component };