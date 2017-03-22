import {Component} from 'angular2/core';
import {Config} from './config.service'; //new file imports use ./[filename]
import {Video} from  './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent] //to create custom html tag <playlist>
})
//Data Binding create variable then 2 curly Braces
export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
	videos:Array<Video>; //list of videos

	constructor(){
		this.videos = [
			new Video(1, "Interstellar", "zSWdZVtXT7E", "Interstellar - Official Warner Bros. UK"),
			new Video(2, "The Avengers", "NPoHPNeU9fc", "Marvel's Avengers Assemble")
		]
	}
}
