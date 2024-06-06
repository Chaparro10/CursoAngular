

export class Usuario{
    constructor(

       public _id: String,
		public nombre:String,
		public email:String,
        public google?: Boolean,
	    public password?:String ,
		public img?:String ,
		public role?:String
		

    ){

    }
}