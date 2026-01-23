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
function printLength(x: string | string[]): void {
    if (typeof x === "string") {
        console.log(x.length);
    } else if (Array.isArray(x)) {
        console.log(x.length);
    }
} 

// Task 3.2
let pageNumber: unknown = "123";
console.log(pageNumber as number + 1); // Значение воспринимается как число, но переменная все еще остается строкой
console.log(Number(pageNumber) + 1); // Здесь происходит прямое приведение к типу, из числа в строку

// Task 3.3
interface Car {
    engine: string,
    wheels: number
}

function isCar(obj: any): boolean {
    if ("engine" in obj && "wheels" in obj) {
        return true;
    } else return false;
}

// Task 4.1
function getFirstElement<T>(x: T[]): T {
    return x[0];
}

console.log(getFirstElement(["asdfasd", "asdf", "sadfasdf", "sdaf"]));
console.log(getFirstElement([1, 2, 3, 4, 5, 6]));

// Task 4.2
type HasLength = {
    length: number
}

function logLength<T extends HasLength>(obj: T): number {
    return obj.length;
}

// Task 4.3
interface ApiResponse<T> {
    data: T,
    success: boolean,
    message?: string
}

let userInfoResponse: ApiResponse<User> = {
    data: {
        id: 123456,
        name: "user123",
        email: "example@mail.com"
    },
    success: true,
    message: "200"
}

// Task 5.1
type BaseUser = {
    email: string,
    password: string
}

type UserProfile = {
    firstName: string,
    lastName: string,
    age: number
}

type DraftUserProfile = Partial<UserProfile>;
type ServerSendUser = Required<UserProfile & BaseUser>
type SiteUserProfile = Pick<UserProfile, "firstName"> & Omit<BaseUser, "password">

// Task 5.2
interface Product<T extends string | number> {
    id: T,  
    name: string,
    price: number
}

type CartItem<T extends string | number> = Product<T> & { quantity: number }

function calculateTotal<T extends string | number>(items: CartItem<T>[]): number {
    let totalSum = 0;
    items.forEach(x => totalSum += x.quantity * x.price);
    return totalSum;
}

// Task 5.3
function validateInput(value: unknown): value is string {
    if (typeof value === "string" && value.trim()) {
        return true;
    }
    return false;
}

let testString: string = "  test string   ";
let testString2: string = "  ";
let notString: number = 123;

if (validateInput(testString)) console.log(testString.toUpperCase());
if (validateInput(testString2)) console.log(testString2.toUpperCase());
if (validateInput(notString)) console.log("123".toUpperCase());