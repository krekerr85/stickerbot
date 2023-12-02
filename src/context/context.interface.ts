import { Context, Scenes } from 'telegraf';

interface MySession extends Scenes.SceneSession<MySceneSession> {
	// will be available under `ctx.session.mySessionProp`
	languageCode: string;
	isAdmin: boolean;
	subscription: boolean;
}

interface MySceneSession extends Scenes.SceneSessionData {
	languageCode: string;
	isAdmin: boolean;
	subscription: boolean;
}

export interface IBotContext extends Context {
	session: MySession;
	scene: Scenes.SceneContextScene<IBotContext, MySceneSession>;
	i18: {
		t: (key: string, params?: Record<string, string>) => string;
		setLocale: (locale: string) => void;
	};
}
