import { App } from 'vue';
import Demo from './src/index.vue';
import '../../css/demo.styl';

const DemoPlugin = {
    install: (app: App) => {
        app.component('MyDemo', Demo);
    }
}


export default DemoPlugin;
