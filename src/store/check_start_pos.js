import { observer } from "mobx-react-lite"

class CheckStartPos {
    isStartPos = true;

    constructor() {
        makeAutoObservable(this);
    }


}

export default new CheckStartPos();