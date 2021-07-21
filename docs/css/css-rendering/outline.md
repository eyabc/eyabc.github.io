---
title: 3-4 outline
---

border 영향을 받지 않는다.

![outline](https://user-images.githubusercontent.com/31977543/118785966-55f6aa00-b8cc-11eb-843f-1a664a5229a0.png)

정확하게 box-shadow 와 똑같은 위치에 그려진다. (borderbox 바깥쪽)
- geometry 의 영향을 끼치지 않는다.

box-shadow 는 border-radius 의 영향을 받는다.
- border-box 가 곡선이면 box-shadow 도 곡선이 된다.
- outline 은 (2018) 년 기준 브라우저에서 border-radius 의 영향을 받지 않는다.

![image](https://user-images.githubusercontent.com/31977543/119360013-24734980-bce5-11eb-8dd7-afce7a8a487e.png)

```html
<style>
</style>
<body>
<div
  style="
    width: 100px; height: 100px;
    display: inline-block;

    background: brown;
    color: #fff;

    border-radius: 15px;

    outline: 10px solid brown;

    border: 1px dashed #fff;
    box-shadow: 0 0 0 10px brown;
  "
>stitched</div>
</body>
```
---

![image](https://user-images.githubusercontent.com/31977543/119360349-7a47f180-bce5-11eb-87d1-6c1e10abe55b.png)
```html
<style>
</style>
<body>
<div
  style="
    width: 100px; height: 100px;
    display: inline-block;

    background: black;
    color: #fff;

    border-radius: 15px;

    outline: 10px solid brown;

    border: 1px dashed #fff;
    box-shadow: 0 0 0 10px yellow;
  "
>stitched</div>
</body>
```
---
![image](https://user-images.githubusercontent.com/31977543/119360875-09550980-bce6-11eb-90a3-87a245bfeca6.png)

```html
<style>
</style>
<body>
<div
  style="
    width: 100px; height: 100px;
    display: inline-block;

    background: burlywood;
    color: #fff;

    border-radius: 15px;
    outline: 10px solid rgba(0, 255, 0, 0.5);
  "
>stitched</div>
</body>
```
---
![image](https://user-images.githubusercontent.com/31977543/119361081-399ca800-bce6-11eb-92b7-cdfbf1b4d8f8.png)

```html
<style>
</style>
<body>
<div
  style="
    width: 100px; height: 100px;
    display: inline-block;

    background: burlywood;
    color: #fff;

    border-radius: 15px;
    outline: 10px solid rgba(0, 255, 0, 0.5);

    border: 1px dashed #fff;

    box-shadow: 0 0 0 10px red;
  "
>stitched</div>
</body>
```

