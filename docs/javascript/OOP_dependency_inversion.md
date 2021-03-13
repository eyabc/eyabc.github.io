---
title: Dependency Inversion 제어의 역전
---
```javascript
const Worker = class {
  run() {
    console.log('working');
  }

  print() {
    this.run();
  }
};

const HardWorker = class extends Worker {
  run() {
    console.log('hardWorking');
  }
};
```

```javascript
const Manager = class {
  #workers;

  constructor(...workers) {
    /*
      HardWorker 에 의존하지 않고 더 추상적인 Worker 에 의존하고 있다.
      따라서 여러 Worker 들을 더 확장해도 Manager 의 생성자는 잘 동작하게 된다. 
      Worker 의 하위 타입들은 Worker 로 업캐스팅 되기 때문에 가능하다. 
      * 어떠한 경우에도 다운캐스팅은 금지 → Polymorphism (추상인터페이스) 사용
    */
    if (workers.every(w => w instanceof Worker)) 
      this.#workers = workers; else throw 'invalid workers';
  }

  doWork() {
    this.#workers.forEach(w => w.run());
  }
};
const manager = new Manager(new Worker(), new HardWorker());
manager.doWork();
```

