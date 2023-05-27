+++
title = "CreateX"
sort_by = "weight"
+++

# 1. Installation der Arduino IDE
Die Arduino IDE ist das Programm, welches wir verwenden werden um den Code für unseren Microcontroller zu bearbeiten und auch später (über USB) darauf zu übertragen.

- [Download](https://downloads.arduino.cc/arduino-ide/arduino-ide_2.1.0_Windows_64bit.exe) der Arduino IDE. Das ist eine .exe Datei, die man wie jedes andere Programm auf Windows installieren kann.
- [Installationsanleitung auf arduino.cc](https://docs.arduino.cc/software/ide-v2/tutorials/getting-started/ide-v2-downloading-and-installing) für eine detaillierte Beschreibung


# 2. Projektdateien
Damit wir nicht komplett von Null anfangen müssen, haben wir bereits ein paar Dateien vorbereiten, die uns als Grundlage für die Projekte dienen werden.
- [Ordner auf github.com](https://github.com/CreateX-org/workshop), dort kann man sich durch den Ordner klicken und die Dateien auch anschauen.
- [Download als .zip Datei](https://github.com/CreateX-org/workshop/archive/refs/heads/main.zip), um die Dateien in die Arduino IDE zu laden und auf den Microcontroller zu übertragen.

# 3. Projekte
## 3.1 Verschiedene Outputs
### 3.1.1 LED / 2 LEDs
- Pfad: `projects/outputs/simple_demo_leds_button`

Ein Button und eine LED (bzw. später 2) werden mit dem Arduino verbunden.
Wenn der Button gedrückt wird, geht die LED an (bzw. später die andere auch aus).

![](/images/Button_and_2_LEDs.png)

### 3.1.2 LED Streifen "Neopixel"
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

### 3.1.3 Servo Motor
- Pfad: `projects/outputs/simple_demo_servo_button`

Ein Button und ein Servo Motor (sozusagen ein Motor, der in eine festgelegte Position gedreht werden kann und sich nicht einfach nur dreht, bis man den Strom abstellt) werden mit dem Arduino verbunden.
Wenn der Button gedrückt wird, dreht sich der Servo weiter.


![](/images/Button_and_Servo.png)

## 3.2 Verschiedene Inputs

### 3.2.1 TOF (Time of Flight) Sensor

- Pfad: **>>> TO BE DONE <<<**

Ein Time of Flight Sensor (berechnet den Abstand zu einem Objekt durch Messung der Zeit, die das Licht braucht, um vom Sensor zum Objekt und wieder zurück zu kommen) werden mit dem Arduino verbunden.
Wenn sich ein Objekt wie z.B. eine Hand nahe genug am Sensor befindet, leuchtet die LED.

**WICHTIG**:
In der Arduino IDE muss noch "Adafruit Neopixel" installiert werden.

1. Auf den "Library Manager" klicken (ganz links das Icon mit den Büchern)
2. Nach "Adafruit_VL53L0X" suchen
3. Installieren

<img src="/images/Arduino_install_tof.png" width = 300px/>



```c, linenos
serial.println("Test");
pin.output(HIGH);
```