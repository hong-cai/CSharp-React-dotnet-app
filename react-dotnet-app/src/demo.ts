export interface Duck{
	name:string;
	numLegs:number;
	makeSound:(sound:any)=>void;
}

const duck1:Duck={
	name:"jack",
	numLegs:2,
	makeSound:(sound:any)=>console.log(sound)
}
const duck2:Duck={
	name:"May",
	numLegs:2,
	makeSound:(sound:any)=>alert(sound)
}

// duck2.makeSound("mio~~~~")
export const ducks=[duck1, duck2]