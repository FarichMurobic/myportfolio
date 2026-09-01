---
title: "Spring Boot Overview"
description: "For every experience that shaped me, every lesson that meant something, every time that has passed, and every opportunity yet to come—thank you."
date: "2026-01-01"
author: "Farich Murobic"
tags: ["springboot", "java", "overview", "learning"]
image: "/assets/images/posts/thumbnail/Journey.png"
---

# Spring Boot Overview

<div style="font-style: italic; padding-left: 16px; border-left: 4px solid #ccc;" class="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-600">

  <p class="mt-2 font-bold">Spring Boot memiliki ruang pembahasan yang cukup luas. Karena itu, sebelum masuk lebih jauh ke dalam setiap fitur dan konsepnya, saya ingin terlebih dahulu melihat gambaran besarnya. Bagi saya, bagian ini bukanlah tutorial teknis, melainkan sebuah peta untuk memahami bagaimana Spring Boot disusun, apa yang menjadi fokus utamanya, dan bagaimana berbagai bagian di dalamnya saling berhubungan.</p>

  <p class="mt-2 font-bold">Dokumentasi resmi Spring Boot sendiri memiliki cakupan yang luas, mulai dari langkah awal, pengembangan aplikasi, fitur-fitur inti, web, data, messaging, hingga deployment dan topik lanjutan. Jadi, daripada langsung masuk ke detail implementasi, saya akan melihat Spring Boot dari sudut pandang yang lebih umum terlebih dahulu—memahami apa yang ditawarkan, mengapa ia digunakan, dan bagaimana saya dapat menempatkan setiap konsepnya dalam satu gambaran yang utuh.</p>

  <p class="mt-2 font-bold">Jika setelah membaca bagian ini Anda ingin mendalami aspek teknis tertentu, saya sangat menyarankan untuk merujuk langsung ke <a href="https://docs.spring.io/spring-boot/reference/" target="_blank" rel="noopener noreferrer">dokumentasi resmi Spring Boot</a>. Dokumentasi tersebut merupakan referensi utama yang mengikuti perkembangan versi Spring Boot dan menyediakan pembahasan yang jauh lebih lengkap mengenai setiap fitur dan kemampuan yang tersedia.</p>

</div>

---

## 1. Ikhtisar Dokumentasi

Bagian ini menjadi titik awal untuk memahami keseluruhan dokumentasi Spring Boot. Alih-alih langsung masuk ke pembahasan teknis, saya ingin terlebih dahulu melihat bagaimana dokumentasi tersebut disusun dan topik apa saja yang akan ditemui di dalamnya. Dengan begitu, setiap pembahasan berikutnya dapat ditempatkan dalam konteks yang lebih jelas.

Dokumentasi Spring Boot mencakup berbagai aspek pengembangan aplikasi, mulai dari pengenalan dan konfigurasi hingga pengembangan web, akses data, integrasi, pengujian, deployment, serta berbagai fitur pendukung lainnya. Karena cakupannya cukup luas, memahami struktur besarnya terlebih dahulu akan membantu saya menentukan bagian mana yang perlu dipelajari lebih mendalam sesuai kebutuhan.

Untuk referensi yang lebih lengkap dan selalu mengikuti perkembangan versi Spring Boot, saya menyarankan kembali untuk merujuk langsung ke [dokumentasi referensi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/).

---

### 1.1 Memulai

Jika Anda baru pertama kali mengenal Spring Boot—atau bahkan belum terlalu familiar dengan ekosistem Spring—bagian ini dapat menjadi titik awal yang baik untuk memahami gambaran dasarnya. Saya tidak akan langsung membawa pembahasan ke dalam implementasi teknis, melainkan terlebih dahulu melihat hal-hal fundamental yang perlu diketahui sebelum mengenal Spring Boot lebih jauh.

**Peta Pembahasan untuk Pemula**

Sebelum masuk ke bagian-bagian yang lebih spesifik, saya akan melihat beberapa tahapan dasar yang umumnya menjadi bagian dari perjalanan awal mengenal Spring Boot:

- **Dari Dasar:** memahami gambaran umum, persyaratan sistem, hingga proses instalasi.
- **Mengenal Pengembangan Aplikasi:** melihat bagaimana Spring Boot digunakan dalam membangun sebuah aplikasi tanpa langsung berfokus pada detail implementasinya.
- **Mengenal Contoh Aplikasi:** memahami gambaran dari aplikasi yang dibangun dengan Spring Boot sebagai konteks untuk pembahasan berikutnya.

Bagian ini pada dasarnya berfungsi sebagai pengantar. Setelah memahami gambaran dasarnya, pembahasan dapat dilanjutkan ke konsep-konsep Spring Boot yang lebih spesifik sesuai kebutuhan.

---

### 1.2 Meningkatkan Versi dari Versi Sebelumnya

Spring Boot terus berkembang melalui pembaruan versi yang membawa perubahan, penyempurnaan fitur, peningkatan keamanan, serta penyesuaian terhadap ekosistem Spring dan teknologi pendukung lainnya. Karena itu, ketika sebuah aplikasi menggunakan versi Spring Boot yang lebih lama, proses berpindah ke versi yang lebih baru perlu mempertimbangkan perubahan yang mungkin memengaruhi aplikasi tersebut.

Bagi saya, memahami konsep _upgrade_ bukan hanya tentang mengganti nomor versi pada sebuah proyek. Setiap rilis dapat membawa perubahan pada konfigurasi, dependency, API, maupun perilaku tertentu di dalam framework. Semakin jauh jarak antara versi yang digunakan dengan versi tujuan, semakin penting untuk memahami perubahan yang terjadi di antaranya.

Dokumentasi resmi Spring Boot menyediakan panduan migrasi untuk membantu memahami perubahan antarversi. Beberapa bagian yang dapat dijadikan referensi antara lain:

- **Dari Spring Boot 1.x:** membahas hal-hal yang perlu diperhatikan ketika berpindah dari generasi Spring Boot 1.x ke versi yang lebih baru.
- **Ke rilis fitur baru:** membahas perubahan dan pertimbangan ketika melakukan upgrade ke rilis fitur berikutnya.
- **Spring Boot CLI:** menyediakan informasi terkait pembaruan versi Spring Boot CLI.

Untuk melihat panduan migrasi dan perubahan versi secara lebih lengkap, saya menyarankan merujuk langsung ke [dokumentasi migrasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/upgrading.html). Dokumentasi tersebut menjadi referensi yang lebih tepat karena detail migrasi dapat berbeda bergantung pada versi asal dan versi Spring Boot yang menjadi tujuan upgrade.

---

### 1.3 Mengembangkan dengan Spring Boot

Setelah memahami gambaran umum dan hal-hal yang perlu diperhatikan ketika berpindah versi, pembahasan berikutnya mulai mengarah pada bagaimana Spring Boot digunakan dalam proses pengembangan aplikasi. Pada tahap ini, saya belum akan masuk ke langkah implementasi secara detail. Saya hanya ingin melihat komponen dan konsep utama yang biasanya akan ditemui ketika mulai membangun aplikasi menggunakan Spring Boot.

Salah satu hal pertama yang perlu diperhatikan adalah **sistem build**. Spring Boot dapat digunakan bersama beberapa build system, tetapi Maven dan Gradle menjadi pilihan yang paling umum. Build system tidak hanya membantu proses build aplikasi, tetapi juga berperan dalam pengelolaan dependency yang digunakan oleh proyek. Spring Boot menyediakan pengelolaan dependency yang terkurasi sehingga berbagai library dapat digunakan dengan versi yang lebih konsisten.

Selain build system, Spring Boot juga memiliki sejumlah konsep yang membantu menyederhanakan proses pengembangan. Beberapa di antaranya adalah **Starters**, **Auto-Configuration**, **Configuration**, serta **Beans dan Dependency Injection**. Konsep-konsep tersebut saling berhubungan dalam membentuk cara Spring Boot menyiapkan dan menjalankan sebuah aplikasi.

Secara garis besar, area yang akan saya temui ketika mengembangkan aplikasi dengan Spring Boot dapat digambarkan seperti berikut:

| Area                             | Gambaran                                                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Build System**                 | Mengelola proses build dan dependency aplikasi, terutama melalui Maven atau Gradle.                      |
| **Starters**                     | Menyediakan kumpulan dependency yang umum dibutuhkan untuk jenis aplikasi tertentu.                      |
| **Struktur Kode**                | Memberikan rekomendasi mengenai bagaimana package dan kelas aplikasi sebaiknya ditempatkan.              |
| **Configuration**                | Mengatur bagaimana aplikasi dan berbagai komponennya dikonfigurasi.                                      |
| **Auto-Configuration**           | Membantu Spring Boot melakukan konfigurasi berdasarkan dependency dan kondisi yang tersedia di aplikasi. |
| **Beans & Dependency Injection** | Mengelola objek aplikasi sebagai Spring Beans dan menghubungkan dependency yang dibutuhkan.              |
| **Running Application**          | Menjalankan aplikasi melalui IDE, sebagai packaged application, Maven, atau Gradle.                      |
| **Packaging**                    | Menyiapkan aplikasi agar dapat dikemas dan dijalankan, termasuk sebagai executable JAR.                  |
| **Spring Boot CLI**              | Menyediakan pendekatan berbasis command line untuk bekerja dengan Spring Boot.                           |

Spring Boot sendiri tidak memaksakan satu struktur kode tertentu. Namun, dokumentasinya memberikan beberapa rekomendasi, seperti menempatkan main application class pada root package agar mekanisme scanning dapat bekerja dengan lebih terarah.

Dalam menjalankan aplikasi, Spring Boot juga memberikan beberapa pilihan, mulai dari IDE hingga aplikasi yang sudah dikemas sebagai executable JAR. Dengan pendekatan tersebut, aplikasi dapat dijalankan tanpa membutuhkan konfigurasi server aplikasi secara terpisah untuk skenario tertentu.

Bagi saya, bagian ini penting untuk membangun gambaran bahwa Spring Boot bukan hanya tentang satu atau dua fitur. Ia menyediakan sejumlah fasilitas yang saling melengkapi—mulai dari pengelolaan dependency, konfigurasi, proses bootstrap aplikasi, hingga packaging dan menjalankan aplikasi.

Untuk pembahasan teknis yang lebih mendalam, saya menyarankan untuk melihat langsung bagian [Developing with Spring Boot](https://docs.spring.io/spring-boot/reference/using/) pada dokumentasi resmi Spring Boot.

---

### 1.4 Mempelajari Fitur-Fitur Spring Boot

Setelah melihat bagaimana Spring Boot digunakan dalam proses pengembangan aplikasi, bagian berikutnya mulai memperkenalkan beberapa fitur inti yang menjadi bagian penting dari ekosistemnya. Saya tidak akan membahas setiap fitur sampai ke detail implementasinya di sini. Tujuannya lebih sederhana: memahami apa fungsi masing-masing fitur dan mengapa fitur tersebut penting dalam sebuah aplikasi Spring Boot.

Beberapa fitur yang menurut saya cukup penting untuk dikenali sejak awal adalah:

| Fitur                     | Gambaran Umum                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **SpringApplication**     | Membantu melakukan bootstrap dan menjalankan aplikasi Spring dari entry point utama.                               |
| **Konfigurasi Eksternal** | Memungkinkan konfigurasi aplikasi dipisahkan dari kode sehingga dapat disesuaikan dengan environment yang berbeda. |
| **Profiles**              | Membantu memisahkan konfigurasi atau komponen tertentu berdasarkan environment yang sedang digunakan.              |
| **Logging**               | Menyediakan mekanisme pencatatan aktivitas aplikasi yang berguna untuk observasi, debugging, dan pemantauan.       |

#### SpringApplication

`SpringApplication` merupakan salah satu bagian penting dalam proses bootstrap aplikasi Spring Boot. Class ini menyediakan cara untuk menjalankan aplikasi Spring dari sebuah `main()` method dan membantu menyiapkan application context yang diperlukan. Dalam aplikasi Spring Boot pada umumnya, proses ini biasanya terlihat melalui penggunaan `SpringApplication.run(...)`.

Bagi saya, cara paling sederhana untuk memahaminya adalah melihat `SpringApplication` sebagai salah satu pintu masuk yang membantu membawa aplikasi dari proses startup menuju kondisi siap berjalan.

#### Konfigurasi Eksternal

Spring Boot memungkinkan konfigurasi aplikasi dipisahkan dari source code. Nilai konfigurasi dapat berasal dari beberapa sumber, seperti `application.properties`, `application.yaml`, environment variables, hingga command-line arguments. Dengan pendekatan ini, aplikasi yang sama dapat digunakan pada environment yang berbeda tanpa harus mengubah source code hanya karena konfigurasi lingkungannya berbeda.

Konsep ini menjadi sangat berguna ketika aplikasi mulai memiliki beberapa environment, misalnya development, testing, dan production.

#### Profiles

**Profiles** membantu memisahkan konfigurasi atau komponen aplikasi berdasarkan environment tertentu. Sebuah aplikasi dapat memiliki profile seperti `dev`, `test`, atau `prod`, sehingga konfigurasi yang digunakan dapat disesuaikan dengan kebutuhan masing-masing environment.

Dengan demikian, saya dapat membayangkan Profiles sebagai sebuah mekanisme untuk mengatakan kepada aplikasi: **"gunakan konfigurasi atau komponen tertentu ketika aplikasi berjalan dalam kondisi tertentu."**

#### Logging

Logging merupakan bagian penting dalam pengembangan dan pengoperasian aplikasi karena memberikan informasi mengenai apa yang sedang terjadi di dalam aplikasi. Spring Boot menyediakan dukungan terhadap sistem logging dan secara default dapat menggunakan Logback melalui dependency yang dibawa oleh starter tertentu.

Logging tidak hanya berguna ketika terjadi error. Informasi log juga dapat membantu memahami proses startup, aktivitas aplikasi, serta kondisi tertentu ketika aplikasi sedang berjalan. Pengaturan seperti level logging juga dapat disesuaikan melalui konfigurasi aplikasi.

### Gambaran Besarnya

Keempat fitur tersebut sebenarnya saling melengkapi. `SpringApplication` berkaitan dengan bagaimana aplikasi dimulai, konfigurasi eksternal membantu mengatur nilai yang digunakan aplikasi, Profiles membantu menyesuaikan konfigurasi berdasarkan environment, sedangkan Logging membantu kita memahami aktivitas aplikasi ketika sedang berjalan.

Bagi saya, memahami hubungan sederhana ini lebih penting pada tahap awal daripada langsung menghafal setiap konfigurasi dan API yang tersedia. Setelah konsep dasarnya sudah jelas, masing-masing fitur dapat dipelajari lebih dalam sesuai kebutuhan aplikasi.

Untuk pembahasan yang lebih lengkap, saya menyarankan untuk melihat bagian [Core Features](https://docs.spring.io/spring-boot/reference/features/) pada dokumentasi resmi Spring Boot.

---

### 1.5 Web

Web merupakan salah satu area utama dalam penggunaan Spring Boot. Framework ini menyediakan berbagai fasilitas untuk membangun aplikasi web, mulai dari aplikasi berbasis servlet dengan Spring MVC hingga aplikasi reactive dengan Spring WebFlux.

Pada tahap overview, saya melihat bagian Web sebagai kumpulan kemampuan yang membantu aplikasi Spring Boot berkomunikasi melalui HTTP, menangani request dan response, mengelola keamanan, serta mendukung kebutuhan aplikasi ketika mulai digunakan dalam lingkungan yang lebih nyata.

Beberapa area penting yang dapat dikenali antara lain:

| Fitur                 | Gambaran Umum                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Servlet Web**       | Mendukung pengembangan aplikasi web berbasis servlet, terutama melalui Spring MVC, dengan embedded server seperti Tomcat atau Jetty.      |
| **Reactive Web**      | Mendukung pengembangan aplikasi reactive dan non-blocking melalui Spring WebFlux.                                                         |
| **Graceful Shutdown** | Membantu aplikasi berhenti secara bertahap dengan memberikan kesempatan kepada request yang sedang berjalan untuk diselesaikan.           |
| **Spring Security**   | Menyediakan berbagai kemampuan untuk mengamankan aplikasi web, termasuk autentikasi dan otorisasi serta integrasi dengan OAuth2 dan SAML. |
| **Spring Session**    | Membantu mengelola HTTP session dan memungkinkan penyimpanan session pada berbagai data store.                                            |
| **Spring HATEOAS**    | Membantu membangun RESTful API yang menggunakan hypermedia sebagai bagian dari representasi resource.                                     |

#### Servlet Web

Pendekatan servlet merupakan salah satu model yang umum digunakan untuk membangun aplikasi web dengan Spring Boot. Melalui **Spring MVC**, aplikasi dapat menangani HTTP request dan response menggunakan model pemrograman berbasis servlet.

Spring Boot menyediakan dukungan untuk embedded web server sehingga aplikasi dapat dijalankan sebagai aplikasi mandiri. Tomcat dan Jetty merupakan beberapa server yang dapat digunakan dalam pendekatan ini. ([docs.spring.io](https://docs.spring.io/spring-boot/reference/web/servlet.html?utm_source=chatgpt.com))

Dengan pendekatan tersebut, developer tidak selalu perlu melakukan deployment aplikasi ke server aplikasi eksternal secara terpisah. Spring Boot dapat mengemas aplikasi beserta web server yang dibutuhkannya dalam bentuk executable application.

#### Reactive Web

Selain model servlet, Spring Boot juga mendukung pendekatan **reactive web** melalui **Spring WebFlux**.

WebFlux menggunakan model reactive yang dirancang untuk pemrosesan asynchronous dan non-blocking. Pendekatan ini berbeda dari Spring MVC sehingga penggunaannya biasanya dipilih berdasarkan karakteristik dan kebutuhan aplikasi, bukan sekadar karena dianggap lebih modern. ([docs.spring.io](https://docs.spring.io/spring-boot/reference/web/reactive.html?utm_source=chatgpt.com))

Spring Boot menyediakan dukungan embedded server untuk aplikasi reactive, termasuk Reactor Netty, serta dukungan terhadap Tomcat dan Jetty pada skenario yang sesuai. ([docs.spring.io](https://docs.spring.io/spring-boot/reference/web/reactive.html?utm_source=chatgpt.com))

Bagi saya, perbedaan sederhananya dapat dipahami seperti ini:

| Pendekatan       | Teknologi      | Karakteristik                                                                  |
| ---------------- | -------------- | ------------------------------------------------------------------------------ |
| **Servlet Web**  | Spring MVC     | Model web berbasis servlet yang umum digunakan untuk aplikasi web tradisional. |
| **Reactive Web** | Spring WebFlux | Model asynchronous dan non-blocking untuk kebutuhan reactive application.      |

Tidak ada satu pendekatan yang selalu lebih baik. Pemilihannya bergantung pada kebutuhan aplikasi, jenis workload, dan kemampuan tim dalam menggunakan model programming tersebut.

#### Graceful Shutdown

**Graceful Shutdown** adalah mekanisme untuk menghentikan aplikasi secara bertahap. Ketika aplikasi menerima perintah untuk berhenti, request yang sedang diproses dapat diberikan kesempatan untuk selesai sebelum server benar-benar dihentikan.

Konsep ini menjadi penting terutama pada aplikasi yang berjalan di lingkungan production. Shutdown yang dilakukan secara tiba-tiba berpotensi membuat request yang sedang diproses terputus.

Pada Spring Boot, graceful shutdown didukung oleh embedded web server seperti Tomcat, Jetty, dan Reactor Netty, baik untuk aplikasi servlet maupun reactive.

Secara sederhana:

> **Graceful Shutdown = aplikasi berhenti dengan cara yang lebih terkontrol, bukan sekadar langsung memutus proses.**

#### Spring Security

Ketika aplikasi web membutuhkan keamanan, Spring Boot dapat bekerja bersama **Spring Security** untuk menangani berbagai kebutuhan keamanan aplikasi.

Jika Spring Security tersedia pada classpath, aplikasi web Spring Boot mendapatkan konfigurasi keamanan default. Konfigurasi tersebut dapat disesuaikan sesuai kebutuhan aplikasi melalui mekanisme yang disediakan Spring Security.

Spring Security juga memiliki dukungan untuk berbagai skenario keamanan modern, termasuk OAuth2 dan SAML 2.0.

Pada tahap overview, hal yang paling penting untuk dipahami adalah bahwa Spring Security bukan sekadar fitur untuk membuat halaman login. Ia merupakan bagian dari ekosistem yang menangani **authentication, authorization, dan berbagai aspek keamanan aplikasi**.

#### Spring Session

Session digunakan untuk mempertahankan informasi tertentu yang berkaitan dengan pengguna selama beberapa request.

Spring Boot menyediakan auto-configuration untuk **Spring Session** dan mendukung beberapa jenis penyimpanan session. Untuk aplikasi servlet, misalnya, session dapat disimpan menggunakan Redis atau JDBC. Pada aplikasi reactive, Redis juga dapat digunakan sebagai salah satu pilihan penyimpanan.

Kemampuan ini menjadi lebih relevan ketika aplikasi berjalan pada lebih dari satu instance. Session tidak harus selalu bergantung pada memory dari satu server sehingga dapat dikelola melalui penyimpanan yang dapat digunakan bersama.

Secara sederhana:

> **Spring Session membantu memisahkan pengelolaan session dari satu instance aplikasi tertentu.**

#### Spring HATEOAS

**Spring HATEOAS** digunakan ketika REST API ingin menerapkan konsep **HATEOAS (Hypermedia as the Engine of Application State)**.

Konsepnya adalah response API tidak hanya berisi data resource, tetapi juga dapat menyertakan informasi berupa link atau hubungan yang membantu client mengetahui tindakan atau resource lain yang berkaitan.

Spring Boot menyediakan auto-configuration untuk Spring HATEOAS pada aplikasi yang menggunakannya.

Namun, HATEOAS bukan persyaratan bagi setiap REST API. Ia lebih tepat dipandang sebagai pendekatan tertentu dalam merancang API yang membutuhkan hypermedia.

### Gambaran Besarnya

Jika seluruh pembahasan Web ini dirangkum, Spring Boot menyediakan beberapa lapisan kemampuan yang dapat digunakan sesuai kebutuhan:

| Fitur                 | Komponen       | Fungsi                                          |
| --------------------- | -------------- | ----------------------------------------------- |
| **Servlet Web**       | Spring MVC     | Membangun aplikasi web berbasis servlet         |
| **Reactive Web**      | Spring WebFlux | Membangun aplikasi web reaktif dan non-blocking |
| **Graceful Shutdown** | —              | Menghentikan aplikasi secara bertahap           |
| **Security**          | Authentication | Memverifikasi identitas pengguna                |
| **Security**          | Authorization  | Menentukan hak akses pengguna                   |
| **Session**           | Session Store  | Menyimpan dan mengelola session pengguna        |
| **HATEOAS**           | Hypermedia     | Menyediakan link terkait dalam response API     |

Tidak semua aplikasi membutuhkan seluruh fitur tersebut. Aplikasi sederhana mungkin hanya membutuhkan Spring MVC, sementara aplikasi lain dapat membutuhkan reactive programming, security, distributed session, atau hypermedia.

Bagi saya, inti dari bagian ini adalah memahami bahwa **Spring Boot menyediakan fondasi untuk membangun aplikasi web dengan berbagai kebutuhan, tetapi pilihan fitur tetap bergantung pada karakteristik aplikasi yang sedang dibangun.**

Untuk pembahasan teknis yang lebih lengkap, saya menyarankan melihat bagian [Web](https://docs.spring.io/spring-boot/reference/web/) pada dokumentasi resmi Spring Boot.

---

### 1.6. Data

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

- **DataSource** — Mengelola koneksi aplikasi ke database.
- **Connection Pool** — Mengelola sekumpulan koneksi yang dapat digunakan kembali oleh aplikasi.
- **JdbcTemplate** — Menyederhanakan operasi database menggunakan JDBC.
- **Spring Data JPA** — Menyediakan abstraksi untuk bekerja dengan data menggunakan konsep repository.
- **Hibernate** — Salah satu implementasi JPA yang banyak digunakan dalam ekosistem Spring.
- **Database Initialization** — Membantu proses inisialisasi schema dan data pada kondisi tertentu.

Dengan dukungan tersebut, aplikasi Spring Boot dapat menggunakan berbagai database SQL seperti MySQL, PostgreSQL, Oracle, SQL Server, dan database lainnya yang didukung oleh driver serta konfigurasi yang sesuai.

Secara konseptual, alurnya dapat digambarkan seperti:

| Layer                     | Komponen                 | Peran                                               |
| ------------------------- | ------------------------ | --------------------------------------------------- |
| **Application**           | Aplikasi                 | Bagian aplikasi yang membutuhkan akses data         |
| **Data Access**           | Spring Data / JDBC / JPA | Menyediakan cara untuk berinteraksi dengan database |
| **Data Source**           | DataSource               | Menyediakan koneksi ke database                     |
| **Connection Management** | Connection Pool          | Mengelola dan menggunakan kembali koneksi database  |
| **Database**              | SQL Database             | Tempat penyimpanan data utama                       |

Salah satu pendekatan yang populer adalah **Spring Data JPA**, terutama ketika aplikasi menggunakan model domain berbasis object dan membutuhkan abstraction layer untuk operasi persistence.

Namun, JPA bukan satu-satunya pilihan. Untuk kebutuhan tertentu, penggunaan JDBC secara langsung atau framework lain seperti MyBatis juga dapat menjadi pilihan.

Informasi lebih lengkap mengenai dukungan SQL dapat dilihat pada [dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/sql.html).

---

### NoSQL Database

Berbeda dengan database relasional, **NoSQL (Not Only SQL)** merupakan istilah yang mencakup berbagai model penyimpanan data non-relasional.

NoSQL bukan satu jenis database dengan satu struktur tertentu. Di dalamnya terdapat beberapa pendekatan penyimpanan yang berbeda, seperti document, key-value, wide-column, dan graph.

Karena itu, pemilihan database NoSQL biasanya disesuaikan dengan bentuk data dan kebutuhan aplikasi.

Beberapa teknologi yang terintegrasi dengan ekosistem Spring Boot antara lain:

| Database          | Model Data           | Gambaran Penggunaan                                                              |
| ----------------- | -------------------- | -------------------------------------------------------------------------------- |
| **Redis**         | Key-Value            | Cache, session, dan kebutuhan data berumur pendek atau akses sangat cepat.       |
| **MongoDB**       | Document             | Data berbentuk dokumen yang fleksibel, misalnya data JSON.                       |
| **Neo4j**         | Graph                | Data yang memiliki hubungan atau relasi kompleks.                                |
| **Cassandra**     | Wide-Column          | Sistem terdistribusi dengan kebutuhan scalability dan throughput tinggi.         |
| **Elasticsearch** | Search / Analytics   | Pencarian dan analisis data dalam jumlah besar.                                  |
| **Couchbase**     | Document / Key-Value | Aplikasi yang membutuhkan penyimpanan dokumen dan akses data berperforma tinggi. |

#### Redis

**Redis** merupakan in-memory data store yang menggunakan model key-value dan banyak digunakan untuk kebutuhan seperti caching, session management, serta penyimpanan data yang membutuhkan akses sangat cepat.

Dalam arsitektur aplikasi, Redis sering kali ditempatkan sebagai lapisan tambahan di antara aplikasi dan database utama:

| Komponen          | Peran                                                           |
| ----------------- | --------------------------------------------------------------- |
| **Application**   | Aplikasi yang membutuhkan akses data                            |
| **Redis**         | Cache untuk menyimpan data yang sering diakses agar lebih cepat |
| **Main Database** | Menyimpan data utama aplikasi secara permanen                   |

Spring Boot menyediakan integrasi dengan Redis melalui Spring Data Redis.

Dokumentasi lebih lengkap dapat dilihat pada [bagian Redis di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/redis.html).

#### MongoDB

**MongoDB** merupakan database document-oriented. Data disimpan dalam bentuk dokumen yang memiliki struktur fleksibel.

Pendekatan ini dapat berguna ketika struktur data aplikasi tidak selalu cocok dengan model tabel relasional tradisional.

Spring Boot dapat diintegrasikan dengan MongoDB melalui Spring Data MongoDB.

Informasi lebih lanjut tersedia pada [bagian MongoDB di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/mongodb.html).

#### Neo4j

**Neo4j** merupakan database berbasis graph yang menyimpan data sebagai node dan relationship.

Model seperti ini dapat berguna ketika hubungan antar-data menjadi bagian penting dari domain aplikasi.

Contohnya dapat ditemukan pada:

| Entitas  | Relasi  | Entitas  | Keterangan                                              |
| -------- | ------- | -------- | ------------------------------------------------------- |
| **User** | follows | **User** | User dapat mengikuti user lain                          |
| **User** | likes   | **Post** | User dapat menyukai sebuah post                         |
| **Post** | related | **Post** | Sebuah post dapat memiliki hubungan dengan post lainnya |

Spring Boot menyediakan dukungan untuk integrasi dengan Neo4j melalui Spring Data Neo4j.

Dokumentasi lebih lanjut tersedia pada [bagian Neo4j di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/neo4j.html).

#### Cassandra

**Apache Cassandra** merupakan database terdistribusi dengan model wide-column. Cassandra dirancang untuk menangani data dalam jumlah besar dengan kebutuhan availability dan scalability pada lingkungan terdistribusi.

Karakteristik tersebut membuat Cassandra berbeda dari database relasional maupun document database.

Spring Boot menyediakan integrasi dengan Cassandra melalui Spring Data Cassandra.

Dokumentasi lebih lengkap tersedia pada [bagian Cassandra di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/cassandra.html).

#### Elasticsearch

**Elasticsearch** merupakan search and analytics engine yang banyak digunakan untuk kebutuhan pencarian, filtering, serta analisis data.

Contohnya, sebuah aplikasi dapat menggunakan database relasional sebagai sumber data utama dan Elasticsearch sebagai mesin pencarian untuk menyediakan fitur pencarian yang lebih kompleks.

| Komponen        | Terhubung ke      | Peran                                                                                 |
| --------------- | ----------------- | ------------------------------------------------------------------------------------- |
| **Application** | **SQL Database**  | **Source of Truth** — menyimpan data utama dan menjadi sumber kebenaran data aplikasi |
| **Application** | **Elasticsearch** | **Search & Analytics** — digunakan untuk pencarian dan analisis data                  |

Spring Boot menyediakan dukungan untuk integrasi dengan Elasticsearch melalui Spring Data Elasticsearch.

Informasi lebih lengkap tersedia pada [bagian Elasticsearch di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/elasticsearch.html).

#### Couchbase

**Couchbase** merupakan database yang mendukung model document dan key-value. Teknologi ini dirancang untuk kebutuhan aplikasi yang memerlukan akses data dengan latency rendah serta kemampuan scaling pada lingkungan terdistribusi.

Spring Boot menyediakan integrasi dengan Couchbase melalui Spring Data Couchbase.

Informasi lebih lanjut tersedia pada [bagian Couchbase di dokumentasi resmi Spring Boot](https://docs.spring.io/spring-boot/reference/data/nosql/couchbase.html).

---

### SQL atau NoSQL?

Saya tidak melihat SQL dan NoSQL sebagai dua pilihan yang harus dipertentangkan secara sederhana.

Keduanya memiliki karakteristik dan kebutuhan penggunaan yang berbeda.

| Pertimbangan          | SQL                                                                     | NoSQL                                                                  |
| --------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Struktur data**     | Terstruktur dan relasional                                              | Bergantung pada model database                                         |
| **Relasi antar-data** | Sangat kuat                                                             | Bergantung pada teknologi yang digunakan                               |
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

Karena itu, menurut saya pertanyaan yang lebih tepat bukan **"SQL atau NoSQL mana yang lebih bagus?"**, tetapi:

> **"Model penyimpanan data mana yang paling sesuai dengan kebutuhan aplikasi yang sedang saya bangun?"**

### Kesimpulan

Bagian Data dalam Spring Boot pada dasarnya memberikan fondasi untuk menghubungkan aplikasi dengan berbagai jenis data store.

Untuk database SQL, saya dapat memanfaatkan pendekatan seperti JDBC, JPA, Hibernate, atau MyBatis. Sementara itu, untuk kebutuhan tertentu, ekosistem Spring juga menyediakan integrasi dengan berbagai teknologi NoSQL seperti Redis, MongoDB, Neo4j, Cassandra, Elasticsearch, dan Couchbase.

Yang paling penting pada tahap overview ini bukan menghafalkan semua teknologi tersebut, tetapi memahami bahwa **Spring Boot menyediakan lapisan integrasi yang membantu aplikasi berkomunikasi dengan berbagai jenis penyimpanan data sesuai kebutuhan arsitekturnya**.
