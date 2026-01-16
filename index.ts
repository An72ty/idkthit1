// Task 1.1
let age: number;
let Name: string;
let isStudent: boolean;
let hobbies: string[];
let addres: {
    city: string,
    country: string
}

// Task 1.2
function multiply(x: number, y: number): number {
    return x*y;
}

// Task 1.3
let data: any;
data = 5;
data = "hello";
data.toUpperCase();

let unsureData: unknown;
unsureData = 5;
unsureData = "hello";
// unsureData.toUpperCase(); - Ошибка
let stringVar: string = unsureData as string;
stringVar.toUpperCase();

// Task 2.1
const formatId: Function = (x: number | string) => `ID: ${x}`;

// Task 2.2
type User = {
    id: number | string,
    name: string,
    email?: string
}

let currentUser: User = {
    id: 123,
    name: "Some Name",
    email: "example@mail.com"
}

// Task 2.3
interface IBook {
    readonly title: string,
    author: string,
    year?: number
}

type textType = "pdf" | "epub"

interface IDigitalBook extends IBook {
    format: textType
}

let someDigitalBook: IDigitalBook = {
    title: "Some book",
    author: "Some author",
    year: 2026,
    format: "pdf"
}

// Task 2.4
type Coordinates = {
    x: number,
    y: number,
}

interface ICoordinates {
    x: number,
    y: number
}

type ThirdDimCoordinates = Coordinates & {z: number}

interface IThirdDimCoordinates extends Coordinates {
    z: number
}

// Task 3.1
// function printLength(x: string | string[]): number {
//     if (typeof x === "string") {
//         return x.length;
//     } else if (Array.isArray(x)) {
//         return x.length;
//     }

//     return x.length;
// } ! Не сделано