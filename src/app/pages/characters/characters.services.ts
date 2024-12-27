import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: "root"
})

export class CharactersService {
    async getCharacters() {
        const response = await fetch("https://thronesapi.com/api/v2/Characters");
        const data = await response.json();
        console.log(data);
        return data;
    }
}