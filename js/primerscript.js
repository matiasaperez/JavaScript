class Camas{
   
	constructor(pedido){
		this.tipo = pedido.tipo;
		this.tamanio = pedido.tamanio
		this.respaldo = pedido.respaldo
	}


	entregarCama(){

        if(this.tipo.toUpperCase() === "CAMA BASE"){
			
			this.tipo= "cama base"

		}else{
			
			this.tipo= "cama sommier"
		}

		if(this.tamanio.toUpperCase() == "UNA PLAZA"){
			
			this.tamanio= "una plaza"

		}else{
			
			this.tamanio= "dos plazas"
		}


		if(this.respaldo != "sin"){
			
			return "Usted pidió " + this.tipo + " de " + this.tamanio + " con respaldo" 
		
		}else{

			return "Usted pidió " + this.tipo + " de " + this.tamanio + " sin respaldo" 

		}
		
	}

	
}

let cama = new Camas({tipo:"",tamanio:"",respaldo:""})
cama["tipo"] = prompt("¿Qué tipo de cama queres?")
cama["tamanio"] = prompt("¿Qué tamaño de cama queres?")
cama.respaldo = prompt("¿Lo querés con o sin respaldo?")


console.log(cama.entregarCama())
