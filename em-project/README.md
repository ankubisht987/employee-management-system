# Employee Management System - Backend API

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

A robust, production-ready RESTful API built with **Spring Boot 3** to manage employee data. This project demonstrates a deep understanding of the **Three-Layer Architecture**, Data Persistence with **Hibernate/JPA**, and industry-standard API design.

## 🏗️ Architecture & Design

The project follows a modular design to ensure scalability and ease of maintenance:

1.  **Controller Layer**: Handles HTTP requests and maps them to specific service methods.
2.  **Service Layer**: Encapsulates the business logic and orchestrates data flow.
3.  **Repository Layer**: Manages data persistence using Spring Data JPA and MySQL.
4.  **Entity/Model Layer**: Defines the data structure and ORM (Object-Relational Mapping).



## 🛠️ Tech Stack

* **Language:** Java 17+
* **Framework:** Spring Boot 3.x
* **Database:** MySQL
* **ORM:** Hibernate / Spring Data JPA
* **Tooling:** Lombok (Boilerplate reduction), Maven (Build tool)
* **API Testing:** Postman / cURL

## 🚀 Getting Started

### 1. Prerequisites
* JDK 17 or higher installed.
* MySQL Server running locally.
* Maven installed (or use the provided `./mvnw`).

### 2. Database Setup
Create a new schema in your MySQL workbench:
```sql
CREATE DATABASE employee_db;