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

1. **Dari 1.x** — Upgrade besar-besaran dari Spring Boot 1.x (yang masih menggunakan Java 8) ke versi modern. Perubahan cukup signifikan karena banyak konfigurasi dan dependensi yang berubah.

   > Contoh: **1.5.x → 2.7.x** atau **3.x**.

2. **Ke Rilis Fitur Baru** — Upgrade dalam satu lini versi besar, misalnya dari 2.7.x ke 3.0.x. Perubahan besar terjadi karena migrasi dari **javax** ke **jakarta** serta perubahan pada konfigurasi otomatis.

   > Contoh: **2.7.x → 3.0.x** atau **3.1.x → 3.2.x**.

3. **Spring Boot CLI** — Upgrade pada tool command line khusus Spring Boot (CLI), yang digunakan untuk menjalankan dan mengelola aplikasi Spring Boot dari terminal.
   > Contoh: **spring boot version update**.

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

1. **Maven** — Paling populer, banyak dokumentasi, dan stabil. Kekurangannya adalah agak verbose karena banyak XML.

2. **Gradle** — Lebih fleksibel dengan sintaks yang lebih ringkas. Kekurangannya adalah kurang stabil dan learning curve-nya lebih tinggi.

3. **Ant** — Sangat lawas dan manual banget. Kekurangannya adalah tidak ada dependency management otomatis.

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

1. **Bean** — Objek yang dikelola oleh Spring.

   > Analoginya seperti "bahan baku" di dapur.

2. **Dependency Injection** — Spring yang menyediakan bean ke kelas yang membutuhkan.

   > Analoginya seperti koki meminta bahan ke gudang, bukan mencarinya sendiri.

3. **Autowired** — Anotasi untuk meminta Spring menginjeksi bean.
   > Analoginya seperti bilang "tolong beri saya bahan ini".

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

1. **IDE (VS Code)** — Klik tombol Run di **DemoApplication.java**. Cocok untuk development saat Anda mengetik kode sambil melihat hasil.

2. **Maven** — Jalankan perintah **mvn spring-boot:run**. Cocok untuk development atau di server yang memiliki Maven.

3. **Gradle** — Jalankan perintah **gradle bootRun**. Cocok untuk development atau di server yang memiliki Gradle.

4. **Packaged (JAR)** — Jalankan perintah **java -jar myapp.jar**. Cocok untuk production setelah aplikasi siap dikemas.

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

1. **SpringBootApplication** — Anotasi paling krusial dalam Spring Boot. Ia menggabungkan tiga anotasi sekaligus dalam satu baris: **Configuration**, **EnableAutoConfiguration**, dan **ComponentScan**. Praktis dan efisien.

2. **SpringApplication.run(...)** — Method statis yang menjadi pintu masuk utama untuk menjalankan seluruh aplikasi. Method inilah yang membuat Spring Boot benar-benar hidup dan siap melayani.

3. **DemoApplication.class** — Parameter ini memberi tahu Spring: "Ini adalah kelas utama Anda. Gali semua konfigurasi dan bean dari sini!"

4. **args** — Parameter yang menampung argumen dari command line, misalnya saat Anda menjalankan **java -jar app.jar --server.port=9090**.

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

1. **Command line arguments** — Paling tinggi. Contoh: **java -jar app.jar --server.port=9090**.

2. **Environment variables** — Contoh: **export SERVER_PORT=9090**.

3. **application.properties (di luar JAR)** — Berlokasi di folder **./config/application.properties**.

4. **application.properties (di dalam JAR)** — Berlokasi di **src/main/resources/application.properties**.

5. **Default value di kode** — Paling rendah. Contoh: **@Value("${server.port:8080}")**.
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

1. **dev (development)** — Lingkungan saat Anda mengembangkan kode. Penggunaan: database lokal, log detail, dan reload otomatis.

2. **test (testing)** — Lingkungan untuk tim QA melakukan pengecekan bug. Penggunaan: database test dan log secukupnya.

3. **prod (production)** — Aplikasi live yang digunakan oleh end-user. Penggunaan: database produksi, log minimal, dan performa dioptimalkan.

**Cara pake profiles:**

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

**Rangkuman 4 fitur inti:**

1. **SpringApplication** — Menjalankan aplikasi Spring Boot. Analoginya seperti tombol ON di remote TV.

2. **External Configuration** — Membaca konfigurasi dari luar aplikasi. Analoginya seperti remote control untuk mengganti channel.

3. **Profiles** — Membedakan konfigurasi untuk setiap environment. Analoginya seperti mode siang dan malam di HP.

4. **Logging** — Mencatat seluruh aktivitas aplikasi. Analoginya seperti CCTV yang merekam semua kejadian.

---

### 1. 5. Web

Jika Anda mengembangkan aplikasi web dengan Spring Boot, berikut adalah fitur-fitur penting yang perlu Anda ketahui:

- **Servlet Web** — Mendukung pengembangan aplikasi web berbasis servlet dengan Spring MVC, Jersey, serta berbagai embedded servlet container seperti Tomcat, Jetty, dan Undertow. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html#web.servlet)

- **Reactive Web** — Mendukung pengembangan aplikasi web reaktif dengan Spring WebFlux yang berjalan di atas embedded servlet container seperti Reactor Netty, Tomcat, Jetty, atau Undertow. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html#web.reactive)

- **Graceful Shutdown** — Fitur penghentian aplikasi secara bertahap yang memungkinkan request yang sedang berlangsung selesai terlebih dahulu sebelum aplikasi benar-benar dimatikan. Tersedia untuk semua embedded web server (Tomcat, Jetty, Reactor Netty, dan Undertow) serta mendukung aplikasi web servlet maupun reaktif. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html#web.graceful-shutdown)

- **Spring Security** — Auto-konfigurasi keamanan default, dukungan OAuth2 (Resource Server, Client, dan Authorization Server), serta integrasi SAML2. Spring Boot secara otomatis mengamankan semua endpoint dengan konfigurasi default yang dapat disesuaikan. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/security.html)

- **Spring Session** — Auto-konfigurasi untuk Spring Session yang memungkinkan pengelolaan session pengguna secara terdistribusi, mendukung berbagai penyimpanan seperti Redis, JDBC, dan Hazelcast. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-session)

- **Spring HATEOAS** — Auto-konfigurasi untuk Spring HATEOAS yang memudahkan pembuatan REST API dengan prinsip HATEOAS (Hypermedia as the Engine of Application State). [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-spring-hateoas)

### Notes:

**1. Aplikasi Web Servlet** (Spring MVC, Jersey, Embedded Servlet Containers)

**Apa itu Servlet?**  
Servlet adalah standar Java untuk menangani request HTTP dan menghasilkan response HTTP. Bayangin servlet kayak "pelayan" di restoran:

- Pelayan (servlet) menerima pesanan (HTTP request)
- Pelayan menyampaikan ke dapur (backend logic)
- Pelayan mengantarkan makanan ke meja (HTTP response)

A. **Spring MVC (Model-View-Controller):**  
Ini adalah framework web paling populer di Spring Boot. MVC adalah arsitektur yang memisahkan:

- Model: Data/logika bisnis
- View: Tampilan (HTML, JSON, dll) - sekarang jarang pake, lebih sering pake REST API
- Controller: Penghubung antara Model dan View (menerima request, panggil service, kirim response)

Contoh kode Spring MVC sederhana (REST API):

```
// FILE: com/example/demo/controller/UserController.java
// CONTROLLER SPRING MVC UNTUK REST API

package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;  // Untuk mapping GET request
import org.springframework.web.bind.annotation.PostMapping;  // Untuk mapping POST request
import org.springframework.web.bind.annotation.RequestBody;  // Untuk baca body request
import org.springframework.web.bind.annotation.RequestParam;  // Untuk baca query parameter
import org.springframework.web.bind.annotation.RestController;  // Untuk REST controller

import java.util.HashMap;
import java.util.Map;

@RestController  // Ini memberitahu Spring: "Kelas ini adalah REST controller!"
public class UserController {

    // GET /hello?name=Budi → response: "Hello, Budi!"
    @GetMapping("/hello")  // Mapping untuk HTTP GET ke path /hello
    public String sayHello(@RequestParam(defaultValue = "World") String name) {
        // @RequestParam membaca query parameter
        // Contoh: GET /hello?name=Budi → name = "Budi"
        // Contoh: GET /hello (gak ada param) → name = "World" (default)
        return "Hello, " + name + "!";
    }

    // GET /users → response: daftar user (JSON)
    @GetMapping("/users")
    public Map<String, Object> getUsers() {
        // Spring otomatis mengubah Map menjadi JSON
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Daftar user berhasil diambil");
        response.put("data", new String[]{"Budi", "Ani", "Citra"});
        return response;  // Otomatis jadi JSON: {"status":"success", ...}
    }

    // POST /users → bikin user baru
    @PostMapping("/users")  // Mapping untuk HTTP POST ke path /users
    public Map<String, Object> createUser(@RequestBody Map<String, String> user) {
        // @RequestBody membaca body request (format JSON)
        // Contoh request body: {"name":"Dewi", "email":"dewi@email.com"}

        String name = user.get("name");
        String email = user.get("email");

        // Di sini biasanya lo simpan ke database

        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "User " + name + " berhasil dibuat");
        response.put("data", user);
        return response;
    }
}
```

B. **Embedded Servlet Containers:**  
Spring Boot punya web server yang TERSEMBUNG di dalam aplikasi. Lo gak perlu install Tomcat atau Jetty terpisah!

1. **Tomcat** — Paling populer, stabil, dan banyak dokumentasi. Kekurangannya agak berat. Cocok digunakan sebagai default karena paling aman dan terpercaya.

2. **Jetty** — Lebih ringan dan cocok untuk development. Kekurangannya kurang populer. Cocok digunakan jika ingin hemat memory.

3. **Undertow** — Sangat ringan dan cepat. Kekurangannya dokumentasi terbatas. Cocok digunakan jika membutuhkan performa tinggi.

**Cara ganti web server (di pom.xml):**

```
<!-- FILE: pom.xml (bagian dependency) -->
<!-- Default: Tomcat (gak usah ditulis, udah include di spring-boot-starter-web) -->

<!-- Kalo mau ganti ke Jetty: -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <!-- Exclude Tomcat -->
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<!-- Tambahkan Jetty -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>
```

C. **Jersey:**  
Ini adalah implementasi lain dari JAX-RS (standar RESTful web services). Kalo lo pake Spring Boot, lebih baik pake Spring MVC karena lebih terintegrasi.

**2. Aplikasi Web Reaktif** (Spring WebFlux, Embedded Servlet Containers)

**Apa itu Web Reactive/Reaktif?**  
Ini adalah gaya pemrograman yang NON-BLOCKING (tidak memblokir). Bedanya dengan servlet tradisional:

1. **Cara Kerja**
   - **Servlet (Blocking):** 1 thread = 1 request
   - **WebFlux (Non-Blocking):** 1 thread bisa handle banyak request

2. **Skalabilitas**
   - **Servlet (Blocking):** Terbatas oleh jumlah thread
   - **WebFlux (Non-Blocking):** Bisa handle ribuan koneksi dengan sedikit thread

3. **Cocok Untuk**
   - **Servlet (Blocking):** Aplikasi dengan request sedikit tapi berat
   - **WebFlux (Non-Blocking):** Aplikasi dengan banyak request ringan (chat, streaming)

4. **Kemudahan**
   - **Servlet (Blocking):** Lebih mudah dipahami
   - **WebFlux (Non-Blocking):** Lebih kompleks (perlu paham reactive programming)

Contoh kode WebFlux (reaktif):

```
// FILE: com/example/demo/controller/ReactiveController.java
// CONTROLLER REAKTIF PAKE WEBFLUX

package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;  // Mono = 0 atau 1 data
import reactor.core.publisher.Flux;  // Flux = 0 atau banyak data

@RestController
public class ReactiveController {

    // Endpoint yang mengembalikan 1 data (Mono)
    @GetMapping("/reactive/hello")
    public Mono<String> sayHelloReactive() {
        // Mono.just() membuat data yang akan dikirim
        return Mono.just("Hello from Reactive WebFlux!");
        // Ini NON-BLOCKING: thread gak akan nunggu, langsung bisa handle request lain
    }

    // Endpoint yang mengembalikan banyak data (Flux)
    @GetMapping("/reactive/users")
    public Flux<String> getUsersReactive() {
        // Flux.just() membuat stream data
        return Flux.just("Budi", "Ani", "Citra", "Dewi");
        // Data akan dikirim satu-satu (streaming) ke client
    }
}
```

**3. Graceful Shutdown** (Penghentian Bertahap)

**Apa itu Graceful Shutdown?**  
Ini adalah kemampuan aplikasi untuk berhenti dengan sopan ketika dimatikan. Artinya:

- Aplikasi gak langsung mati paksa
- Aplikasi nunggu request yang sedang diproses selesai
- Aplikasi tolak request baru (kasih tahu "lagi mati nih")
- Setelah semua request selesai, baru aplikasi mati

**Kenapa ini penting?**  
Bayangin lo lagi kirim data penting ke server, tiba-tiba server mati. Data lo hilang. Graceful shutdown mencegah ini.

Cara enable graceful shutdown di application.properties:

```
# FILE: src/main/resources/application.properties
# KONFIGURASI GRACEFUL SHUTDOWN

# Enable graceful shutdown
server.shutdown=graceful  # Default: immediate (langsung mati)

# Waktu maksimum aplikasi nunggu request selesai (dalam detik)
spring.lifecycle.timeout-per-shutdown-phase=30s  # 30 detik
```

Cara matikan aplikasi dengan graceful:

```
// FILE: com/example/demo/DemoApplication.java
// CARA MATIKAN APLIKASI SECARA GRACEFUL

package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        // Simpan reference ke context
        ConfigurableApplicationContext context = SpringApplication.run(DemoApplication.class, args);

        // Cara matikan graceful (misal dipanggil dari kode)
        // context.close();  // Ini akan menjalankan graceful shutdown
    }
}
```

Di production:

```
# Kirim sinyal SIGTERM ke aplikasi (cara standar matikan aplikasi)
kill -15 <pid>  # Ini akan trigger graceful shutdown

# JANGAN pake kill -9 (force kill) kecuali darurat
```

**4. Spring Security** (Keamanan)

**Apa itu Spring Security?**  
Ini adalah framework untuk mengamankan aplikasi web. Fungsinya:

- Authentication: Siapa lo? (login pake username/password)
- Authorization: Apa yang boleh lo lakuin? (admin bisa hapus user, user biasa gak bisa)
- Protection: Perlindungan dari serangan (CSRF, XSS, SQL Injection)

Default Security Configuration (konfigurasi default):  
Kalo lo tambahin dependency Spring Security, secara DEFAULT:

- Semua endpoint dilindungi (harus login dulu)
- Username default: user
- Password default: muncul di console saat aplikasi jalan (random setiap startup)

Cara tambahin Spring Security di pom.xml:

```
<!-- FILE: pom.xml (bagian dependency) -->
<!-- Tambahkan ini buat aktifin Spring Security -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

Contoh konfigurasi security sederhana:

```
// FILE: com/example/demo/config/SecurityConfig.java
// KONFIGURASI SPRING SECURITY

package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration  // Ini kelas konfigurasi
@EnableWebSecurity  // Aktifkan Spring Security
public class SecurityConfig {

    // Konfigurasi aturan keamanan
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((requests) -> requests
                .requestMatchers("/public/**").permitAll()  // Endpoint /public/** boleh diakses tanpa login
                .requestMatchers("/admin/**").hasRole("ADMIN")  // Endpoint /admin/** cuma admin
                .anyRequest().authenticated()  // Semua request lain harus login
            )
            .formLogin((form) -> form
                .loginPage("/login")  // Halaman login custom
                .permitAll()  // Halaman login boleh diakses semua
            )
            .logout((logout) -> logout.permitAll());  // Logout boleh diakses semua

        return http.build();
    }

    // Buat user di memory (sementara, nanti pake database)
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.builder()
            .username("user")
            .password("{noop}password123")  // {noop} artinya plain text (jangan pake di production!)
            .roles("USER")
            .build();

        UserDetails admin = User.builder()
            .username("admin")
            .password("{noop}admin123")
            .roles("ADMIN", "USER")
            .build();

        return new InMemoryUserDetailsManager(user, admin);
    }
}
```

**OAuth2 dan SAML:**

Ini adalah standar untuk autentikasi via pihak ketiga:

-- OAuth2: Login pake Google, Facebook, GitHub, dll
-- SAML: Sering dipake di enterprise (Single Sign-On)

**5. Spring Session**

**Apa itu Spring Session?**  
Ini mengelola session user (data yang tersimpan di server untuk tiap user yang login).

Secara default: Session disimpan di memory server. Masalahnya:

- Kalo server mati, semua session hilang (user harus login ulang)
- Kalo ada banyak server (load balancing), session gak bisa dishare antar server
- Spring Session solusinya: Simpan session di tempat terpusat (Redis, database, dll).

Contoh koneksi Spring Session ke Redis:

```
<!-- FILE: pom.xml (bagian dependency) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.session</groupId>
    <artifactId>spring-session-data-redis</artifactId>
</dependency>
```

```
# FILE: src/main/resources/application.properties
# KONFIGURASI SPRING SESSION DENGAN REDIS

# Koneksi ke Redis
spring.redis.host=localhost
spring.redis.port=6379

# Tipe session store (Redis)
spring.session.store-type=redis

# Timeout session (60 menit)
server.servlet.session.timeout=60m
```

**6. Spring Hateoas**

**Apa itu HATEOAS?**  
HATEOAS = Hypermedia As The Engine Of Application State.

Ini adalah prinsip REST di mana response API menyertakan link ke action selanjutnya. Contoh:

```
{
  "id": 1,
  "name": "Budi",
  "_links": {
    "self": { "href": "http://api.example.com/users/1" },
    "update": { "href": "http://api.example.com/users/1" },
    "delete": { "href": "http://api.example.com/users/1" },
    "orders": { "href": "http://api.example.com/users/1/orders" }
  }
}
```

---

### 3.6. Data

Jika aplikasi Anda berurusan dengan tempat penyimpanan data, berikut adalah panduan konfigurasi yang dapat Anda ikuti:

- **SQL Database** — Mengkonfigurasi penyimpanan data SQL, termasuk dukungan database tertanam (embedded), connection pools, serta inisialisasi skema dan data. Spring Boot menyediakan auto-konfigurasi untuk berbagai fitur SQL seperti DataSource, JdbcTemplate, dan dukungan untuk framework seperti JPA, Hibernate, dan MyBatis. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/data.html#data.sql)

- **NoSQL Database** — Auto-konfigurasi untuk berbagai penyimpanan NoSQL yang didukung oleh Spring Boot, di antaranya:
  - **Redis** — Penyimpanan key-value untuk cache, session store, dan real-time. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/data.html#data.nosql.redis)
  - **MongoDB** — Database dokumen untuk data JSON dan aplikasi content management. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/data.html#data.nosql.mongodb)
  - **Neo4j** — Database graph untuk data dengan relasi kompleks seperti social network. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/data.html#data.nosql.neo4j)
  - **Cassandra** — Database wide-column untuk big data dan data yang ditulis terus-menerus. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/data.html#data.nosql.cassandra)
  - **Elasticsearch** — Database untuk pencarian dan analisis data real-time. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/data.html#data.nosql.elasticsearch)
  - **Couchbase** — Database multi-model yang dioptimalkan untuk aplikasi interaktif. [Pelajari selengkapnya](https://docs.spring.io/spring-boot/docs/current/reference/html/data.html#data.nosql.couchbase)

### Notes:

**1. SQL Database (DATABASE RELASIONAL)**

SQL adalah database relasional (RDBMS) = data disimpan dalam bentuk tabel (seperti Excel) dengan relasi antar tabel. Contoh: MySQL, PostgreSQL, Oracle, H2.

**A. Konfigurasi SQL Datastore** (Menyambungkan ke Database SQL)

Langkah 1: Tambahkan dependency di pom.xml

```
<!-- FILE: pom.xml -->
<!-- DEPENDENCY UNTUK DATABASE SQL (pilih salah satu) -->

<!-- 1. KALO PAKE MYSQL -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>

<!-- 2. KALO PAKE POSTGRESQL -->
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>

<!-- 3. KALO PAKE H2 (DATABASE MEMORY UNTUK TESTING) -->
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>

<!-- DEPENDENCY UNTUK SPRING DATA JPA (WAJIB) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

**JPA itu apa?**  
JPA = Java Persistence API. Ini adalah standar Java untuk mengakses database. Bayangin JPA kayak "penerjemah" yang ngubah:

- Objek Java → data di tabel database
- Query SQL → method Java

Langkah 2: Konfigurasi di application.properties

```
# FILE: src/main/resources/application.properties

# KONFIGURASI DATABASE MYSQL

# 1. KONEKSI DATABASE

# URL format: jdbc:mysql://host:port/nama_database

spring.datasource.url=jdbc:mysql://localhost:3306/mydb

# Username dan password database

spring.datasource.username=root
spring.datasource.password=rahasia

# 2. DRIVER JDBC (opsional kalo pake MySQL, otomatis detect)

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# 3. JPA (HIBERNATE) KONFIGURASI

# DDL = Data Definition Language (bikin tabel otomatis)

# create: hapus tabel lama, bikin baru setiap startup (HATI-HATI!)

# update: update struktur tabel kalo ada perubahan (AMAN UNTUK DEVELOPMENT)

# validate: cek apakah struktur tabel sesuai, kalo gak sesuai throw error

# none: gak lakuin apapun

spring.jpa.hibernate.ddl-auto=update

# Tampilkan query SQL yang dijalankan Hibernate di console

spring.jpa.show-sql=true

# Format SQL biar rapi

spring.jpa.properties.hibernate.format_sql=true

# Database dialect (bahasa yang dipake Hibernate buat generate SQL)

spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect

```

Contoh koneksi ke berbagai database:

```
# MYSQL
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=rahasia

# POSTGRESQL
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=postgres
spring.datasource.password=rahasia

# H2 (database memory - otomatis kebentuk saat aplikasi jalan)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.h2.console.enabled=true  # Aktifin H2 Console di browser
spring.h2.console.path=/h2-console  # Akses di http://localhost:8080/h2-console

# ORACLE
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:xe
spring.datasource.username=system
spring.datasource.password=rahasia
```

**B. Connection Pools** (Kumpulan Koneksi Database)

**Apa itu Connection Pool?**  
Bikin koneksi ke database itu LAMBAT (butuh waktu 100-500ms). Kalo tiap request bikin koneksi baru, aplikasi lo bakal lemot banget.

Connection Pool = kumpulan koneksi database yang udah siap dipake. Kayak "cadangan mobil" di rental. Kalo ada yang butuh, ambil dari pool, pake, balikin lagi.

Spring Boot default pake HikariCP (tercepat dan paling ringan).

Konfigurasi Connection Pool di application.properties:

```
# FILE: src/main/resources/application.properties
# KONFIGURASI CONNECTION POOL (HikariCP)

# Ukuran pool (jumlah koneksi yang disiapkan)
spring.datasource.hikari.maximum-pool-size=10  # Default: 10

# Waktu tunggu maksimum buat dapet koneksi (ms)
spring.datasource.hikari.connection-timeout=30000  # 30 detik

# Waktu maksimum koneksi bisa nganggur sebelum ditutup (ms)
spring.datasource.hikari.idle-timeout=600000  # 10 menit

# Maksimum umur koneksi (ms) - koneksi akan di-refresh
spring.datasource.hikari.max-lifetime=1800000  # 30 menit
```

Ilustrasi Connection Pool:

```
[Koneksi 1] → siap dipake
[Koneksi 2] → siap dipake
[Koneksi 3] → lagi dipake (request A)
[Koneksi 4] → lagi dipake (request B)
[Koneksi 5-10] → siap dipake

User request masuk → ambil koneksi dari pool (cepet!)
Selesai pake → balikin koneksi ke pool (biar bisa dipake yang lain)
```

**C. Embedded Database Support** (Database Tertanam)

**Apa itu Embedded Database?**  
Database yang jalan di memory dan otomatis kebentuk saat aplikasi jalan. Cocok buat:

- Testing (gak perlu install database)
- Development (cepat, gak ribet)
- Aplikasi sederhana

Contoh pake H2 (embedded database):

```
<!-- FILE: pom.xml -->
<!-- Tambahkan H2 dependency -->
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>
```

```
# FILE: src/main/resources/application.properties
# KONFIGURASI H2 (DATABASE TERTANAM)

# H2 akan bikin database di memory
spring.datasource.url=jdbc:h2:mem:testdb

# Aktifkan H2 Console (web interface buat liat database)
spring.h2.console.enabled=true

# URL H2 Console
spring.h2.console.path=/h2-console

# Biar data gak ilang setiap restart (kalo mau pake file, bukan memory)
# spring.datasource.url=jdbc:h2:file:./data/testdb
```

**D. Entity dan Repository** (Cara bikin tabel dan akses data)

Entity: Kelas Java yang merepresentasikan tabel di database.

```
// FILE: com/example/demo/entity/User.java
// ENTITY = TABLE DI DATABASE

package com.example.demo.entity;

import jakarta.persistence.*;  // import dari JAKARTA (bukan javax!)
import java.time.LocalDateTime;

@Entity  // Ini memberitahu JPA: "Kelas ini adalah tabel di database!"
@Table(name = "users")  // Nama tabel di database (opsional, kalo gak ditulis pake nama kelas)
public class User {

    @Id  // Ini adalah primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment
    private Long id;

    @Column(name = "username", nullable = false, unique = true, length = 50)
    private String username;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "is_active")
    private boolean isActive;

    // CONSTRUCTOR (kosong wajib ada buat JPA)
    public User() {}

    // CONSTRUCTOR dengan parameter
    public User(String username, String email, String fullName) {
        this.username = username;
        this.email = email;
        this.fullName = fullName;
        this.createdAt = LocalDateTime.now();
        this.isActive = true;
    }

    // GETTER DAN SETTER (WAJIB ADA!)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public boolean isActive() { return isActive; }
    public void setActive(boolean active) { isActive = active; }
}
```

Repository: Interface yang ngatur akses ke database.

```
// FILE: com/example/demo/repository/UserRepository.java
// REPOSITORY = TEMPAT AKSES DATA

package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;  // Interface utama
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository  // Ini memberitahu Spring: "Ini adalah repository!"
public interface UserRepository extends JpaRepository<User, Long> {
    // JpaRepository<User, Long> artinya:
    // - User = entity yang dihandle
    // - Long = tipe data primary key

    // JpaRepository udah nyediain method dasar:
    // - save()          → simpan/update data
    // - findById()      → cari berdasarkan ID
    // - findAll()       → ambil semua data
    // - deleteById()    → hapus berdasarkan ID
    // - count()         → hitung jumlah data
    // - existsById()    → cek apakah data ada

    // METHOD CUSTOM - SPRING BISA BACA NAMA METHOD!
    // Nama method harus sesuai format: findBy<NamaField>

    // Cari user berdasarkan username (exact match)
    Optional<User> findByUsername(String username);

    // Cari user berdasarkan email
    Optional<User> findByEmail(String email);

    // Cari user yang aktif
    List<User> findByIsActiveTrue();

    // Cari user yang full_name mengandung kata tertentu
    List<User> findByFullNameContaining(String keyword);

    // Cari user yang username mengandung kata tertentu
    List<User> findByUsernameContaining(String keyword);

    // KOMBINASI: cari user aktif dengan username mengandung kata
    List<User> findByIsActiveTrueAndUsernameContaining(String keyword);

    // QUERY CUSTOM PAKE JPQL (Java Persistence Query Language)
    @Query("SELECT u FROM User u WHERE u.username LIKE %:keyword% OR u.fullName LIKE %:keyword%")
    List<User> searchUsers(@Param("keyword") String keyword);

    // NATIVE QUERY (pake SQL asli)
    @Query(value = "SELECT * FROM users WHERE created_at > :date", nativeQuery = true)
    List<User> findUsersCreatedAfter(@Param("date") String date);
}
```

**PENJELASAN TAMBAHAN (ANOTASI JPA):**

1. **@Entity** — Menandakan bahwa kelas ini adalah sebuah tabel di database.

2. **@Table(name = "nama_tabel")** — Menentukan nama tabel di database (opsional). Jika tidak ditentukan, nama kelas akan digunakan sebagai nama tabel.

3. **@Id** — Menandakan bahwa field ini adalah primary key dari tabel.

4. **@GeneratedValue(strategy = GenerationType.IDENTITY)** — Menentukan bahwa nilai primary key akan di-generate secara otomatis dengan strategi auto-increment.

5. **@Column(name = "nama_kolom")** — Menentukan nama kolom di database (opsional). Jika tidak ditentukan, nama field akan digunakan sebagai nama kolom.

6. **@Column(nullable = false)** — Menentukan bahwa kolom ini wajib diisi (tidak boleh null).

7. **@Column(unique = true)** — Menentukan bahwa nilai pada kolom ini harus unik di seluruh tabel.

8. **@Column(length = 50)** — Menentukan panjang maksimum karakter untuk kolom, misalnya maksimal 50 karakter.

9. **@Transient** — Menandakan bahwa field ini TIDAK disimpan di database. Biasanya digunakan untuk field yang hanya bersifat sementara dalam logika aplikasi.

**E. CRUD Operation** (Create, Read, Update, Delete)

```
// FILE: com/example/demo/service/UserService.java
// SERVICE = TEMPAT BUSINESS LOGIC

package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;  // Inject repository

    // CREATE - CREATE DATA BARU
    public User createUser(String username, String email, String fullName) {
        // 1. Cek apakah username atau email udah dipake
        if (userRepository.findByUsername(username).isPresent()) {
            throw new RuntimeException("Username sudah terdaftar!");
        }
        if (userRepository.findByEmail(email).isPresent()) {
            throw new RuntimeException("Email sudah terdaftar!");
        }

        // 2. Buat user baru
        User user = new User(username, email, fullName);

        // 3. Simpan ke database
        return userRepository.save(user);  // save() = INSERT atau UPDATE
    }

    // READ - BACA SEMUA DATA
    public List<User> getAllUsers() {
        return userRepository.findAll();  // SELECT * FROM users
    }

    // READ - BACA BERDASARKAN ID
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);  // SELECT * FROM users WHERE id = ?
    }

    // READ - CARI USER BERDASARKAN USERNAME
    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // READ - CARI USER YANG AKTIF
    public List<User> getActiveUsers() {
        return userRepository.findByIsActiveTrue();
    }

    // UPDATE - UPDATE USER
    public User updateUser(Long id, String username, String email, String fullName) {
        // 1. Cari user di database
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User tidak ditemukan!"));

        // 2. Update field-fieldnya
        if (username != null) user.setUsername(username);
        if (email != null) user.setEmail(email);
        if (fullName != null) user.setFullName(fullName);

        // 3. Simpan perubahan
        return userRepository.save(user);  // save() = UPDATE karena ID udah ada
    }

    // DELETE - HAPUS USER
    public void deleteUser(Long id) {
        // Cek apakah user ada
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User tidak ditemukan!");
        }
        userRepository.deleteById(id);  // DELETE FROM users WHERE id = ?
    }

    // SEARCH - PENCARIAN
    public List<User> searchUsers(String keyword) {
        return userRepository.searchUsers(keyword);
    }
}
```

**2. NOSQL DATABASE (DATABASE NON-RELASIONAL)**

**Apa itu NoSQL?**  
Database yang gak pakai tabel seperti SQL. Cocok untuk:

- Data yang strukturnya berubah-ubah
- Skala besar (bisa di-cluster dengan mudah)
- Data yang gak perlu relasi kompleks

Pilihan NoSQL di Spring Boot:

1. **MongoDB** — Tipe Document. Cocok untuk data JSON dan aplikasi content management.

2. **Redis** — Tipe Key-Value. Cocok untuk cache, session store, dan real-time.

3. **Neo4j** — Tipe Graph. Cocok untuk data dengan relasi kompleks seperti social network.

4. **Cassandra** — Tipe Wide-column. Cocok untuk big data dan data yang ditulis terus-menerus.

**A. MongoDB**

Langkah 1: Tambah dependency

```
<!-- FILE: pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```

Langkah 2: Konfigurasi di application.properties

```
# FILE: src/main/resources/application.properties
# KONFIGURASI MONGODB

# URL koneksi ke MongoDB
spring.data.mongodb.uri=mongodb://localhost:27017/mydb

# Atau bisa dipisah:
# spring.data.mongodb.host=localhost
# spring.data.mongodb.port=27017
# spring.data.mongodb.database=mydb

# Username/password (kalo pake auth)
# spring.data.mongodb.username=user
# spring.data.mongodb.password=rahasia
```

Contoh Entity MongoDB:

```
// FILE: com/example/demo/entity/Product.java
// ENTITY MONGODB

package com.example.demo.entity;

import org.springframework.data.annotation.Id;  // import dari Spring Data, BUKAN jakarta!
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "products")  // Collection di MongoDB (mirip tabel di SQL)
public class Product {

    @Id  // _id di MongoDB
    private String id;  // MongoDB pake String, bukan Long

    private String name;
    private double price;
    private String category;
    private List<String> tags;  // Bisa array/list di MongoDB
    private boolean inStock;

    // Constructor, getter, setter...
    public Product() {}

    public Product(String name, double price, String category) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.inStock = true;
    }

    // Getter setter...
}
```

Contoh Repository MongoDB:

```
// FILE: com/example/demo/repository/ProductRepository.java
// REPOSITORY MONGODB

package com.example.demo.repository;

import com.example.demo.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    // MongoRepository<Product, String>:
    // - Product = entity
    // - String = tipe ID (bukan Long)

    // Cari produk berdasarkan nama
    List<Product> findByName(String name);

    // Cari produk dengan harga di bawah tertentu
    List<Product> findByPriceLessThan(double maxPrice);

    // Cari produk berdasarkan kategori dan stok tersedia
    List<Product> findByCategoryAndInStockTrue(String category);

    // QUERY CUSTOM (pake JSON query MongoDB)
    @Query("{ 'category' : ?0, 'price' : { $lt: ?1 } }")
    List<Product> findProductsByCategoryAndMaxPrice(String category, double maxPrice);
}
```

**B. Redis**

**Apa itu Redis?**  
Redis adalah key-value store (penyimpanan data dengan key dan value). SANGAT CEPAT karena data disimpan di memory. Cocok untuk:

- Cache (nyimpen hasil query biar gak query DB terus)
- Session storage (nyimpen session user)
- Rate limiting (batasi jumlah request)

Langkah 1: Tambah dependency

```
<!-- FILE: pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

Langkah 2: Konfigurasi

```
# FILE: src/main/resources/application.properties
# KONFIGURASI REDIS

# Koneksi ke Redis
spring.redis.host=localhost
spring.redis.port=6379
# spring.redis.password=rahasia  # kalo pake password
```

Contoh pake Redis untuk cache:

```
// FILE: com/example/demo/service/ProductService.java
// SERVICE DENGAN CACHE REDIS

package com.example.demo.service;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // @Cacheable: simpan hasil method di cache
    // Hasil pertama kali diambil dari database, selanjutnya dari cache (cepet!)
    @Cacheable(value = "products", key = "#category")
    public List<Product> getProductsByCategory(String category) {
        System.out.println("=== NGAMBIL DARI DATABASE (BUKAN CACHE) ===");
        // Ini cuma dipanggil sekali untuk tiap category
        // Selanjutnya hasilnya diambil dari Redis
        return productRepository.findByCategory(category);
    }

    // @CacheEvict: hapus cache
    @CacheEvict(value = "products", allEntries = true)
    public void refreshProductCache() {
        System.out.println("=== CACHE DIBERSIHKAN ===");
        // Ini dipanggil kalo ada update data, biar cache gak kadaluarsa
    }
}
```

Aktifkan caching di aplikasi utama:

```
// FILE: com/example/demo/DemoApplication.java
// AKTIFKAN CACHING

package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching  // ← Ini mengaktifkan fitur caching
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

**RANGKUMAN PERBEDAAN SQL vs NoSQL:**

1. **Struktur Data**
   - **SQL (MySQL, PostgreSQL):** Tabel dengan skema tetap.
   - **NoSQL (MongoDB, Redis):** JSON, key-value, graph (fleksibel).

2. **Relasi**
   - **SQL:** Support JOIN antar tabel.
   - **NoSQL:** Join terbatas atau tidak ada.

3. **Scalability**
   - **SQL:** Vertikal (upgrade server).
   - **NoSQL:** Horizontal (tambah server).

4. **ACID**
   - **SQL:** Support penuh.
   - **NoSQL:** Terbatas (kecuali Redis).

5. **Kapan Pake**
   - **SQL:** Data terstruktur, membutuhkan relasi.
   - **NoSQL:** Data berubah-ubah, membutuhkan scaling besar.

---
