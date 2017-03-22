import {Component, Directive} from 'angular2/core';
import {Config} from "./config.service";
import {Video} from "./video";
import {VideoPlayerComponent} from "./videoplayer.component";
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent, VideoPlayerComponent]
})
//Data Binding create variable then 2 curly Braces
export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
	videos:Array<Video>; //list of videos
	video: Video;

	constructor(){
		this.videos = [
			new Video(1, "The Dark Knight", "EXeTwQWrcwY", "The Dark Knight (2008) Christopher Nolan"),
			new Video(2, "The Avengers", "NPoHPNeU9fc", "Marvel's Avengers Assemble (2012) Joss Whedon"),
			new Video(3, "Avatar", "5PSNL1qE6VY", "Avatar (2009) James Cameron"),
		];
		this.video = this.videos[0];	

	}

	    onVideoSelected(video: Video) {
        this.video = video;
        console.log(this.video["videoCode"]);
        console.log(JSON.stringify(video));//selected video JSON format
    }
}
