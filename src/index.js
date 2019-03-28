//force webpack to copy index.html
require('file-loader?name=[name].[ext]!./index.html');

import _ from 'lodash';
import './style.css';
//import Icon from './icon.png';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // var myIcon = new Image();
    // myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());