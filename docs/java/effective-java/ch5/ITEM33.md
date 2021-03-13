---
title: ITEM33 타입 안전 이종 컨테이너를 고려하라
sidebar_label: ITEM33 타입 안전 이종 컨테이너를 고려하라
---

## 일반적인 제네릭 형태: 컬렉션 API
### 예시
대표적으로 제네릭은 컬렉션과 단일원소 컨테이너에서 흔히 사용된다.
- 컬렉션 `Set<E>`, `Set<K, V>` 등
- 단일원소 컨테이너 `ThreadLocal<T>`, `AtomicReference<T>` 등

### 매개변수화 대상
원소가 아닌, *컨테이너 자신*이다.

### 한계
한 컨테이너가 다룰 수 있는 타입 매개변수의 수가 고정됨

- 컨테이너의 일반적인 용도에 맞게 설계된 것이므로 문제될 것은 없다.

## 타입 안전 이종 컨테이너 패턴 
*type safe heterogeneous container pattern*

1. 컨테이너 대신 *키를 매개변수화* 한다.  
2. 컨테이너에 값을 추가/삭제 할 때마다, 매개변수화한 키를 함께 제공한다.

### API
데이터베이스의 행(컨테이너)을 표현한 DatabaseRow 타입에는,
- 제네릭 타입인 `Column<T>` 를 키로 사용할 수 있다.

타입별로 즐겨 찾는 인스턴스를 저장하고 검색할 수 있는 Favorites 클래스
```java
public class Favorites {
    public <T> void putFavorite(Class<T> type, T instance);
    public <T> T getFavorite(Class<T> type);
}
```

### Class 를 키로 사용
- 직접 구현한 키 타입도 가능
- Class 가 제네릭이기 때문에 가능함
    - `Class<T>` class 의 리터럴 타입 
    - `Class<Integer>` Integer.class 의 리터럴 타입
    - `Class<String>` String.class 의 리터럴 타입
    
### 타입 토큰 type token
컴파일타임 타입정보와, 런타임 타입정보를 알아내기 위해,     
메서드들이 주고 받는 *class 리터럴*

### 클라이언트
```java
public static void main(String[] args) {
    Favorite f = new Favorites();
    f.putFavorite(String.class, "Java");
    f.putFavorite(Integer.class, 0x123abcd);
    f.putFavorite(Class.class, Favorites.class);

    String favoriteString = f.getFavorite(String.class);
    int favoriteInteger = f.getFavorite(Integer.class);
    Class<?> favoriteClass = f.getFavorite(Class.class);

    System.out.printf("%s %x %s%n", 
        favoriteString, favoriteInteger, FavoriteClass.getName());
}
```

### 구현

```java     
public class Favorites {
    private Map<Class<?>, Object> favorite = new HashMap<>();
    
    public <T> void putFavorite(Class<T> type, T instance) {
        favorite.put(Objects.requireNonNull(type), instance);
    }

    public <T> T getFavorite(Class<T> type) {
        return type.cast(favorite.get(type));
    }
}
```

#### 1. 중첩 비한정적 와일드카드 타입 `Map<Class<?>, Object>`
Map 이 아니라, 키가 와일드카드 타입이다.
- 모든 키가 서로 다른 매개변수화 타입일 수 있다는 의미
- 다양한 타입을 지원할 수 있게 된다.
- `Class<String>` `Class<Integer>` ...
 
#### 2. Map 의 값 타입은 Object
키와 값 사이의 타입 관계를 보증하지 않지만 관계가 성립함을 알고 있다.
- 키와 값 사이의 타입링크 *type linkage* 는 버려진다
- *getFavorite* 메서드에서 관계를 살린다.

#### 3. cast 메서드, 동적 타입 캐스팅
1. 인수가 Class 객체가 알려주는 타입의 인스턴스인지 검사
2. 맞다면 그대로 반환, 아니면 *ClassCastException*

### 제약사항

#### 1. 로타입 Class 객체는 Favorite 인스턴스의 타입 안전성을 깨뜨린다.
```java
f.putFavorite((Class)Integer.class, "Integer의 인스턴스가 아님");
int favoriteInteger = f.getFavorite(Integer.class); // ClassCastException
```

HashSet 과 HashMap 등의 일반 컬렉션 구현체에도 같은 문제가 있다.
```java
HashSet<Integer> set = new HashSet<>();
((HashSet)set).add("문자열입니다");
```

동적 형변환으로 런타임 타입 안전성을 확보할 수 있다.
```java
public <T> putFavorite(Class<T> type, T instance) {
    favorite.put(Objects.requireNonNull(type), type.cast(instance));
}
```
예시) `java.util.Collections` 의 *checkedSet*, *checkedList*, *checkedMap* 메서드

#### 2. 실체화 불가 타입에는 사용할 수 없다
`List<String>` 용 Class 객체 `List<String>.class`를 얻을 수 없기 때문
- `String`, `String[]` 저장 가능
- `List<String>` 저장 불가 → 컴파일 오류

`List<String>` 과 `List<Integer>` 는 `List.class` 라는 같은 클래스 객체를 공유한다.
- 다른타입의 리스트가 똑같은 타입의 객체 참조를 반환하는 문제

완벽한 우회로는 없지만 **수퍼 타입 토큰(super type token)** 방법이 있다.
- 스프링 프레임워크에서는 `ParameterizedTypeReference` 클래스로 구현함
```java {3,4}
Favorites f = new Favorites();
List<String> pets = Arrays.asList("개", "고양이", "햄스터");
f.putFavorite(new TypeRef<List<String>>(){}, pets);
List<String> listofStrings = f.getFavorite(new TypeRef<List<String>>(){});
```

### 한정적 타입 토큰
Favorites 의 비한정적 타입토큰은 어떤 Class 객체든 수용한다.

#### 한정적 타입 토큰을 사용하는, 애너테이션 API[39]

AnnotatedElement 인터페이스의 메서드이다.  
```java
public <T extends Annotation> T getAnnotation(Class<T> annotationType);
```
- 대상 요소에 달려있는 애너테이션을 런타임에 읽어오는 기능을 한다.

```java
static Annotation getAnnotation(
    AnnotatedElement element, String annotationTypeName 
) {
    Class<?> annotationType = null; // 비한정적 타입 토큰
    try {
        annotationType = Class.forName(annotationTypeName);
    } catch (Exception ex) {
        throw new IllegalArgumentException(ex); // 클래스가 존재하지 않음
    }
    return element.getAnnotation(
        annotationType.asSubclass(Annotation.class);
    );
}
```
*asSubclass* 메서드
- 호출된 인스턴스 자신의 Class 객체를 인수가 명시한 클래스로 형변환
- 형변환 된다는 것은 인수로 명시한 클래스의 하위 클래스 라는 것임.



