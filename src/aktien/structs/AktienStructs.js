export class SelectedAktie {

    lookup_id = null
    name = ""

    constructor(lookup_id, name) {
        this.lookup_id = lookup_id
        this.name = name
    }

}

export class AuswahlBestaetigenRequestDto {

    selectedAktien = []

    constructor(selectedAktien) {
        this.selectedAktien = selectedAktien
    }

}