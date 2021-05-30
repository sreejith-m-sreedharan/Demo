export class MyElement{
    public name: String;
    public type : String;
    public value : String;
    public disable : boolean;
    public rows : number;
    public cols : number;
    public title : String;
    constructor(name:String, type: String, value: String, disable: boolean = false, rows: number = 3, cols: number = 20,title: String = ''){
        this.name = name;
        this.type = type;
        this.value = value;
        this.disable = disable;
        this.rows = rows;
        this.cols = cols;
        this.title = title;
    }
}