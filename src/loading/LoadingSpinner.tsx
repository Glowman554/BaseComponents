import Overlay from '../generic/Overlay';

import loadingSvg from '../assets/loading.svg?url';

export interface Props {
    visible: boolean;
}

export default function (props: Props) {
    return (
        <Overlay visible={props.visible}>
            <div class="center">
                <img src={loadingSvg} class="w-8 animate-spin" />
            </div>
        </Overlay>
    );
}
