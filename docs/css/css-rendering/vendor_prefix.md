---
title: 5-2 Vendor Prefix
---

**CSS 는 브라우저마다 지원사양이 극적으로 변한다.**    
그것에 대해서 *vendor prefix* 가 붙게 된다. 

새로운 기능들은 vendor prefix 가 붙었다가   
안정화가 되고 표준이 되면 떼는 것이 업계 관행이다. 

vendor prefix 의 처리는 까다롭다    
크롬의 border-radius 에서 vendor-prefix 를 붙이면 작동하지 않는다. 

:::tip Compatibility library
CSS 전체를 안정적으로 통제할 수 있는 프레임워크를 만들어 볼 것이다.
:::

## Vendor prefix
:::note RUNTIME FETCH   
vendor prefix 는 실행 중에만 속성을 확인할 수 있다.
:::

border-radius 속성은     
크롬 버전 54 에서는 webkit 을 붙여야 하는데       
버전 66에서는 붙이면 안된다.
    
속성의 존재유무를 실행할 때 확인할 수 있다.

:::note UNSUPPORTED PROPERTY
브라우저마다 지원하지 않는 값이나 속성이 존재한다.        
:::
IE7 에는 rgba 를 지정하면 브라우저가 죽는다.       
브라우저를 죽일 수 있는 핵들이 많다. 이 틈에 보안취약점을 노린다.

:::tip GRACEFUL FAIL   
지원하지 않는 값 속성에 대한 client 처리를 할 것임
:::

:::note HIERACHY OPTIMAZE
*SHEET.DISABLED = TRUE;*    
계층 구조에서 최적화 해야할 것
:::

스타일 시트가 여러개 있으면 
0 번 스타일 시트 계산하고
1 번 스타일 시트가 있으면 
두개를 합쳐서 또 계산한다. 

스타일 시트가 늘어날 수록 계산하기 힘들어 질 것이다. 

스타일 시트를 여러개 등록하면.. 

CSS 시트의 중첩된 계산이 사이트가 느려지는 원인이 된다. 
