import React from 'react';
import { MetNest, Met, MetCenter, MetBox, MetProps } from '@hulu/met';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox/Checkbox';

const Layout1: React.FC<MetProps> = (props) => {
    return (
        <Met p={16} bg={'lightblue'} {...props}>
            <div>Layout1</div>
            {props.children}
        </Met>
    );
};

const Layout2: React.FC<MetProps> = (props) => {
    return (
        <Met p={16} bg={'lightcyan'} {...props}>
            <div>Layout2</div>
            {props.children}
        </Met>
    );
};

const Layout3: React.FC<MetProps> = (props) => {
    return (
        <Met p={16} bg={'lightpink'} {...props}>
            <div>Layout3</div>
            {props.children}
        </Met>
    );
};

const Layout4: React.FC<MetProps> = (props) => {
    return (
        <Met p={16} bg={'lightpink'} {...props}>
            <div>Layout4</div>
            {props.children}
        </Met>
    );
};

export default () => {
    const [show, setShow] = React.useState({
        Layout1: true,
        Layout2: false,
        Layout3: true,
        Layout4: true
    });

    const onChange = (layout: string) => {
        return (e: CheckboxChangeEvent) => {
            setShow({ ...show, [layout]: e.target.checked });
        };
    };

    return (
        <MetBox gap={8}>
            <MetCenter placement="left">
                <Checkbox checked={show.Layout1} onChange={onChange('Layout1')}>
                    Layout1
                </Checkbox>
                <Checkbox checked={show.Layout2} onChange={onChange('Layout2')}>
                    Layout2
                </Checkbox>
                <Checkbox checked={show.Layout3} onChange={onChange('Layout3')}>
                    Layout3
                </Checkbox>
                <Checkbox checked={show.Layout4} onChange={onChange('Layout4')}>
                    Layout4
                </Checkbox>
            </MetCenter>

            <MetNest
                bd={'green'}
                br={8}
                components={[
                    show.Layout1 && Layout1,
                    show.Layout2 && Layout2,
                    show.Layout3 && <Layout3 bg={'lightskyblue'} />,
                    show.Layout4 && Layout4
                ]}
            >
                <MetCenter bg={'lightgreen'} p={32}>
                    main content
                </MetCenter>
            </MetNest>

            <MetNest
                bd={'green'}
                br={8}
                components={[
                    show.Layout2 && Layout2,
                    show.Layout4 && Layout4,
                    show.Layout3 && <Layout3 bg={'lightskyblue'} />,
                    show.Layout1 && Layout1
                ]}
            >
                <MetCenter bg={'lightgreen'} p={32}>
                    main content
                </MetCenter>
            </MetNest>
        </MetBox>
    );
};
