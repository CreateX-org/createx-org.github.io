+++
title = "CreateX"
sort_by = "weight"
+++

# 1. Installation der Arduino IDE
Die Arduino IDE ist das Programm, welches wir verwenden werden um den Code für unseren Microcontroller zu bearbeiten und auch später (über USB) darauf zu übertragen.

- [Download](https://downloads.arduino.cc/arduino-ide/arduino-ide_2.1.0_Windows_64bit.exe) der Arduino IDE. Das ist eine .exe Datei, die man wie jedes andere Programm auf Windows installieren kann.
- [Installationsanleitung auf arduino.cc](https://docs.arduino.cc/software/ide-v2/tutorials/getting-started/ide-v2-downloading-and-installing) für eine detaillierte Beschreibung


# 2. Projektdateien
Um nicht von Null beginnen zu müssen, haben wir bereits ein Dateien vorbereiten, die uns als Grundlage für die Projekte dienen werden. Darin finden sich für verschiedene Bauteile Beispiele mit Erklärungen.
- [Code auf github.com](https://github.com/CreateX-org/workshop), dort befinden sich die Dateien in verschiedenen Ordnern.
- [Download als .zip Datei](https://github.com/CreateX-org/workshop/archive/refs/heads/main.zip), um die Dateien in die Arduino IDE zu laden und auf den Microcontroller zu übertragen.

# 3. Projekte
Für eure eigenen Projekte stehen euch verschiedene Elemente/ Bauteile zur Verfügung die ihr mit dem Microntroller verbinden und dadurch steuern bzw. auslesen könnt. Diese gliedern sich in Input (zB Sensoren) und Output (zB LEDs).


## 3.1 Inputs
Ein "Input" ist ein Signal oder eine Information, die in den Mikrocontroller eingegeben oder eingelesen wird. Typischerweise werden Inputs in Form von elektrischen Signalen oder Spannungen bereitgestellt. Diese können von verschiedenen Quellen stammen, wie z.B. Sensoren, Tasten, Schaltern oder anderen Mikrocontrollern.


### 3.1.1 Time of Flight (TOF) Distanz Sensor

- Pfad: `projects/inputs/input_TOF`

Ein Time of Flight Sensor berechnet den Abstand zu einem Objekt durch Messung der Zeit, die das Licht braucht, um vom Sensor zum Objekt und wieder zurück zu kommen.

**WICHTIG**:
In der Arduino IDE muss noch "Adafruit_VL53L0X" installiert werden.

1. Auf den "Library Manager" klicken (ganz links das Icon mit den Büchern)
2. Nach "Adafruit_VL53L0X" suchen
3. Installieren

<img src="/images/Arduino_install_tof.png" width = 300px/>


Für beide folgenden Beispiele nutzen wir diesen Schaltkreis:
![](/images/input_TOF_output_Serial.png)

#### 3.1.1.1 Eine gemessene Distanz am Monitor auslesen

- Pfad: `projects/inputs/input_TOF/input_TOF_output_Serial`
  
Um den gemessenen Abstand zu sehen, müssen wir das Ergebnis des Sensor zunächst an einen Monitor senden. Wenn wir den Arduino dann mit einem Computer verbinden, können wir auf dem Seriellen Monitor der Arduino IDE das Ergebnis der Messung sehen.

![](/images/IDE_SeriellerMonitor.png)



#### 3.1.1.2 Distanz abhängig eine LED ein- und ausschalten

- Pfad: `projects/inputs/input_TOF/input_TOF_output_LED`

Wir können auch eine Reaktion auslösen sobald die Distanz unter einen gewissen Wert (zB 2cm) fällt. Wenn sich ein Objekt wie z.B. eine Hand nahe genug am Sensor befindet, leuchtet die LED.


### 3.1.2 Kapazitiver Touch Sensor

Todo.

### 3.1.3 Weitere Inputs
Natürlich stehen euch auch alle weiteren Inputs aus den Fundiono-Koffern der Schule zur Verfügung. Dazu zählen zB Temperatursensoren, Feuchtigkeitssensoren oder Tastenfelder. 


## 3.2 Outputs
Ein "Output" ist ein Signal oder eine Information, die der Mikrocontroller generiert oder ausgibt. Es handelt sich um die Reaktion des Mikrocontrollers auf interne Berechnungen oder Benutzereingaben. Den Output legeen wir duch den Code mit dem wir den Microntroller programmieren fest.

### 3.2.1 LED / 2 LEDs
- Pfad: `projects/outputs/simple_demo_leds_button`

Ein Button und eine LED (bzw. später 2) werden mit dem Arduino verbunden.
Wenn der Button gedrückt wird, geht die LED an (bzw. später die andere auch aus).

![](/images/Button_and_2_LEDs.png)

### 3.2.2 LED Streifen "Neopixel"
- Pfad: `projects/outputs/simple_demo_neopixel_button`

Ein Button und ein LED Streifen "Neopixel" werden mit dem Arduino verbunden.
Wenn der Button kurz gedrückt wird, springt die LED eins weiter.
Bei Gedrückthalten, springt die LED mit einer kurzen Verzögerung kontinuierlich weiter.

**WICHTIG**:
In der Arduino IDE muss noch "Adafruit Neopixel" installiert werden.

1. Auf den "Library Manager" klicken (ganz links das Icon mit den Büchern)
2. Nach "Adafruit Neopixel" suchen
3. Installieren

<img src="/images/Arduino_install_neopixel.png" width = 300px/>

![](/images/Button_and_Neopixel.png)

### 3.2.3 Servo Motor
- Pfad: `projects/outputs/simple_demo_servo_button`

Ein Button und ein Servo Motor (sozusagen ein Motor, der in eine festgelegte Position gedreht werden kann und sich nicht einfach nur dreht, bis man den Strom abstellt) werden mit dem Arduino verbunden.
Wenn der Button gedrückt wird, dreht sich der Servo weiter.


![](/images/Button_and_Servo.png)


### 3.2.4 Weitere Outputs
Auch weitere Outputs finden sich in den Fundiono-Koffern der Schule. Dazu zählen zB Lautsprecher, ein Ampelmodul oder LCD Modul. 



```c, linenos
serial.println("Test");
pin.output(HIGH);
```