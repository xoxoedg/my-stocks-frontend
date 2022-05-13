export class SelectedAktie {

    name = ""

    constructor(name) {
        this.name = name
    }

}

export class AuswahlBestaetigenRequestDto {

    selectedAktien = []

    constructor(selectedAktien) {
        this.selectedAktien = selectedAktien
    }

}