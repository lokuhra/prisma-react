import { observable, action } from 'mobx'

export default class Drawer {
  @observable
  isOpen = false

  @observable
  name = 'jose'

  @action
  toggle() {
    this.isOpen = !this.isOpen
  }
}
