---
title: 2-3 overflow
---
## overflow
*float 에 대한 특약사항*

CSS2.1 visual formatting model

visible | hidden | scroll | inherit | auto(default)

*auto* 
- 내부에 있는 크기가 커지면 부모도 같이 커진다.

*visible*
- auto 가 visible(일반적인 브라우저에서.. 지금은 예외가 없을 것)

*scroll*
- 내 geometry 를 넘어가는 컨텐츠가 발생하면 스크롤바를 만든다. 

*hidden* 
- 내 geometry 를 넘어가는 내부 컨텐츠를 안보이게 자른다.

## overflow-x, -y
overflow module level3 draft

visible | hidden | scroll | clip | auto

overflow x 축 y 축을 따로 관리하는 스펙

아직까지 draft 이다. 
- recommendation 에서 draft  로 바뀌었다.
- 그 이유는 overflow x y 를 계산할 때, 새로나온 스펙들과의 모순점들이 존재


## text-overflow
css2.1 ui module level3

clip | ellipsis (text에 ... 표시)
