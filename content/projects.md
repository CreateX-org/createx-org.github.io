+++
title = "Projekte"
description = "Projekte, die wir bauen können"
weight = 1
+++


# 1. Projektdateien
Um nicht von Null beginnen zu müssen, haben wir bereits einige Dateien vorbereitet, die uns als Grundlage für die Projekte dienen werden. Darin finden sich für verschiedene Bauteile Codebeispiele mit Erklärungen.
- [Code auf github.com](https://github.com/CreateX-org/workshop), dort befinden sich die Dateien in verschiedenen Ordnern.
- [Download als .zip Datei](https://github.com/CreateX-org/workshop/archive/refs/heads/main.zip), um die Dateien in die Arduino IDE zu laden und auf den Microcontroller zu übertragen.



# 2. Projekte – Inputs
Für eure eigenen Projekte stehen euch verschiedene Elemente bzw. Bauteile zur Verfügung, die ihr mit dem Microcontroller verbinden und dadurch steuern oder auslesen könnt. Diese gliedern sich in Input (z.B. Sensoren) und Output (z.B. LEDs).

Ein "Input" ist ein Signal oder eine Information, die in den Microcontroller eingegeben oder eingelesen wird. Typischerweise werden Inputs in Form von elektrischen Signalen oder Spannungen bereitgestellt. Diese können von verschiedenen Quellen stammen wie z.B. Sensoren, Tasten, Schaltern oder anderen Microcontrollern.


## 2.1 Time of Flight (TOF) Distanz Sensor

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

### 2.1.1 Eine gemessene Distanz am Monitor auslesen

- Pfad: `projects/inputs/input_TOF/input_TOF_output_Serial`
  
Um den gemessenen Abstand zu sehen, müssen wir das Messergebnis des Sensors zunächst vom Microcontroller an den Computer senden. Dies erfolgt über eine sogenannte "serielle Schnittstelle", also USB (Universal **Serial** Bus). Dort können wir es auf dem seriellen Monitor der Arduino IDE sehen.

<img src="/images/IDE_SeriellerMonitor.png" width = 80%/>



### 2.1.2 Distanzabhängig eine LED ein- und ausschalten

- Pfad: `projects/inputs/input_TOF/input_TOF_output_LED`

Wir können auch eine Reaktion auslösen, sobald die Distanz unter einen gewissen Wert (z.B. 2 cm) fällt. Wenn sich ein Objekt wie z.B. eine Hand nahe genug am Sensor befindet, leuchtet die LED.


## 2.2 Kapazitiver Touch Sensor

- Pfad: `projects/inputs/input_Touch`

Ein kapazitiver Touch-Sensor funktioniert auf der Basis von Körperkapazität und Elektrostatik. Wenn ein menschlicher Finger die Oberfläche des Sensors berührt, ändert sich die Kapazität des elektrischen Feldes, da der menschliche Körper selbst als elektrischer Leiter wirkt. Diese Änderung wird vom Sensor erkannt und als Berührung interpretiert.

Der Sensor ähnelt im Anschluss und in der Ansteuerung durch Code einem Taster bzw. Button.

### 2.2.1 Sensor am Seriellen Plotter auslesen

- Pfad: `projects/inputs/input_Touch/input_Touch_output_Plotter`
  
<img src="/images/TouchSensor_Plotter.png" width = 70%/>

Um zu testen ob der Sensor eine Berührung wahrnimmt, können wir den Seriellen Plotter der Arduino IDE nutzen. Wenn wir den Arduino dann mit einem Computer verbinden, können wir auf dem Seriellen Plotter der Arduino IDE das Ergebnis der Messung sehen. Wenn wir den Sensor berühren, sehen wir einen Wechsel von 0 auf 1, so wie wir es im Code festgelegt haben.

<img src="/images/SeriellerPlotter.png" width = 100%/>




### 2.2.2 Berührungsabhängig eine LED ein- und ausschalten

- Pfad: `projects/inputs/input_TOF/input_Touch_output_LED`

Wir können auch eine Reaktion auslösen sobald der Sensor eine Berühung wahrnimmt. Wenn wir den Sensor berühren, leuchtet die LED.

Dazu erweitern wir unseren Schaltkreis um eine LED und einen Widerstand:

<img src="/images/TouchSensor_LED.png" width = 70%/>


## 2.3 Gestenerkennung
- Pfad: `projects/inputs/input_gesture`
- Weitere Infos: [https://wiki.seeedstudio.com/Grove-Gesture_v1.0/#play-with-arduino](https://wiki.seeedstudio.com/Grove-Gesture_v1.0/#play-with-arduino)
- Die Verbindung mit dem Arduino erfolgt analog zum Time-of-Flight Sensor:
    - Schwarz / GND => GND
    - Rot / 5 V => 5 V
    - Gelb / SCL => SCL
    - Weiß / SDA => SDA

Falls die Verbindung zum Sensor unterbricht, sollten Pull-Up Widerstände eingefügt werden. Das machen wir bei Bedarf am besten gemeinsam.

**WICHTIG**:
In der Arduino IDE muss noch "Gesture PAJ7620" installiert werden.

1. Auf den "Library Manager" klicken (ganz links das Icon mit den Büchern)
2. Nach "Gesture PAJ7620" oder "grove gesture" suchen
3. Installieren

<img src="/images/Arduino_install_gesture.png" width = 50%/>


## 2.4 Neigungs- und Rotationssensor
- Pfad: `projects/inputs/input_IMU`
- Weitere Infos zur Bibliothek: [https://github.com/LiquidCGS/FastIMU/](https://github.com/LiquidCGS/FastIMU/)
- Die Verbindung mit dem Arduino erfolgt analog zum Time-of-Flight Sensor:
    - Schwarz / GND => GND
    - Rot / 5 V => 5 V
    - Gelb / SDA => SDA
    - Weiß / SCK => SCK

Falls die Verbindung zum Sensor unterbricht, sollten Pull-Up Widerstände eingefügt werden. Das machen wir bei Bedarf am besten gemeinsam.

**WICHTIG**:
In der Arduino IDE muss noch "FastIMU" installiert werden.

1. Auf den "Library Manager" klicken (ganz links das Icon mit den Büchern)
2. Nach "FastIMU" oder "mpu6886" suchen
3. Installieren

<img src="/images/Arduino_install_mpu6886.png" width = 50%/>

## 2.5 Pulsoximeter / Herzschlag
- Pfad: `projects/inputs/input_heartrate`
- Weitere Infos zur Bibliothek: [https://github.com/gabriel-milan/Arduino-MAX30100](https://github.com/gabriel-milan/Arduino-MAX30100)
- Die Verbindung mit dem Arduino erfolgt analog zum Time-of-Flight Sensor:
    - Schwarz / GND => GND
    - Rot / 5 V => 5 V
    - Gelb / SDA => SDA
    - Weiß / SCK => SCK

Falls die Verbindung zum Sensor unterbricht, sollten Pull-Up Widerstände eingefügt werden. Das machen wir bei Bedarf am besten gemeinsam.

**WICHTIG**:
In der Arduino IDE muss noch "MAX30100_milan" installiert werden.

1. Auf den "Library Manager" klicken (ganz links das Icon mit den Büchern)
2. Nach "MAX30100_milan" oder "MAX30100 milan" suchen
3. Installieren

<img src="/images/Arduino_install_MAX30100.png" width = 50%/>

## 2.4 Weitere Inputs
Natürlich stehen euch auch alle weiteren Inputs aus den Fundiono-Koffern der Schule zur Verfügung. Dazu zählen z.B. Temperatursensoren, Feuchtigkeitssensoren oder Tastenfelder. 


# 3. Projekte – Outputs
Ein "Output" ist ein Signal oder eine Information, die der Microcontroller generiert oder ausgibt. Es handelt sich um die Reaktion des Microcontrollers auf interne Berechnungen oder Benutzereingaben. Den Output legen wir duch den Code, mit dem wir den Microntroller programmieren, fest.

## 3.1 LED / 2 LEDs
- Pfad: `projects/outputs/simple_demo_leds_button`

Ein Button und eine LED (bzw. später zwei LEDs) werden mit dem Arduino verbunden.
Wenn der Button gedrückt wird, geht die LED an (bzw. später die andere auch aus).

<img src="/images/Button_and_2_LEDs.png" width = 100%/>

## 3.2 LED Streifen "Neopixel"
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


## 3.3 LED Matrix "NeoHex"
- Verbindung zum Arduino **NICHT** via I2C (also nicht alle 4 Kabel!), sondern wie folgt:
    - Schwarz => GND
    - Rot => 5V
    - Gelb => Digitaler Pin am Adruino, z.B. im Beispiel Pin 2

**Wichtig**In der Arduino IDE muss noch "fastled" installiert werden.

1. Auf den "Library Manager" klicken (ganz links das Icon mit den Büchern)
2. Nach "fastled" suchen
3. Installieren

<img src="/images/Arduino_install_fastled.png" width = 50%/>

Dokumentation gibt es hier: https://fastled.io/docs/index.html

## 3.4 Servo Motor
- Pfad: `projects/outputs/simple_demo_servo_button`

Ein Button und ein Servo Motor (sozusagen ein Motor, der in eine festgelegte Position gedreht werden kann und sich nicht einfach nur dreht, bis man den Strom abstellt) werden mit dem Arduino verbunden.
Wenn der Button gedrückt wird, dreht sich der Servo weiter.

<img src="/images/Button_and_Servo.png" width = 100%/>

## 3.6 Wasserpumpe
Hier sind ein Input (Feuchtigkeitssensor) und ein Output (Pumpe) kombiniert.

- Pfad: `projects/outputs/input_humidity_output_pump`
- Verbindung:
    - Schwarz => GND
    - Rot => 5V
    - Gelb / IN => Digitaler Pin, z.B. Pin 2 im Beispiel. Dieser schaltet die Pumpe an (HIGH) und aus (LOW)
    - Weiß / Out => Analoger Pin, z.B. Pin A0 im Beispiel. Dieser list den analogen (ADC) Wert aus, welcher bei ca. 350 liegen sollte, wenn der Sensor trocken ist.


## 3.7 Weitere Outputs
Auch weitere Outputs finden sich in den Fundiono-Koffern der Schule. Dazu zählen z.B. Lautsprecher, ein Ampelmodul oder LCD-Modul. 


# Arduino UNO Pinbelegung
Quelle: [https://docs.arduino.cc/hardware/uno-rev3](https://docs.arduino.cc/hardware/uno-rev3)
<img src="https://docs.arduino.cc/static/2b141eb1cfe6f465a949c203e4af1b5f/A000066-pinout.png" width=100%>
