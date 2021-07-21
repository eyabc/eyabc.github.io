# Danfo.js
Danfo.js는 ML을 기반으로 하기 때문에       
기타 데이터시각화 라이브러리들과 다르다.

Danfo.js의 주요 목표 중 하나는 JavaScript 개발자에게 
데이터 처리, 기계 학습 및 AI 도구를 제공하는 것입니다.
이것은 우리의 비전과 본질적으로 웹에 ML을 가져 오는 TensorFlow.js 팀의 비전과 일치합니다.

개발자가 입력한 데이터를 정확하게 표시하는 일반적인 기능과 함께     
데이터를 기반으로 학습하고, 예측할 수 있는 신경망을 갖추고 있다.

Danfo.js는 특정데이터의 결과를 학습할 수 있으며,     
학습 데이터가 증가할수록 개발자는 편해진다.

비슷한 데이터를 입력하는 것만으로 미래의 결과값을 도출할 수 있기 때문이다. 

## 주요 특징
- Danfo 데이터 구조 를 Tensor 로 변환 할 수 있습니다 .
    - Danfo.js는 빠릅니다. Tensorflow.js를 기반으로하며 텐서를 즉시 지원합니다. 
- 누락 된 데이터
    - 부동 소수점 데이터와 비 부동 소수점 데이터에서 누락 된 데이터 (로 표시 NaN)를 쉽게 처리
- 열 삽입 / 삭제
    - 크기 변경 : DataFrame 에서 열 삽입 / 삭제 가능
- 자동 및 명시 적 정렬 
    - 객체는 명시 적으로 레이블의 집합으로 정렬 할 수 있습니다, 또는 단순히 레이블을 무시하고 할 수있는 사용자 Series, DataFrame등이 자동으로 계산에서 당신을 위해 데이터를 정렬
- groupby
    - 데이터 집합 및 변환 모두를 위해 데이터 세트에 대해 분할 적용 결합 작업을 수행하는 강력하고 유연한 groupby 기능
- 배열, JSON, 목록 또는 개체, 텐서 및 다른 색인 데이터 구조를 DataFrame 개체로 쉽게 변환 할 수 있습니다.
- 지능형 라벨 기반 슬라이싱, 고급 인덱싱 및 대규모 데이터 세트 쿼리
- 직관적 인 데이터 세트 병합 및 결합
- 플랫 파일 (CSV, Json, Excel, 데이터 패키지) 에서 데이터를로드하기위한 강력한 IO 도구 .
- DataFrame 및 Series 를 대화식으로 플로팅 하기위한 강력하고 유연하며 직관적 인 API입니다 .
- 시계열 관련 기능 : 날짜 범위 생성 및 날짜 및 시간 속성.
- OneHotEncoders , LabelEncoders 와 같은 강력한 데이터 전처리 기능과 StandardScaler 및 MinMaxScaler 와 같은 스케일러 는 DataFrame 및 Series에서 지원됩니다.

## 출력
브라우저의 출력 :
![browser](https://github.com/opensource9ja/danfojs/blob/HEAD/assets/browser-out.gif?raw=true)

노드 콘솔의 출력 :
![노드 콘솔의 출력](https://raw.githubusercontent.com/opensource9ja/danfojs/HEAD/assets/node-rec.gif)

## 코드
```javascript
const dfd = require("danfojs-node")
```

### Object creation

#### [Series](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.Series.html#pandas.Series)
축 레이블 이있는 1 차원 array

a list of values
```javascript
s = new dfd.Series([1, 3, 5, undefined, 6, 8])
s.print()
```

```shell script
//output
╔═══╤══════════════════════╗
║   │ 0                    ║
╟───┼──────────────────────╢
║ 0 │ 1                    ║
╟───┼──────────────────────╢
║ 1 │ 3                    ║
╟───┼──────────────────────╢
║ 2 │ 5                    ║
╟───┼──────────────────────╢
║ 3 │ NaN                  ║
╟───┼──────────────────────╢
║ 4 │ 6                    ║
╟───┼──────────────────────╢
║ 5 │ 8                    ║
╚═══╧══════════════════════╝
```

from a tensor
```javascript
const dfd = require("danfojs-node")
const tf = require("@tensorflow/tfjs-node")

let tensor_arr = tf.tensor([12,34,56,2])
let s = new dfd.Series(tensor_arr)
s.print()
```
```shell script
╔═══╤══════════════════════╗
║   │ 0                    ║
╟───┼──────────────────────╢
║ 0 │ 12                   ║
╟───┼──────────────────────╢
║ 1 │ 34                   ║
╟───┼──────────────────────╢
║ 2 │ 56                   ║
╟───┼──────────────────────╢
║ 3 │ 2                    ║
╚═══╧══════════════════════╝
```

#### [DataFrame](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html#pandas.DataFrame)
2 차원 data

JSON object
```javascript
const dfd = require("danfojs-node")

json_data = [{ A: 0.4612, B: 4.28283, C: -1.509, D: -1.1352 },
            { A: 0.5112, B: -0.22863, C: -3.39059, D: 1.1632 },
            { A: 0.6911, B: -0.82863, C: -1.5059, D: 2.1352 },
            { A: 0.4692, B: -1.28863, C: 4.5059, D: 4.1632 }]

df = new dfd.DataFrame(json_data)
df.print()
```
```shell script
╔═══╤═══════════════════╤═══════════════════╤═══════════════════╤═══════════════════╗
║   │ A                 │ B                 │ C                 │ D                 ║
╟───┼───────────────────┼───────────────────┼───────────────────┼───────────────────╢
║ 0 │ 12                │ 34                │ 2.20000004768...  │ 2                 ║
╟───┼───────────────────┼───────────────────┼───────────────────┼───────────────────╢
║ 1 │ 30                │ 30                │ 2.09999990463...  │ 7                 ║
╚═══╧═══════════════════╧═══════════════════╧═══════════════════╧═══════════════════╝
```

2D tensor
```javascript
const dfd = require("danfojs-node")
const tf = require("@tensorflow/tfjs-node")

let tensor_arr = tf.tensor2d([[12, 34, 2.2, 2], [30, 30, 2.1, 7]])
let df = new dfd.DataFrame(tensor_arr, {columns: ["A", "B", "C", "D"]})
df.print()
df.ctypes.print()
```
```shell script
╔═══╤══════════════════════╗
║   │ 0                    ║
╟───┼──────────────────────╢
║ A │ int32                ║
╟───┼──────────────────────╢
║ B │ int32                ║
╟───┼──────────────────────╢
║ C │ float32              ║
╟───┼──────────────────────╢
║ D │ int32                ║
╚═══╧══════════════════════╝
```
...


## tensorflowJs with danfoJs
모델과 처리 된 데이터를 텐서로로드하여 학습을 수행
데이터로드, 데이터 세트의 조작 및 전처리를 위해 Danfo를 사용한 다음 텐서 객체를 내 보냅니다.
 
[예시 코드](https://blog.tensorflow.org/2020/08/introducing-danfo-js-pandas-like-library-in-javascript.html)는 링크에서 확인할 수 있음


Reference
-- 
- https://danfo.jsdata.org/
- https://webdoli.tistory.com/341
- https://www.npmjs.com/package/danfojs
- https://danfo.jsdata.org/getting-started
- https://blog.tensorflow.org/2020/08/introducing-danfo-js-pandas-like-library-in-javascript.html
