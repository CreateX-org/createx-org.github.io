+++
title = "Code"
description = "Codebeispiele"
weight = 2
+++

# 1 Grundlagen

C++ ist eine effiziente und vielseitige Programmiersprache. Die wichtigsten Grundlagen sind: Variablen, Schleifen und Bedingungen.
Mit diesen Elementen können wir bereits einfache Programme schreiben und Bauteile mit einer Logik verbinden.

## Variablen

Eine Variable ist ein Speicherort, der einen Wert enthält. In C++ muss man den Typ einer Variable angeben.

```cpp
int myVar; // Deklaration einer Ganzzahl (int) Variable namens myVar
myVar = 10; // wir weisen der Variable Namens myVar den Wert 10 zu

double myDouble = 3.14; // wir können auch Gleitkommazahlen (double) speichern

// Booleans speichern Wahrheitswerte (true oder false)
bool istWahr = true;
bool istFalsch = false;

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

# 2 Arduino-spezifische Funktionen

Die Arduino-Programmiersprache basiert auf C/C++ und bietet eine Reihe von spezifischen Funktionen, die auf die Hardware-Interaktion zugeschnitten sind. Hier sind einige der wichtigsten Arduino-spezifischen Funktionen:

## 2.1 Digitale Pins
1. `pinMode(pin, mode)`: Diese Funktion konfiguriert den angegebenen Pin als Eingabe (`INPUT`) oder Ausgabe (`OUTPUT`).
   ```cpp
   pinMode(13, OUTPUT);  // Setzt den digitalen Pin 13 als Ausgabe
   ```

2. `digitalWrite(pin, value)`: Schreibt einen HIGH oder einen LOW Wert an einen digitalen Pin.
   ```cpp
   digitalWrite(13, HIGH);  // Setzt den digitalen Pin 13 auf HIGH
   ```

3. `digitalRead(pin)`: Liest den Wert von einem bestimmten digitalen Pin, HIGH oder LOW.
   ```cpp
   int buttonState = digitalRead(12);  // Liest den Wert vom digitalen Pin 12
   ```
## 2.2 Analoge Pins
4. `analogRead(pin)`: Liest den Wert von einem bestimmten analogen Pin. Gibt einen Wert zwischen 0 (bei 0V) und 1023 (bei 5V) zurück.
   ```cpp
   int sensorValue = analogRead(A0);  // Liest den Wert vom analogen Pin A0
   ```

5. `analogWrite(pin, value)`: Schreibt einen analogen Wert ([Pulsweitenmodulation](https://www.elektronik-kompendium.de/sites/kom/0401111.htm) - PWM) an einen Pin. Kann verwendet werden, um LED-Helligkeit oder Motor-Position zu steuern.
   ```cpp
   analogWrite(11, 123);  // Schreibt einen analogen Wert an den Pin 11
   ```
    Hierfür können wir aber oft einfachere [Alternativen](https://github.com/CreateX-org/workshop/blob/main/projects/outputs/input_Button_output_Servo/input_Button_output_Servo.ino) aus den Bibliotheken verwenden.: 

   ```cpp
   // in setup():
   servo1.attach(SERVO, 500, 2500);

    // in loop():
   int position = 90; 
   // So stellen wir den Motorarm auf 90 Grad ohne analogWrite() ein
   servo1.write(position);
   ```

## 2.3 Sonstige Funktionen
6. `delay(ms)`: Stoppt das Programm für die angegebene Zeit in Millisekunden.
   ```cpp
   delay(1000);  // Hält das Programm für eine Sekunde an
   ```

7. `millis()`: Gibt die Anzahl der Millisekunden zurück, seit das Arduino-Board zuletzt zurückgesetzt wurde. 
   ```cpp
   unsigned long time = millis();  // Speichert die aktuelle Zeit seit dem Neustart
   ```

8. `Serial.print()`, `Serial.println()` und `Serial.read()`: Diese Funktionen steuern die serielle Datenkommunikation zwischen dem Arduino-Board und einem Computer oder anderen Geräten.
   ```cpp
   // in setup():
   Serial.begin(9600);  // Beginnt eine serielle Kommunikation mit einer Baudrate von 9600

   // in loop():
   Serial.println("Hello, world!");  // Sendet "Hello, world!" über die serielle Verbindung
   ```

    - Fügt Text in die serielle Konsole ein
        ```cpp
        Serial.print("Hallo, Welt!");  // Sendet "Hallo, Welt!" über die serielle Schnittstelle
        ```
    - Fügt Text in die serielle Konsole ein und fügt eine neue Zeile hinzu
        ```cpp
        Serial.println("Hallo, Welt!");  // Sendet "Hallo, Welt!" und dann eine neue Zeile
        ```
    - liest das nächste verfügbare Zeichen aus der seriellen Schnittstelle
        ```cpp
        if (Serial.available() > 0) {  // Prüft, ob Daten zur Verfügung stehen
            char c = Serial.read();    // Liest das nächste Zeichen
            Serial.print("Eingabe lautet: ");
            Serial.println(c);         // Gibt das eingegebene Zeichen und dann eine neue Zeile aus
        }
        ```