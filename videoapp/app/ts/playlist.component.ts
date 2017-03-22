import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
	selector: 'playlist',
	templateUrl:'app/ts/playlist.component.html', //pass html URL to work with
	inputs: ['vids'] //Input data (vids) coming in playlist component
})

export class PlaylistComponent {

	onSelect(vid:Video){
		console.log(JSON.stringify(vid));
	}
}