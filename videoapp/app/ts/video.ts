export class Video {
   // YT video properties...
   id:number;
   title:string;
   videoCode:string;
   desc:string;

	constructor(id:number, title:string, videoCode:string, desc:string){
		this.id = id;
		this.title = title;
		this.videoCode = videoCode.trim();
		this.desc = desc;
	}
}