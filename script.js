var names=new Array();
names[0]="Yaakov";
names[1]="Steven";
names[2]="Jakie";
names[3]="Maria";
names[4]="Alvaro";
names[5]="Daniel";
names[6]="Charlie";
names[7]="Oliver";
names[8]="James";
names[9]="Emma";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}