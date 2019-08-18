import LocalistComponent from './_localistComponent';
import { standardInner, standardWrapper } from '../templates/standard';

export default class Archive extends LocalistComponent {
    constructor(props) {
        props.innerTemplate = standardInner;
        props.outerTemplate = standardWrapper;
        super(props);
    }
}
