import { App } from 'vue';
import Card from './src/index.vue';
import '../../css/card.styl';

const CardPlugin = {
    install: (app: App) => {
        app.component('MyCard', Card);
    }
}


export default CardPlugin;
