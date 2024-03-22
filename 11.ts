class Invoice {
    client: string;
    details: string;
    amount: number;
    constructor(client:string, details:string, amount:number) {
        console.log(
            `Don't Misunderstand this is not the power of your creration`
        )
        this.client = client;
        this.details = details;
        this.amount = amount
    }

    about(): string { 
        return `${this.client} is ${this.details} with networth ${this.amount} Trillions`
    }
}

const invoice = new Invoice("Mukund", "A pro developer", 10)
console.log(invoice)
console.log(invoice.about())