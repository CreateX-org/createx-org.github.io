+++
title = "Code"
description = "Codebeispiele"
weight = 2
+++


# Code Beispiele

C++ ist eine effiziente und vielseitige Programmiersprache. Die wichtigsten Grundlagen sind: Variablen, Schleifen und Bedingungen.
Mit diesen Elementen können wir bereits einfache Programme schreiben und Bauteile mit einer Logik verbinden.

## Variablen

Eine Variable ist ein Speicherort, der einen Wert enthält. In C++ muss man den Typ einer Variable angeben.

```cpp
int myVar; // Deklaration einer Ganzzahl (int) Variable namens myVar
myVar = 10; // wir weisen der Variable Namens myVar den Wert 10 zu

double myDouble = 3.14; // wir können auch Gleitkommazahlen (double) speichern

std::string myString = "Hallo Welt"; // Eine Zeichenkette (string)
```

## Bedingungen (if, else)

Bedingte Anweisungen in C++ verwenden die `if` (wenn) und `else` (sonst) Schlüsselwörter. Bedingte Anweisungen können wir nutzen, um zu entscheiden, ob ein Codeblock ausgeführt werden soll oder nicht.

```cpp
int x = 10;
if (x > 5) {
    // Wenn x größer als 5 ist, dann ...
    Serial.println("x ist größer als 5"); // schreiben wir diesen Text in den Seriellen Monitor
} else {
    // Wenn x nicht größer als 5 ist, dann ...
    Serial.println("x ist nicht größer als 5");
}
```

Für mehrere Bedingungen können wir `else if` verwenden.

```cpp
int y = 20;
if (y > 50) {
    // Wenn y größer als 50 ist, dann ...
    Serial.println("y ist größer als 50");
} else if (y > 30) {
    // Wenn y nicht größer als 50 ist, aber wenn y größer als 30 ist, dann ...
    Serial.println("y ist größer als 30, aber nicht größer als 50");
} else {
    // Wenn y nicht größer als 50 ist und nicht größer als 30 ist, dann ...
    Serial.println("y ist nicht größer als 30");
}
```

## Schleifen

Es gibt verschiedene Arten von Schleifen in C++, aber die gebräuchlichsten sind `for` und `while`. Mit Schleifen können wir Code mehrmals ausführen.

1. Die `for` Schleife:

```cpp
// i ist eine Variable, die wir in der Schleife verwenden
// wir beginnen mit i=0,
// die Schleife wird ausgeführt, solange i kleiner als 10 ist, 
// i wird nach jedem Durchlauf um 1 erhöht
for(int i = 0; i < 10; i++) { 
    // In der Schleife stehen uns dann die Zahlen von 0 bis 9 zur Verfügung
    Serial.println(i);
}
```

2. Die `while` Schleife:

```cpp
int j = 0;
// solange j kleiner als 10 ist, wird der Code in der Schleife ausgeführt
while(j < 10) {
    Serial.println(i);
    j++; // damit die Schleife nicht ewig läuft, erhöhen wir j nach jedem Durchlauf um 1 
}
```

## Arrays (Sammlung bzw. Liste)

Ein Array ist eine Sammlung von Elementen, die denselben Datentyp haben. Also z.B. eine Liste von Zahlen oder eine Liste von Zeichenketten.
Die Größe eines Arrays ist bei der Erstellung festgelegt und kann später nicht geändert werden.

```cpp
int myArray[5]; //ein Array von Integern mit einer Länge von 5
```

Wir können dem Array auch direkt Werte zuweisen:

```cpp
int myArray[5] = {1, 2, 3, 4, 5}; // ein Array in dem wir 5 Elemente speichern
```
Wenn wir auf die einzelnen Elemente eines Arrays zugreifen, dann tun wir dies, indem wir den Index des Elements in eckigen Klammernangeben.
Der Index beschreibt also die Stelle des Elements in der Liste.
Wichtig ist, dass der Index bei 0 und nicht bei 1 beginnt. Dies ist bei den meisten Programmiersprachen der Fall. 
Das erste Element hat also den Index 0, das zweite Element den Index 1, usw.
```cpp
// Gibt das erste Element des Arrays aus 
Serial.println(myArray[0]); // --> 1
// Ändert das zweite Element des Arrays zu 10
myArray[1] = 10; // {1, 2, 3, 4, 5} --> {1, 10, 3, 4, 5}
```