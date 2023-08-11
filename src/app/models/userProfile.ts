export class UserProfile{
    id : number;
    user_id:number;
    username: string;
    name: string;
    alamat: string;
    tempatLahir: string;
    tanggalLahir: "dd-MM-yyyy";
    pendidikanTerakhir: string;
    pekerjaan: string;
    penghasilan: number;
    noHp: string;
    role: string;
    email: string;
    bio: string;
    avatar_id: string;

    constructor(){
        this.id= 0;
        this.user_id=0;
        this.username="";
        this.name="";
        this.alamat="";
        this.tanggalLahir="dd-MM-yyyy";
        this.tempatLahir="";
        this.pendidikanTerakhir="";
        this.pekerjaan="";
        this.penghasilan=0;
        this.noHp="";
        this.role="";
        this.email="";
        this.bio="Tuliskan Tentang Mu";
        this.avatar_id="";
    }
}