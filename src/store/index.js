import { observable, computed, action, configure } from "mobx";

// 不允许在动作之外进行状态修改, 异步操作回调中不允许修改store
configure({ enforceActions: "observed"}) 

class Store {
  @observable price = 11110;
  @observable amount = 11;

  @computed get total() {
      return this.price * this.amount;
  }

  @action.bound 
  increment() {
    this.price++
  }

  @action.bound
  fetchPrice() { 
    setTimeout(() => {
      this.increment()
    }, 0)
  }
  
}

export default new Store()