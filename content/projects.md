+++
title = "Projekte"
description = "Projekte, die wir bauen können"
weight = 1
+++


# 1. Projektdateien
Um nicht von Null beginnen zu müssen, haben wir bereits einige Dateien vorbereitet, die uns als Grundlage für die Projekte dienen werden. Darin finden sich für verschiedene Bauteile Beispiele mit Erklärungen.
- [Code auf github.com](https://github.com/CreateX-org/workshop), dort befinden sich die Dateien in verschiedenen Ordnern.
- [Download als .zip Datei](https://github.com/CreateX-org/workshop/archive/refs/heads/main.zip), um die Dateien in die Arduino IDE zu laden und auf den Microcontroller zu übertragen.

# 2. Projekte
Für eure eigenen Projekte stehen euch verschiedene Elemente/ Bauteile zur Verfügung die ihr mit dem Microntroller verbinden und dadurch steuern bzw. auslesen könnt. Diese gliedern sich in Input (zB Sensoren) und Output (zB LEDs).


## 2.1 Inputs
Ein "Input" ist ein Signal oder eine Information, die in den Mikrocontroller eingegeben oder eingelesen wird. Typischerweise werden Inputs in Form von elektrischen Signalen oder Spannungen bereitgestellt. Diese können von verschiedenen Quellen stammen, wie z.B. Sensoren, Tasten, Schaltern oder anderen Mikrocontrollern.


### 2.1.1 Time of Flight (TOF) Distanz Sensor

- Pfad: `projects/inputs/input_TOF`

Ein Time of Flight Sensor berechnet den Abstand zu einem Objekt durch Messung der Zeit, die das Licht braucht, um vom Sensor zum Objekt und wieder zurück zu kommen.

**WICHTIG**:
In der Arduino IDE muss noch "Adafruit_VL53L0X" installiert werden.

1. Auf den "Library Manager" klicken (ganz links das Icon mit den Büchern)
2. Nach "Adafruit_VL53L0X" suchen
3. Installieren

<img src="/images/Arduino_install_tof.png" width = 50%/>


Für beide folgenden Beispiele nutzen wir diesen Schaltkreis:

<img src="/images/input_TOF_output_Serial.png" width = 100%/>

**Pinbelegung**

<img src="/images/ToF.jpg" width = 50%/>

Die Pins sind von links nach rechts wie folgt belegt:
* **GND**
* 5V
* **G26/SCL (Clock)**
* G36
* **G0/SDA (Data)**
* BAT
* **3V3**
* 5V

#### 2.1.1.1 Eine gemessene Distanz am Monitor auslesen

- Pfad: `projects/inputs/input_TOF/input_TOF_output_Serial`
  
Um den gemessenen Abstand zu sehen, müssen wir das Ergebnis des Sensor zunächst an einen Monitor senden. Wenn wir den Arduino dann mit einem Computer verbinden, können wir auf dem Seriellen Monitor der Arduino IDE das Ergebnis der Messung sehen.

<img src="/images/IDE_SeriellerMonitor.png" width = 80%/>



#### 2.1.1.2 Distanz abhängig eine LED ein- und ausschalten

- Pfad: `projects/inputs/input_TOF/input_TOF_output_LED`

Wir können auch eine Reaktion auslösen sobald die Distanz unter einen gewissen Wert (zB 2cm) fällt. Wenn sich ein Objekt wie z.B. eine Hand nahe genug am Sensor befindet, leuchtet die LED.


### 2.1.2 Kapazitiver Touch Sensor

- Pfad: `projects/inputs/input_Touch`

Ein kapazitiver Touch-Sensor funktioniert auf der Basis von Körperkapazität und Elektrostatik. Wenn ein menschlicher Finger die Oberfläche des Sensors berührt, ändert sich die Kapazität des elektrischen Feldes, da der menschliche Körper selbst als elektrischer Leiter wirkt. Diese Änderung wird vom Sensor erkannt und als Berührung interpretiert.

Der Sensor ähnelt im Anschluss und in der Ansteuerung durch Code einem Taster bzw. Button.

#### 2.1.2.1 Sensor am Seriellen Plotter auslesen

- Pfad: `projects/inputs/input_Touch/input_Touch_output_Plotter`
  
<img src="/images/TouchSensor_Plotter.png" width = 70%/>

Um zu testen ob der Sensor eine Berührung wahrnimmt, können wir den Seriellen Plotter der Arduino IDE nutzen. Wenn wir den Arduino dann mit einem Computer verbinden, können wir auf dem Seriellen Plotter der Arduino IDE das Ergebnis der Messung sehen. Wenn wir den Sensor berühren, sehen wir einen Ausschlag um 1, so wie wir es im Code festgelegt haben.

<img src="/images/SeriellerPlotter.png" width = 100%/>




#### 2.1.2.2 Berührungs-abhängig eine LED ein- und ausschalten

- Pfad: `projects/inputs/input_TOF/input_Touch_output_LED`

Wir können auch eine Reaktion auslösen sobald der Sensor eine Berühung wahrnimmt. Wenn wir den Sensor berühren, leuchtet die LED.

Dazu erweitern wir unseren Schaltkreis um eine LED und einen Widerstand:
<img src="/images/TouchSensor_LED.png" width = 70%/>



### 2.1.3 Weitere Inputs
Natürlich stehen euch auch alle weiteren Inputs aus den Fundiono-Koffern der Schule zur Verfügung. Dazu zählen zB Temperatursensoren, Feuchtigkeitssensoren oder Tastenfelder. 


## 2.2 Outputs
Ein "Output" ist ein Signal oder eine Information, die der Mikrocontroller generiert oder ausgibt. Es handelt sich um die Reaktion des Mikrocontrollers auf interne Berechnungen oder Benutzereingaben. Den Output legeen wir duch den Code mit dem wir den Microntroller programmieren fest.

### 2.2.1 LED / 2 LEDs
- Pfad: `projects/outputs/simple_demo_leds_button`

Ein Button und eine LED (bzw. später 2) werden mit dem Arduino verbunden.
Wenn der Button gedrückt wird, geht die LED an (bzw. später die andere auch aus).

<img src="/images/Button_and_2_LEDs.png" width = 100%/>

### 2.2.2 LED Streifen "Neopixel"
- Pfad: `projects/outputs/simple_demo_neopixel_button`

Ein Button und ein LED Streifen "Neopixel" werden mit dem Arduino verbunden.
Wenn der Button kurz gedrückt wird, springt die LED eins weiter.
Bei Gedrückthalten, springt die LED mit einer kurzen Verzögerung kontinuierlich weiter.

**WICHTIG**:
In der Arduino IDE muss noch "Adafruit Neopixel" installiert werden.

1. Auf den "Library Manager" klicken (ganz links das Icon mit den Büchern)
2. Nach "Adafruit Neopixel" suchen
3. Installieren

<img src="/images/Arduino_install_neopixel.png" width = 50%/>

<img src="/images/Button_and_Neopixel.png" width = 100%/>

### 2.2.3 Servo Motor
- Pfad: `projects/outputs/simple_demo_servo_button`

Ein Button und ein Servo Motor (sozusagen ein Motor, der in eine festgelegte Position gedreht werden kann und sich nicht einfach nur dreht, bis man den Strom abstellt) werden mit dem Arduino verbunden.
Wenn der Button gedrückt wird, dreht sich der Servo weiter.

<img src="/images/Button_and_Servo.png" width = 100%/>


### 2.2.4 Weitere Outputs
Auch weitere Outputs finden sich in den Fundiono-Koffern der Schule. Dazu zählen zB Lautsprecher, ein Ampelmodul oder LCD Modul. 



```c, linenos
serial.println("Test");
pin.output(HIGH);
```


# 3. Code Beispiele

C++ ist eine effiziente und vielseitige Programmiersprache. Die wichtigsten Grundlagen sind: Variablen, Schleifen und Bedingungen.
Mit diesen Elementen können wir bereits einfache Programme schreiben und Bauteile mit einer Logik verbinden.

**Variablen**

Eine Variable ist ein Speicherort, der einen Wert enthält. In C++ muss man den Typ einer Variable angeben.

```cpp
int myVar; // Deklaration einer Ganzzahl (int) Variable namens myVar
myVar = 10; // wir weisen der Variable Namens myVar den Wert 10 zu

double myDouble = 3.14; // wir können auch Gleitkommazahlen (double) speichern

std::string myString = "Hallo Welt"; // Eine Zeichenkette (string)
```

**Bedingungen (if, else)**

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

**Schleifen**

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

**Arrays (Sammlung bzw. Liste)**

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
