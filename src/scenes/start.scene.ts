import { IBotContext } from "src/context/context.interface";
import {  Scenes } from "telegraf";
const { enter, leave } = Scenes.Stage;

export const startScene = new Scenes.BaseScene<IBotContext>('start-scene');

startScene.enter(ctx =>{
    ctx.reply('Hi');
    ctx.session.languageCode = 'eng';
} );
startScene.leave(ctx => ctx.reply('Bye'));
startScene.hears('hi', enter<IBotContext>('greeter'));
startScene.on('message', ctx => ctx.scene.leave());