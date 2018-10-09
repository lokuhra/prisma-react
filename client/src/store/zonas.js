import { observable, action } from "mobx";
import papa from "papaparse";
import { init, uniq } from "rambdax";

export default class Zonas {
  @observable
  asddata =""

  @action
  toObj(csv) {
    let file = csv.target.files[0];
    papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: results => this.asddata=uniq(init(results.data))[0]
    });
  }

  @action
  console(){
    console.log(this.asddata)
  }
}
