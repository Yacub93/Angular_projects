export class Video {
   // YT video properties...
   id:number;
   title:string;
   video_code:string;
   desc:string;

	constructor(id:number,title:string,video_code:string,desc:string){
		this.id = id;
		this.title = title;
		this.video_code = video_code;
		this.desc = desc;
	}
}