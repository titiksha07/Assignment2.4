interface RegularStudent
{
    name:string;
    roll:number;
}
interface VocationalStudent
{
    name:string;
    id:number;
}
class StudentDetails<T>{
    details:T[];
    constructor(){
        this.details=[];
}
}
let regular: RegularStudent={name:"Titi",roll:20};
let vocational: VocationalStudent={name:"John",id:200};
let regData=new StudentDetails<RegularStudent>();
let vocData=new StudentDetails<VocationalStudent>();
regData.details.push(regular);
vocData.details.push(vocational);
console.log(regData.details);
console.log(vocData.details);