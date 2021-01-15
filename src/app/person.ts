export class Person {
    private _age: number;
    private _sex: string;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(age: number) {
        if (age <= 0 || age >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = age;
    }
    public get sex() {
        return this._sex;
    }

    public set sex(sex: string) {
        if (!sex) {
          throw new Error('Invalid sex.');
        }
        this._sex = sex;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(firstName: string) {
        if (!firstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = firstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(lastName: string) {
        if (!lastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = lastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
