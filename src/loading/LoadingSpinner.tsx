import Overlay from '../generic/Overlay';

import loadingSvg from '../assets/loading.svg?url';
import type { JSX } from 'solid-js';

export interface Props {
    visible: boolean;
    children?: JSX.Element;
}

export default function (props: Props) {
    return (
        <Overlay visible={props.visible}>
            <div class="flex flex-col items-center">
                <img src={loadingSvg} class="w-8 animate-spin" />
                {props.children}
            </div>
        </Overlay>
    );
}
