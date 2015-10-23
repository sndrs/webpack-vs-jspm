import styles from './styles.scss';

export default () => {
    console.log('drawing a red box');
    var box = document.createElement('div');
    box.className = 'box';
    document.body.appendChild(box);
}