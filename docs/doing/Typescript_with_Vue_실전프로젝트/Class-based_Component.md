# Class Based Component

## @Component
* JS
```javascript
Vue.component('App', {

});
```
* TS
```typescript
@Component
export default class App extends Vue {}
```

## @Prop
* JS
```javascript
Vue.component('child', {
  props: ['message'],
})
```

* TS
````typescript
@Component
export default class PropExample extends Vue {
  @Prop() message: string;
}
````

## @Watch : method decorator
* JS
```javascript
const watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: '질문을 하기 전까지는 대답할 수 없습니다.',
  },
  watch: {
    question: function(newQuestion) {
      this.answer = '입력을 기다리는 중...';
    }
  }
})
```
* TS
```typescript
@Component
export default class WatchExample extends Vue {
    question: string = '';
    answer: string = '질문을 하기 전까지는 대답할 수 없습니다.';
    
    @Watch('question')
    watcher() {
        this.answer = '입력을 기다리는 중...'
    }
}
```

* immediate: 속성의 현재값으로 이 핸들러를 즉시 호출하는 여부.
* deep: 속성이 객체인 경우 deep 하게 감시하겠다.
```typescript
@Watch('parentMessage', {immediate: false, deep: true})
update(value: string, oldValue: string) {
  this.alertMessage = '메세지를 업데이트 했습니다.';
}
```
## @Emit Method Decorator
![props-event](./images/props-events.png)
* JS
```javascript
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addToCount(n) {
      this.count += n;
      this.$emit('add-to-count', n);
    },
  } 
}
```

* TS
````typescript
@Component
export default class YourComponent extends Vue {
    count = 0;
    @Emit() 
    addToCount(n: number) {
        this.count += n;
    }
    @Emit('reset')
    resetCount() {
        this.count = 0;
    }
    @Emit()
    returnValue() {
        return 10;
    }
    @Emit() 
    promise() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(20)
            }, 0);    
        })
    }
}
````

## Provide/@inject 로 데이터 전달 : Property Decorator
* JS
    * inject: 자식 컴포넌트에서 provide를 받아 제공된 속성들
    * provide: 부모에서 자식 컴포넌트에 제공한 속성
    ```javascript
    const symbol = Symbol('baz');
    
    export const MyComponent = Vue.extend({
      inject: {
        foo: 'foo',
        bar: 'bar',
        'optional': { from: 'optional', default: 'default' },
        [symbol]: symbol
      },
      data () {
        return {
          foo: 'foo',
          baz: 'bar'
        }
      },
      provide () {
        return {
          foo: this.foo,
          bar: this.baz
        }
      }
    })
    ```

* TS
```typescript
const symbol = Symbol('baz');

@Component
export class MyComponent extends Vue {
    @Inject() readonly foo!: string;
    @Inject('bar') readonly bar!: string;
    @Inject({ from: 'optional', default: 'default'}) readonly optional !: string;
    @Inject(symbol) readonly baz!: string;
    
    @Provide() foo = 'foo';
    @Provide('bar') baz = 'bar';

}
```
* 부모에서 주는 변수이름과 자식의 변수이름이 다를 때 괄호의 String으로 매핑시킬 수 있다.
```typescript
export default class Home extends Vue {
  @Provide('message') msg: string = 'provide/inject example';
}
```
* @Prop - 직계 부모에서만 쓸 수 있었다. 
* @Provide, @Inject - 부모의 부모의 부모... 에게 주입받을 수 있다.
* 컴포넌트에 직접 넘겨주는 방식과 달리 어떤 컴포넌트로 직관적으로 넘어가는지 파악하기 어렵다.
* 일반로직에서는 권장되지 않는다.

* 초기화를 안하면 lint 에서 에러를 나게 한다.
* ! 는 값이 초기화를 안한것이 의도적인것으로 인식함.
* readonly 부모에서 받아오는 값으로 변경이 되어서는 안된다.
    ```typescript
    @Inject() readonly message!: string;
    ```


## @Model Property Decorator
* JS
```javascript
export default {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: {
            type: Boolean
        }
    }
}
```
* TS
```typescript
@Component
export default class YourComponent extends Vue {
    @Model('change', { type: Boolean }) readonly checked!: boolean 
}
```

## Mixins 믹스인
Vue 컴포넌트에 재사용 가능한 기능을 배포하는 유연한 방법이다.
```typescript
import {Vue, Component, Mixins} from 'vue-property-decorator';
import toggle from './toggle.vue';

@Component({
    components: {
        toggle
    }
})
// 최대 5개까지 Mixins(다중상속) 가능하다.
// 사용하는 컴포넌트와 상속 받는 컴포넌트의 이름이 같다면 현재 컴포넌트가 오버라이드 된다.
export default class Dropdown extends Mixins(toggle) {
}
```

```typescript
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class Toggle extends Vue {
        public show: boolean = false;
        public toggle() {
            this.show = !this.show;
        }
    }
</script>
```
