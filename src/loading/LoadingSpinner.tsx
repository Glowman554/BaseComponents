import Overlay from '../generic/Overlay';
import './LoadingSpinner.css';

import loadingSvg from "../assets/loading.svg?url"

export interface Props {
    visible: boolean;
}

export default function (props: Props) {
    return (
        <Overlay visible={props.visible}>
            <div class="center">
                <img src={loadingSvg} class="spinner" style={{ width: '2rem' }} />
            </div>
        </Overlay>
    );
}
