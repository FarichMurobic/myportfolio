---
title: "Spring Boot Overview"
description: "Ikhtisar menyeluruh tentang dokumentasi referensi Spring Boot. Panduan ini memberikan gambaran besar tentang fitur-fitur utama, alur belajar, dan berbagai topik penting yang perlu kita ketahui sebelum mulai mengembangkan aplikasi dengan Spring Boot."
date: "2026-04-07"
author: "Farich Murobic"
tags: ["springboot", "java", "overview", "learning"]
image: "/assets/images/posts/thumbnail/Spring Boot.png"
---

# Spring Boot Overview

<div style="font-style: italic; padding-left: 16px; border-left: 4px solid #ccc;" class="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-600">

  <p class="mt-2 font-bold">Spring Boot memiliki ruang pembahasan yang cukup luas. Karena itu, sebelum masuk lebih jauh ke dalam setiap fitur dan konsepnya, saya ingin terlebih dahulu melihat gambaran besarnya. Bagi saya, bagian ini bukanlah tutorial teknis, melainkan sebuah peta untuk memahami bagaimana Spring Boot disusun, apa yang menjadi fokus utamanya, dan bagaimana berbagai bagian di dalamnya saling berhubungan.</p>

  <p class="mt-2 font-bold">Dokumentasi resmi Spring Boot sendiri memiliki cakupan yang luas, mulai dari langkah awal, pengembangan aplikasi, fitur-fitur inti, web, data, messaging, hingga deployment dan berbagai topik lanjutan. Jadi, daripada langsung masuk ke detail implementasi, saya akan melihat Spring Boot dari sudut pandang yang lebih umum terlebih dahulu—memahami apa yang ditawarkan, mengapa ia digunakan, dan bagaimana saya dapat menempatkan setiap konsepnya dalam satu gambaran yang utuh.</p>

  <p class="mt-2 font-bold">Jika setelah membaca bagian ini Anda ingin mendalami aspek teknis tertentu, saya sangat menyarankan untuk merujuk langsung ke <a href="https://docs.spring.io/spring-boot/reference/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">dokumentasi resmi Spring Boot</a>. Dokumentasi tersebut merupakan referensi utama yang mengikuti perkembangan versi Spring Boot dan menyediakan pembahasan yang jauh lebih lengkap mengenai setiap fitur dan kemampuan yang tersedia.</p>

</div>

---

## 1. Ikhtisar Dokumentasi

Bagian ini menjadi titik awal untuk memahami keseluruhan dokumentasi Spring Boot. Alih-alih langsung masuk ke pembahasan teknis, saya ingin terlebih dahulu melihat bagaimana dokumentasi tersebut disusun dan topik apa saja yang akan ditemui di dalamnya. Dengan begitu, setiap pembahasan berikutnya dapat ditempatkan dalam konteks yang lebih jelas.

Dokumentasi Spring Boot mencakup berbagai aspek pengembangan aplikasi, mulai dari pengenalan dan konfigurasi hingga pengembangan web, akses data, integrasi, pengujian, deployment, serta berbagai fitur pendukung lainnya. Karena cakupannya cukup luas, memahami struktur besarnya terlebih dahulu akan membantu saya menentukan bagian mana yang perlu dipelajari lebih mendalam sesuai kebutuhan.

Secara umum, ruang pembahasan dalam dokumentasi Spring Boot dapat dikelompokkan sebagai berikut:

| Area Pembahasan                                  | Fokus Utama                                                                                                 |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **Memulai**                                      | Panduan awal untuk memahami dasar-dasar Spring Boot dan cara memulai project dari nol.                      |
| **Memperbarui Versi Spring Boot**                | Proses upgrade versi Spring Boot, termasuk panduan migrasi dari versi lama ke versi terbaru.                |
| **Mengembangkan dengan Spring Boot**             | Konfigurasi, struktur aplikasi, dependency, serta pengembangan aplikasi Spring Boot secara umum.            |
| **Mempelajari Fitur-Fitur Spring Boot**          | Fitur inti Spring Boot seperti externalized configuration, profiles, logging, dan SpringApplication.        |
| **Web**                                          | Pengembangan aplikasi web, REST API, servlet, serta reactive web dengan Spring WebFlux.                     |
| **Data**                                         | Integrasi dengan database, JDBC, JPA, dan berbagai teknologi akses data lainnya.                            |
| **Messaging**                                    | Integrasi dengan sistem messaging seperti JMS, RabbitMQ, Kafka, dan komunikasi asynchronous.                |
| **IO (Input/Output)**                            | Operasi input/output, pengelolaan resource, serta integrasi dengan berbagai testing tools.                  |
| **Citra Kontainer (Container Images)**           | Packaging aplikasi ke dalam container image, dockerization, dan deployment ke container orchestration.      |
| **Pindah ke Produksi (Moving to Production)**    | Deployment, monitoring, health checks, logging, serta pengelolaan aplikasi di environment produksi.         |
| **Citra Native GraalVM (GraalVM Native Images)** | Membangun native image dengan GraalVM untuk mengurangi waktu startup dan konsumsi memory.                   |
| **Advanced Topics**                              | Berbagai fitur dan kemampuan lanjutan seperti custom auto-configuration, actuator endpoints, dan lain-lain. |

Tabel tersebut bukanlah batasan mutlak dari kemampuan Spring Boot, melainkan gambaran umum untuk membantu memahami bagaimana berbagai pembahasan di dalam dokumentasinya saling berkaitan.

Untuk referensi yang lebih lengkap dan selalu mengikuti perkembangan versi Spring Boot, saya menyarankan untuk merujuk langsung ke [dokumentasi referensi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/).

---

### 1.1 Memulai

Jika Anda baru pertama kali mengenal Spring Boot—atau bahkan belum terlalu familiar dengan ekosistem Spring—bagian ini dapat menjadi titik awal yang baik untuk memahami gambaran dasarnya. Saya tidak akan langsung membawa pembahasan ke dalam implementasi teknis, melainkan terlebih dahulu melihat hal-hal fundamental yang perlu diketahui sebelum mengenal Spring Boot lebih jauh.

#### Peta Pembahasan untuk Pemula

Sebelum masuk ke bagian-bagian yang lebih spesifik, ada beberapa tahapan dasar yang umumnya menjadi bagian dari perjalanan awal mengenal Spring Boot:

| Tahapan                            | Fokus Pembahasan                                                                                                            |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Dari Dasar**                     | Memahami gambaran umum, persyaratan sistem, hingga proses instalasi                                                         |
| **Mengenal Pengembangan Aplikasi** | Melihat bagaimana Spring Boot digunakan untuk membangun sebuah aplikasi tanpa langsung berfokus pada detail implementasinya |
| **Mengenal Contoh Aplikasi**       | Memahami gambaran aplikasi yang dibangun dengan Spring Boot sebagai konteks untuk pembahasan berikutnya                     |

Bagian ini pada dasarnya berfungsi sebagai pengantar. Setelah memahami gambaran dasarnya, pembahasan dapat dilanjutkan ke konsep-konsep Spring Boot yang lebih spesifik sesuai kebutuhan.

---

### 1.2 Meningkatkan Versi dari Versi Sebelumnya

Spring Boot terus berkembang melalui pembaruan versi yang membawa perubahan, penyempurnaan fitur, peningkatan keamanan, serta penyesuaian terhadap ekosistem Spring dan teknologi pendukung lainnya. Karena itu, ketika sebuah aplikasi menggunakan versi Spring Boot yang lebih lama, proses berpindah ke versi yang lebih baru perlu mempertimbangkan perubahan yang mungkin memengaruhi aplikasi tersebut.

Bagi saya, memahami konsep _upgrade_ bukan hanya tentang mengganti nomor versi pada sebuah proyek. Setiap rilis dapat membawa perubahan pada konfigurasi, dependency, API, maupun perilaku tertentu di dalam framework. Semakin jauh jarak antara versi yang digunakan dengan versi tujuan, semakin penting untuk memahami perubahan yang terjadi di antaranya.

Dokumentasi resmi Spring Boot menyediakan panduan migrasi untuk membantu memahami perubahan antarversi. Beberapa bagian yang dapat dijadikan referensi antara lain:

| Panduan                  | Fokus Pembahasan                                                                                                 |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Dari Spring Boot 1.x** | Membahas hal-hal yang perlu diperhatikan ketika berpindah dari generasi Spring Boot 1.x ke versi yang lebih baru |
| **Ke Rilis Fitur Baru**  | Membahas perubahan dan pertimbangan ketika melakukan upgrade ke rilis fitur berikutnya                           |
| **Spring Boot CLI**      | Menyediakan informasi terkait pembaruan versi Spring Boot CLI                                                    |

Sebagai contoh sederhana, proses upgrade pada project Maven dapat melibatkan perubahan versi Spring Boot pada `pom.xml`:

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>4.0.8</version>
    <relativePath/>
</parent>
```

Namun, mengganti nomor versi saja tidak selalu cukup. Setelah melakukan upgrade, project perlu diperiksa kembali untuk memastikan dependency, konfigurasi, API, dan kode aplikasi tetap kompatibel dengan versi yang baru.

Untuk melihat panduan migrasi dan perubahan versi secara lebih lengkap, saya menyarankan merujuk langsung ke [dokumentasi migrasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/upgrading.html). Dokumentasi tersebut menjadi referensi yang lebih tepat karena detail migrasi dapat berbeda bergantung pada versi asal dan versi Spring Boot yang menjadi tujuan upgrade.

---

### 1.3 Mengembangkan dengan Spring Boot

Setelah memahami gambaran umum dan hal-hal yang perlu diperhatikan ketika berpindah versi, pembahasan berikutnya mulai mengarah pada bagaimana Spring Boot digunakan dalam proses pengembangan aplikasi. Pada tahap ini, saya belum akan masuk ke langkah implementasi secara detail. Saya hanya ingin melihat komponen dan konsep utama yang biasanya akan ditemui ketika mulai membangun aplikasi menggunakan Spring Boot.

Salah satu hal pertama yang perlu diperhatikan adalah **build system**. Spring Boot dapat digunakan bersama beberapa build system, tetapi Maven dan Gradle menjadi pilihan yang paling umum. Build system tidak hanya membantu proses build aplikasi, tetapi juga berperan dalam pengelolaan dependency yang digunakan oleh proyek. Spring Boot menyediakan pengelolaan dependency yang terkurasi sehingga berbagai library dapat digunakan dengan versi yang lebih konsisten.

Sebagai contoh, project berbasis Maven menggunakan `pom.xml` untuk mendefinisikan dependency dan konfigurasi build:

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>4.0.8</version>
    <relativePath/>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

Selain build system, Spring Boot juga memiliki sejumlah konsep yang membantu menyederhanakan proses pengembangan. Beberapa di antaranya adalah **Starters**, **Auto-Configuration**, **Configuration**, serta **Beans dan Dependency Injection**. Konsep-konsep tersebut saling berhubungan dalam membentuk cara Spring Boot menyiapkan dan menjalankan sebuah aplikasi.

Secara garis besar, area yang akan saya temui ketika mengembangkan aplikasi dengan Spring Boot dapat digambarkan sebagai berikut:

| Area                             | Gambaran                                                                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Build System**                 | Mengelola proses build dan dependency aplikasi, terutama melalui Maven atau Gradle                      |
| **Starters**                     | Menyediakan kumpulan dependency yang umum dibutuhkan untuk jenis aplikasi tertentu                      |
| **Struktur Kode**                | Memberikan rekomendasi mengenai bagaimana package dan kelas aplikasi sebaiknya ditempatkan              |
| **Configuration**                | Mengatur bagaimana aplikasi dan berbagai komponennya dikonfigurasi                                      |
| **Auto-Configuration**           | Membantu Spring Boot melakukan konfigurasi berdasarkan dependency dan kondisi yang tersedia di aplikasi |
| **Beans & Dependency Injection** | Mengelola objek aplikasi sebagai Spring Beans dan menghubungkan dependency yang dibutuhkan              |
| **Running Application**          | Menjalankan aplikasi melalui IDE, sebagai packaged application, Maven, atau Gradle                      |
| **Packaging**                    | Menyiapkan aplikasi agar dapat dikemas dan dijalankan, termasuk sebagai executable JAR                  |
| **Spring Boot CLI**              | Menyediakan pendekatan berbasis command line untuk bekerja dengan Spring Boot                           |

### Contoh Struktur Aplikasi

Spring Boot sendiri tidak memaksakan satu struktur kode tertentu. Namun, dokumentasinya memberikan beberapa rekomendasi, seperti menempatkan main application class pada root package agar mekanisme component scanning dapat bekerja dengan lebih terarah.

Contoh sederhananya dapat terlihat seperti berikut:

```text
com.example.demo
├── DemoApplication.java
├── controller
│   └── HelloController.java
├── service
│   └── HelloService.java
└── repository
    └── HelloRepository.java
```

Main application class kemudian dapat menjadi titik awal aplikasi:

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

Anotasi `@SpringBootApplication` menjadi salah satu bagian penting dalam proses bootstrap aplikasi Spring Boot. Anotasi tersebut menggabungkan beberapa kemampuan utama yang dibutuhkan untuk konfigurasi dan component scanning aplikasi.

### Menjalankan Aplikasi

Dalam menjalankan aplikasi, Spring Boot memberikan beberapa pilihan, mulai dari IDE hingga aplikasi yang sudah dikemas sebagai executable JAR.

Untuk project Maven, aplikasi dapat dijalankan menggunakan:

```bash
mvn spring-boot:run
```

Aplikasi juga dapat terlebih dahulu dikemas menjadi JAR:

```bash
mvn clean package
```

Kemudian JAR tersebut dapat dijalankan menggunakan:

```bash
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

Dengan pendekatan tersebut, aplikasi Spring Boot dapat dikemas dan dijalankan sebagai aplikasi mandiri tanpa membutuhkan konfigurasi server aplikasi secara terpisah untuk skenario tertentu.

Bagi saya, bagian ini penting untuk membangun gambaran bahwa Spring Boot bukan hanya tentang satu atau dua fitur. Ia menyediakan sejumlah fasilitas yang saling melengkapi—mulai dari pengelolaan dependency, konfigurasi, proses bootstrap aplikasi, hingga packaging dan menjalankan aplikasi.

Untuk pembahasan teknis yang lebih mendalam, saya menyarankan untuk melihat langsung bagian [Developing with Spring Boot](https://docs.spring.io/spring-boot/reference/using/) pada dokumentasi resmi Spring Boot.

---

### 1.4 Mempelajari Fitur-Fitur Spring Boot

Setelah melihat bagaimana Spring Boot digunakan dalam proses pengembangan aplikasi, bagian berikutnya mulai memperkenalkan beberapa fitur inti yang menjadi bagian penting dari ekosistemnya. Saya tidak akan membahas setiap fitur sampai ke detail implementasinya di sini. Tujuannya lebih sederhana: memahami apa fungsi masing-masing fitur dan mengapa fitur tersebut penting dalam sebuah aplikasi Spring Boot.

Beberapa fitur yang menurut saya cukup penting untuk dikenali sejak awal adalah:

| Fitur                     | Gambaran Umum                                                                                                     |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **SpringApplication**     | Membantu melakukan bootstrap dan menjalankan aplikasi Spring dari entry point utama                               |
| **Konfigurasi Eksternal** | Memungkinkan konfigurasi aplikasi dipisahkan dari kode sehingga dapat disesuaikan dengan environment yang berbeda |
| **Profiles**              | Membantu memisahkan konfigurasi atau komponen tertentu berdasarkan environment yang sedang digunakan              |
| **Logging**               | Menyediakan mekanisme pencatatan aktivitas aplikasi yang berguna untuk observasi, debugging, dan pemantauan       |

#### SpringApplication

`SpringApplication` merupakan salah satu bagian penting dalam proses bootstrap aplikasi Spring Boot. Class ini menyediakan cara untuk menjalankan aplikasi Spring dari sebuah `main()` method dan membantu menyiapkan `ApplicationContext` yang diperlukan. Dalam aplikasi Spring Boot pada umumnya, proses ini biasanya terlihat melalui penggunaan `SpringApplication.run(...)`.

Contoh sederhananya:

```java
@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

Bagi saya, cara paling sederhana untuk memahaminya adalah melihat `SpringApplication` sebagai salah satu pintu masuk yang membantu membawa aplikasi dari proses startup menuju kondisi siap berjalan.

#### Konfigurasi Eksternal

Spring Boot memungkinkan konfigurasi aplikasi dipisahkan dari source code. Nilai konfigurasi dapat berasal dari beberapa sumber, seperti `application.properties`, `application.yaml`, environment variables, hingga command-line arguments.

Sebagai contoh, sebuah konfigurasi sederhana dapat ditempatkan di `application.properties`:

```properties
spring.application.name=demo
server.port=8080
```

Kemudian nilai tersebut dapat digunakan oleh aplikasi tanpa harus menuliskan nilainya secara langsung di dalam source code.

Dengan pendekatan ini, aplikasi yang sama dapat digunakan pada environment yang berbeda tanpa harus mengubah source code hanya karena konfigurasi lingkungannya berbeda.

Konsep ini menjadi sangat berguna ketika aplikasi mulai memiliki beberapa environment, misalnya development, testing, dan production.

#### Profiles

**Profiles** membantu memisahkan konfigurasi atau komponen aplikasi berdasarkan environment tertentu. Sebuah aplikasi dapat memiliki profile seperti `dev`, `test`, atau `prod`, sehingga konfigurasi yang digunakan dapat disesuaikan dengan kebutuhan masing-masing environment.

Sebagai contoh, aplikasi dapat memiliki file konfigurasi berikut:

`application-dev.properties`

```properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/demo_dev
```

`application-test.properties`

```properties
server.port=8081
spring.datasource.url=jdbc:h2:mem:testdb
```

Profile kemudian dapat diaktifkan melalui konfigurasi:

```properties
spring.profiles.active=dev
```

Dengan demikian, saya dapat membayangkan Profiles sebagai sebuah mekanisme untuk mengatakan kepada aplikasi: **"gunakan konfigurasi atau komponen tertentu ketika aplikasi berjalan dalam kondisi tertentu."**

#### Logging

Logging merupakan bagian penting dalam pengembangan dan pengoperasian aplikasi karena memberikan informasi mengenai apa yang sedang terjadi di dalam aplikasi. Spring Boot menyediakan dukungan terhadap sistem logging dan secara default dapat menggunakan Logback melalui dependency yang dibawa oleh starter tertentu.

Contoh sederhana penggunaan logger dalam sebuah class:

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DemoService {

    private static final Logger log =
            LoggerFactory.getLogger(DemoService.class);

    public void process() {
        log.info("Process started");
    }
}
```

Logging tidak hanya berguna ketika terjadi error. Informasi log juga dapat membantu memahami proses startup, aktivitas aplikasi, serta kondisi tertentu ketika aplikasi sedang berjalan.

Pengaturan seperti level logging juga dapat disesuaikan melalui konfigurasi aplikasi:

```properties
logging.level.root=INFO
logging.level.com.example.demo=DEBUG
```

### Gambaran Besarnya

Keempat fitur tersebut sebenarnya saling melengkapi. `SpringApplication` berkaitan dengan bagaimana aplikasi dimulai, konfigurasi eksternal membantu mengatur nilai yang digunakan aplikasi, Profiles membantu menyesuaikan konfigurasi berdasarkan environment, sedangkan Logging membantu kita memahami aktivitas aplikasi ketika sedang berjalan.

Secara sederhana, hubungan keempatnya dapat dirangkum sebagai berikut:

| Fitur                     | Peran dalam Aplikasi                                         |
| ------------------------- | ------------------------------------------------------------ |
| **SpringApplication**     | Memulai dan melakukan bootstrap aplikasi                     |
| **Konfigurasi Eksternal** | Menyediakan nilai konfigurasi dari luar source code          |
| **Profiles**              | Menentukan konfigurasi atau komponen berdasarkan environment |
| **Logging**               | Memberikan informasi mengenai aktivitas dan kondisi aplikasi |

Bagi saya, memahami hubungan sederhana ini lebih penting pada tahap awal daripada langsung menghafal setiap konfigurasi dan API yang tersedia. Setelah konsep dasarnya sudah jelas, masing-masing fitur dapat dipelajari lebih dalam sesuai kebutuhan aplikasi.

Untuk pembahasan yang lebih lengkap, saya menyarankan untuk melihat bagian [Core Features](https://docs.spring.io/spring-boot/reference/features/) pada dokumentasi resmi Spring Boot.

---

### 1.5 Web

Web merupakan salah satu area utama dalam penggunaan Spring Boot. Framework ini menyediakan berbagai fasilitas untuk membangun aplikasi web, mulai dari aplikasi berbasis servlet dengan Spring MVC hingga aplikasi reactive dengan Spring WebFlux.

Pada tahap overview, saya melihat bagian Web sebagai kumpulan kemampuan yang membantu aplikasi Spring Boot berkomunikasi melalui HTTP, menangani request dan response, mengelola keamanan, serta mendukung kebutuhan aplikasi ketika mulai digunakan dalam lingkungan yang lebih nyata.

Beberapa area penting yang dapat dikenali antara lain:

| Fitur                 | Gambaran Umum                                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Servlet Web**       | Mendukung pengembangan aplikasi web berbasis servlet, terutama melalui Spring MVC, dengan embedded server seperti Tomcat atau Jetty             |
| **Reactive Web**      | Mendukung pengembangan aplikasi reactive dan non-blocking melalui Spring WebFlux                                                                |
| **Graceful Shutdown** | Membantu aplikasi berhenti secara bertahap dengan memberikan kesempatan kepada request yang sedang berjalan untuk diselesaikan                  |
| **Spring Security**   | Menyediakan berbagai kemampuan untuk mengamankan aplikasi web, termasuk authentication dan authorization serta integrasi dengan OAuth2 dan SAML |
| **Spring Session**    | Membantu mengelola HTTP session dan memungkinkan penyimpanan session pada berbagai data store                                                   |
| **Spring HATEOAS**    | Membantu membangun RESTful API yang menggunakan hypermedia sebagai bagian dari representasi resource                                            |

#### Servlet Web

Pendekatan servlet merupakan salah satu model yang umum digunakan untuk membangun aplikasi web dengan Spring Boot. Melalui **Spring MVC**, aplikasi dapat menangani HTTP request dan response menggunakan model pemrograman berbasis servlet.

Spring Boot menyediakan dukungan untuk embedded web server sehingga aplikasi dapat dijalankan sebagai aplikasi mandiri. Tomcat dan Jetty merupakan beberapa server yang dapat digunakan dalam pendekatan ini.

Contoh sederhana controller menggunakan Spring MVC:

```java
@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello Spring Boot!";
    }
}
```

Dengan controller tersebut, request `GET /api/hello` dapat ditangani oleh aplikasi dan menghasilkan response berupa teks.

Spring Boot juga memungkinkan aplikasi dikemas bersama web server yang dibutuhkannya. Dengan pendekatan tersebut, developer tidak selalu perlu melakukan deployment aplikasi ke server aplikasi eksternal secara terpisah.

#### Reactive Web

Selain model servlet, Spring Boot juga mendukung pendekatan **reactive web** melalui **Spring WebFlux**.

WebFlux menggunakan model reactive yang dirancang untuk pemrosesan asynchronous dan non-blocking. Pendekatan ini berbeda dari Spring MVC sehingga penggunaannya biasanya dipilih berdasarkan karakteristik dan kebutuhan aplikasi, bukan sekadar karena dianggap lebih modern.

Contoh sederhana endpoint reactive:

```java
@RestController
@RequestMapping("/api")
public class ReactiveController {

    @GetMapping("/hello")
    public Mono<String> hello() {
        return Mono.just("Hello Reactive Spring Boot!");
    }
}
```

Spring Boot menyediakan dukungan embedded server untuk aplikasi reactive, termasuk Reactor Netty, serta dukungan terhadap Tomcat dan Jetty pada skenario yang sesuai.

Perbedaan sederhananya dapat dipahami seperti berikut:

| Pendekatan       | Teknologi      | Karakteristik                                                                 |
| ---------------- | -------------- | ----------------------------------------------------------------------------- |
| **Servlet Web**  | Spring MVC     | Model web berbasis servlet yang umum digunakan untuk aplikasi web tradisional |
| **Reactive Web** | Spring WebFlux | Model asynchronous dan non-blocking untuk kebutuhan reactive application      |

Tidak ada satu pendekatan yang selalu lebih baik. Pemilihannya bergantung pada kebutuhan aplikasi, jenis workload, dan kemampuan tim dalam menggunakan model programming tersebut.

#### Graceful Shutdown

**Graceful Shutdown** adalah mekanisme untuk menghentikan aplikasi secara bertahap. Ketika aplikasi menerima perintah untuk berhenti, request yang sedang diproses dapat diberikan kesempatan untuk selesai sebelum server benar-benar dihentikan.

Konsep ini menjadi penting terutama pada aplikasi yang berjalan di lingkungan production. Shutdown yang dilakukan secara tiba-tiba berpotensi membuat request yang sedang diproses terputus.

Pada Spring Boot, graceful shutdown dapat diaktifkan melalui konfigurasi:

```properties
server.shutdown=graceful
```

Dengan konfigurasi tersebut, proses shutdown aplikasi menjadi lebih terkontrol karena aplikasi memberikan kesempatan kepada request yang sedang berjalan untuk diselesaikan.

Secara sederhana:

**Graceful Shutdown = aplikasi berhenti dengan cara yang lebih terkontrol, bukan sekadar langsung memutus proses.**

#### Spring Security

Ketika aplikasi web membutuhkan keamanan, Spring Boot dapat bekerja bersama **Spring Security** untuk menangani berbagai kebutuhan keamanan aplikasi.

Jika Spring Security tersedia pada classpath, aplikasi web Spring Boot mendapatkan konfigurasi keamanan default. Konfigurasi tersebut dapat disesuaikan sesuai kebutuhan aplikasi melalui mekanisme yang disediakan Spring Security.

Contoh sederhana konfigurasi security:

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public").permitAll()
                .anyRequest().authenticated()
            );

        return http.build();
    }
}
```

Spring Security juga memiliki dukungan untuk berbagai skenario keamanan modern, termasuk OAuth2 dan SAML 2.0.

Pada tahap overview, hal yang paling penting untuk dipahami adalah bahwa Spring Security bukan sekadar fitur untuk membuat halaman login. Ia merupakan bagian dari ekosistem yang menangani **authentication, authorization, dan berbagai aspek keamanan aplikasi**.

#### Spring Session

Session digunakan untuk mempertahankan informasi tertentu yang berkaitan dengan pengguna selama beberapa request.

Spring Boot menyediakan auto-configuration untuk **Spring Session** dan mendukung beberapa jenis penyimpanan session. Untuk aplikasi servlet, misalnya, session dapat disimpan menggunakan Redis atau JDBC. Pada aplikasi reactive, Redis juga dapat digunakan sebagai salah satu pilihan penyimpanan.

Contoh konfigurasi sederhana untuk menggunakan Redis sebagai penyimpanan session dapat dituliskan sebagai berikut:

```properties
spring.session.store-type=redis
```

Kemampuan ini menjadi lebih relevan ketika aplikasi berjalan pada lebih dari satu instance. Session tidak harus selalu bergantung pada memory dari satu server sehingga dapat dikelola melalui penyimpanan yang dapat digunakan bersama.

Secara sederhana, **Spring Session membantu memisahkan pengelolaan session dari satu instance aplikasi tertentu.**

#### Spring HATEOAS

**Spring HATEOAS** digunakan ketika REST API ingin menerapkan konsep **HATEOAS (Hypermedia as the Engine of Application State)**.

Konsepnya adalah response API tidak hanya berisi data resource, tetapi juga dapat menyertakan informasi berupa link atau hubungan yang membantu client mengetahui tindakan atau resource lain yang berkaitan.

Contoh sederhana penggunaan Spring HATEOAS:

```java
@GetMapping("/users/{id}")
public EntityModel<User> getUser(@PathVariable Long id) {
    User user = userService.findById(id);

    return EntityModel.of(
        user,
        linkTo(methodOn(UserController.class).getUser(id)).withSelfRel()
    );
}
```

Response yang dihasilkan dapat menyertakan informasi resource beserta link yang berkaitan.

Namun, HATEOAS bukan persyaratan bagi setiap REST API. Ia lebih tepat dipandang sebagai pendekatan tertentu dalam merancang API yang membutuhkan hypermedia.

### Gambaran Besarnya

Jika seluruh pembahasan Web ini dirangkum, Spring Boot menyediakan beberapa lapisan kemampuan yang dapat digunakan sesuai kebutuhan:

| Fitur                 | Komponen            | Fungsi                                           |
| --------------------- | ------------------- | ------------------------------------------------ |
| **Servlet Web**       | Spring MVC          | Membangun aplikasi web berbasis servlet          |
| **Reactive Web**      | Spring WebFlux      | Membangun aplikasi web reactive dan non-blocking |
| **Graceful Shutdown** | Embedded Web Server | Menghentikan aplikasi secara bertahap            |
| **Security**          | Spring Security     | Menangani authentication dan authorization       |
| **Session**           | Spring Session      | Menyimpan dan mengelola session pengguna         |
| **HATEOAS**           | Spring HATEOAS      | Menyediakan link terkait dalam response API      |

Tidak semua aplikasi membutuhkan seluruh fitur tersebut. Aplikasi sederhana mungkin hanya membutuhkan Spring MVC, sementara aplikasi lain dapat membutuhkan reactive programming, security, distributed session, atau hypermedia.

Bagi saya, inti dari bagian ini adalah memahami bahwa **Spring Boot menyediakan fondasi untuk membangun aplikasi web dengan berbagai kebutuhan, tetapi pilihan fitur tetap bergantung pada karakteristik aplikasi yang sedang dibangun.**

Untuk pembahasan teknis yang lebih lengkap, saya menyarankan melihat bagian [Web](https://docs.spring.io/spring-boot/reference/web/) pada dokumentasi resmi Spring Boot.

### Dependencies

Contoh-contoh sebelumnya menggunakan beberapa modul Spring Boot. Dependency yang diperlukan dapat disesuaikan dengan fitur yang ingin digunakan.

Untuk aplikasi berbasis **Spring MVC**, gunakan `spring-boot-starter-web`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

Untuk aplikasi **Reactive Web** menggunakan Spring WebFlux:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

Untuk menggunakan **Spring Security**:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

Untuk menggunakan **Spring Session dengan Redis**:

```xml
<dependency>
    <groupId>org.springframework.session</groupId>
    <artifactId>spring-session-data-redis</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

Untuk menggunakan **Spring HATEOAS**:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-hateoas</artifactId>
</dependency>
```

Dengan demikian, dependency yang digunakan dalam contoh kode dapat terlihat jelas sejak awal. Pembaca juga dapat membedakan fitur mana yang berasal dari Spring Boot maupun modul Spring lainnya.

| Fitur                      | Dependency Maven                                                 |
| -------------------------- | ---------------------------------------------------------------- |
| **Spring MVC**             | `spring-boot-starter-web`                                        |
| **Spring WebFlux**         | `spring-boot-starter-webflux`                                    |
| **Spring Security**        | `spring-boot-starter-security`                                   |
| **Spring Session + Redis** | `spring-session-data-redis` dan `spring-boot-starter-data-redis` |
| **Spring HATEOAS**         | `spring-boot-starter-hateoas`                                    |

---

### 1.6 Data

Hampir setiap aplikasi membutuhkan tempat untuk menyimpan dan mengambil data. Karena itu, kemampuan aplikasi dalam berinteraksi dengan database menjadi salah satu bagian penting dalam pengembangan menggunakan Spring Boot.

Spring Boot menyediakan berbagai dukungan untuk database melalui ekosistem Spring, baik untuk **SQL** maupun **NoSQL**. Tujuannya adalah menyederhanakan konfigurasi dan integrasi sehingga aplikasi dapat berkomunikasi dengan data store tanpa harus menangani seluruh konfigurasi secara manual.

Secara sederhana, dukungan data dalam Spring Boot dapat dilihat seperti berikut:

| Data Access Layer | Teknologi | Keterangan                                                        |
| ----------------- | --------- | ----------------------------------------------------------------- |
| **SQL**           | JPA       | Akses database relasional menggunakan pendekatan ORM              |
| **SQL**           | JDBC      | Akses database secara langsung melalui JDBC                       |
| **SQL**           | MyBatis   | Framework persistence dengan kontrol SQL yang lebih eksplisit     |
| **NoSQL**         | Redis     | Penyimpanan key-value yang umum digunakan untuk cache dan session |
| **NoSQL**         | MongoDB   | Database berbasis dokumen                                         |
| **NoSQL**         | Cassandra | Database wide-column yang dirancang untuk skala besar             |

### SQL Database

**SQL (Structured Query Language)** merupakan pendekatan database yang umumnya menggunakan tabel, baris, kolom, serta hubungan antar-data yang terstruktur.

Spring Boot menyediakan berbagai fasilitas untuk mengintegrasikan aplikasi dengan database SQL, termasuk:

| Komponen                    | Peran                                                                         |
| --------------------------- | ----------------------------------------------------------------------------- |
| **DataSource**              | Mengelola koneksi aplikasi ke database                                        |
| **Connection Pool**         | Mengelola sekumpulan koneksi yang dapat digunakan kembali oleh aplikasi       |
| **JdbcTemplate**            | Menyederhanakan operasi database menggunakan JDBC                             |
| **Spring Data JPA**         | Menyediakan abstraksi untuk bekerja dengan data menggunakan konsep repository |
| **Hibernate**               | Salah satu implementasi JPA yang banyak digunakan dalam ekosistem Spring      |
| **Database Initialization** | Membantu proses inisialisasi schema dan data pada kondisi tertentu            |

Dengan dukungan tersebut, aplikasi Spring Boot dapat menggunakan berbagai database SQL seperti MySQL, PostgreSQL, Oracle, SQL Server, dan database lainnya yang didukung oleh driver serta konfigurasi yang sesuai.

Secara konseptual, hubungan antara aplikasi dan database dapat dipahami seperti berikut:

| Layer                     | Komponen                 | Peran                                               |
| ------------------------- | ------------------------ | --------------------------------------------------- |
| **Application**           | Aplikasi                 | Bagian aplikasi yang membutuhkan akses data         |
| **Data Access**           | Spring Data / JDBC / JPA | Menyediakan cara untuk berinteraksi dengan database |
| **Data Source**           | DataSource               | Menyediakan koneksi ke database                     |
| **Connection Management** | Connection Pool          | Mengelola dan menggunakan kembali koneksi database  |
| **Database**              | SQL Database             | Tempat penyimpanan data utama                       |

Salah satu pendekatan yang populer adalah **Spring Data JPA**, terutama ketika aplikasi menggunakan model domain berbasis object dan membutuhkan abstraction layer untuk operasi persistence.

Sebagai contoh sederhana, dependency Spring Data JPA dapat ditambahkan melalui Maven:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

Jika menggunakan MySQL, driver database juga perlu ditambahkan:

```xml
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>
```

Konfigurasi koneksi database kemudian dapat ditempatkan pada `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/demo
spring.datasource.username=root
spring.datasource.password=secret
```

Contoh sederhana entity menggunakan JPA:

```java
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
}
```

Repository kemudian dapat digunakan sebagai abstraction layer untuk operasi persistence:

```java
public interface UserRepository extends JpaRepository<User, Long> {
}
```

Namun, JPA bukan satu-satunya pilihan. Untuk kebutuhan tertentu, penggunaan JDBC secara langsung atau framework lain seperti MyBatis juga dapat menjadi pilihan.

Informasi lebih lengkap mengenai dukungan SQL dapat dilihat pada [dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/sql.html).

---

### NoSQL Database

Berbeda dengan database relasional, **NoSQL (Not Only SQL)** merupakan istilah yang mencakup berbagai model penyimpanan data non-relasional.

NoSQL bukan satu jenis database dengan satu struktur tertentu. Di dalamnya terdapat beberapa pendekatan penyimpanan yang berbeda, seperti document, key-value, wide-column, dan graph.

Karena itu, pemilihan database NoSQL biasanya disesuaikan dengan bentuk data dan kebutuhan aplikasi.

Beberapa teknologi yang terintegrasi dengan ekosistem Spring Boot antara lain:

| Database          | Model Data           | Gambaran Penggunaan                                                             |
| ----------------- | -------------------- | ------------------------------------------------------------------------------- |
| **Redis**         | Key-Value            | Cache, session, dan kebutuhan data berumur pendek atau akses sangat cepat       |
| **MongoDB**       | Document             | Data berbentuk dokumen yang fleksibel, misalnya data JSON                       |
| **Neo4j**         | Graph                | Data yang memiliki hubungan atau relasi kompleks                                |
| **Cassandra**     | Wide-Column          | Sistem terdistribusi dengan kebutuhan scalability dan throughput tinggi         |
| **Elasticsearch** | Search / Analytics   | Pencarian dan analisis data dalam jumlah besar                                  |
| **Couchbase**     | Document / Key-Value | Aplikasi yang membutuhkan penyimpanan dokumen dan akses data berperforma tinggi |

#### Redis

**Redis** merupakan in-memory data store yang menggunakan model key-value dan banyak digunakan untuk kebutuhan seperti caching, session management, serta penyimpanan data yang membutuhkan akses sangat cepat.

Dalam arsitektur aplikasi, Redis sering kali ditempatkan sebagai lapisan tambahan di antara aplikasi dan database utama:

| Komponen          | Peran                                                           |
| ----------------- | --------------------------------------------------------------- |
| **Application**   | Aplikasi yang membutuhkan akses data                            |
| **Redis**         | Cache untuk menyimpan data yang sering diakses agar lebih cepat |
| **Main Database** | Menyimpan data utama aplikasi secara permanen                   |

Spring Boot menyediakan integrasi dengan Redis melalui Spring Data Redis.

Dependency sederhananya:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

Contoh penggunaan sederhana:

```java
@Service
public class CacheService {

    private final StringRedisTemplate redisTemplate;

    public CacheService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void save(String key, String value) {
        redisTemplate.opsForValue().set(key, value);
    }
}
```

Dokumentasi lebih lengkap dapat dilihat pada [bagian Redis di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/redis.html).

#### MongoDB

**MongoDB** merupakan database document-oriented. Data disimpan dalam bentuk dokumen yang memiliki struktur fleksibel.

Pendekatan ini dapat berguna ketika struktur data aplikasi tidak selalu cocok dengan model tabel relasional tradisional.

Spring Boot dapat diintegrasikan dengan MongoDB melalui Spring Data MongoDB.

Dependency sederhananya:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```

Contoh document sederhana:

```java
@Document
public class User {

    @Id
    private String id;

    private String username;
}
```

Repository dapat dibuat menggunakan Spring Data MongoDB:

```java
public interface UserRepository
        extends MongoRepository<User, String> {
}
```

Informasi lebih lanjut tersedia pada [bagian MongoDB di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/mongodb.html).

#### Neo4j

**Neo4j** merupakan database berbasis graph yang menyimpan data sebagai node dan relationship.

Model seperti ini dapat berguna ketika hubungan antar-data menjadi bagian penting dari domain aplikasi.

Contohnya dapat dipahami melalui model berikut:

| Entitas  | Relasi  | Entitas  | Keterangan                                              |
| -------- | ------- | -------- | ------------------------------------------------------- |
| **User** | follows | **User** | User dapat mengikuti user lain                          |
| **User** | likes   | **Post** | User dapat menyukai sebuah post                         |
| **Post** | related | **Post** | Sebuah post dapat memiliki hubungan dengan post lainnya |

Spring Boot menyediakan dukungan untuk integrasi dengan Neo4j melalui Spring Data Neo4j.

Dependency sederhananya:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-neo4j</artifactId>
</dependency>
```

Dokumentasi lebih lanjut tersedia pada [bagian Neo4j di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/neo4j.html).

#### Cassandra

**Apache Cassandra** merupakan database terdistribusi dengan model wide-column. Cassandra dirancang untuk menangani data dalam jumlah besar dengan kebutuhan availability dan scalability pada lingkungan terdistribusi.

Karakteristik tersebut membuat Cassandra berbeda dari database relasional maupun document database.

Spring Boot menyediakan integrasi dengan Cassandra melalui Spring Data Cassandra.

Dependency sederhananya:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-cassandra</artifactId>
</dependency>
```

Dokumentasi lebih lengkap tersedia pada [bagian Cassandra di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/cassandra.html).

#### Elasticsearch

**Elasticsearch** merupakan search and analytics engine yang banyak digunakan untuk kebutuhan pencarian, filtering, serta analisis data.

Contohnya, sebuah aplikasi dapat menggunakan database relasional sebagai sumber data utama dan Elasticsearch sebagai mesin pencarian untuk menyediakan fitur pencarian yang lebih kompleks.

| Komponen        | Terhubung ke      | Peran                                                                                 |
| --------------- | ----------------- | ------------------------------------------------------------------------------------- |
| **Application** | **SQL Database**  | **Source of Truth** — menyimpan data utama dan menjadi sumber kebenaran data aplikasi |
| **Application** | **Elasticsearch** | **Search & Analytics** — digunakan untuk pencarian dan analisis data                  |

Spring Boot menyediakan dukungan untuk integrasi dengan Elasticsearch melalui Spring Data Elasticsearch.

Dependency sederhananya:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
</dependency>
```

Informasi lebih lengkap tersedia pada [bagian Elasticsearch di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/elasticsearch.html).

#### Couchbase

**Couchbase** merupakan database yang mendukung model document dan key-value. Teknologi ini dirancang untuk kebutuhan aplikasi yang memerlukan akses data dengan latency rendah serta kemampuan scaling pada lingkungan terdistribusi.

Spring Boot menyediakan integrasi dengan Couchbase melalui Spring Data Couchbase.

Dependency sederhananya:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-couchbase</artifactId>
</dependency>
```

Informasi lebih lanjut tersedia pada [bagian Couchbase di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/couchbase.html).

---

### SQL atau NoSQL?

Saya tidak melihat SQL dan NoSQL sebagai dua pilihan yang harus dipertentangkan secara sederhana.

Keduanya memiliki karakteristik dan kebutuhan penggunaan yang berbeda.

| Pertimbangan          | SQL                                                                     | NoSQL                                                                  |
| --------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Struktur Data**     | Terstruktur dan relasional                                              | Bergantung pada model database                                         |
| **Relasi Antar-Data** | Sangat kuat                                                             | Bergantung pada teknologi yang digunakan                               |
| **Schema**            | Umumnya lebih terstruktur                                               | Dapat lebih fleksibel                                                  |
| **Query**             | Menggunakan SQL                                                         | Bergantung pada database                                               |
| **Scalability**       | Dapat dilakukan secara horizontal maupun vertikal, tergantung teknologi | Banyak teknologi NoSQL dirancang dengan fokus pada distributed scaling |
| **Contoh**            | MySQL, PostgreSQL, Oracle                                               | Redis, MongoDB, Cassandra, Neo4j                                       |

Dalam praktiknya, sebuah aplikasi bahkan dapat menggunakan **lebih dari satu jenis database**.

Misalnya:

| Komponen      | Teknologi     | Peran                                            |
| ------------- | ------------- | ------------------------------------------------ |
| **Main Data** | MySQL         | Menyimpan data utama aplikasi                    |
| **Cache**     | Redis         | Menyimpan data sementara untuk mempercepat akses |
| **Search**    | Elasticsearch | Menangani pencarian dan analisis data            |

Masing-masing digunakan untuk kebutuhan yang berbeda.

Karena itu, menurut saya pertanyaan yang lebih tepat bukan **"SQL atau NoSQL mana yang lebih bagus?"**, tetapi **"Model penyimpanan data mana yang paling sesuai dengan kebutuhan aplikasi yang sedang saya bangun?"**

### Kesimpulan

Bagian Data dalam Spring Boot pada dasarnya memberikan fondasi untuk menghubungkan aplikasi dengan berbagai jenis data store.

Untuk database SQL, saya dapat memanfaatkan pendekatan seperti JDBC, JPA, Hibernate, atau MyBatis. Sementara itu, untuk kebutuhan tertentu, ekosistem Spring juga menyediakan integrasi dengan berbagai teknologi NoSQL seperti Redis, MongoDB, Neo4j, Cassandra, Elasticsearch, dan Couchbase.

Yang paling penting pada tahap overview ini bukan menghafalkan semua teknologi tersebut, tetapi memahami bahwa **Spring Boot menyediakan lapisan integrasi yang membantu aplikasi berkomunikasi dengan berbagai jenis penyimpanan data sesuai kebutuhan arsitekturnya.**

### Batasan Contoh Konfigurasi Database

Contoh konfigurasi database di atas sengaja dibuat sederhana untuk kebutuhan pembelajaran. Konfigurasi tersebut **bukan merupakan konfigurasi yang direkomendasikan untuk production**.

Pada aplikasi nyata, beberapa hal perlu diperhatikan, seperti:

| Aspek                   | Contoh Pembelajaran                            | Aplikasi Production                                                   |
| ----------------------- | ---------------------------------------------- | --------------------------------------------------------------------- |
| **Database URL**        | Ditulis langsung pada `application.properties` | Dapat menggunakan environment variable atau secret management         |
| **Username & Password** | Ditulis langsung sebagai contoh                | Sebaiknya tidak disimpan sebagai credential plaintext di source code  |
| **Database**            | Menggunakan database lokal                     | Dapat menggunakan database terkelola atau server database khusus      |
| **Connection Pool**     | Menggunakan konfigurasi default                | Perlu disesuaikan dengan workload dan kapasitas database              |
| **Schema Migration**    | Tidak dibahas                                  | Umumnya menggunakan tool seperti Flyway atau Liquibase                |
| **Security**            | Konfigurasi minimal                            | Membutuhkan pengelolaan credential dan akses database yang lebih aman |

Sebagai contoh, konfigurasi berikut hanya digunakan untuk menunjukkan bagaimana Spring Boot membaca konfigurasi koneksi database:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/demo
spring.datasource.username=root
spring.datasource.password=secret
```

Untuk aplikasi production, credential seperti username dan password sebaiknya tidak ditulis langsung di dalam source code atau file konfigurasi yang ikut disimpan ke repository.

Salah satu pendekatan yang lebih aman adalah menggunakan environment variable:

```properties
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
```

Dengan pendekatan tersebut, nilai sebenarnya dapat diberikan oleh environment tempat aplikasi dijalankan tanpa harus menyimpan credential database secara langsung di dalam project.

Contoh ini tetap bersifat pengantar. Detail mengenai database configuration, connection pool, externalized configuration, secret management, dan database migration akan dibahas secara lebih mendalam pada bagian yang relevan.

---

### 1.7 Messaging

Ketika sebuah aplikasi mulai berkembang, komunikasi antarbagian aplikasi atau antarservice tidak selalu harus dilakukan secara langsung melalui HTTP. Ada kondisi tertentu di mana sebuah aplikasi perlu mengirimkan pesan untuk diproses oleh komponen lain, baik secara langsung maupun secara asynchronous.

Di sinilah konsep **messaging** menjadi penting.

Secara sederhana, messaging memungkinkan sebuah komponen mengirimkan pesan tanpa harus mengetahui secara langsung bagaimana dan kapan pesan tersebut akan diproses oleh penerimanya. Pendekatan seperti ini banyak digunakan pada sistem yang membutuhkan pemrosesan asynchronous, integrasi antarservice, event-driven architecture, maupun komunikasi dengan sistem eksternal.

Spring Boot menyediakan auto-configuration untuk berbagai teknologi messaging yang berada dalam ekosistem Spring.

| Teknologi              | Komponen Spring          | Gambaran Penggunaan                                                         |
| ---------------------- | ------------------------ | --------------------------------------------------------------------------- |
| **JMS**                | Spring JMS               | Komunikasi berbasis message broker menggunakan standar Java Message Service |
| **AMQP**               | Spring AMQP              | Komunikasi dengan message broker seperti RabbitMQ menggunakan protokol AMQP |
| **Kafka**              | Spring for Apache Kafka  | Streaming event dan komunikasi berbasis distributed event streaming         |
| **Pulsar**             | Spring for Apache Pulsar | Messaging dan event streaming menggunakan Apache Pulsar                     |
| **RSocket**            | Spring Framework         | Komunikasi reactive antara aplikasi melalui protokol RSocket                |
| **Spring Integration** | Spring Integration       | Integrasi berbagai sistem melalui pola Enterprise Integration               |

### JMS (Java Message Service)

**JMS (Java Message Service)** adalah standar Java untuk melakukan komunikasi berbasis pesan.

Dengan JMS, sebuah aplikasi dapat mengirimkan pesan ke destination tertentu, kemudian pesan tersebut dapat diproses oleh consumer. Pendekatan ini membantu memisahkan pengirim dan penerima pesan sehingga keduanya tidak harus berjalan pada waktu yang sama.

Spring Boot menyediakan auto-configuration untuk penggunaan JMS bersama message broker yang kompatibel, termasuk **ActiveMQ** dan **Artemis**.

Secara konseptual, komunikasi JMS terdiri dari beberapa komponen berikut:

| Komponen           | Peran                                             |
| ------------------ | ------------------------------------------------- |
| **Producer**       | Menghasilkan dan mengirimkan pesan                |
| **Message Broker** | Menerima dan mengelola pesan                      |
| **Consumer**       | Menerima dan memproses pesan                      |
| **Destination**    | Menentukan tujuan pesan, seperti queue atau topic |

Dependency sederhana untuk menggunakan JMS dengan Artemis:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-artemis</artifactId>
</dependency>
```

Contoh producer sederhana:

```java
@Service
public class MessageProducer {

    private final JmsTemplate jmsTemplate;

    public MessageProducer(JmsTemplate jmsTemplate) {
        this.jmsTemplate = jmsTemplate;
    }

    public void send(String message) {
        jmsTemplate.convertAndSend("orders", message);
    }
}
```

Contoh consumer:

```java
@Component
public class MessageConsumer {

    @JmsListener(destination = "orders")
    public void receive(String message) {
        System.out.println("Received: " + message);
    }
}
```

Contoh tersebut hanya menunjukkan konsep dasar producer dan consumer. Konfigurasi broker, destination, connection, dan reliability dapat disesuaikan dengan kebutuhan aplikasi.

Untuk pembahasan teknis lebih lanjut, Anda dapat merujuk ke [dokumentasi resmi Spring Boot JMS](https://docs.spring.io/spring-boot/reference/messaging/jms.html).

### AMQP (Advanced Message Queuing Protocol)

**AMQP (Advanced Message Queuing Protocol)** adalah protokol standar untuk komunikasi berbasis pesan.

Salah satu teknologi yang umum digunakan bersama Spring Boot adalah **RabbitMQ**. Dalam arsitektur berbasis AMQP, producer mengirimkan pesan dan message broker bertugas mengatur bagaimana pesan tersebut diteruskan kepada consumer.

Beberapa komponen penting dalam komunikasi AMQP adalah:

| Komponen     | Peran                                             |
| ------------ | ------------------------------------------------- |
| **Producer** | Menghasilkan dan mengirimkan pesan                |
| **Exchange** | Menentukan bagaimana pesan diarahkan              |
| **Queue**    | Menyimpan pesan sebelum diproses                  |
| **Consumer** | Menerima dan memproses pesan                      |
| **RabbitMQ** | Message broker yang mengelola komunikasi tersebut |

Dependency Maven untuk Spring AMQP:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

Contoh producer sederhana:

```java
@Service
public class OrderProducer {

    private final RabbitTemplate rabbitTemplate;

    public OrderProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void send(String message) {
        rabbitTemplate.convertAndSend("orders.exchange", "orders.created", message);
    }
}
```

Contoh consumer:

```java
@Component
public class OrderConsumer {

    @RabbitListener(queues = "orders.queue")
    public void receive(String message) {
        System.out.println("Received: " + message);
    }
}
```

Konfigurasi koneksi RabbitMQ dapat ditempatkan pada `application.properties`:

```properties
spring.rabbitmq.host=localhost
spring.rabbitmq.port=5672
spring.rabbitmq.username=guest
spring.rabbitmq.password=guest
```

Contoh konfigurasi tersebut ditujukan untuk lingkungan pembelajaran atau development lokal. Credential dan konfigurasi koneksi pada production perlu dikelola dengan pendekatan yang lebih aman.

Dokumentasi resminya dapat dilihat pada [Spring Boot AMQP](https://docs.spring.io/spring-boot/reference/messaging/amqp.html).

### Apache Kafka

**Apache Kafka** merupakan platform distributed event streaming yang banyak digunakan untuk menangani aliran event dan data dalam jumlah besar.

Berbeda dari messaging tradisional yang biasanya berfokus pada pengiriman pesan dari producer ke consumer, Kafka lebih menekankan konsep **event stream** yang dapat disimpan dan dikonsumsi oleh satu atau lebih consumer.

Beberapa komponen utama Kafka antara lain:

| Komponen           | Peran                                          |
| ------------------ | ---------------------------------------------- |
| **Producer**       | Menghasilkan event                             |
| **Topic**          | Tempat event disimpan dan dikelompokkan        |
| **Consumer**       | Membaca dan memproses event                    |
| **Consumer Group** | Mengatur consumer yang bekerja bersama         |
| **Broker**         | Menyimpan dan melayani event yang ada di Kafka |

Kafka sering digunakan pada sistem yang membutuhkan event processing, data streaming, integrasi antarservice, maupun pemrosesan data dalam skala besar.

Spring Boot menyediakan integrasi melalui **Spring for Apache Kafka**.

Dependency Maven:

```xml
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```

Contoh producer sederhana:

```java
@Service
public class EventProducer {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public EventProducer(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void send(String message) {
        kafkaTemplate.send("orders", message);
    }
}
```

Contoh consumer:

```java
@Component
public class EventConsumer {

    @KafkaListener(topics = "orders", groupId = "order-service")
    public void consume(String message) {
        System.out.println("Received: " + message);
    }
}
```

Konfigurasi sederhana pada `application.properties`:

```properties
spring.kafka.bootstrap-servers=localhost:9092
spring.kafka.consumer.group-id=order-service
```

Konfigurasi tersebut hanya merupakan contoh sederhana untuk lingkungan development lokal. Konfigurasi Kafka pada production dapat membutuhkan pengaturan tambahan seperti security, serialization, replication, consumer behavior, dan observability.

Dokumentasi resminya dapat dilihat pada [Spring Boot Kafka](https://docs.spring.io/spring-boot/reference/messaging/kafka.html).

### Apache Pulsar

**Apache Pulsar** adalah platform messaging dan event streaming yang dirancang untuk menangani komunikasi serta aliran data dalam skala besar.

Spring Boot menyediakan dukungan untuk **Spring for Apache Pulsar**, sehingga aplikasi Spring dapat berintegrasi dengan Apache Pulsar tanpa harus menangani seluruh konfigurasi secara manual.

Secara konseptual, prosesnya dapat dipahami melalui beberapa komponen berikut:

| Komponen          | Peran                                                             |
| ----------------- | ----------------------------------------------------------------- |
| **Producer**      | Menghasilkan pesan atau event                                     |
| **Pulsar Broker** | Menerima dan mengelola pesan                                      |
| **Consumer**      | Mengambil dan memproses pesan                                     |
| **Topic**         | Mengelompokkan pesan berdasarkan kategori atau kebutuhan tertentu |

Apache Pulsar dapat menjadi pilihan ketika aplikasi membutuhkan platform messaging dan streaming yang dirancang untuk lingkungan terdistribusi.

Dependency Maven:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-pulsar</artifactId>
</dependency>
```

Contoh producer sederhana:

```java
@Service
public class EventProducer {

    private final PulsarTemplate<String> pulsarTemplate;

    public EventProducer(PulsarTemplate<String> pulsarTemplate) {
        this.pulsarTemplate = pulsarTemplate;
    }

    public void send(String message) {
        pulsarTemplate.send("orders", message);
    }
}
```

Contoh consumer:

```java
@Component
public class EventConsumer {

    @PulsarListener(subscriptionName = "order-service", topics = "orders")
    public void consume(String message) {
        System.out.println("Received: " + message);
    }
}
```

Informasi lebih lanjut dapat dilihat pada [Spring Boot Pulsar](https://docs.spring.io/spring-boot/reference/messaging/pulsar.html).

### RSocket

**RSocket** adalah protokol aplikasi yang dirancang untuk komunikasi reactive antara dua aplikasi.

RSocket mendukung beberapa pola komunikasi yang berbeda:

| Pola Komunikasi      | Gambaran                                                        |
| -------------------- | --------------------------------------------------------------- |
| **Request-Response** | Satu request menghasilkan satu response                         |
| **Request-Stream**   | Satu request dapat menghasilkan banyak data dalam bentuk stream |
| **Fire-and-Forget**  | Mengirim pesan tanpa menunggu response                          |
| **Channel**          | Komunikasi dua arah berbasis stream                             |

Karena RSocket terintegrasi dengan konsep reactive programming, teknologi ini dapat digunakan ketika aplikasi membutuhkan komunikasi asynchronous dan streaming.

Dependency Maven:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-rsocket</artifactId>
</dependency>
```

Contoh endpoint RSocket sederhana:

```java
@Controller
public class GreetingController {

    @MessageMapping("greeting")
    public Mono<String> greeting(String name) {
        return Mono.just("Hello, " + name);
    }
}
```

Konfigurasi dasar pada `application.properties`:

```properties
spring.rsocket.server.port=7000
```

Contoh tersebut hanya menunjukkan konsep dasar endpoint RSocket. Implementasi reactive communication yang lebih kompleks dapat membutuhkan pengaturan tambahan pada transport, security, serialization, dan lifecycle connection.

Dokumentasi resminya dapat dilihat pada [Spring Boot RSocket](https://docs.spring.io/spring-boot/reference/messaging/rsocket.html).

### Spring Integration

**Spring Integration** digunakan untuk membantu aplikasi berkomunikasi dan bertukar data dengan sistem lain menggunakan pola **Enterprise Integration Patterns (EIP)**.

Sederhananya, Spring Integration berfungsi sebagai penghubung antara berbagai sistem atau komponen yang memiliki cara komunikasi berbeda.

Contohnya:

| Sumber            | Proses                     | Tujuan               |
| ----------------- | -------------------------- | -------------------- |
| **HTTP Request**  | Transformasi data          | Service lain         |
| **File**          | Membaca dan memproses data | Database             |
| **Message Queue** | Mengolah pesan             | Application Service  |
| **API Eksternal** | Transformasi response      | Internal Application |

Spring Integration tidak hanya berfokus pada satu message broker tertentu. Ia lebih berfokus pada bagaimana pesan atau data dapat mengalir dari satu sistem ke sistem lainnya.

Dependency Maven:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-integration</artifactId>
</dependency>
```

Contoh sederhana menggunakan `IntegrationFlow`:

```java
@Configuration
public class IntegrationConfig {

    @Bean
    public IntegrationFlow flow() {
        return IntegrationFlow
                .from("inputChannel")
                .transform(String.class, String::toUpperCase)
                .handle(System.out::println)
                .get();
    }
}
```

Contoh tersebut menunjukkan konsep dasar message flow: pesan masuk melalui channel, kemudian diproses sebelum diteruskan ke handler.

Dokumentasi resminya dapat dilihat pada [Spring Boot Spring Integration](https://docs.spring.io/spring-boot/reference/messaging/spring-integration.html).

### Batasan Contoh Konfigurasi Messaging

Contoh dependency, kode Java, dan konfigurasi pada bagian ini sengaja dibuat sederhana untuk membantu memahami konsep dasar messaging.

Contoh tersebut **bukan konfigurasi production-ready**.

Beberapa aspek yang biasanya perlu diperhatikan pada aplikasi nyata antara lain:

| Aspek             | Contoh Pembelajaran             | Aplikasi Production                                                           |
| ----------------- | ------------------------------- | ----------------------------------------------------------------------------- |
| **Connection**    | Menggunakan broker lokal        | Menggunakan broker yang dikonfigurasi sesuai environment                      |
| **Credential**    | Ditulis langsung sebagai contoh | Sebaiknya dikelola melalui environment variable atau secret management        |
| **Reliability**   | Tidak dibahas secara mendalam   | Perlu mempertimbangkan retry, acknowledgement, dan error handling             |
| **Serialization** | Menggunakan string sederhana    | Dapat menggunakan format dan schema yang sesuai kebutuhan                     |
| **Security**      | Konfigurasi minimal             | Membutuhkan authentication, authorization, encryption, dan pengamanan koneksi |
| **Observability** | `System.out.println()`          | Menggunakan logging, metrics, tracing, dan monitoring                         |
| **Scalability**   | Satu producer dan consumer      | Dapat melibatkan banyak instance dan consumer                                 |

Tujuan contoh di bagian ini adalah memberikan gambaran hubungan antara **dependency, producer, broker, consumer, dan konfigurasi**. Detail mengenai reliability, scalability, security, dan operational concerns dapat dipelajari lebih lanjut ketika masuk ke implementasi messaging yang sebenarnya.

### Kesimpulan

Messaging pada Spring Boot bukan hanya tentang mengirim pesan dari satu aplikasi ke aplikasi lainnya. Konsep ini mencakup berbagai pendekatan komunikasi, mulai dari messaging tradisional, event streaming, integrasi antar-sistem, hingga komunikasi reactive.

Jika disederhanakan:

| Teknologi              | Fokus Utama                                     |
| ---------------------- | ----------------------------------------------- |
| **JMS**                | Messaging berbasis standar Java                 |
| **AMQP / RabbitMQ**    | Message queuing dan komunikasi asynchronous     |
| **Kafka**              | Event streaming dan distributed data processing |
| **Pulsar**             | Messaging dan event streaming berskala besar    |
| **RSocket**            | Reactive dan asynchronous communication         |
| **Spring Integration** | Integrasi antar-sistem dan aliran data          |

Untuk tahap overview, saya tidak perlu menghafalkan seluruh teknologi tersebut sekaligus. Yang lebih penting adalah memahami **mengapa messaging dibutuhkan, bagaimana pesan berpindah antar-komponen, dan kapan pendekatan tertentu lebih sesuai digunakan**.

Setiap teknologi memiliki karakteristik, konfigurasi, dan pola penggunaannya sendiri. Karena itu, pemilihannya sebaiknya disesuaikan dengan kebutuhan aplikasi, karakteristik workload, tingkat reliability yang dibutuhkan, serta kemampuan sistem dalam menangani komunikasi asynchronous.

---

### 1.8 IO (Input/Output)

Setelah membahas **Web, Data, dan Messaging**, bagian berikutnya adalah **Input/Output (IO)**. Dalam konteks Spring Boot, IO mencakup berbagai kemampuan pendukung yang membantu aplikasi berkomunikasi dengan sistem lain, mengelola data sementara, menjadwalkan pekerjaan, mengirim email, melakukan validasi, hingga menjalankan transaksi yang melibatkan lebih dari satu sumber data.

Bagian ini tidak membahas implementasi secara mendalam. Tujuannya adalah memberikan gambaran mengenai **kemampuan IO yang tersedia dalam ekosistem Spring Boot** dan kapan masing-masing fitur biasanya digunakan.

| Fitur            | Gambaran Umum                                                       | Contoh Penggunaan                                        |
| ---------------- | ------------------------------------------------------------------- | -------------------------------------------------------- |
| **Caching**      | Menyimpan data yang sering digunakan agar dapat diakses lebih cepat | Cache hasil query atau data yang jarang berubah          |
| **Quartz**       | Menjadwalkan pekerjaan secara teratur atau pada waktu tertentu      | Menjalankan proses setiap malam atau setiap beberapa jam |
| **Mail**         | Mengirim email dari aplikasi                                        | Notifikasi, verifikasi akun, atau pemberitahuan          |
| **Validasi**     | Memastikan data yang masuk memenuhi aturan tertentu                 | Validasi request API atau data pengguna                  |
| **REST Clients** | Memanggil API atau layanan REST lain dari aplikasi                  | Berkomunikasi dengan service eksternal                   |
| **Web Services** | Mendukung komunikasi berbasis web services                          | Integrasi dengan sistem yang menggunakan SOAP            |
| **JTA**          | Mengelola transaksi yang melibatkan beberapa resource               | Transaksi terdistribusi pada sistem tertentu             |

### Caching

**Caching** adalah mekanisme untuk menyimpan hasil atau data yang sering digunakan sehingga aplikasi tidak perlu mengambil atau menghitung data tersebut berulang kali.

Sebagai contoh, sebuah aplikasi mungkin sering meminta data yang sama dari database. Daripada setiap request selalu melakukan query ke database, data tertentu dapat disimpan sementara di cache.

Secara sederhana:

**Request → Cache → Jika tidak tersedia → Database → Simpan ke Cache**

Caching dapat membantu mengurangi beban database dan meningkatkan waktu respons aplikasi.

Spring Boot menyediakan dukungan untuk mekanisme caching melalui abstraksi Spring Framework dan dapat diintegrasikan dengan berbagai implementasi cache.

Beberapa teknologi yang dapat digunakan antara lain:

- **Caffeine**
- **Redis**
- **Hazelcast**
- **Infinispan**
- **JCache (JSR-107)**

#### Dependency

Untuk menggunakan fitur caching dasar Spring Boot:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
```

Jika menggunakan Caffeine sebagai cache provider:

```xml
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
</dependency>
```

#### Contoh Sederhana

Caching dapat diaktifkan menggunakan `@EnableCaching`, kemudian method tertentu dapat menggunakan `@Cacheable`.

```java
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Cacheable("users")
    public String findUser(String username) {
        System.out.println("Mengambil data dari database...");
        return "User: " + username;
    }
}
```

Ketika method dipanggil kembali dengan parameter yang sama, hasilnya dapat diambil dari cache sehingga proses yang sama tidak perlu dijalankan kembali.

Untuk pembahasan lengkap, lihat dokumentasi resmi [Spring Boot — Caching](https://docs.spring.io/spring-boot/reference/io/caching.html).

> **Intinya:** Caching digunakan ketika aplikasi sering membaca data yang sama dan kita ingin mengurangi pekerjaan yang harus dilakukan oleh sumber data utama.

### Quartz

**Quartz** adalah library untuk melakukan **job scheduling**, yaitu menjalankan pekerjaan secara otomatis berdasarkan jadwal tertentu.

Contohnya:

- Menjalankan proses setiap beberapa menit.
- Membuat laporan setiap malam.
- Membersihkan data secara berkala.
- Menjalankan pekerjaan pada waktu tertentu.

Quartz juga dapat digunakan ketika kebutuhan scheduling lebih kompleks dibandingkan sekadar menjalankan sebuah method secara berkala.

Spring Boot menyediakan integrasi dengan Quartz melalui auto-configuration.

#### Dependency

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
</dependency>
```

#### Contoh Sederhana

Sebuah Quartz Job dapat dibuat dengan mengimplementasikan interface `Job`.

```java
import org.quartz.Job;
import org.quartz.JobExecutionContext;

public class ReportJob implements Job {

    @Override
    public void execute(JobExecutionContext context) {
        System.out.println("Menjalankan proses pembuatan laporan...");
    }
}
```

Contoh tersebut hanya menunjukkan bentuk dasar sebuah Quartz Job. Dalam aplikasi nyata, job biasanya dikombinasikan dengan `JobDetail`, `Trigger`, dan scheduler.

Untuk informasi lebih lanjut, lihat [Spring Boot — Quartz Scheduler](https://docs.spring.io/spring-boot/reference/io/quartz.html).

> **Intinya:** Quartz membantu aplikasi menentukan **kapan sebuah pekerjaan harus dijalankan**.

### Mail

Spring Boot dapat digunakan untuk mengirim email melalui integrasi dengan **Jakarta Mail**.

Pengiriman email dapat digunakan untuk berbagai kebutuhan aplikasi, misalnya:

- Verifikasi alamat email.
- Notifikasi aktivitas pengguna.
- Pemberitahuan transaksi.
- Pengiriman laporan.
- Reset password.

Dalam praktiknya, aplikasi biasanya berkomunikasi dengan **mail server atau layanan email** untuk mengirim pesan.

#### Dependency

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>
```

#### Konfigurasi Sederhana

Konfigurasi mail dapat ditempatkan pada `application.properties`.

```properties
spring.mail.host=smtp.example.com
spring.mail.port=587
spring.mail.username=example@example.com
spring.mail.password=your-password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
```

Nilai tersebut hanya merupakan contoh. Host, username, password, dan konfigurasi SMTP harus disesuaikan dengan mail server atau provider yang digunakan.

#### Contoh Sederhana

```java
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private final JavaMailSender mailSender;

    public MailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail() {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo("user@example.com");
        message.setSubject("Test Email");
        message.setText("Email dikirim dari aplikasi Spring Boot.");

        mailSender.send(message);
    }
}
```

Untuk dokumentasi resmi, lihat [Spring Boot — Sending Email](https://docs.spring.io/spring-boot/reference/io/email.html).

> **Intinya:** Fitur mail memungkinkan aplikasi berkomunikasi dengan pengguna melalui email.

### Validasi

**Validasi** digunakan untuk memastikan data yang diterima aplikasi sesuai dengan aturan yang telah ditentukan.

Misalnya, sebuah aplikasi memiliki aturan:

- Username tidak boleh kosong.
- Email harus memiliki format yang valid.
- Password memiliki panjang minimum tertentu.
- Nilai tertentu tidak boleh bernilai negatif.

Daripada melakukan pemeriksaan tersebut secara manual satu per satu, aplikasi dapat menggunakan mekanisme **Bean Validation**.

Contoh annotation validasi yang umum digunakan:

| Aturan                        | Annotation  | Contoh                 |
| ----------------------------- | ----------- | ---------------------- |
| Tidak boleh kosong            | `@NotBlank` | Username               |
| Tidak boleh `null`            | `@NotNull`  | ID atau object         |
| Email harus valid             | `@Email`    | Email                  |
| Nilai minimum                 | `@Min`      | Nilai angka            |
| Panjang minimum atau maksimum | `@Size`     | Username atau password |

Spring Boot mendukung Bean Validation melalui integrasi dengan **Jakarta Validation**.

#### Dependency

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

#### Contoh Sederhana

```java
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateUserRequest(

        @NotBlank
        String username,

        @NotBlank
        @Email
        String email,

        @Size(min = 8)
        String password
) {
}
```

Pada aplikasi web, object tersebut dapat digunakan bersama `@Valid` ketika request diterima.

```java
@PostMapping("/users")
public void createUser(
        @Valid @RequestBody CreateUserRequest request
) {
    // Proses pembuatan user
}
```

Untuk dokumentasi resmi, lihat [Spring Boot — Validation](https://docs.spring.io/spring-boot/reference/io/validation.html).

> **Catatan:** Istilah **JSR-303** masih sering ditemukan dalam dokumentasi lama, tetapi ekosistem Java modern menggunakan spesifikasi **Jakarta Validation**.

### REST Clients

Aplikasi Spring Boot tidak hanya dapat menyediakan REST API, tetapi juga dapat **memanggil REST API milik aplikasi atau layanan lain**.

Kemampuan ini penting dalam arsitektur yang terdiri dari beberapa service.

Contohnya:

**Application A → REST API → Application B**

Application A dapat mengirim request HTTP ke Application B untuk mendapatkan atau mengirim data.

Dalam ekosistem Spring, terdapat beberapa pilihan client:

| Client           | Karakteristik                                        | Penggunaan           |
| ---------------- | ---------------------------------------------------- | -------------------- |
| **RestClient**   | Client HTTP sinkron dengan API modern                | REST API umum        |
| **WebClient**    | Client HTTP yang mendukung reactive dan non-blocking | Aplikasi reactive    |
| **RestTemplate** | HTTP client yang lebih lama                          | Existing application |

#### Dependency

Untuk menggunakan `RestClient` melalui Spring MVC:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

Untuk aplikasi yang membutuhkan `WebClient`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

#### Contoh RestClient

```java
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class UserClient {

    private final RestClient restClient;

    public UserClient(RestClient.Builder builder) {
        this.restClient = builder
                .baseUrl("https://api.example.com")
                .build();
    }

    public String getUser() {
        return restClient.get()
                .uri("/users/1")
                .retrieve()
                .body(String.class);
    }
}
```

Contoh tersebut menunjukkan konsep dasar bagaimana aplikasi Spring Boot melakukan HTTP request ke service lain.

Untuk dokumentasi resmi, lihat [Spring Boot — Calling REST Services](https://docs.spring.io/spring-boot/reference/io/rest-client.html).

> **Intinya:** REST client digunakan ketika aplikasi perlu **berkomunikasi dengan API atau service lain melalui HTTP**.

### Web Services

Selain REST API, Spring Boot juga mendukung pengembangan dan integrasi dengan **Web Services**, terutama melalui **Spring Web Services**.

Web Services biasanya digunakan ketika aplikasi harus berkomunikasi dengan sistem lain menggunakan standar seperti **SOAP** dan XML.

Hal ini cukup umum ditemukan pada sistem enterprise atau integrasi dengan sistem legacy yang masih menggunakan SOAP.

#### Dependency

Contoh dependency untuk Spring Web Services:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webservices</artifactId>
</dependency>
```

#### Contoh Sederhana

Contoh endpoint SOAP sederhana:

```java
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

@Endpoint
public class UserEndpoint {

    private static final String NAMESPACE_URI =
            "http://example.com/user";

    @PayloadRoot(
            namespace = NAMESPACE_URI,
            localPart = "getUserRequest"
    )
    @ResponsePayload
    public GetUserResponse getUser(
            @RequestPayload GetUserRequest request
    ) {
        GetUserResponse response = new GetUserResponse();
        response.setUsername("john");

        return response;
    }
}
```

Contoh tersebut hanya menggambarkan konsep endpoint SOAP. Implementasi sebenarnya biasanya membutuhkan schema XML, request/response model, serta konfigurasi endpoint.

Untuk dokumentasi resmi, lihat [Spring Boot — Web Services](https://docs.spring.io/spring-boot/reference/io/webservices.html).

> **Intinya:** Web Services membantu Spring Boot berintegrasi dengan sistem yang menggunakan teknologi web services, termasuk SOAP.

### JTA dan Transaksi Terdistribusi

**JTA (Jakarta Transactions)** digunakan untuk mengelola transaksi yang melibatkan lebih dari satu resource atau sistem transaksi.

Pada aplikasi sederhana, sebuah transaksi mungkin hanya berhubungan dengan satu database.

Namun, pada sistem tertentu, sebuah proses bisnis dapat melibatkan beberapa resource yang harus tetap konsisten.

Contoh konseptual:

**Application → Database A + Database B**

Jika transaksi berhasil, perubahan pada resource yang terlibat harus mengikuti aturan transaksi yang digunakan. Jika terjadi kegagalan, transaksi dapat dibatalkan sesuai mekanisme transaksi yang tersedia.

Konsep seperti ini dikenal sebagai **distributed transaction**.

Spring Boot menyediakan dukungan terhadap transaksi melalui ekosistem Spring, sementara kebutuhan transaksi terdistribusi tertentu dapat melibatkan implementasi JTA.

#### Dependency

Kebutuhan dependency JTA bergantung pada transaction manager yang digunakan. Karena itu, dependency sebaiknya disesuaikan dengan transaction manager dan versi Spring Boot yang digunakan.

Sebagai contoh, apabila menggunakan Narayana:

```xml
<dependency>
    <groupId>me.snowdrop</groupId>
    <artifactId>narayana-spring-boot-starter</artifactId>
</dependency>
```

#### Contoh Konseptual

```java
@Transactional
public void processTransaction() {

    databaseA.update();

    databaseB.update();
}
```

Contoh tersebut hanya menggambarkan konsep bahwa satu operasi bisnis dapat melibatkan beberapa resource. Implementasi distributed transaction yang sebenarnya membutuhkan transaction manager dan resource yang mendukung mekanisme tersebut.

Untuk dokumentasi resmi, lihat [Spring Boot — JTA](https://docs.spring.io/spring-boot/reference/io/jta.html).

> **Intinya:** JTA digunakan untuk kebutuhan transaksi yang lebih kompleks, khususnya ketika satu transaksi harus melibatkan beberapa resource.

### Ringkasan

Jika seluruh pembahasan IO disederhanakan, masing-masing fitur memiliki tujuan yang berbeda:

| Fitur            | Tujuan Utama                                            |
| ---------------- | ------------------------------------------------------- |
| **Caching**      | Mempercepat akses data dan mengurangi beban sumber data |
| **Quartz**       | Menjalankan pekerjaan berdasarkan jadwal                |
| **Mail**         | Mengirim email dari aplikasi                            |
| **Validasi**     | Memastikan data sesuai aturan                           |
| **REST Clients** | Berkomunikasi dengan REST API lain                      |
| **Web Services** | Berintegrasi dengan sistem berbasis Web Services        |
| **JTA**          | Mengelola transaksi yang melibatkan beberapa resource   |

Dengan demikian, **IO dalam Spring Boot bukan hanya tentang membaca atau menulis data**, tetapi mencakup berbagai mekanisme yang membantu aplikasi berkomunikasi, menjadwalkan pekerjaan, memvalidasi input, meningkatkan performa, dan berintegrasi dengan sistem lain.

Bagian ini menjadi salah satu fondasi penting sebelum masuk ke pembahasan Spring Boot yang lebih spesifik dan teknis.

---

### 1.9 Citra Kontainer (Container Images)

Ketika aplikasi Spring Boot sudah mulai siap untuk dijalankan di berbagai environment, salah satu pendekatan yang umum digunakan adalah **containerization**.

Container memungkinkan aplikasi beserta kebutuhan runtime-nya dikemas ke dalam sebuah **container image**. Image tersebut kemudian dapat dijalankan secara konsisten pada berbagai environment yang mendukung container, baik pada komputer lokal, server, maupun platform cloud.

Spring Boot menyediakan dukungan untuk membuat **container image** dengan beberapa pendekatan sehingga developer tidak harus membangun seluruh proses containerization dari awal.

Secara sederhana, konsepnya dapat dipahami melalui hubungan berikut:

**Aplikasi Spring Boot → Container Image → Container → Environment**

| Komponen                 | Peran                                                                     |
| ------------------------ | ------------------------------------------------------------------------- |
| **Aplikasi Spring Boot** | Kode aplikasi yang ingin dijalankan                                       |
| **Container Image**      | Paket aplikasi beserta kebutuhan runtime-nya                              |
| **Container**            | Instance yang berjalan dari sebuah image                                  |
| **Container Platform**   | Lingkungan yang menjalankan container, seperti Docker atau platform cloud |

Pada Spring Boot, terdapat dua pendekatan utama yang perlu dikenali:

- **Dockerfile**
- **Cloud Native Buildpacks**

### Citra Kontainer yang Efisien

Container image tidak hanya harus dapat dijalankan, tetapi sebaiknya juga dibuat **efisien, aman, dan mudah dikelola**.

Ukuran image, jumlah layer, proses caching, keamanan base image, serta waktu build dapat memengaruhi proses deployment dan operasional aplikasi.

Beberapa hal yang biasanya diperhatikan ketika membuat container image antara lain:

- Menggunakan base image yang sesuai dengan kebutuhan aplikasi.
- Menggunakan versi Java yang sesuai dengan aplikasi.
- Menghindari file atau dependency yang tidak diperlukan.
- Memanfaatkan layer agar perubahan kecil tidak selalu menyebabkan seluruh image dibangun ulang.
- Memisahkan dependency yang jarang berubah dari bagian aplikasi yang lebih sering berubah.
- Memperhatikan keamanan image dan runtime.
- Memastikan image sesuai dengan arsitektur environment tempat aplikasi akan dijalankan.

Spring Boot juga menyediakan konsep **layered JAR** yang dapat membantu memisahkan bagian-bagian aplikasi ke dalam layer berbeda. Pendekatan tersebut dapat membantu proses caching layer ketika container image dibangun.

Sebagai contoh, aplikasi Spring Boot dapat dikemas terlebih dahulu menjadi executable JAR:

```bash
./mvnw clean package
```

Setelah proses tersebut selesai, hasil build biasanya berupa file JAR yang kemudian dapat digunakan sebagai input untuk proses pembuatan container image.

> **Intinya:** container image yang baik bukan hanya image yang berhasil dijalankan, tetapi juga image yang efisien, aman, mudah diperbarui, dan sesuai dengan kebutuhan deployment.

Untuk pembahasan teknis yang lebih lengkap, lihat [dokumentasi resmi Spring Boot mengenai Container Images](https://docs.spring.io/spring-boot/reference/packaging/container-images/index.html).

### Dockerfiles

Salah satu pendekatan yang umum digunakan untuk membuat container image adalah **Dockerfile**.

Dockerfile merupakan file yang berisi instruksi mengenai bagaimana sebuah container image dibangun. Dengan Dockerfile, kita dapat menentukan base image, file yang dimasukkan, konfigurasi environment, serta command yang dijalankan ketika container dimulai.

Secara konseptual:

**Spring Boot Application → Dockerfile → Container Image → Container**

Contoh sederhana Dockerfile untuk aplikasi Spring Boot:

```dockerfile
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY target/bedroom-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
```

Contoh tersebut hanya merupakan ilustrasi sederhana. Nama file JAR, versi Java, base image, dan konfigurasi runtime perlu disesuaikan dengan project yang sebenarnya.

Untuk project Maven, image dapat dibangun menggunakan Docker:

```bash
docker build -t bedroom .
```

Kemudian image tersebut dapat dijalankan sebagai container:

```bash
docker run -p 8080:8080 bedroom
```

Pada contoh tersebut, Dockerfile menentukan bagaimana aplikasi dikemas, sedangkan Docker menjalankan hasil image tersebut sebagai container.

> **Batasan contoh:** contoh Dockerfile di atas dibuat sesederhana mungkin untuk memperkenalkan konsep. Untuk environment production, pemilihan base image, user runtime, konfigurasi environment, health check, keamanan image, serta strategi layer perlu dipertimbangkan lebih lanjut.

Pendekatan Dockerfile cocok ketika kita membutuhkan kontrol yang lebih besar terhadap bagaimana container image dibuat dan bagaimana runtime aplikasi dikonfigurasi.

Untuk pembahasan teknis yang lebih lengkap, lihat [dokumentasi resmi Spring Boot mengenai Dockerfiles](https://docs.spring.io/spring-boot/reference/packaging/container-images/dockerfiles.html).

### Cloud Native Buildpacks

Selain Dockerfile, Spring Boot juga mendukung pembuatan container image menggunakan **Cloud Native Buildpacks**.

Pendekatan ini memungkinkan aplikasi dikemas menjadi container image tanpa harus menulis Dockerfile secara manual untuk kebutuhan umum.

Dalam project yang menggunakan Maven, pembuatan image dapat dilakukan melalui plugin Spring Boot.

Contoh konfigurasi plugin Maven:

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
</plugin>
```

Setelah plugin tersedia, container image dapat dibuat menggunakan:

```bash
./mvnw spring-boot:build-image
```

Secara konseptual, prosesnya menjadi:

**Spring Boot Application → Maven → Buildpacks → Container Image**

Buildpacks akan menangani berbagai bagian proses pembuatan image berdasarkan aplikasi yang sedang dibangun. Pendekatan ini dapat mengurangi kebutuhan untuk mengelola Dockerfile secara manual.

Spring Boot dapat menggunakan buildpack seperti **Paketo Buildpacks** untuk proses tersebut.

> **Batasan contoh:** perintah `spring-boot:build-image` membutuhkan environment yang mendukung proses pembangunan container image. Detail image, builder, JVM runtime, dan konfigurasi buildpack dapat disesuaikan dengan kebutuhan project.

Pendekatan Buildpacks cocok ketika kita ingin proses pembuatan container image lebih terintegrasi dengan build system dan tidak membutuhkan kontrol manual sebesar Dockerfile.

Untuk pembahasan teknis yang lebih lengkap, lihat [dokumentasi resmi Spring Boot mengenai Cloud Native Buildpacks](https://docs.spring.io/spring-boot/reference/packaging/container-images/cloud-native-buildpacks.html).

### Dockerfile atau Cloud Native Buildpacks?

Kedua pendekatan tersebut sama-sama dapat menghasilkan container image, tetapi memberikan tingkat kontrol dan otomatisasi yang berbeda.

| Pendekatan                  | Kontrol       | Otomatisasi  | Cocok Untuk                                                  |
| --------------------------- | ------------- | ------------ | ------------------------------------------------------------ |
| **Dockerfile**              | Tinggi        | Lebih rendah | Image dengan kebutuhan runtime yang sangat spesifik          |
| **Cloud Native Buildpacks** | Lebih sedikit | Tinggi       | Pembuatan image Spring Boot yang praktis dan terstandarisasi |

Jika kita membutuhkan kontrol penuh terhadap proses pembuatan image, **Dockerfile** memberikan fleksibilitas yang lebih besar.

Sebaliknya, jika kita ingin proses pembuatan image lebih sederhana dan terintegrasi dengan Maven atau Gradle, **Cloud Native Buildpacks** dapat menjadi pilihan yang menarik.

Tidak ada satu pendekatan yang selalu paling baik untuk semua aplikasi. Pemilihannya bergantung pada kebutuhan deployment, tingkat kontrol yang diperlukan, tooling yang digunakan, serta kemampuan tim dalam mengelola container image.

### Ringkasan

Secara sederhana, pembahasan Container Images dalam Spring Boot dapat dirangkum sebagai berikut:

| Topik                          | Fokus                                                  |
| ------------------------------ | ------------------------------------------------------ |
| **Efficient Container Images** | Membuat image yang efisien, aman, dan mudah dikelola   |
| **Dockerfiles**                | Membuat image dengan kontrol manual melalui Dockerfile |
| **Cloud Native Buildpacks**    | Membuat image secara otomatis melalui buildpack        |

Dengan containerization, aplikasi Spring Boot dapat dikemas dalam bentuk yang lebih konsisten sehingga lebih mudah dipindahkan dari satu environment ke environment lainnya.

Namun, perlu dibedakan antara **container image** dan **container**.

**Container image** merupakan paket immutable yang berisi aplikasi beserta kebutuhan untuk menjalankannya, sedangkan **container** merupakan instance yang dibuat dan dijalankan berdasarkan image tersebut.

Dengan memahami perbedaan ini, konsep deployment menggunakan container menjadi lebih mudah ditempatkan dalam keseluruhan arsitektur aplikasi.

Untuk memahami konsep container secara lebih luas, dokumentasi [Docker](https://docs.docker.com/get-started/docker-overview/) dapat dijadikan referensi tambahan.

---

### 1.10 Pindah ke Produksi (Moving to Production)

Setelah aplikasi Spring Boot selesai dikembangkan dan siap digunakan oleh pengguna, perhatian kita mulai bergeser dari **bagaimana aplikasi dibuat** menjadi **bagaimana aplikasi dikelola ketika berjalan di production**.

Di lingkungan production, aplikasi tidak cukup hanya bisa berjalan. Kita juga perlu mengetahui apakah aplikasi masih sehat, bagaimana performanya, apakah terjadi error, serta bagaimana aplikasi dapat dipantau dan dikelola tanpa harus mengubah kode utama.

Untuk kebutuhan tersebut, Spring Boot menyediakan fitur **production-ready** melalui **Spring Boot Actuator**.

Secara sederhana, Actuator dapat dianggap sebagai seperangkat kemampuan tambahan yang membantu kita **mengamati dan mengelola kondisi aplikasi ketika sedang berjalan**.

Spring Boot menyediakan berbagai endpoint management dan monitoring yang dapat diakses melalui HTTP maupun JMX.

---

### Management Endpoints

**Management endpoints** adalah endpoint khusus yang disediakan untuk mendapatkan informasi atau melakukan pengelolaan terhadap aplikasi.

Contohnya, aplikasi dapat menyediakan informasi mengenai:

- Kondisi kesehatan aplikasi.
- Informasi aplikasi.
- Metrics.
- Beans yang dikelola Spring.
- Environment.
- Mapping endpoint.
- Konfigurasi logging.
- Informasi runtime tertentu.

Endpoint tersebut berbeda dari endpoint bisnis seperti:

```text
GET /users
POST /orders
```

Management endpoint lebih ditujukan untuk **operasional, monitoring, dan administrasi aplikasi**.

Beberapa endpoint Actuator yang umum dikenal:

| Endpoint     | Kegunaan Umum                                 |
| ------------ | --------------------------------------------- |
| **health**   | Mengetahui kondisi kesehatan aplikasi         |
| **info**     | Menampilkan informasi aplikasi                |
| **metrics**  | Melihat metrics yang dikumpulkan aplikasi     |
| **beans**    | Melihat Spring beans yang tersedia            |
| **env**      | Melihat informasi environment dan konfigurasi |
| **mappings** | Melihat mapping endpoint aplikasi             |
| **loggers**  | Melihat atau mengelola konfigurasi logging    |

Secara default, endpoint web Actuator menggunakan prefix:

```text
/actuator
```

Sehingga salah satu endpoint yang umum digunakan adalah:

```text
/actuator/health
```

Namun, endpoint yang tersedia dan endpoint yang diekspos melalui HTTP dapat dikonfigurasi sesuai kebutuhan aplikasi.

> **Intinya:** Management endpoints adalah pintu untuk melihat dan mengelola kondisi internal aplikasi tanpa mencampurkannya dengan endpoint bisnis.

---

### Menambahkan Spring Boot Actuator

Untuk menggunakan fitur production-ready tersebut, aplikasi perlu menambahkan **Spring Boot Actuator**.

Pada project Maven, dependency yang digunakan adalah:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Setelah dependency ditambahkan, Spring Boot akan melakukan auto-configuration terhadap fitur Actuator yang sesuai dengan dependency dan konfigurasi aplikasi.

Contohnya, setelah aplikasi berjalan, endpoint health dapat diakses melalui:

```text
GET /actuator/health
```

Contoh response sederhana dapat terlihat seperti:

```json
{
  "status": "UP"
}
```

Response tersebut menunjukkan bahwa endpoint health dapat memberikan informasi mengenai kondisi aplikasi.

> **Catatan:** Endpoint Actuator tidak seharusnya dianggap sebagai endpoint publik biasa. Endpoint management dapat memberikan informasi sensitif mengenai aplikasi sehingga exposure dan security-nya perlu dikontrol.

---

### Konfigurasi Management Endpoints

Tidak semua endpoint Actuator harus diekspos melalui HTTP.

Untuk menentukan endpoint mana yang ingin diekspos, konfigurasi dapat diberikan melalui `application.properties`.

Contoh:

```properties
management.endpoints.web.exposure.include=health,info,metrics
```

Dengan konfigurasi tersebut, endpoint berikut dapat diakses melalui HTTP:

```text
/actuator/health
/actuator/info
/actuator/metrics
```

Jika ingin mengecualikan endpoint tertentu, dapat menggunakan konfigurasi:

```properties
management.endpoints.web.exposure.exclude=env,beans
```

Konfigurasi tersebut membantu membatasi endpoint yang tersedia sesuai kebutuhan aplikasi.

Untuk aplikasi production, prinsip yang lebih aman adalah **hanya mengekspos endpoint yang memang dibutuhkan**.

> **Intinya:** Actuator menyediakan banyak management endpoint, tetapi aplikasi tidak harus mengekspos semuanya.

---

### Connection Options: HTTP dan JMX

Spring Boot menyediakan dua cara utama untuk mengakses fitur management dan monitoring, yaitu **HTTP** dan **JMX**.

#### HTTP

Melalui HTTP, management endpoint dapat diakses menggunakan request HTTP biasa.

Contohnya:

```text
GET /actuator/health
```

Pendekatan ini sangat umum digunakan ketika aplikasi berjalan sebagai web application karena monitoring system dapat berkomunikasi dengan aplikasi melalui HTTP.

Endpoint HTTP juga dapat ditempatkan pada port management yang berbeda.

Contohnya:

```properties
management.server.port=8081
```

Dengan konfigurasi tersebut, management endpoint dapat berjalan pada port management `8081`, sementara aplikasi utama dapat tetap menggunakan port aplikasinya.

Pendekatan seperti ini dapat berguna ketika kita ingin memisahkan akses terhadap endpoint aplikasi dengan endpoint management.

#### JMX

**JMX (Java Management Extensions)** adalah mekanisme standar Java untuk melakukan monitoring dan management terhadap aplikasi.

JMX dapat digunakan untuk mengekspos management endpoint sebagai **MBean** yang dapat dipantau melalui tooling yang mendukung JMX.

Spring Boot juga dapat mengekspos Actuator endpoints melalui JMX.

Perbandingan sederhananya:

| Connection | Cara Akses                 | Umumnya Digunakan Untuk                        |
| ---------- | -------------------------- | ---------------------------------------------- |
| **HTTP**   | HTTP endpoint              | Monitoring system, health check, observability |
| **JMX**    | Java Management Extensions | Management dan monitoring berbasis Java        |

> **Intinya:** HTTP lebih dekat dengan dunia web dan service monitoring, sedangkan JMX merupakan mekanisme management yang berasal dari ekosistem Java.

---

### Monitoring

Monitoring merupakan salah satu bagian paling penting ketika aplikasi sudah berjalan di production.

Kita tidak hanya ingin mengetahui apakah aplikasi **hidup**, tetapi juga ingin mengetahui bagaimana aplikasi tersebut berperilaku.

Spring Boot Actuator menyediakan dukungan untuk berbagai informasi monitoring, termasuk **metrics, auditing, HTTP exchanges, dan process information**.

#### Metrics

**Metrics** adalah data numerik yang menggambarkan kondisi atau aktivitas aplikasi.

Contohnya:

- Penggunaan memory.
- Penggunaan CPU.
- Jumlah request.
- Waktu response.
- Jumlah thread.
- Garbage collection.
- Waktu startup aplikasi.
- Aktivitas database.
- Aktivitas HTTP client.

Spring Boot menggunakan **Micrometer** sebagai abstraction untuk application metrics dan dapat mengintegrasikannya dengan berbagai monitoring system.

Secara sederhana:

**Application → Metrics → Monitoring System**

Metrics memungkinkan kita melihat aplikasi berdasarkan data, bukan hanya berdasarkan log.

> **Intinya:** Metrics membantu menjawab pertanyaan seperti _"Seberapa sibuk aplikasi saya?"_ atau _"Apakah performanya sedang menurun?"_

---

### Auditing

**Auditing** digunakan untuk mencatat aktivitas tertentu yang berkaitan dengan keamanan dan akses aplikasi.

Ketika Spring Security digunakan, Actuator dapat bekerja dengan audit framework untuk mencatat event seperti:

- Authentication berhasil.
- Authentication gagal.
- Access ditolak.

Informasi tersebut dapat berguna untuk monitoring keamanan dan kebutuhan audit.

> **Intinya:** Auditing membantu kita mengetahui **peristiwa penting yang terjadi di dalam aplikasi**, terutama yang berkaitan dengan authentication dan authorization.

---

### HTTP Exchanges

**HTTP Exchanges** memungkinkan aplikasi mencatat informasi mengenai komunikasi HTTP yang terjadi, seperti request dan response.

Informasi ini dapat membantu ketika kita ingin memahami bagaimana aplikasi menerima dan memproses request.

Spring Boot menyediakan `HttpExchangeRepository` untuk menyimpan informasi exchange tersebut. Untuk kebutuhan sederhana atau development, implementasi berbasis memory dapat digunakan.

Namun, penyimpanan berbasis memory memiliki keterbatasan sehingga tidak sebaiknya dianggap sebagai solusi observability production berskala besar.

> **Intinya:** HTTP Exchanges membantu melihat **jejak komunikasi HTTP** yang terjadi di aplikasi.

---

### Process Monitoring

Spring Boot juga menyediakan metrics yang berkaitan dengan **process dan system**, misalnya:

- CPU.
- File descriptor.
- Uptime aplikasi.
- Disk space.
- Informasi JVM.
- Memory.
- Garbage collection.
- Thread utilization.

Metrics tersebut dapat membantu memberikan gambaran mengenai kondisi runtime aplikasi dan mesin tempat aplikasi berjalan.

> **Intinya:** Process monitoring membantu kita melihat kondisi aplikasi sekaligus resource yang digunakan oleh runtime.

---

### Health Check

Salah satu penggunaan Actuator yang sangat umum di production adalah **health check**.

Endpoint:

```text
/actuator/health
```

dapat digunakan untuk mengetahui kondisi aplikasi.

Contohnya:

```json
{
  "status": "UP"
}
```

Health information juga dapat mencakup dependency tertentu yang digunakan aplikasi, seperti database atau service lainnya, ketika health indicator yang sesuai tersedia.

Untuk mengatur detail informasi health yang ditampilkan, konfigurasi dapat diberikan melalui:

```properties
management.endpoint.health.show-details=when-authorized
```

Pilihan seperti `when-authorized` membantu mencegah detail internal aplikasi diberikan kepada sembarang client.

Dalam production, health check dapat digunakan oleh platform deployment atau infrastructure untuk membantu menentukan apakah aplikasi masih dapat menerima traffic.

Secara konseptual:

**Application → `/actuator/health` → Infrastructure / Monitoring System**

> **Intinya:** Health endpoint membantu sistem di luar aplikasi mengetahui apakah aplikasi berada dalam kondisi yang dapat digunakan.

---

### Spring Boot Actuator

Untuk menggunakan fitur production-ready Spring Boot, komponen yang paling penting untuk dikenali adalah **Spring Boot Actuator**.

Dependency Maven yang digunakan:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Setelah dependency tersedia, fitur Actuator dapat dikonfigurasi melalui `application.properties`.

Contoh konfigurasi sederhana:

```properties
management.endpoints.web.exposure.include=health,info,metrics

management.endpoint.health.show-details=when-authorized
```

Secara konseptual:

| Bagian                           | Peran                                             |
| -------------------------------- | ------------------------------------------------- |
| **Spring Boot Application**      | Aplikasi utama                                    |
| **Actuator**                     | Menyediakan kemampuan monitoring dan management   |
| **Management Endpoints**         | Menyediakan informasi atau operasi management     |
| **HTTP / JMX**                   | Media untuk mengakses management                  |
| **Metrics / Audit / Monitoring** | Informasi mengenai kondisi dan aktivitas aplikasi |

Dengan demikian, Actuator bukan pengganti sistem monitoring eksternal.

Actuator lebih tepat dipahami sebagai **lapisan yang menyediakan informasi mengenai aplikasi**, yang kemudian dapat digunakan oleh tooling atau platform observability lainnya.

---

### Actuator dan Security

Management endpoint perlu mendapatkan perhatian khusus dari sisi security karena beberapa endpoint dapat memberikan informasi internal mengenai aplikasi.

Sebagai contoh:

```text
/actuator/env
/actuator/beans
/actuator/mappings
/actuator/loggers
```

Endpoint tersebut dapat memberikan informasi yang tidak seharusnya tersedia secara bebas kepada public client.

Karena itu, konfigurasi endpoint sebaiknya mengikuti prinsip **least exposure**, yaitu hanya mengekspos endpoint yang memang dibutuhkan.

Contoh konfigurasi sederhana:

```properties
management.endpoints.web.exposure.include=health,info
```

Jika metrics memang dibutuhkan oleh monitoring system:

```properties
management.endpoints.web.exposure.include=health,info,metrics
```

Untuk aplikasi production yang menggunakan Spring Security, akses terhadap management endpoint juga dapat dibatasi berdasarkan authentication dan authorization.

> **Intinya:** Actuator membantu monitoring, tetapi endpoint management tetap harus diperlakukan sebagai bagian dari permukaan keamanan aplikasi.

---

### Ringkasan

Jika seluruh pembahasan **Moving to Production** dirangkum, konsepnya dapat dilihat seperti berikut:

| Topik                    | Tujuan                                                               |
| ------------------------ | -------------------------------------------------------------------- |
| **Management Endpoints** | Melihat dan mengelola informasi aplikasi                             |
| **HTTP**                 | Mengakses management endpoint melalui HTTP                           |
| **JMX**                  | Mengakses management melalui mekanisme Java                          |
| **Metrics**              | Mengukur performa dan aktivitas aplikasi                             |
| **Auditing**             | Mencatat event penting, terutama terkait security                    |
| **HTTP Exchanges**       | Mengamati komunikasi HTTP                                            |
| **Process Monitoring**   | Mengamati kondisi JVM, process, dan system                           |
| **Health Check**         | Mengetahui apakah aplikasi dan dependency berada dalam kondisi sehat |
| **Actuator Security**    | Membatasi akses terhadap informasi management                        |

Jadi, **Moving to Production bukan hanya tentang menjalankan aplikasi di server**. Kita juga perlu memastikan bahwa aplikasi dapat **dipantau, diperiksa, dan dikelola** ketika sudah berjalan.

Di sinilah Spring Boot Actuator menjadi salah satu bagian penting dari aplikasi Spring Boot yang akan digunakan di production.

Secara sederhana:

**Application → Actuator → Management Endpoints → Monitoring / Operations**

Dengan pemahaman ini, Actuator dapat dipandang sebagai jembatan antara **aplikasi yang sedang berjalan** dengan kebutuhan **operasional dan observability** di lingkungan production.

---

### 1.11 Citra Native GraalVM (GraalVM Native Images)

Selain menjalankan aplikasi Spring Boot di atas **JVM (Java Virtual Machine)**, Spring Boot juga mendukung pendekatan lain, yaitu mengubah aplikasi menjadi **native executable** menggunakan **GraalVM Native Image**.

Pada pendekatan JVM, aplikasi Spring Boot biasanya dijalankan menggunakan Java runtime. Sedangkan dengan Native Image, aplikasi dikompilasi terlebih dahulu menjadi executable native yang dapat dijalankan tanpa membutuhkan JVM pada saat runtime.

Secara sederhana:

| Pendekatan       | Cara Menjalankan                               |
| ---------------- | ---------------------------------------------- |
| **JVM**          | Aplikasi dijalankan oleh JVM                   |
| **Native Image** | Aplikasi dikompilasi menjadi executable native |

Pendekatan native ini terutama menarik untuk aplikasi yang membutuhkan **startup time yang cepat** dan **penggunaan memory yang lebih rendah**.

Untuk dokumentasi resmi, lihat [Spring Boot — GraalVM Native Images](https://docs.spring.io/spring-boot/reference/packaging/native-image/index.html).

### 1. Apa Itu GraalVM Native Image?

**GraalVM Native Image** adalah teknologi yang dapat mengubah aplikasi Java menjadi **native executable**.

Berbeda dengan aplikasi Java biasa yang dikompilasi menjadi bytecode dan kemudian dijalankan oleh JVM, Native Image melakukan proses kompilasi lebih awal sehingga sebagian besar pekerjaan dilakukan sebelum aplikasi dijalankan.

Konsep sederhananya:

**Java Code → AOT Compilation → Native Executable → Run**

Sedangkan pendekatan JVM:

**Java Code → Bytecode → JVM → Run**

Pendekatan native dapat memberikan beberapa keuntungan, terutama pada aplikasi yang sering melakukan startup atau berjalan dalam environment yang membutuhkan resource terbatas.

### 2. Perbedaan JVM dan Native Image

Keduanya memiliki karakteristik yang berbeda.

| Aspek                    | JVM                                                 | Native Image                                    |
| ------------------------ | --------------------------------------------------- | ----------------------------------------------- |
| **Runtime**              | Membutuhkan JVM                                     | Tidak membutuhkan JVM saat runtime              |
| **Startup**              | Umumnya lebih lambat                                | Umumnya lebih cepat                             |
| **Memory**               | Cenderung membutuhkan lebih banyak memory           | Cenderung lebih hemat                           |
| **Build Time**           | Relatif cepat                                       | Lebih berat karena melakukan native compilation |
| **Runtime Optimization** | JVM dapat melakukan optimasi saat aplikasi berjalan | Banyak optimasi dilakukan saat build            |
| **Deployment**           | Membutuhkan Java runtime                            | Dapat berupa native executable                  |

Namun, bukan berarti Native Image selalu lebih baik daripada JVM.

Untuk aplikasi yang berjalan lama dan memiliki resource yang cukup, JVM tetap merupakan pilihan yang sangat baik. Native Image lebih menarik pada skenario tertentu, terutama ketika **startup time dan footprint menjadi pertimbangan penting**.

### 3. Ahead-of-Time Compilation

Salah satu konsep penting dalam Native Image adalah **Ahead-of-Time Compilation (AOT)**.

AOT berarti proses kompilasi dilakukan **sebelum aplikasi dijalankan**.

Pada aplikasi Java yang berjalan di JVM, sebagian optimasi dapat dilakukan ketika aplikasi sedang berjalan. JVM dapat mengamati perilaku aplikasi dan melakukan optimasi berdasarkan informasi runtime.

Pada Native Image, proses analisis dan kompilasi dilakukan terlebih dahulu ketika image dibangun.

Secara konseptual:

**Source Code**

↓

**AOT Analysis & Compilation**

↓

**Native Executable**

↓

**Application Running**

Pendekatan ini membantu Native Image menghasilkan executable yang dapat melakukan startup dengan sangat cepat.

Namun, karena banyak pekerjaan dilakukan pada saat build, proses pembuatan native executable biasanya membutuhkan waktu dan resource lebih besar dibandingkan build JAR biasa.

### 4. Spring Boot dan Native Image

Spring Boot memiliki dukungan khusus untuk native compilation.

Hal ini penting karena framework seperti Spring melakukan banyak hal secara dinamis, misalnya:

- Dependency Injection.
- Component scanning.
- Reflection.
- Proxy.
- Auto-configuration.
- Resource loading.

Native compilation memiliki batasan tertentu terhadap mekanisme dinamis tersebut.

Karena itu, Spring Framework dan Spring Boot menyediakan mekanisme **AOT processing** untuk membantu mempersiapkan aplikasi agar dapat dikompilasi menjadi native executable.

Dengan demikian, aplikasi Spring Boot dapat tetap menggunakan banyak kemampuan Spring sambil menghasilkan executable native.

Untuk informasi lebih lanjut, lihat [Spring Framework — AOT Processing](https://docs.spring.io/spring-framework/reference/core/aot.html).

### 5. Cara Membangun Native Image

Spring Boot menyediakan beberapa pendekatan untuk membangun native image.

Dua pendekatan yang umum adalah:

| Pendekatan                  | Gambaran                                                                        |
| --------------------------- | ------------------------------------------------------------------------------- |
| **Cloud Native Buildpacks** | Membuat container image native secara otomatis                                  |
| **Native Build Tools**      | Membantu melakukan native compilation secara langsung melalui Maven atau Gradle |

#### A. Cloud Native Buildpacks

Cloud Native Buildpacks dapat digunakan untuk membuat container image yang berisi aplikasi Spring Boot dalam bentuk native.

Pendekatan ini menarik ketika aplikasi nantinya akan dijalankan menggunakan container.

Secara konseptual:

**Spring Boot → Buildpacks → Native Image → Container Image**

Pendekatan ini juga terintegrasi dengan build system seperti Maven dan Gradle.

Untuk dokumentasi resmi, lihat [Spring Boot — Building Native Images](https://docs.spring.io/spring-boot/reference/packaging/native-image/introducing-graalvm-native-images.html).

#### B. Native Build Tools

Selain Buildpacks, terdapat **GraalVM Native Build Tools** yang menyediakan integrasi dengan Maven dan Gradle.

Dengan pendekatan ini, proses native compilation dapat menjadi bagian dari workflow build project.

Untuk informasi lebih lanjut, lihat [GraalVM — Native Build Tools](https://www.graalvm.org/latest/reference-manual/native-image/building/).

### 6. Pengujian Native Image

Aplikasi Spring Boot dapat diuji dalam dua bentuk:

- **JVM**
- **Native**

Pengujian menggunakan JVM biasanya lebih cepat sehingga cocok digunakan selama proses development sehari-hari.

Pengujian native dapat dilakukan ketika kita ingin memastikan bahwa aplikasi benar-benar bekerja setelah dikompilasi menjadi native executable.

| Mode             | Tujuan                                                   |
| ---------------- | -------------------------------------------------------- |
| **JVM Tests**    | Pengujian rutin selama development                       |
| **Native Tests** | Memastikan aplikasi kompatibel dengan native compilation |

Hal ini penting karena sebuah aplikasi yang berjalan dengan baik di JVM belum tentu secara otomatis memiliki perilaku yang sama setelah dikompilasi menjadi native image.

### 7. Keterbatasan Native Image

Native Image memiliki banyak keuntungan, tetapi juga membawa beberapa batasan.

Beberapa mekanisme Java yang sangat bergantung pada informasi runtime, terutama **reflection, dynamic class loading, dan beberapa bentuk dynamic proxy**, membutuhkan konfigurasi atau dukungan tambahan agar dapat bekerja dengan benar dalam native image.

Spring Boot dan Spring Framework menyediakan berbagai mekanisme untuk menangani kebutuhan tersebut, tetapi developer tetap perlu memahami bahwa native compilation memiliki model runtime yang berbeda dengan JVM.

Dengan kata lain:

> **Native Image bukan sekadar mengganti ekstensi `.jar` menjadi executable.**

Ada proses analisis dan optimasi tambahan yang terjadi ketika aplikasi dikompilasi.

### 8. Kapan Native Image Menjadi Menarik?

Native Image tidak selalu diperlukan untuk setiap aplikasi Spring Boot.

Pendekatan ini menjadi semakin menarik ketika aplikasi memiliki kebutuhan seperti:

- Startup yang sangat cepat.
- Deployment berbasis container.
- Serverless atau workload yang sering melakukan startup.
- Environment dengan memory terbatas.
- Aplikasi yang membutuhkan footprint runtime lebih kecil.

Sebaliknya, jika aplikasi merupakan service yang berjalan lama dan kebutuhan startup tidak terlalu ketat, menjalankan aplikasi di JVM tetap merupakan pilihan yang sangat masuk akal.

### Ringkasan

Secara sederhana, pembahasan **GraalVM Native Images** dapat dirangkum menjadi beberapa konsep utama:

| Konsep                 | Penjelasan                                                            |
| ---------------------- | --------------------------------------------------------------------- |
| **Native Image**       | Mengubah aplikasi Java menjadi native executable                      |
| **GraalVM**            | Teknologi yang dapat digunakan untuk melakukan native compilation     |
| **AOT**                | Proses analisis dan kompilasi dilakukan sebelum runtime               |
| **Buildpacks**         | Cara membuat native container image secara otomatis                   |
| **Native Build Tools** | Integrasi native compilation dengan Maven atau Gradle                 |
| **JVM Testing**        | Pengujian aplikasi pada JVM                                           |
| **Native Testing**     | Pengujian aplikasi setelah dikompilasi secara native                  |
| **Limitations**        | Beberapa fitur dinamis membutuhkan dukungan atau konfigurasi tambahan |

Jadi, **GraalVM Native Image memberikan alternatif terhadap deployment Spring Boot berbasis JVM**. Dengan pendekatan AOT, aplikasi dapat dikompilasi menjadi executable native yang menawarkan karakteristik startup dan penggunaan resource yang berbeda.

Namun, pilihan antara **JVM dan Native Image** sebaiknya disesuaikan dengan kebutuhan aplikasi. Native Image bukan pengganti mutlak JVM, melainkan salah satu pilihan deployment yang dapat digunakan ketika karakteristik native executable memberikan keuntungan bagi aplikasi.

Untuk dokumentasi lengkap dan informasi yang mengikuti versi Spring Boot yang digunakan, lihat [Spring Boot — GraalVM Native Images](https://docs.spring.io/spring-boot/reference/packaging/native-image/index.html).

---

### 1.12 Topik Lanjutan (Advanced Topics)

Setelah memahami gambaran umum Spring Boot, bagian ini membawa kita menuju beberapa topik yang lebih lanjut. Pembahasannya tidak lagi hanya berfokus pada cara menjalankan aplikasi, tetapi mulai menyentuh bagaimana aplikasi Spring Boot dipersiapkan untuk kebutuhan deployment, proses build, serta berbagai mekanisme internal dan konfigurasi yang tersedia.

Bagian ini lebih cocok dijadikan **referensi lanjutan** setelah Anda memahami dasar-dasar Spring Boot. Tidak semua topik perlu dipelajari sekaligus. Anda dapat mempelajarinya sesuai kebutuhan dan tingkat kompleksitas aplikasi yang sedang dikembangkan.

### 1. Deployment Aplikasi Spring Boot

Deployment adalah proses membawa aplikasi dari lingkungan development ke lingkungan tempat aplikasi benar-benar dijalankan, seperti server, cloud, atau platform tertentu.

Spring Boot menyediakan beberapa pendekatan deployment, mulai dari menjalankan aplikasi sebagai executable JAR hingga menjalankannya sebagai layanan pada sistem operasi atau platform cloud.

Beberapa pendekatan deployment yang umum antara lain:

| Pendekatan       | Gambaran Umum                                            | Cocok Untuk                      |
| ---------------- | -------------------------------------------------------- | -------------------------------- |
| Cloud Deployment | Menjalankan aplikasi pada platform cloud                 | Aplikasi modern dan scalable     |
| OS Service       | Menjalankan aplikasi sebagai service pada sistem operasi | Server atau VM                   |
| Executable JAR   | Menjalankan aplikasi menggunakan `java -jar`             | Deployment sederhana             |
| Container        | Menjalankan aplikasi dalam container seperti Docker      | Deployment modern dan terisolasi |

Untuk aplikasi yang lebih besar, deployment biasanya juga berkaitan dengan konfigurasi environment, observability, networking, security, dan scaling.

Referensi resmi:

- [Spring Boot Deployment](https://docs.spring.io/spring-boot/reference/deployment/index.html)

### 2. Plugin Build Tools

Spring Boot menyediakan plugin untuk sistem build yang membantu proses pengembangan, pengujian, packaging, hingga menjalankan aplikasi.

Dua sistem build yang paling umum digunakan dalam ekosistem Spring Boot adalah **Maven** dan **Gradle**.

| Build Tool | Plugin                    | Kegunaan Utama                              |
| ---------- | ------------------------- | ------------------------------------------- |
| Maven      | Spring Boot Maven Plugin  | Menjalankan, menguji, dan mengemas aplikasi |
| Gradle     | Spring Boot Gradle Plugin | Menjalankan, menguji, dan mengemas aplikasi |

Sebagai contoh, dengan Maven kita dapat menggunakan:

```bash
mvn spring-boot:run
```

Sedangkan dengan Gradle:

```bash
./gradlew bootRun
```

Plugin tersebut juga membantu membuat executable JAR yang dapat langsung dijalankan pada environment tujuan.

Referensi resmi:

- [Spring Boot Maven Plugin](https://docs.spring.io/spring-boot/maven-plugin/)
- [Spring Boot Gradle Plugin](https://docs.spring.io/spring-boot/gradle-plugin/)

### 3. Lampiran (Appendix)

Selain fitur utama, dokumentasi Spring Boot juga menyediakan sejumlah lampiran yang berisi informasi referensi lebih detail.

Bagian ini sangat berguna ketika Anda membutuhkan informasi spesifik mengenai konfigurasi atau mekanisme internal Spring Boot.

Beberapa topik yang tersedia antara lain:

| Topik                               | Penjelasan Singkat                                                       |
| ----------------------------------- | ------------------------------------------------------------------------ |
| Application Properties              | Daftar dan penjelasan berbagai properti konfigurasi Spring Boot          |
| Configuration Metadata              | Metadata yang membantu IDE memahami konfigurasi aplikasi                 |
| Auto-configuration Classes          | Informasi mengenai kelas yang digunakan dalam auto-configuration         |
| Test Auto-configuration Annotations | Anotasi yang digunakan untuk mengatur auto-configuration dalam pengujian |
| Executable JAR                      | Penjelasan mengenai struktur dan mekanisme executable JAR                |
| Dependency Versions                 | Daftar versi dependency yang dikelola oleh Spring Boot                   |

Tidak semua bagian lampiran perlu dibaca dari awal. Biasanya bagian ini lebih berguna ketika Anda sedang membutuhkan referensi tertentu saat mengembangkan atau melakukan troubleshooting aplikasi.

Referensi resmi:

- [Spring Boot Reference Documentation](https://docs.spring.io/spring-boot/reference/)
- [Application Properties](https://docs.spring.io/spring-boot/appendix/application-properties/)
- [Configuration Metadata](https://docs.spring.io/spring-boot/specification/configuration-metadata/)

### 4. Kapan Topik Lanjutan Ini Perlu Dipelajari?

Anda tidak perlu mempelajari seluruh topik advanced sejak awal. Pilih berdasarkan kebutuhan aplikasi dan permasalahan yang sedang Anda hadapi.

| Kebutuhan                                           | Topik yang Relevan         |
| --------------------------------------------------- | -------------------------- |
| Ingin deploy aplikasi                               | Deployment                 |
| Menggunakan Maven atau Gradle secara lebih mendalam | Build Plugins              |
| Membutuhkan konfigurasi tertentu                    | Application Properties     |
| Ingin memahami auto-configuration                   | Auto-configuration Classes |
| Mengoptimalkan proses testing                       | Test Auto-configuration    |
| Membutuhkan informasi dependency                    | Dependency Versions        |
| Ingin memahami executable JAR                       | Executable JAR             |

Dengan pendekatan seperti ini, dokumentasi Spring Boot tidak harus dipelajari secara linear dari awal sampai akhir. Anda dapat menjadikannya sebagai **referensi yang dapat digunakan sesuai kebutuhan**.

### Kesimpulan

Topik lanjutan merupakan bagian yang membantu memperluas pemahaman setelah konsep dasar Spring Boot sudah dikuasai.

Pada tahap ini, fokusnya mulai bergeser dari sekadar **"bagaimana menjalankan aplikasi"** menjadi **"bagaimana mengembangkan, mengemas, mengonfigurasi, dan menjalankan aplikasi secara lebih matang"**.

Jadi, tidak perlu terburu-buru mempelajari seluruh bagian advanced. Pahami dasar Spring Boot terlebih dahulu, kemudian gunakan bagian ini sebagai referensi ketika kebutuhan aplikasi mulai berkembang.
