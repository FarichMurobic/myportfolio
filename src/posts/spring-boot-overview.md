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
  <p class="mt2- font-bold">Bagian ini menyajikan ikhtisar menyeluruh dari dokumentasi referensi Spring Boot, yang dirancang untuk berfungsi sebagai peta jalan (roadmap) strategis sepanjang perjalanan belajar kita. Lalu, apa sebenarnya makna "ikhtisar" atau "peta" di sini? Pada intinya, bab ini ingin menyampaikan satu pesan pembuka: "Dokumentasi ini sangat ekstensif, maka izinkan saya memberikan gambaran besarnya terlebih dahulu—inilah yang akan kita pelajari dan bagaimana setiap bagian saling terhubung."</p>
  <p class="mt-2 font-bold">Bagi Anda yang ingin mendalami dokumentasi secara lengkap sesuai dengan versi Spring Boot yang digunakan, Saya sarankan untuk merujuk langsung ke salinan terbaru dari dokumen referensi resmi Spring Boot, yang dapat diakses melalui <a href="https://docs.spring.io/spring-boot/docs/current/reference/" target="_blank" rel="noopener noreferrer">docs.spring.io/spring-boot/docs/current/reference/</a>. Di sana, Anda akan menemukan seluruh spektrum informasi teknis yang terus diperbarui seiring rilis terbaru.</p>
</div>

---

## 1. Ikhtisar Dokumentasi

Bagian ini memberikan ikhtisar singkat tentang dokumentasi referensi Spring Boot. Ini berfungsi sebagai peta untuk sisa dokumen.

Salinan terbaru dari dokumen ini tersedia di <a href="https://docs.spring.io/spring-boot/docs/current/reference/" target="_blank" rel="noopener noreferrer">docs.spring.io/spring-boot/docs/current/reference/</a>

---

### 1. 1. Memulai

Jika Anda baru pertama kali mengenal Spring Boot—atau bahkan Spring secara umum—maka Anda berada di tempat yang tepat. Bab ini dirancang khusus sebagai titik awal perjalanan kita, lengkap dengan panduan bertahap yang mudah diikuti.

Peta Belajar (Roadmap) untuk Pemula
Sebelum menyelami teknis lebih dalam, mari kita pahami dulu alur belajar yang akan kita lalui:

- Dari Nol (From Scratch): Ikhtisar → Persyaratan Sistem → Instalasi
- Tutorial Praktis: Bagian 1 → Bagian 2
- Menjalankan contoh Aplikasi Anda: Bagian 1 → Bagian 2

---

### 1. 2. Meningkatkan Versi Dari Versi Sebelumnya

Anda harus selalu memastikan bahwa Anda menjalankan versi Spring Boot yang didukung.
Tergantung pada versi yang Anda tingkatkan, Anda dapat menemukan beberapa tips tambahan di sini:

- Dari 1.x: Meningkatkan dari 1.x
- Ke rilis fitur baru: Meningkatkan ke Rilis Fitur Baru
- Spring Boot CLI: Meningkatkan Spring Boot

### Notes:

### 1. Apa itu "Upgrading" atau "Meningkatkan Versi"?

Ini adalah proses memperbarui versi Spring Boot yang lo pake ke versi yang lebih baru. Misalnya dari Spring Boot 2.7.x ke 3.0.x, atau dari 3.1.x ke 3.4.x.

### 2. Kenapa ini penting?

- Keamanan: Versi lama kadang punya celah keamanan yang udah diperbaiki di versi baru

- Fitur baru: Versi baru punya fitur yang gak ada di versi lama

- Dukungan: Hanya versi terbaru yang mendapat dukungan resmi dari tim Spring

- Kompatibilitas: Library/library lain mungkin butuh versi Spring Boot tertentu

### 3. Tiga skenario upgrade yang disebut:

| Skenario                | Penjelasan                                                                                                               | Contoh                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| **Dari 1.x**            | Upgrade besar-besaran dari Spring Boot 1.x (jadul banget, pake Java 8) ke versi modern                                   | `1.5.x → 2.x` atau `3.x`     |
| **Rilis ke fitur baru** | Upgrade dalam versi besar yang sama, misal dari 2.7.x ke 3.0.x (perubahan besar karena pindah dari `javax` ke `jakarta`) | `3.1.x → 3.2.x`              |
| **Spring Boot CLI**     | Upgrade tool command line khusus Spring Boot                                                                             | `spring boot version update` |

---

### 1.3. Mengembangkan Dengan Spring Boot

Siap untuk benar-benar mulai menggunakan Spring Boot? Kami siap membantu Anda:

- Sistem build: Maven | Gradle | Ant | Starters
- Praktik terbaik: Struktur Kode | @Configuration | @EnableAutoConfiguration | Beans dan Dependency Injection
- Menjalankan kode Anda: IDE | Dikemas | Maven | Gradle
- Mengemas aplikasi Anda: Production jars
- Spring Boot CLI: Menggunakan CLI

### Notes:

### 1. Sistem Build (Maven | Gradle | Ant | Starters)

**A. Apa itu sistem build?**  
Sistem build adalah alat yang mengatur:

- Dependency (library apa aja yang dibutuhkan project lo)
- Compile (mengubah kode Java jadi bytecode)
- Testing (menjalankan unit test)
- Packaging (membuat file .jar atau .war)
- Running (menjalankan aplikasi)
- Pilihan sistem build di Spring Boot:

| Build      | Kelebihan                                  | Kekurangan                                 |
| ---------- | ------------------------------------------ | ------------------------------------------ |
| **Maven**  | Paling populer, banyak dokumentasi, stabil | Agak verbose (banyak XML)                  |
| **Gradle** | Lebih fleksibel, syntax lebih ringkas      | Kurang stabil, learning curve lebih tinggi |
| **Ant**    | Sangat lawas, manual banget                | Gak ada dependency management otomatis     |

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

Keuntungan Starter: Lo cukup tambah 1 baris dependency, semua library yang dibutuhkan otomatis kebawa. Gak perlu tambahin satu-satu.

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

Cara menjalankan aplikasi Spring Boot:

| Metode             | Perintah                                  | Cocok Untuk                                    |
| ------------------ | ----------------------------------------- | ---------------------------------------------- |
| **IDE (VS Code)**  | Klik tombol Run di `DemoApplication.java` | Development (lo ngetik kode sambil liat hasil) |
| **Maven**          | `mvn spring-boot:run`                     | Development, atau di server yang ada Maven     |
| **Gradle**         | `gradle bootRun`                          | Development, atau di server yang ada Gradle    |
| **Packaged (JAR)** | `java -jar myapp.jar`                     | Production (setelah aplikasi siap)             |

### 4. Mengemas Aplikasi (Production jars)

Apa itu Production jar?  
File .jar yang udah berisi semua kode lo PLUS semua library yang dibutuhkan. Ini disebut "fat jar" atau "uber jar".

Kenapa ini keren?

- Lo cukup punya 1 file .jar
- Lo jalanin dengan java -jar namafile.jar
- Gak perlu install web server (Tomcat, Jetty) karena udah termasuk di dalamnya

Cara bikin production jar pake Maven:

```
mvn clean package
```

> Hasilnya ada di target/nama-aplikasi-version.jar

5. SPRING BOOT CLI

CLI = Command Line Interface. Ini adalah alat buat nge-run Spring Boot dari terminal tanpa IDE.

Contoh penggunaan:

```
# Bikin project baru
spring init my-project

# Jalanin file Groovy
spring run myapp.groovy
```

> CATATAN PENTING: Lo gak perlu pake CLI kalo lo pake VS Code + Maven. CLI lebih populer di kalangan developer yang pake terminal doang.
