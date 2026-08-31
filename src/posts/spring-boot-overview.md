---
title: "Spring Boot Overview"
description: "For every experience that shaped me, every lesson that meant something, every time that has passed, and every opportunity yet to come—thank you."
date: "2026-01-01"
author: "Farich Murobic"
tags: ["springboot", "java", "overview", "learning"]
image: "/assets/images/posts/thumbnail/Journey.png"
---

# Spring Boot Overview

<div style="font-style: italic; padding-left: 16px; border-left: 4px solid #ccc;" class="text-xs sm:text-base text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-600">
  <p class="mt2- font-bold">Bagian ini menyajikan ikhtisar menyeluruh dari dokumentasi referensi Spring Boot, yang dirancang untuk berfungsi sebagai peta jalan (roadmap) strategis sepanjang perjalanan belajar kita. Lalu, apa sebenarnya makna "ikhtisar" atau "peta" di sini? Pada intinya, bab ini ingin menyampaikan satu pesan pembuka: dokumentasi ini sangat ekstensif, maka izinkan saya memberikan gambaran besarnya terlebih dahulu—inilah yang akan kita pelajari dan bagaimana setiap bagian saling terhubung satu sama lain.</p>
  <p class="mt-2 font-bold">Bagi Anda yang ingin mendalami dokumentasi secara lengkap sesuai dengan versi Spring Boot yang digunakan, saya sarankan untuk merujuk langsung ke salinan terbaru dari dokumen referensi resmi Spring Boot, yang dapat diakses melalui <a href="https://docs.spring.io/spring-boot/docs/current/reference/" target="_blank" rel="noopener noreferrer">docs.spring.io/spring-boot/docs/current/reference/</a>. Di sana, Anda akan menemukan seluruh spektrum informasi teknis yang terus diperbarui seiring dengan rilis terbaru.</p>
</div>

---

## 1. Ikhtisar Dokumentasi

Bagian ini menyajikan ikhtisar singkat tentang dokumentasi referensi Spring Boot, yang dirancang untuk berfungsi sebagai peta jalan (roadmap) bagi seluruh isi dokumen. Dengan kata lain, bab ini adalah pintu masuk utama—memberikan gambaran besar sebelum Anda menyelami setiap detail teknis yang tersedia.

Salinan terbaru dari dokumentasi ini dapat diakses melalui [docs.spring.io/spring-boot/docs/current/reference/](https://docs.spring.io/spring-boot/docs/current/reference/)—yang selalu diperbarui seiring dengan setiap rilis terbaru Spring Boot.

---

### 1. 1. Memulai

Jika Anda baru pertama kali mengenal Spring Boot—atau bahkan Spring secara umum—maka Anda berada di tempat yang tepat. Bab ini dirancang khusus sebagai titik awal perjalanan kita, lengkap dengan panduan bertahap yang mudah diikuti.

**Peta Belajar (Roadmap) untuk Pemula**  
Sebelum menyelami teknis lebih dalam, mari kita pahami terlebih dahulu alur belajar yang akan kita lalui:

- **Dari Nol (From Scratch):** Ikhtisar → Persyaratan Sistem → Instalasi
- **Tutorial Praktis:** Bagian 1 → Bagian 2
- **Menjalankan Contoh Aplikasi Anda:** Bagian 1 → Bagian 2

---

### 1. 2. Meningkatkan Versi Dari Versi Sebelumnya

Pastikan Anda selalu menjalankan versi Spring Boot yang masih didukung secara resmi. Tergantung dari versi mana Anda melakukan upgrade, ada beberapa panduan tambahan yang dapat membantu proses migrasi Anda:

- **Dari 1.x** → [Meningkatkan dari 1.x](https://docs.spring.io/spring-boot/docs/current/reference/html/migration.html#migration.1x)
- **Ke rilis fitur baru** → [Meningkatkan ke Rilis Fitur Baru](https://docs.spring.io/spring-boot/docs/current/reference/html/migration.html#migration.new-feature-release)
- **Spring Boot CLI** → [Meningkatkan Spring Boot CLI](https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started.installing.cli.upgrading)

### Notes:

### 1. Apa Itu "Upgrading" atau "Meningkatkan Versi"?

Upgrading adalah proses memperbarui versi Spring Boot yang Anda gunakan ke versi yang lebih baru. Misalnya, dari Spring Boot 2.7.x ke 3.0.x, atau dari 3.1.x ke 3.4.x. Proses ini biasanya melibatkan penyesuaian konfigurasi, dependensi, dan terkadang kode agar kompatibel dengan versi terbaru.

### 2. Mengapa Hal Ini Penting?

- **Keamanan** — Versi lama terkadang memiliki celah keamanan yang telah diperbaiki di versi baru. Selalu gunakan versi yang masih [didukung secara resmi](https://spring.io/projects/spring-boot#support).

- **Fitur Baru** — Setiap rilis baru menghadirkan fitur-fitur yang tidak tersedia di versi sebelumnya, sehingga Anda dapat mengembangkan aplikasi dengan cara yang lebih modern dan efisien.

- **Dukungan Resmi** — Hanya versi terbaru yang mendapatkan dukungan penuh dari tim Spring. Versi lama biasanya memasuki masa end-of-life dan tidak lagi menerima perbaikan bug atau patch keamanan.

- **Kompatibilitas** — Library atau dependency lain mungkin mensyaratkan versi Spring Boot tertentu. Upgrade memastikan Anda tetap bisa menggunakan ekosistem Java terkini.

### 3. Tiga Skenario Upgrade yang Disebutkan

| Skenario                | Penjelasan                                                                                                                                                                         | Contoh                                   |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Dari 1.x**            | Upgrade besar-besaran dari Spring Boot 1.x (yang masih menggunakan Java 8) ke versi modern. Perubahan cukup signifikan karena banyak konfigurasi dan dependensi yang berubah.      | **1.5.x → 2.7.x** atau **3.x**           |
| **Ke Rilis Fitur Baru** | Upgrade dalam satu lini versi besar, misalnya dari 2.7.x ke 3.0.x. Perubahan besar terjadi karena migrasi dari **javax** ke **jakarta** serta perubahan pada konfigurasi otomatis. | **2.7.x → 3.0.x** atau **3.1.x → 3.2.x** |
| **Spring Boot CLI**     | Upgrade pada tool command line khusus Spring Boot (CLI), yang digunakan untuk menjalankan dan mengelola aplikasi Spring Boot dari terminal.                                        | **spring boot version update**           |

> **Panduan Resmi:** Untuk panduan upgrade yang lebih mendetail, silakan merujuk ke [Spring Boot Migration Guide](https://docs.spring.io/spring-boot/docs/current/reference/html/migration.html).

---

### 1. 3. Mengembangkan Dengan Spring Boot

Siap untuk benar-benar mulai menggunakan Spring Boot? Kami siap membantu Anda memulai dengan panduan berikut:

- **Sistem Build** — [Maven](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.build-systems.maven), [Gradle](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.build-systems.gradle), Ant, dan [Starters](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.build-systems.starters)
- **Praktik Terbaik** — [Struktur Kode](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.structuring-your-code), [Konfigurasi](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.configuration-classes), [Auto-Configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.auto-configuration), serta [Beans dan Dependency Injection](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.spring-beans-dependency-injection)
- **Menjalankan Kode Anda** — [Dari IDE](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.running-your-application.from-an-ide), [Dikemas](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.running-your-application.as-a-packaged-application), [Maven](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.running-your-application.using-the-maven-plugin), atau [Gradle](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.running-your-application.using-the-gradle-plugin)
- **Mengemas Aplikasi Anda** — [Production JARs](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.packaging-for-production)
- **Spring Boot CLI** — [Menggunakan CLI](https://docs.spring.io/spring-boot/docs/current/reference/html/cli.html#cli.using-the-cli)

### Notes:

### 1. Sistem Build (Maven | Gradle | Ant | Starters)

**A. Apa itu sistem build?**  
Sistem build adalah alat yang bertugas mengatur berbagai aspek dalam pengembangan project, di antaranya:

- **Dependency** — mengelola library apa saja yang dibutuhkan project Anda.
- **Compile** — mengubah kode Java menjadi bytecode yang dapat dijalankan.
- **Testing** — menjalankan unit test untuk memastikan kode berfungsi dengan baik.
- **Packaging** — membuat file **.jar** atau **.war** sebagai artefak aplikasi.
- **Running** — menjalankan aplikasi secara langsung.

**Pilihan sistem build di Spring Boot:**

| Build      | Kelebihan                                  | Kekurangan                                 |
| ---------- | ------------------------------------------ | ------------------------------------------ |
| **Maven**  | Paling populer, banyak dokumentasi, stabil | Agak verbose (banyak XML)                  |
| **Gradle** | Lebih fleksibel, sintaks lebih ringkas     | Kurang stabil, learning curve lebih tinggi |
| **Ant**    | Sangat lawas, manual banget                | Tidak ada dependency management otomatis   |

**B. Apa itu Starters?**  
Starters adalah kumpulan dependency yang sudah dikelompokkan berdasarkan fungsionalitas. Misalnya:

```
<!-- Contoh dependency starter di Maven (pom.xml) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <!-- Ini otomatis bawa semua dependency untuk bikin REST API -->
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
    <!-- Ini otomatis bawa semua dependency untuk koneksi database -->
</dependency>
```

> **Keuntungan Starter:** Lo cukup tambah 1 baris dependency, semua library yang dibutuhkan otomatis kebawa. Gak perlu tambahin satu-satu.

### 2. Best Practice (Structure | @Configuration | @EnableAutoConfiguration | Beans & DI)

**A. Struktur Kode:**  
Spring Boot punya struktur folder standar yang harus lo ikuti:

```
src/
├── main/
│   ├── java/
│   │   └── com/example/demo/
│   │       ├── DemoApplication.java     // ← FILE UTAMA (wajib ada)
│   │       ├── controller/              // ← Tempat REST controller
│   │       ├── service/                 // ← Tempat business logic
│   │       └── repository/              // ← Tempat akses database
│   └── resources/
│       ├── application.properties       // ← File konfigurasi
│       └── static/                      // ← File statis (CSS, JS, gambar)
└── test/
    └── java/
        └── com/example/demo/
            └── DemoApplicationTests.java // ← File unit test
```

**B. @Configuration:**  
Memberi tahu Spring bahwa kelas ini adalah sumber konfigurasi.

```
// KODE CONTOH
import org.springframework.context.annotation.Configuration;

@Configuration  // ← Memberi tahu Spring: "Ini kelas konfigurasi!"
public class AppConfig {
    // Di sini lo bisa definisikan bean-bean
}
```

**C. @EnableAutoConfiguration:**  
Memberi tahu Spring: "Tebak sendiri konfigurasi apa yang lo butuhin berdasarkan dependency yang lo tambahkan."

```
// KODE CONTOH
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@EnableAutoConfiguration  // ← Spring otomatis konfigurasi berdasarkan starter yang lo tambahin
public class DemoApplication {
    // Misal lo tambahin spring-boot-starter-web, Spring otomatis setup web server
}
```

**D. Beans dan Dependency Injection (DI):**

| Konsep                   | Penjelasan                                    | Analogi                                               |
| ------------------------ | --------------------------------------------- | ----------------------------------------------------- |
| **Bean**                 | Objek yang dikelola oleh Spring               | Kayak "bahan baku" di dapur                           |
| **Dependency Injection** | Spring yang nyediain bean ke kelas yang butuh | Kayak koki minta bahan ke gudang, bukan nyari sendiri |
| **@Autowired**           | Anotasi buat minta Spring inject bean         | Kayak bilang "tolong kasih gue bahan ini"             |

```
// KODE CONTOH
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service  // ← Memberi tahu Spring: "Ini adalah bean!"
public class UserService {

    @Autowired  // ← Minta Spring kasih objek UserRepository
    private UserRepository userRepository;

    // Sekarang lo bisa pake userRepository tanpa bikin new UserRepository()
}
```

### 3. Menjalankan Kode (IDE | Packaged | Maven | Gradle)

**Cara menjalankan aplikasi Spring Boot:**

| Metode             | Perintah                                    | Cocok Untuk                                    |
| ------------------ | ------------------------------------------- | ---------------------------------------------- |
| **IDE (VS Code)**  | Klik tombol Run di **DemoApplication.java** | Development (lo ngetik kode sambil liat hasil) |
| **Maven**          | **mvn spring-boot:run**                     | Development, atau di server yang ada Maven     |
| **Gradle**         | **gradle bootRun**                          | Development, atau di server yang ada Gradle    |
| **Packaged (JAR)** | **java -jar myapp.jar**                     | Production (setelah aplikasi siap)             |

### 4. Mengemas Aplikasi (Production jars)

**Apa itu Production jar?**  
File .jar yang udah berisi semua kode lo PLUS semua library yang dibutuhkan. Ini disebut "fat jar" atau "uber jar".

**Kenapa ini keren?**

- Lo cukup punya 1 file .jar
- Lo jalanin dengan java -jar namafile.jar
- Gak perlu install web server (Tomcat, Jetty) karena udah termasuk di dalamnya

**Cara bikin production jar pake Maven:**

```
mvn clean package
```

> Hasilnya ada di target/nama-aplikasi-version.jar

### 5. Spring Boot CLI

**CLI** = Command Line Interface. Ini adalah alat buat nge-run Spring Boot dari terminal tanpa IDE.

**Contoh penggunaan:**

```
# Bikin project baru
spring init my-project

# Jalanin file Groovy
spring run myapp.groovy
```

> **Catatan:** Lo gak perlu pake CLI kalo lo pake VS Code + Maven. CLI lebih populer di kalangan developer yang pake terminal doang.

---

### 1. 4. Mempelajari Tentang Fitur-Fitur Spring Boot

Butuh detail lebih lanjut tentang fitur inti Spring Boot? Konten berikut ini untuk Anda:

- **SpringApplication** — Mengelola siklus hidup aplikasi, mulai dari startup hingga shutdown. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.spring-application)
- **Konfigurasi Eksternal** — Membaca konfigurasi dari berbagai sumber seperti file properties, environment variables, dan command line arguments. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config)
- **Profiles** — Membedakan konfigurasi untuk setiap environment (dev, test, prod) dalam satu aplikasi. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.profiles)
- **Logging** — Mencatat aktivitas aplikasi untuk keperluan monitoring dan debugging. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.logging)

### Notes:

### 1. Spring Application (SpringApplication)

**Apa itu SpringApplication?**  
Ini adalah entry point atau titik masuk utama dari setiap aplikasi Spring Boot. Ini adalah kelas yang punya method run() yang bertugas:

- Memulai Spring container (IoC container)
- Menjalankan auto-configuration
- Menjalankan embedded web server (Tomcat, Jetty, dll)
- Menampilkan banner Spring Boot di console

**Contoh kode DASAR yang WAJIB ADA di setiap project Spring Boot:**

```
// FILE: src/main/java/com/example/demo/DemoApplication.java
// INI ADALAH FILE UTAMA - WAJIB ADA!

package com.example.demo;  // Package utama project lo

import org.springframework.boot.SpringApplication;  // Import kelas SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication;  // Import anotasi utama

@SpringBootApplication  // ← Anotasi ajaib yang menggabungkan @Configuration, @EnableAutoConfiguration, dan @ComponentScan
public class DemoApplication {

    public static void main(String[] args) {
        // METHOD INI ADALAH GERBANG MASUK APLIKASI
        // SpringApplication.run() akan menjalankan seluruh aplikasi Spring Boot
        SpringApplication.run(DemoApplication.class, args);
        // Parameter 1: kelas utama (DemoApplication.class)
        // Parameter 2: argumen dari command line (args)

        // Setelah baris ini dijalankan, aplikasi Spring Boot sudah berjalan!
        // Web server udah nyala, lo bisa akses di http://localhost:8080
    }
}
```

Penjelasan kode di atas:

| **Baris**                      | **Penjelasan**                                                                                                                                                                                          |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **@SpringBootApplication**     | Anotasi paling krusial dalam Spring Boot. Ia menggabungkan tiga anotasi sekaligus dalam satu baris: **@Configuration** + **@EnableAutoConfiguration** + **@ComponentScan**. Praktis dan efisien, bukan? |
| **SpringApplication.run(...)** | Method statis yang menjadi pintu masuk utama untuk menjalankan seluruh aplikasi. Method inilah yang membuat Spring Boot benar-benar "hidup" dan siap melayani.                                          |
| **DemoApplication.class**      | Parameter ini memberi tahu Spring: _"Ini adalah kelas utama Anda. Gali semua konfigurasi dan bean dari sini!"_                                                                                          |
| **args**                       | Parameter yang menampung argumen dari command line—misalnya saat Anda menjalankan **java -jar app.jar --server.port=9090**.                                                                             |

Versi detail (kalo mau tau isi @SpringBootApplication):

```
// INI HANYA ILUSTRASI - GAK PERLU LO TULIS
// @SpringBootApplication sebenarnya adalah gabungan dari:

// 1. @Configuration         → Kelas ini punya bean definition
// 2. @EnableAutoConfiguration → Spring coba tebak konfigurasi
// 3. @ComponentScan         → Spring scan package ini dan sub-package-nya buat cari @Component, @Service, @Repository, @Controller

// Jadi dengan 1 baris @SpringBootApplication, lo dapet 3 fitur sekaligus!
```

### 2. External Configuration (Konfigurasi Eksternal)

**Apa itu External Configuration?**  
Ini adalah cara Spring Boot membaca konfigurasi dari LUAR kode Java. Artinya lo bisa ubah setting aplikasi tanpa harus recompile kode.

Sumber konfigurasi eksternal (urutan prioritas dari tertinggi ke terendah):

| **Prioritas** | **Sumber**                                | **Contoh**                                    |
| ------------- | ----------------------------------------- | --------------------------------------------- |
| 1 (Tertinggi) | Command line arguments                    | **java -jar app.jar --server.port=9090**      |
| 2             | Environment variables                     | **export SERVER_PORT=9090**                   |
| 3             | **application.properties** (di luar JAR)  | **./config/application.properties**           |
| 4             | **application.properties** (di dalam JAR) | **src/main/resources/application.properties** |
| 5 (Terendah)  | Default value di kode                     | **@Value("${server.port:8080}")**             |

Contoh file application.properties (paling umum dipakai):

```
# FILE: src/main/resources/application.properties
# INI ADALAH FILE KONFIGURASI - LO BISA UBAH SETTING DI SINI

# Setting server (web server)
server.port=8080  # Ganti port default (kalo 8080 kepake, ganti 9090)
server.servlet.context-path=/myapp  # URL base jadi http://localhost:8080/myapp

# Setting database (contoh pake MySQL)
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=rahasia

# Setting logging
logging.level.org.springframework=INFO
logging.level.com.example.demo=DEBUG

# Setting aplikasi custom (lo bisa bikin sendiri!)
app.name=Belajar Spring Boot
app.version=1.0.0
```

Cara baca konfigurasi di kode Java:

```
// FILE: com/example/demo/config/AppConfig.java
// CONTOH CARA BACA KONFIGURASI DARI application.properties

package com.example.demo.config;

import org.springframework.beans.factory.annotation.Value;  // Import ini buat baca nilai
import org.springframework.stereotype.Component;

@Component  // Biar Spring tahu ini bean
public class AppConfig {

    // @Value digunakan untuk membaca nilai dari application.properties
    // Format: @Value("${nama.property:default_value}")

    @Value("${app.name:Spring App}")  // Baca app.name, kalo gak ada pake "Spring App"
    private String appName;

    @Value("${app.version:1.0}")  // Baca app.version, kalo gak ada pake "1.0"
    private String appVersion;

    @Value("${server.port:8080}")  // Baca server.port, kalo gak ada pake 8080
    private int serverPort;

    // Getter biar bisa diakses kelas lain
    public String getAppName() {
        return appName;
    }

    public String getAppVersion() {
        return appVersion;
    }

    public int getServerPort() {
        return serverPort;
    }
}
```

### 3. Pofiles (Profil)

**Apa itu Profiles?**  
Profiles adalah cara Spring Boot untuk mengelompokkan konfigurasi berdasarkan environment (lingkungan). Biasanya ada 3 environment:

| **Environment**       | **Tujuan**                                 | **Penggunaan**                                        |
| --------------------- | ------------------------------------------ | ----------------------------------------------------- |
| **dev** (development) | Lingkungan saat Anda ngoding               | Database lokal, log detail, reload otomatis           |
| **test** (testing)    | Lingkungan untuk tim QA mengecek bug       | Database test, log secukupnya                         |
| **prod** (production) | Aplikasi live yang digunakan oleh end-user | Database produksi, log minimal, performa dioptimalkan |

Cara pake profiles:

Step 1: Bikin file konfigurasi per profile

```
# FILE: src/main/resources/application-dev.properties
# KONFIGURASI KHUSUS UNTUK PROFILE "dev"

server.port=8080
spring.datasource.url=jdbc:h2:mem:testdb  # Database memory (ringan)
logging.level.com.example.demo=DEBUG  # Log detail buat debugging
```

```
# FILE: src/main/resources/application-prod.properties
# KONFIGURASI KHUSUS UNTUK PROFILE "prod"

server.port=80
spring.datasource.url=jdbc:mysql://production-server:3306/proddb
spring.datasource.username=produser
spring.datasource.password=prodpassword
logging.level.com.example.demo=WARN  # Log cuma error/warning aja
```

Step 2: Aktifkan profile tertentu

```
# FILE: src/main/resources/application.properties
# KONFIGURASI DEFAULT (akan dipake kalo gak ada profile aktif)

spring.profiles.active=dev  # Aktifkan profile "dev"
```

Cara aktifkan profile lewat command line:

```
# Pake Maven
mvn spring-boot:run -Dspring-boot.run.profiles=prod

# Pake JAR
java -jar myapp.jar --spring.profiles.active=prod

# Pake environment variable
export SPRING_PROFILES_ACTIVE=prod
java -jar myapp.jar
```

Cara cek profile aktif di kode:

```
// FILE: com/example/demo/DemoApplication.java
// CARA CEK PROFILE AKTIF

package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;  // Import ini buat baca environment

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        // Jalankan aplikasi dan simpan reference ke ApplicationContext
        var context = SpringApplication.run(DemoApplication.class, args);

        // Ambil Environment dari context
        Environment env = context.getEnvironment();

        // Cek profile aktif
        String[] activeProfiles = env.getActiveProfiles();
        System.out.println("Profile aktif: " + String.join(", ", activeProfiles));

        // Cek default profile
        String[] defaultProfiles = env.getDefaultProfiles();
        System.out.println("Default profile: " + String.join(", ", defaultProfiles));
    }
}
```

### 4. Logging (Pencatatan Log)

**Apa itu Logging?**  
Logging adalah cara aplikasi mencatat jejak aktivitasnya. Ini sangat penting buat:

- Debugging (nyari bug)
- Monitoring (pantau aplikasi jalan)
- Audit (tau siapa melakukan apa)

Spring Boot pake Logback secara default (tapi bisa diganti ke Log4j2 kalo mau).

Contoh logging di kode:

```
// FILE: com/example/demo/controller/HelloController.java
// CONTOH LOGGING

package com.example.demo.controller;

import org.slf4j.Logger;  // Interface logging standar
import org.slf4j.LoggerFactory;  // Factory buat bikin Logger
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  // Ini adalah REST controller
public class HelloController {

    // Bikin logger khusus untuk kelas ini
    // LoggerFactory.getLogger(HelloController.class) - kalo class berubah, nama logger otomatis berubah
    private static final Logger log = LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/hello")  // Endpoint: GET /hello
    public String sayHello() {
        // LEVEL LOG (dari paling rendah ke paling tinggi):
        // TRACE < DEBUG < INFO < WARN < ERROR

        log.trace("Ini adalah log level TRACE - paling detail");  // Paling rendah
        log.debug("Ini adalah log level DEBUG - buat debugging");  // Kedua
        log.info("Ini adalah log level INFO - info umum");  // Ketiga (default)
        log.warn("Ini adalah log level WARN - peringatan");  // Keempat
        log.error("Ini adalah log level ERROR - error serius");  // Kelima (paling tinggi)

        // Log dengan parameter (lebih efisien)
        String name = "Budi";
        log.info("User dengan nama {} mengakses endpoint /hello", name);

        return "Hello, World!";
    }
}
```

Konfigurasi logging di application.properties:

```
# FILE: src/main/resources/application.properties
# KONFIGURASI LOGGING

# Set level logging global
logging.level.root=INFO  # Default: INFO

# Set level logging per package
logging.level.com.example.demo=DEBUG  # Package demo pake DEBUG
logging.level.org.springframework=WARN  # Spring pake WARN (biar gak spam)

# Output log ke file (selain console)
logging.file.name=application.log  # Nama file log
logging.file.path=./logs  # Folder tempat log disimpan

# Format log (opsional)
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n  # Format di console
logging.pattern.file=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n  # Format di file
```

Cara pake logging dengan parameter (best practice):

```
// LOG YANG BAIK (pake parameter placeholder {})

String username = "Budi";
int userId = 123;

// SALAH - pake string concatenation (bikin objek String baru)
log.debug("User: " + username + " dengan ID: " + userId + " login");  // JANGAN PAKE INI!

// BENAR - pake placeholder {}
log.debug("User: {} dengan ID: {} login", username, userId);  // PAKE INI!

// Kenapa lebih baik? Karena kalo level log-nya di atas DEBUG (misal INFO),
// Spring gak bakal nge-proses string concatenation, jadi lebih hemat memory.
```

Rangkuman 4 fitur inti:

| **Fitur**                  | **Fungsi**                              | **Analogi**                       |
| -------------------------- | --------------------------------------- | --------------------------------- |
| **SpringApplication**      | Menjalankan aplikasi Spring Boot        | Tombol "ON" di remote TV          |
| **External Configuration** | Membaca konfigurasi dari luar aplikasi  | Remote control buat ganti channel |
| **Profiles**               | Membedakan konfigurasi tiap environment | Mode siang/malam di HP            |
| **Logging**                | Mencatat seluruh aktivitas aplikasi     | CCTV yang merekam semua kejadian  |

---
