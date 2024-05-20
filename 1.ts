class Z {
    
}

class U extends Z {

}

class V extends Z {

}

class CZ extends Z { 
    a: U;

    b: V;

    c: number;

    constructor(a: U, b: V) {
        super();
        this.a = a;
        this.b = b; 
        this.c = 1;
    }
}

let c = new CZ(new U(), new V());


console.log( o["a" as keyof oo] );